import { AppLayout, AuthLayout } from '@/layout'
import {
  AnalyticsPage,
  CategoriesPage,
  DashBoardPage,
  LoginPage,
  RegisterPage,
  TransactionsPage
} from '@/pages'
import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '@/components'

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        Component: AppLayout,
        children: [
          { index: true, Component: DashBoardPage },
          { path: '/analytics', Component: AnalyticsPage },
          { path: '/categories', Component: CategoriesPage },
          { path: '/transactions', Component: TransactionsPage }
        ]
      }
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', Component: LoginPage },
      { path: '/register', Component: RegisterPage }
    ]
  }
])
