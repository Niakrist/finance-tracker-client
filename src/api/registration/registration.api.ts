import { API_URL, SERVER_URL } from '@/config'
import type { IAuthResponse, IRegisterRequest } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const registrationApi = createApi({
  reducerPath: 'registration',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL, // базовый URL сервера, например 'http://localhost:5000'
    credentials: 'include' //  обязательно для отправки/получения httpOnly cookies (refresh токен)
  }),
  endpoints: build => ({
    register: build.mutation<IAuthResponse, IRegisterRequest>({
      query: body => ({
        url: API_URL.auth('/register'),
        method: 'POST',
        body
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          if (data.accessToken) {
            console.log('Registration successful:', data.user)
          }
        } catch (error) {
          console.error('Registration failed:', error)
        }
      }
    })
  })
})

export const { useRegisterMutation } = registrationApi
