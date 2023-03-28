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
import { handleLogin, selectAuthState } from '@/store/slices/authState'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useAppDispatch } from '@/store/store'

export default function Login() {
  const [loaded, setLoaded] = React.useState(false)
  const authState = useSelector(selectAuthState)
  const router = useRouter()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if(authState.sessionRestored) {
      if(authState.loggedIn) {
        router.replace('/')
        setLoaded(true)
      } else {
        const token = (new URLSearchParams(window.location.search)).get('userToken')
        if(token) {
          Cookies.set('prankbot_session', token, { expires: 365, path: '' })
          dispatch(handleLogin({ _no_data: true }))
          router.replace('/history')
        } else {
          setLoaded(true)
        }
      }
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
      {loaded && (
        <>
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
      )}
    </>
  )
}

