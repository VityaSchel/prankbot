import styles from './styles.module.scss'
import MirLogo from './assets/MirLogo.svg'
import VisaLogo from './assets/VisaLogo.svg'
import MasterCardLogo from './assets/MasterCardLogo.svg'

export default function PaymentSystems() {
  return (
    <div className={styles.paymentSystems}>
      <MirLogo />
      <VisaLogo />
      <MasterCardLogo />
    </div>
  )
}