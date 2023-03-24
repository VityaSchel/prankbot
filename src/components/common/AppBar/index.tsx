import styles from './styles.module.scss'
import LogoComponent from '@/components/common/Logo'
import NavLink from '@/components/common/AppBar/NavLink'
import { Button } from 'antd'
import { MdLogin, MdLogout } from 'react-icons/md'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogout, selectAuthState } from '@/store/slices/authState'

export default function AppBar() {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()

  const handleLogoutClick = () => {
    dispatch(handleLogout({}))
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href='/'>
          <LogoComponent />
        </Link>
        <NavLink href='/'>Список розыгрышей</NavLink>
      </div>
      <div className={styles.right}>
        {authState.loggedIn && (
          <Link href='/history'>
            <Button className={styles.standalone}>История розыгрышей</Button>
            <Button className={styles.mobile}>История</Button>
          </Link>
        )}
        {authState.loggedIn
          ? (
            <Button icon={<MdLogout />} type='text' className={styles.logout} onClick={handleLogoutClick} />
          ) : (
            <Link href='/login'>
              <Button icon={<MdLogin />} type='text' className={styles.login} />
            </Link>
          )
        }
      </div>
    </nav>
  )
}
