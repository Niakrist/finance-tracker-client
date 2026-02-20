import styles from './Input.module.css'
import type { IInputProps } from './Input.props'

export const Input = ({ value, name, onChange, placeholder }: IInputProps) => {
  return (
    <input
      onChange={onChange}
      className={styles.input}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  )
}
