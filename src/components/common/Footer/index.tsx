import React from 'react'
import styles from './styles.module.scss'
import SubscriptionManagement from './SubscriptionManagement'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SubscriptionManagement />
      <p className={styles.law} dangerouslySetInnerHTML={{
        __html: process.env.NEXT_PUBLIC_FOOTER ?? ''
      }} />
    </footer>
  )
}

