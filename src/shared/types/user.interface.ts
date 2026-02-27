import type { ICategory } from './category.interface'
import type { ITransaction } from './transaction.interface'

export interface IUser {
  id: string
  name: string
  email: string
  categories: ICategory[]
  transactions: ITransaction[]
}
