import Image from 'next/image'
import styles from './styles.module.scss'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <h1>Разыграй своих друзей или коллег с помощью <span className={styles.highlight}>ПранкБота</span></h1>
      </div>
      <div className={styles.image}>
        <Image src={'https://picsum.photos/600/320'} alt='' fill />
      </div>
    </div>
  )
}