import { Button, Dropdown, Input } from '@/ui'
import styles from './CategoriesPage.module.css'
import { useState } from 'react'
import { useCreateMutation } from '@/api/category/category.api'
import type { ICategoryFormData } from '@/shared/types/category.interface'

export const CategoriesPage = () => {
  const [categoryData, setCategory] = useState<ICategoryFormData>({
    name: '',
    color: '',
    icon: '',
    type: 'INCOME'
  })
  const [category] = useCreateMutation()

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setCategory({ ...categoryData, [target.name]: target.value })
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await category(categoryData).unwrap()
      console.log('Категория успешна создана:', response.name)
    } catch (error) {
      console.error('Ошибка при создании категории:', error)
    }
  }

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit}>
        <Dropdown
          items={[
            { key: 'INCOME', value: 'Доходы' },
            { key: 'EXPENSE', value: 'Расходы' }
          ]}
        >
          Выберите тип
        </Dropdown>
        <Input
          name='name'
          placeholder='name'
          value={categoryData.name}
          onChange={handleChange}
        />
        <Input
          name='color'
          placeholder='color'
          value={categoryData.color}
          onChange={handleChange}
        />
        <Input
          name='icon'
          placeholder='icon'
          value={categoryData.icon}
          onChange={handleChange}
        />
        <Button color='black' background='transparent' type='submit'>
          sub
        </Button>
      </form>
    </div>
  )
}
