import { API_URL, SERVER_URL } from '@/config'
import type { IAuthForm, IAuthResponse } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    credentials: 'include'
  }),
  endpoints: build => ({
    login: build.mutation<IAuthResponse, IAuthForm>({
      query: body => ({
        url: API_URL.auth('/login'),
        method: 'POST',
        body
      }),
      // Используем onQueryStarted для обработки успешного ответа
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          if (data.accessToken) {
            // Сохраняем токен и обновляем состояние через authService
            // authService.main уже делает это, но если вы используете RTK Query,
            // нужно синхронизировать состояние
            console.log('Login successful:', data.user)
          }
        } catch (error) {
          console.error('Login failed:', error)
        }
      }
    })
  })
})

export const { useLoginMutation } = loginApi
