import type { IUser } from './user.interface'

export interface IAuthResponse {
  user: IUser
  accessToken: string
}

export interface IRegisterRequest {
  email: string
  password: string
  name?: string // если при регистрации требуется имя
}

export interface ILoginRequest {
  email: string
  password: string
}

export type IAuthForm = IRegisterRequest | ILoginRequest
