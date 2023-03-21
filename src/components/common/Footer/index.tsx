import React from 'react'
import styles from './styles.module.scss'
import SubscriptionManagement from './SubscriptionManagement'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SubscriptionManagement />
    </footer>
  )
}

