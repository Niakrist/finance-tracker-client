import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { useAppDispatch } from './hooks/useAppDispatch'
import { authService } from './service'
import { useEffect } from 'react'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    authService.checkAuth()
  }, [dispatch])

  return <RouterProvider router={router} />
}
