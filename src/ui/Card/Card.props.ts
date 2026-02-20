import type React from 'react'

export interface ICardProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children: React.ReactNode
  className?: string
}
