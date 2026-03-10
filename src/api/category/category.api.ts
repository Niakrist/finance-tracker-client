import { API_URL, SERVER_URL } from '@/config'
import { getAccessToken } from '@/service/auth/auth-token.service'

import type { ICategory } from '@/shared'
import type { ICreateCategory } from '@/shared/types/category.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    credentials: 'include',
    prepareHeaders: headers => {
      // Получаем токен из localStorage
      const token = getAccessToken()

      // Если токен есть, добавляем его в заголовки
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  tagTypes: ['Category'],
  endpoints: build => ({
    create: build.mutation<ICategory, ICreateCategory>({
      query: body => {
        console.log('Sending category data:', body) // для отладки
        return {
          url: API_URL.categories(),
          method: 'POST',
          body
        }
      },
      invalidatesTags: ['Category']
    })
  })
})

export const { useCreateMutation } = categoryApi
