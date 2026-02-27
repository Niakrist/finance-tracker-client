import type { TransitionStartFunction } from 'react'

export interface ICategory {
  id: number
  createdAt: string
  name: string
  type: 'income' | 'expense'
  color: string
  icon: string
  userId: number
  transactions: TransitionStartFunction[]
}
