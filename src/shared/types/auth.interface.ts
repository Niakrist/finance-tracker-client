import type { IUser } from './user.interface'

export interface IAuthForm {
  id: number
  name: string
  email: string
}

export interface IAuthResponse {
  user: IUser
  accessToken: string
}
