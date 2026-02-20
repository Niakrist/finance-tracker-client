import styles from './RegisterPage.module.css'
import { Button, Input } from '@/ui'

export const RegisterPage = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Create an account</h1>
        <p className={styles.description}>
          Create an account to use the service!
        </p>
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
          Do you already have an account?
          <Button href='/login' color='black' background='transparent'>
            Enter
          </Button>
        </div>
      </div>
    </>
  )
}
