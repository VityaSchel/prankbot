import styles from './styles.module.scss'
import LogoComponent from '@/components/common/Logo'
import NavLink from '@/components/common/AppBar/NavLink'
import { Button } from 'antd'
import { MdLogin } from 'react-icons/md'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectAuthState } from '@/store/slices/authState'

export default function AppBar() {
  const authState = useSelector(selectAuthState)

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
            <Button>История розыгрышей</Button>
          </Link>
        )}
        <Link href='/login'>
          <Button icon={<MdLogin />} type='text' />
        </Link>
      </div>
    </nav>
  )
}
