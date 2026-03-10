import type { TransitionStartFunction } from 'react'

export interface ICategory {
  id: number
  name: string
  type: 'INCOME' | 'EXPENSE'
  color: string
  icon: string
  userId: number
  createdAt?: string
  updatedAt?: string
  transactions?: TransitionStartFunction[]
}

export interface ICreateCategory {
  name: string
  type: 'INCOME' | 'EXPENSE'
  color: string
  icon: string
  // userId не нужен, он берется из токена
  // transactions не нужен при создании
}

export interface ICategoryFormData {
  name: string
  type: 'INCOME' | 'EXPENSE'
  color: string
  icon: string
}
