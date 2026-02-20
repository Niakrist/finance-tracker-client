import { Link } from 'react-router-dom'

import { List } from '@/components'
import { Icon } from '@/ui'
import styles from './Sidebar.module.css'
import { MENU } from '@/constants'

const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      <List>
        {MENU.map(item => (
          <li key={item.url}>
            <Link to={item.url} className={styles.link}>
              <Icon name={item.iconName} /> {item.name}
            </Link>
          </li>
        ))}
      </List>
    </aside>
  )
}

export default Sidebar
