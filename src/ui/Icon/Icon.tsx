import React from 'react'
import { IconNotification } from './icons/IconNotification'
import { IconDashboard } from './icons/IconDashboard'
import { IconAnalytics } from './icons/IconAnalytics'
import { IconCategories } from './icons/IconCategories'
import { IconTransactions } from './icons/IconTransactions'
import { IconSettings } from './icons/IconSettings'
import { IconPaid } from './icons/IconPaid'
import IconArrowDown from './icons/IconArrowDown'
import IconArrowUp from './icons/IconArrowUp'

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | 'iconNotification'
    | 'iconDashboard'
    | 'iconAnalytics'
    | 'iconCategories'
    | 'iconTransactions'
    | 'iconSettings'
    | 'iconPaid'
    | 'iconArrowDown'
    | 'iconArrowUp'
  className?: string
}

export const Icon = ({ name, className, ...props }: IIconProps) => {
  const icons = {
    iconNotification: <IconNotification className={className} {...props} />,
    iconDashboard: <IconDashboard className={className} {...props} />,
    iconAnalytics: <IconAnalytics className={className} {...props} />,
    iconCategories: <IconCategories className={className} {...props} />,
    iconTransactions: <IconTransactions className={className} {...props} />,
    iconSettings: <IconSettings className={className} {...props} />,
    iconArrowDown: <IconArrowDown className={className} {...props} />,
    iconArrowUp: <IconArrowUp className={className} {...props} />,
    iconPaid: <IconPaid {...props} />
  }
  return icons[name]
}
