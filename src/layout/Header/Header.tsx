import React from 'react'
import styles from './Header.module.css'
import { Icon } from '@/ui'
const COMPANY = 'Company'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <p className={styles.companyName}>{COMPANY.toUpperCase()}</p>
        <h1 className={styles.title}>Dashboard</h1>
      </div>
      <div className={styles.account}>
        <div className={styles.info}>
          <Icon name='iconNotification' />
          <span className={styles.round} />
        </div>
        <div className={styles.user}>
          <img src='./avatar.png' alt='avatar' className={styles.img} />
          <div className={styles.userInfo}>
            <p className={styles.name}>Segun Aiyegbiroju</p>
            <p className={styles.email}>shegs400@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
