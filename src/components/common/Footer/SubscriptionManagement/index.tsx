import React from 'react'
import styles from './styles.module.scss'
import { Button } from 'antd'
import Modal from '@/components/common/Modal'

export default function SubscriptionManagemnt() {
  const [dialogVisible, setDialogVisible] = React.useState(false)

  return (
    <>
      <Button type='text' className={styles.link} onClick={() => setDialogVisible(true)}>
        Управление подпиской
      </Button>
      <Modal open={dialogVisible} onClose={() => setDialogVisible(false)}>
        <h2 className={styles.title}>Управляйте своей подпиской</h2>
        <div className={styles.subscriptionInfo}>
          <span className={styles.price}>29 рублей</span>
          <span className={styles.label}>Стоимость подписки</span>
        </div>
        <Button type='text'>Отменить подписку</Button>
      </Modal>
    </>
  )
}