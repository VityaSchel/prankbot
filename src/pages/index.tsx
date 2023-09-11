import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import AppBar from '@/components/common/AppBar'
import Hero from '@/components/homepage/Hero'
import Pranks from '@/components/homepage/Pranks'
import Footer from '@/components/common/Footer'
import { selectAuthState } from '@/store/slices/authState'
import { useSelector } from 'react-redux'
import ActiveOrders from '@/components/homepage/ActiveOrders'

export default function Home() {
  const authState = useSelector(selectAuthState)

  return (
    <>
      <Head>
        <title>Розыгрыши</title>
        <meta name="description" content="Разыграй друга по телефону и получи запись разговора" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <main className={styles.main}>
        {authState.sessionRestored && authState.loggedIn
          ? <ActiveOrders />
          : <Hero />
        }
        <Pranks />
      </main>
      <Footer />
    </>
  )
}

