import cn from 'classnames'
import styles from './List.module.css'
import type { IListProps } from './List.props'

export const List = ({ children, className }: IListProps) => {
  return <ul className={cn(styles.list, className)}>{children}</ul>
}
