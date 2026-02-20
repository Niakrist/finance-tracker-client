import styles from './AuthLayout.module.css'
import { COMPANY } from '@/constants'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoSection}>{COMPANY.toUpperCase()}</div>
      <div className={styles.formSection}>
        <div className={styles.card}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
