import React from 'react'
import styles from './styles.module.scss'
import background1 from './assets/background1.png'
import background2 from './assets/background2.png'
import background3 from './assets/background3.png'
import background4 from './assets/background4.png'
import background5 from './assets/background5.png'
import seedrandom from 'seedrandom'
import Image from 'next/image'
import AudioPlayer from '@/components/common/AudioPlayer'
import OrderPrankModal from '@/components/homepage/OrderPrankModal'

export type Prank = {
  id: string
  title: string
  statistics: number
  previewAudioURL: string
}

export default function PrankPreview(props: { prank: Prank }) {
  const [orderModalVisible, setOrderModalVisible] = React.useState(false)

  const bg = [
    background1,
    background2,
    background3,
    background4,
    background5
  ][Math.floor(seedrandom(props.prank.id)() * 5)]

  return (
    <>
      <div className={styles.prank} onClick={() => setOrderModalVisible(true)}>
        <div className={styles.image}>
          <Image src={bg} fill alt='' />
          <AudioPlayer src={props.prank.previewAudioURL} />
        </div>
        <div className={styles.info}>
          <h3>{props.prank.title}</h3>
          <span>{props.prank.statistics} розыгрышей</span>
        </div>
      </div>
      <OrderPrankModal
        prank={props.prank}
        open={orderModalVisible}
        onClose={() => setOrderModalVisible(false)}
      />
    </>
  )
}