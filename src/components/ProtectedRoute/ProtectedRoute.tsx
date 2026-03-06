import { useAppSelector } from '@/hooks/useAppSelector'
import { Navigate, Outlet } from 'react-router-dom'

export interface IProtectedRouteProps {
  redirectPath?: string
  children?: React.ReactNode
}

export const ProtectedRoute = ({
  redirectPath = '/login',
  children
}: IProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAppSelector(state => state.auth)

  if (isLoading) {
    return <div>Загрузка...</div> // или ваш компонент загрузки
  }
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? <>{children}</> : <Outlet />
}
