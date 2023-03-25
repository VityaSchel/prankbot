import React from 'react'
import styles from './styles.module.scss'
import Modal from '@/components/common/Modal'
import { Button as AntdButton } from 'antd'
import Button from '@/components/common/Button'
import { fetchAPI } from '@/data/api'

export default function SubscriptionManagemnt() {
  const [screen, setScreen] = React.useState<'info' | 'prompt'>('info')
  const [dialogVisible, setDialogVisible] = React.useState(false)

  React.useEffect(() => {
    if(!dialogVisible) setScreen('info')
  }, [dialogVisible])

  const handleUnsubscribe = async () => {
    await fetchAPI('/users/subscriptions/unsubscribe', 'POST', {}, { parseBody: false })
    setDialogVisible(false)
  }

  return (
    <>
      <AntdButton type='text' className={styles.link} onClick={() => setDialogVisible(true)}>
        Управление подпиской
      </AntdButton>
      <Modal open={dialogVisible} onClose={() => setDialogVisible(false)}>
        {screen === 'info'
          ? (
            <>
              <h2 className={styles.title}>Управляйте своей подпиской</h2>
              <div className={styles.subscriptionInfo}>
                <span className={styles.price}>29 рублей</span>
                <span className={styles.label}>Стоимость подписки</span>
              </div>
              <AntdButton type='text' onClick={() => setScreen('prompt')}>Отменить подписку</AntdButton>
            </>
          ) : (
            <>
              <div className={styles.topBar}>
                <h2 className={styles.title}>Отмена подписки</h2>
                <p>Уверены, что хотите отменить подписку?</p>
              </div>
              <div className={styles.buttons}>
                <Button variant='secondary' onClick={handleUnsubscribe}>Отменить</Button>
                <Button variant='primary' onClick={() => setDialogVisible(false)}>Не отменять</Button>
              </div>
            </>
          )
        }
      </Modal>
    </>
  )
}