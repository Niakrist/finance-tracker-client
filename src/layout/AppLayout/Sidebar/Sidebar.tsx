import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import { List } from '@/components'
import { Icon } from '@/ui'
import styles from './Sidebar.module.css'
import { MENU } from '@/constants'
import cn from 'classnames'

const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <aside className={styles.wrapper}>
      <List>
        {MENU.map(item => (
          <li key={item.url}>
            <Link
              to={item.url}
              className={cn(
                styles.link,
                pathname === item.url && styles.active
              )}
            >
              <Icon name={item.iconName} /> {item.name}
            </Link>
          </li>
        ))}
      </List>
    </aside>
  )
}

export default Sidebar
