import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.scss'
import AppBar from '@/components/common/AppBar'
import LoginForm from '@/components/login/LoginForm'
import RegistrationHint from '@/components/login/RegistrationHint'
import Footer from '@/components/common/Footer'
import { useSelector } from 'react-redux'
import { selectAuthState } from '@/store/slices/authState'
import { useRouter } from 'next/router'

export default function Login() {
  const authState = useSelector(selectAuthState)
  const router = useRouter()

  React.useEffect(() => {
    if(authState.loggedIn) {
      router.replace('/')
    }
  }, [authState])

  return (
    <>
      <Head>
        <title>Пранкбот — вход</title>
        <meta name="description" content="Пранкбот — дизайнер не дал нам мета-описание" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <main className={styles.main}>
        {!authState.loggedIn
          ? (
            <>
              <LoginForm />
              <RegistrationHint />
            </>
          ) : (
            <>
              <h2>Вход выполнен</h2>
              <h3>Перенаправление...</h3>
            </>
          )
        }
      </main>
      <Footer />
    </>
  )
}

