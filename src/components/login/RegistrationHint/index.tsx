import Link from 'next/link'
import styles from './styles.module.scss'

export default function RegistrationHint() {
  return (
    <div className={styles.hint}>
      Для регистрации выберите <Link href='/#pranks' className={styles.highlight}>розыгрыш</Link>
    </div>
  )
}