import styles from './styles.module.scss'
import LogoComponent from '@/components/common/Logo'
import NavLink from '@/components/common/AppBar/NavLink'
import { Button } from 'antd'
import { MdLogin } from 'react-icons/md'

export default function AppBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <LogoComponent />
        <NavLink href='/'>Список розыгрышей</NavLink>
      </div>
      <div className={styles.right}>
        <Button icon={<MdLogin />} type='text' />
      </div>
    </nav>
  )
}
