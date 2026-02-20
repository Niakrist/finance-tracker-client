import React from 'react'
import { IconNotification } from './icons/IconNotification'

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name: 'iconNotification'

  className?: string
}

export const Icon = ({ name }: IIconProps) => {
  const icons = { iconNotification: <IconNotification /> }
  return icons[name]
}
