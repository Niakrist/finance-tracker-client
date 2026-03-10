export interface ITransaction {
  date: string
  type: 'INCOME' | 'EXPENSE'
  categoryId: number
  userId: number
}
