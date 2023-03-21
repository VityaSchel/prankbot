import React from 'react'
import styles from './styles.module.scss'
import PlayButton from './playButton.svg'
import { Skeleton } from 'antd'

export default function AudioPlayer(props: { src: string }) {
  const audioPlayerRef = React.useRef<null | HTMLAudioElement>(null)

  const handlePlayPause = () => {
    if(!audioPlayerRef.current) return
    if(audioPlayerRef.current.paused) {
      audioPlayerRef.current.play()
    } else {
      audioPlayerRef.current.pause()
    }
  }

  const formatDuration = (duration: number) => {
    return `${Math.floor(duration / 60)}:${('0' + Math.floor(duration % 60)).slice(-2)}`
  }

  return (
    <div className={styles.audio}>
      <audio src={props.src} ref={audioPlayerRef} />
      <button className={styles.playpauseButton} onClick={handlePlayPause}>
        <PlayButton />
      </button>
      <div className={styles.waveform}>
        {new Array(21).fill(null).map((_, i) => <span key={i} style={{ height: `${Math.floor(Math.random() * 95) + 5}%` }} />) /* TODO: generate actual waveform after MVP */}
      </div>
      <span className={styles.duration}>
        {(audioPlayerRef.current && audioPlayerRef.current.readyState >= 1)
          ? formatDuration(audioPlayerRef.current.duration)
          : <div style={{ width: 20 }}><Skeleton paragraph={false} active /></div>
        }
      </span>
    </div>
  )
}