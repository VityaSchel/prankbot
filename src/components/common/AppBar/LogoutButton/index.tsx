import React from 'react'
import styles from '../styles.module.scss'
import { Button as AntdButton } from 'antd'
import { MdLogout } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogout, selectAuthState } from '@/store/slices/authState'
import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'

export default function LogoutButton() {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()
  const [isPromptingLogout, setIsPromptingLogout] = React.useState(false)

  const handleLogoutClick = () => {
    Cookies.remove('prankbot_session')
    dispatch(handleLogout({}))
  }

  return (
    <>
      <AntdButton 
        icon={<MdLogout />} 
        type='text' 
        className={styles.logout} 
        onClick={() => setIsPromptingLogout(true)} 
      />
      <Modal 
        open={isPromptingLogout}
        onClose={() => setIsPromptingLogout(false)}
        className={styles.logoutModal}
      >
        <div className={styles.info}>
          <h1>Выход из системы</h1>
          <h2>Уверены, что хотите выйти из своего профиля?</h2>
        </div>
        <div className={styles.actions}>
          <Button variant='secondary' onClick={() => setIsPromptingLogout(false)}>Отмена</Button>
          <Button onClick={handleLogoutClick}>Выйти</Button>
        </div>
      </Modal>
    </>
  )
}