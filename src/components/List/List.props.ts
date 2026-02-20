import type React from 'react'

export interface IListProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> {
  children: React.ReactNode
  className?: string
}
