import { useEffect, useState } from 'react'
import styles from './LoginPage.module.css'
import { Button, Input } from '@/ui'
import { useLoginMutation } from '@/api/login/login.api'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useNavigate } from 'react-router-dom'
export const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [login, { isLoading, error }] = useLoginMutation()
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector(state => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setLoginData(prevData => ({ ...prevData, [target.name]: target.value }))
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await login(loginData).unwrap()
      console.log('Login successful:', response.user)
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  if (isAuthenticated || isLoading) {
    return <div>Перенаправление...</div>
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Log in your account</h1>
        <p className={styles.description}>Log in account to use the service!</p>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            value={loginData.email}
            name='email'
            placeholder='email'
            onChange={handleChange}
          />
          <Input
            value={loginData.password}
            name='password'
            placeholder='password'
            onChange={handleChange}
          />

          <Button
            color='black'
            type='submit'
            background='black'
            className={styles.continue}
          >
            Login
          </Button>
        </form>
        <div className={styles.buttonToggle}>
          Don't have an account yet?
          <Button href='/register' color='black' background='transparent'>
            Create
          </Button>
        </div>
      </div>
    </>
  )
}
