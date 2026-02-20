import type React from 'react'

export interface ILayoutProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  children: React.ReactNode
}
