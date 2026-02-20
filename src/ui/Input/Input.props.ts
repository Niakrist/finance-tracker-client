import React from 'react'

export interface IInputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  value: string
  name: 'text' | 'email' | 'password'
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void
  placeholder: string
}
