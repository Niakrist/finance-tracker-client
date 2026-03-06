import { useEffect, useState } from 'react'
import styles from './RegisterPage.module.css'
import { Button, Input } from '@/ui'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '@/api'
import { useAppSelector } from '@/hooks/useAppSelector'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const [register, { isLoading, error }] = useRegisterMutation()
  const { isAuthenticated } = useAppSelector(state => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setRegisterData({ ...registerData, [target.name]: target.value })
  }

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault() // предотвращаем перезагрузку страницы

    try {
      const response = await register(registerData).unwrap()
      console.log('Регистрация успешна:', response.user)
      navigate('/')
    } catch (error) {
      // Ошибка уже лежит в переменной error, но можно дополнительно обработать
      console.error('Ошибка регистрации:', error)
    }
  }

  if (isAuthenticated || isLoading) {
    return <div>LoadingSpinner</div>
  }
  if (error) {
    return <div>{String(error)}</div>
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Create an account</h1>
        <p className={styles.description}>
          Create an account to use the service!
        </p>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            value={registerData.email}
            name='email'
            placeholder='email'
            onChange={handleChange}
          />
          <Input
            value={registerData.password}
            name='password'
            placeholder='password'
            onChange={handleChange}
          />
          <Input
            value={registerData.name}
            name='name'
            placeholder='name'
            onChange={handleChange}
          />

          <Button
            color='black'
            background='black'
            type='submit'
            className={styles.continue}
          >
            {isLoading ? 'Creating...' : 'Register'}
          </Button>
        </form>
        <div className={styles.buttonToggle}>
          Do you already have an account?
          <Button href='/login' color='black' background='transparent'>
            Enter
          </Button>
        </div>
      </div>
    </>
  )
}
