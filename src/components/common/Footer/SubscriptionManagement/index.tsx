import React from 'react'
import styles from './styles.module.scss'
import { Modal } from 'antd'
import { Button } from 'antd'

export default function SubscriptionManagemnt() {
  const [dialogVisible, setDialogVisible] = React.useState(false)

  return (
    <>
      <button className={styles.link} onClick={() => setDialogVisible(true)}>
        Управление подпиской
      </button>
      <Modal open={dialogVisible} footer={null} wrapClassName={styles.dialog} onCancel={() => setDialogVisible(false)}>
        <h2>Управляйте своей подпиской</h2>
        <div className={styles.subscriptionInfo}>
          <span className={styles.price}>29 рублей</span>
          <span className={styles.label}>Стоимость подписки</span>
        </div>
        <Button type='text'>Отменить подписку</Button>
      </Modal>
    </>
  )
}