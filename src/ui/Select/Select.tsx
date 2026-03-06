import styles from './Select.module.css'
import type { ISelectProps } from './Select.props'

export const Select = ({ value, name, onChange }: ISelectProps) => {
  return (
    <select
      className={styles.select}
      value={value}
      name={name}
      onChange={onChange}
    >
      <option value='' disabled>
        Выберите тип
      </option>
      <option value='INCOME'>Доходы</option>
      <option value='EXPENSE'>Расходы</option>
    </select>
  )
}
