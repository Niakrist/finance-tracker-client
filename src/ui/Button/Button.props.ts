import React from 'react'

export interface IButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: React.ReactNode
  color: 'black' | 'purple' | 'white'
  background: 'transparent' | 'black' | 'purple'
  href?: string
}
