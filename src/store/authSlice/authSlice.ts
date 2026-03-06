import type { IUser } from '@/shared'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IAuthState {
  user: IUser | null
  isLoading: boolean
  isAuthenticated: boolean
}

const initialState: IAuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload
      state.isAuthenticated = !!action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    logout: state => {
      state.user = null
      state.isAuthenticated = false
    }
  }
})

export const { setUser, setLoading, logout } = authSlice.actions
export default authSlice.reducer
