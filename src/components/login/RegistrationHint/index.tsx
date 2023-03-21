import styles from './styles.module.scss'

export default function RegistrationHint() {
  return (
    <div className={styles.hint}>
      Для регистрации выберите <span className={styles.highlight}>розыгрыш</span>
    </div>
  )
}