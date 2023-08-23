import React from 'react'
import styles from './styles.module.scss'
import seedrandom from 'seedrandom'
import Image from 'next/image'
import AudioPlayer from '@/components/common/AudioPlayer'
import OrderPrankModal from '@/components/homepage/OrderPrankModal'

import miscellaneousBackground from './assets/miscellaneous.png'
import deliveryBackground from './assets/delivery.png'
import policeBackground from './assets/police.png'
import studyBackground from './assets/study.png'
import threatsBackground from './assets/threats.png'
import Button from '@/components/common/Button'
import { fixImage } from '@/utils/fix-images'

export type Prank = {
  id: string
  title: string
  statistics: number
  previewAudioURL: string
  cardBackground: string
}

export default function PrankPreview(props: { prank: Prank }) {
  const [orderModalVisible, setOrderModalVisible] = React.useState(false)

  // const bg = [
  //   miscellaneousBackground,
  //   deliveryBackground,
  //   policeBackground,
  //   studyBackground,
  //   threatsBackground
  // ][Math.floor(seedrandom(props.prank.id)() * 5)]

  return (
    <>
      <div className={styles.prank} onClick={() => setOrderModalVisible(true)}>
        <div className={styles.image}>
          <Image src={fixImage(props.prank.cardBackground)} fill alt='' />
          <AudioPlayer src={props.prank.previewAudioURL} />
        </div>
        <div className={styles.info}>
          <h3>{props.prank.title}</h3>
          <span>{props.prank.statistics} розыгрышей</span>
          <Button shrink>Заказать<span className={styles.hideMobile}> розыгрыш</span></Button>
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