import { registrationApi } from '@/api/registration/registration.api'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice/authSlice'
import { loginApi } from '@/api/login/login.api'
import { categoryApi } from '@/api/category/category.api'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      registrationApi.middleware,
      loginApi.middleware,
      categoryApi.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
