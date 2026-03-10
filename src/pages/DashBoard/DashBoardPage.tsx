import { Button, Card, Dropdown, Icon, Input, Select } from '@/ui'
import styles from './DashBoardPage.module.css'
import { useState } from 'react'
export const DashBoardPage = () => {
  const [value, setValue] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.page}>
      <Card size='small' iconName='iconPaid'>
        <div className={styles.info}>
          <p className={styles.name}>Total</p>
          <p className={styles.value}>$100,25</p>
          <div className={styles.iconGroup}>
            <Icon name='iconArrowUp' className={styles.up} />
            <p>
              <span className={styles.up}>5.5%</span> up from last week
            </p>
          </div>
        </div>
      </Card>
      <Card size='small' iconName='iconPaid'>
        <div className={styles.info}>
          <p className={styles.name}>Total</p>
          <p className={styles.value}>$100,25</p>
          <div className={styles.iconGroup}>
            <Icon name='iconArrowDown' className={styles.down} />
            <p>
              <span className={styles.down}>2.1%</span> up from last week
            </p>
          </div>
        </div>
      </Card>
      <div>
        <Button color='purple' background='transparent'>
          RESET
        </Button>
        <Button color='black' background='black'>
          RESET
        </Button>
        <Button color='white' background='purple'>
          RESET
        </Button>
        <Input
          value={value}
          onChange={handleChange}
          name='text'
          placeholder='placeholder'
        />
        <Dropdown
          items={[
            { key: 'INCOME', value: 'Доходы' },
            { key: 'EXPENSE', value: 'Расходы' }
          ]}
        >
          Выберите тип
        </Dropdown>
      </div>
    </div>
  )
}
