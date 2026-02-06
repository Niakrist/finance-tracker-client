import type { ILayoutProps } from './Layout.props'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

import styles from './Layout.module.css'

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <div className={styles.wrapper}>
        <Header />
        {children}
      </div>
    </main>
  )
}
