import React from 'react'
import Head from 'next/head'
import styles from '@/styles/History.module.scss'
import AppBar from '@/components/common/AppBar'
import CallsHistory from '@/components/history/CallsHistory'
import Footer from '@/components/common/Footer'
import { useSelector } from 'react-redux'
import { selectAuthState } from '@/store/slices/authState'
import { useRouter } from 'next/router'

export default function History() {
  const authState = useSelector(selectAuthState)
  const router = useRouter()

  React.useEffect(() => {
    if(authState.sessionRestored && !authState.loggedIn) {
      router.replace('/login')
    }
  }, [authState])

  return (
    <>
      <Head>
        <title>Пранкбот — история</title>
        <meta name="description" content="Пранкбот — дизайнер не дал нам мета-описание" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      {authState.sessionRestored && (
        <>
          <main className={styles.main}>
            {!authState.loggedIn
              ? (
                <>
                  <h2>Вы не вошли в аккаунт</h2>
                  <h3>Перенаправление...</h3>
                </>
              ) : (
                <CallsHistory />
              )
            }
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

