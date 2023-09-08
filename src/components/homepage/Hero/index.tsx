import styles from './styles.module.scss'
import Button from '@/components/common/Button'
import Image from 'next/image'
import { BsArrowDown } from 'react-icons/bs'
import { Tabs } from 'antd'
import HeroImage from './assets/hero.png'

export default function Hero() {
  const handleScroll = () => {
    document.querySelector('#pranks')!.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <div className={styles.text}>
            <h1>Разыграй друга <wbr />по телефону и получи <span className={styles.highlight}>запись разговора</span></h1>
          {/*<h1>Разыграй своих друзей <wbr />или коллег с помощью <span className={styles.highlight}>ПранкБота</span></h1>*/}
          <h2>Сервис розыгрышей по телефону позволяет выбрать смешную аудиозапись и совершить звонок, после чего робот пришлет полную запись разговора. В коллекции сервиса есть десятки смешных аудио для розыгрышей и система, которая позволяет отслеживать звонок в режиме реального времени. Подари своим друзьям, родственникам и знакомых незабываемый опыт.</h2>
        </div>
        {/* <Button type="primary" size='large'>Выбрать розыгрыш</Button> */}
        <Button variant='secondary' onClick={handleScroll}>Выбрать розыгрыш <BsArrowDown /></Button>
      </div>
      <div className={styles.image}>
        <Image src={HeroImage} alt='' fill quality={100} priority />
      </div>
    </div>
  )
}