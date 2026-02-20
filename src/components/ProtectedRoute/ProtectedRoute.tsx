import { Navigate, Outlet } from 'react-router-dom'

export interface IProtectedRouteProps {
  isAllowed: boolean
  redirectPath?: string
  children?: React.ReactNode
}

export const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/login',
  children
}: IProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? <>{children}</> : <Outlet />
}
