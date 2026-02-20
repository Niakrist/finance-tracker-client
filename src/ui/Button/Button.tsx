import cn from 'classnames'
import styles from './Button.module.css'
import type { IButtonProps } from './Button.props'
import { Link } from 'react-router-dom'

export const Button = ({ children, color, background, href }: IButtonProps) => {
  const cl = cn(styles.button, {
    [styles.textBlack]: color === 'black',
    [styles.textPurple]: color === 'purple',
    [styles.textWhite]: color === 'white',
    [styles.bgTransparent]: background === 'transparent',
    [styles.bgBlack]: background === 'black',
    [styles.bgPurple]: background === 'purple'
  })

  return href ? (
    <Link className={cl} to={href}>
      {children}
    </Link>
  ) : (
    <button className={cl}>{children}</button>
  )
}
