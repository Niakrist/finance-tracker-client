import React, { useState } from 'react'
import { Button } from '../Button'
import styles from './Dropdown.module.css'

import cn from 'classnames'

export interface IOptions {
  key: string
  value: string
}

export interface IDropdownProps {
  children: React.ReactNode
  items: IOptions[]
}

export const Dropdown = ({ children, items }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<IOptions | null>(null)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleCheck = (item: IOptions) => {
    setValue(item)
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <Button
        color='purple'
        background='transparent'
        onClick={handleToggle}
        size='full'
        className={cn({ [styles.activeBtn]: isOpen })}
        type='button'
      >
        {value?.value || children}
      </Button>
      {!!isOpen && (
        <ul className={styles.list}>
          {items.map(item => (
            <li key={item.key} className={styles.item}>
              <input
                className={styles.input}
                onChange={() => handleCheck(item)}
                value={item.key}
                checked={item.key === value?.key}
                type='radio'
                id={item.key}
                name='type'
              />
              <label
                className={cn(styles.label, {
                  [styles.labelActive]: item.key === value?.key
                })}
                htmlFor={item.key}
              >
                {item.value}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
