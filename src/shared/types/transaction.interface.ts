export interface ITransaction {
  date: string
  type: 'income' | 'expense'
  categoryId: number
  userId: number
}
