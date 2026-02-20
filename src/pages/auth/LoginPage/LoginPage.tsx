import styles from './LoginPage.module.css'
import { Button, Input } from '@/ui'
export const LoginPage = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Log in your account</h1>
        <p className={styles.description}>Log in account to use the service!</p>
      </div>
      <div className={styles.content}>
        <form action='' className={styles.form}>
          <Input
            value=''
            name='email'
            placeholder='email'
            onChange={e => {
              e.target.value
            }}
          />
          <Input
            value=''
            name='password'
            placeholder='password'
            onChange={e => {
              e.target.value
            }}
          />

          <Button color='black' background='black' className={styles.continue}>
            Continue
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
