import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useEffect } from 'react'
import { authService } from './service/auth/auth.service'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    authService.checkAuth()
  }, [dispatch])

  return <RouterProvider router={router} />
}
