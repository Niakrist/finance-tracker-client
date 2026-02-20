import type React from 'react'
import type { IIconProps } from '../Icon/Icon'

export interface ICardProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children: React.ReactNode
  className?: string

  size: 'small'
  iconName?: IIconProps['name']
}
