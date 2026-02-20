import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
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
