import cn from 'classnames'
import styles from './Button.module.css'
import type { IButtonProps } from './Button.props'

export const Button = ({ children, color, background }: IButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.textBlack]: color === 'black',
        [styles.textPurple]: color === 'purple',
        [styles.textWhite]: color === 'white',
        [styles.bgTransparent]: background === 'transparent',
        [styles.bgBlack]: background === 'black',
        [styles.bgPurple]: background === 'purple'
      })}
    >
      {children}
    </button>
  )
}
