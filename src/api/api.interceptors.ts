import { SERVER_URL } from '@/config'
import type { CreateAxiosDefaults } from 'axios'
import { errorCatch, getContentType } from './api.helpers'
import axios from 'axios'
import {
  getAccessToken,
  removeTokenFromStorage
} from '@/service/auth/auth-token.service'
import { authService } from '@/service/auth/auth.service'

// withCredentials: true - разрешает отправку кук и заголовков авторизации вместе с запросом (необходимо для работы с refresh-токенами в куках).
const options: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
  headers: getContentType(),
  withCredentials: true
}

// Обычный клиент, подходит для публичных эндпоинтов (логин, регистрация и т.д.).
const axiosClassic = axios.create(options)

//тот же базовый клиент, но позже мы добавим ему перехватчики (интерцепторы) для работы с токенами.
const axiosWithAuth = axios.create(options)

// Перед каждым запросом, отправленным через axiosWithAuth, этот интерцептор пытается получить access-токен из cookies
//  с помощью функции getAccessToken(). Если токен существует, он добавляет заголовок Authorization: Bearer <токен>.
// Таким образом, все запросы через axiosWithAuth автоматически становятся авторизованными.
axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken()
  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

// Интерцептор ответа перехватывает ответы от сервера, и если произошла ошибка, пытается её обработать
axiosWithAuth.interceptors.response.use(
  // config => config <- если ответ успешный, просто возвращаем его
  config => config,
  // async error <- если ошибка — обрабатываем
  async error => {
    const originalRequest = error.config // Сохраняем исходную конфигурацию запроса, который вызвал ошибку. Она понадобится для повторного запроса после обновления токена.
    // Условие, при котором запускается попытка обновления токена:
    if (
      (error?.response?.status === 401 || // Статус ответа 401 (Unauthorized)
        errorCatch(error) === 'jwt expired' || // сообщение об ошибке, извлечённое через errorCatch, равно 'jwt expired' (токен истёк)
        errorCatch(error) === 'jwt must be provided') && // сообщение об ошибке, извлечённое через errorCatch, равно 'jwt must be provided' (токен отсутствует).
      error.config && // В объекте ошибки есть error.config
      !error.config._isRetry // Запрос ещё не был повторён — проверяется флаг _isRetry, который мы сами добавляем, чтобы избежать бесконечного цикла.
    ) {
      originalRequest._isRetry = true // Подготовка к повторной попытке и у станавливаем флаг, чтобы следующий круг не запустил обновление снова.

      try {
        await authService.getNewTokens() // Попытка получить новые токены
        return axiosWithAuth.request(originalRequest) // Если обновление прошло успешно, повторяем исходный запрос с помощью axiosWithAuth.request(originalRequest)
      } catch (error) {
        // Если сервер вернул сообщение, что refresh-токен истёк ('jwt expired') или не был передан ('Refresh token not passed'), значит, восстановить сессию невозможно.
        if (
          errorCatch(error) === 'jwt expired' ||
          errorCatch(error) === 'Refresh token not passed'
        ) {
          // удаляет сохранённый access-токен (и, возможно, чистит данные пользователя), чтобы разлогинить пользователя.
          removeTokenFromStorage()
        }
      }
    }
    //Ошибка пробрасывается дальше, чтобы её мог обработать вызвавший код (например, показать уведомление пользователю).
    throw error
  }
)

export { axiosClassic, axiosWithAuth }
