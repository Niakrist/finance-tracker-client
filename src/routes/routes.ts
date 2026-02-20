import { Layout } from '@/layout'
import {
  AnalyticsPage,
  CategoriesPage,
  DashBoardPage,
  TransactionsPage
} from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: DashBoardPage },
      {
        path: 'analytics',
        Component: AnalyticsPage
      },
      {
        path: 'categories',
        Component: CategoriesPage
      },
      {
        path: 'transactions',
        Component: TransactionsPage
      }
    ]
  }
])
