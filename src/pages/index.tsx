import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import AppBar from '@/components/common/AppBar'
import Hero from '@/components/homepage/Hero'
import Pranks from '@/components/homepage/Pranks'
import Footer from '@/components/common/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Пранкбот</title>
        <meta name="description" content="Пранкбот — дизайнер не дал нам мета-описание" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <main className={styles.main}>
        <Hero />
        <Pranks />
      </main>
      <Footer />
    </>
  )
}

