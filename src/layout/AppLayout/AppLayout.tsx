import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

import styles from './AppLayout.module.css'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}
