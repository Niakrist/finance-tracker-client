import { Icon } from '../Icon'
import styles from './Card.module.css'
import type { ICardProps } from './Card.props'
import cn from 'classnames'

export const Card = ({
  children,
  className,
  iconName,
  size,
  ...props
}: ICardProps) => {
  return (
    <div
      className={cn(
        styles.card,
        { [styles.small]: size === 'small' },
        className
      )}
      {...props}
    >
      {children}
      {iconName && <Icon name={iconName} />}
    </div>
  )
}
