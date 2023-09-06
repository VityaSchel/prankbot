import React from 'react'
import styles from './styles.module.scss'
import SubscriptionManagement from './SubscriptionManagement'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SubscriptionManagement />
      <p className={styles.law} 
        dangerouslySetInnerHTML={{
          __html: process.env.NEXT_PUBLIC_FOOTER ?? ''
        }}
      >
        {/*ИП Круковский Андрей Николаевич<br></br>ИНН: 780535623621 ОГРН: 322784700279882<br></br>EMAIL: promohelper@proton.me<br></br><a href="https://t.me/stick_support">TELEGRAM</a><br></br><a href="https://docs.google.com/document/d/1wUCaCHZGo42OHUtUZcL2e1y80lrDDIext-Qs7N5UFZw/edit?usp=sharing">Пользовательское соглашение</a><br></br><a href="https://docs.google.com/document/d/11ntwB7fqvLM1RYB1-W0y4046AkH3e8qhNb3qyWWETo8/edit?usp=sharing">Политика обработки данных</a><br></br><a href="https://cdn.stick.wtf/tariffs.pdf">Тарифы</a>*/}
      </p>
    </footer>
  )
}

