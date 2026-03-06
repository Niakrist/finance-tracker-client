import { axiosClassic } from '@/api'
import { API_URL } from '@/config'
import type { IAuthForm, IAuthResponse } from '@/shared'
import { removeTokenFromStorage, saveTokenStorage } from './auth-token.service'
import { store } from '@/store/store'
import { setLoading, setUser } from '@/store'

class AuthService {
  async main(type: 'login' | 'register', data: IAuthForm) {
    const response = await axiosClassic<IAuthResponse>({
      url: API_URL.auth(`/${type}`),
      method: 'POST',
      data
    })

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken)
      store.dispatch(setUser(response.data.user))
    }
    return response
  }

  // метод для логина
  async handleLoginResponse(data: IAuthResponse) {
    if (data.accessToken) {
      saveTokenStorage(data.accessToken)
      store.dispatch(setUser(data.user))
    }
    return data
  }

  async getNewTokens() {
    try {
      const response = await axiosClassic<IAuthResponse>({
        url: API_URL.auth('/login/access-token'),
        method: 'POST'
      })
      if (response.data.accessToken) {
        saveTokenStorage(response.data.accessToken)
        store.dispatch(setUser(response.data.user))
      }
      return response
    } catch (error) {
      store.dispatch(setUser(null))
      throw error
    }
  }
  async logout() {
    try {
      const response = await axiosClassic<boolean>({
        url: API_URL.auth('/logout'),
        method: 'POST'
      })
      if (response.data) {
        removeTokenFromStorage()
        store.dispatch(setUser(null))
      }
      return response
    } catch (error) {
      removeTokenFromStorage()
      store.dispatch(setUser(null))
      throw error
    }
  }

  // Проверка авторизации при загрузке приложения
  async checkAuth() {
    try {
      store.dispatch(setLoading(true))
      const response = await axiosClassic<IAuthResponse>({
        url: API_URL.auth('/login/access-token'),
        method: 'POST'
      })
      if (response.data.accessToken) {
        saveTokenStorage(response.data.accessToken)
        store.dispatch(setUser(response.data.user))
      }
    } catch (error) {
      store.dispatch(setUser(null))
      removeTokenFromStorage()
    } finally {
      store.dispatch(setLoading(false))
    }
  }

  // Получение текущего пользователя из Redux
  getCurrentUser() {
    return store.getState().auth.user
  }

  // Проверка авторизован ли пользователь
  isAuthenticated() {
    return !!store.getState().auth.user
  }
}
export const authService = new AuthService()
