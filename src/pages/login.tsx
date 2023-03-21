import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.scss'
import AppBar from '@/components/common/AppBar'
import LoginForm from '@/components/login/LoginForm'
import Footer from '@/components/common/Footer'

export default function Login() {
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
        <LoginForm />
      </main>
      <Footer />
    </>
  )
}

