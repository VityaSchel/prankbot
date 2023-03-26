import React from 'react'
import styles from './styles.module.scss'
import SubscriptionManagement from './SubscriptionManagement'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SubscriptionManagement />
      <p className={styles.law}>
        {`ООО "ГТТ"\nИНН: 7839112438 ОГРН: 1197847020580\n+7 (495) 846-77-03`}
      </p>
    </footer>
  )
}

