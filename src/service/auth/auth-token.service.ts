import Cookies from 'js-cookie'

enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken'
}

// Получение accessToken из cookie
export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}

// Сохраняем токен в cookie
export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: import.meta.env.VITE_APP_DOMAIN, // доступно для домена из переменных окружения
    sameSite: 'Strict', //  защита от CSRF-атак
    expires: 1 // срок жизни 1 день
  })
}

// Удаляем токен из cookie
export const removeTokenFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
