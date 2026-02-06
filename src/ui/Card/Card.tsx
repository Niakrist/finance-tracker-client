import React from 'react'
import styles from './Card.module.css'
import type { ICardProps } from './Card.props'

export const Card = ({ children, ...props }: ICardProps) => {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  )
}
