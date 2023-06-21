'use client'

import { signIn } from "next-auth/react"
import { useSearchParams } from 'next/navigation'
import styles from './page.module.css'
import './globals.css'
import classNames from "classnames"

export default function SignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/home'

  return (
    <div className={classNames("container",  styles.formContainer)}>
      <form className={styles.form} id='form-reg'>

        <p className={styles.split}>Sing in with</p>

        <button className={styles.btn} type='button' form='form-reg' value='google' onClick={(e) => {
          e.preventDefault();
          signIn("google", { callbackUrl })
        }}>Google</button>

        <p className={styles.split}>or</p>

        <button className={styles.btn} type='button' form='form-reg' value='discord' onClick={(e) => {
          e.preventDefault()
          signIn('discord', { callbackUrl })
        }}>Discord</button>
      </form>
    </div>


  )

}