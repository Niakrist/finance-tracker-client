import React from 'react'
import { IconNotification } from './icons/IconNotification'
import { IconDashboard } from './icons/IconDashboard'
import { IconAnalytics } from './icons/IconAnalytics'
import { IconCategories } from './icons/IconCategories'
import { IconTransactions } from './icons/IconTransactions'
import { IconSettings } from './icons/IconSettings'

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | 'iconNotification'
    | 'iconDashboard'
    | 'iconAnalytics'
    | 'iconCategories'
    | 'iconTransactions'
    | 'iconSettings'
  className?: string
}

export const Icon = ({ name, className, ...props }: IIconProps) => {
  const icons = {
    iconNotification: <IconNotification className={className} {...props} />,
    iconDashboard: <IconDashboard className={className} {...props} />,
    iconAnalytics: <IconAnalytics className={className} {...props} />,
    iconCategories: <IconCategories className={className} {...props} />,
    iconTransactions: <IconTransactions className={className} {...props} />,
    iconSettings: <IconSettings />
  }
  return icons[name]
}
