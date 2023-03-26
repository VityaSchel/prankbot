import React from 'react'
import styles from './styles.module.scss'
import { Skeleton } from 'antd'
import PlayButton from '@/components/common/AudioPlayer/PlayButton'

export default function AudioPlayer(props: { src: string }) {
  const audioPlayerRef = React.useRef<null | HTMLAudioElement>(null)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [waveform, setWaveform] = React.useState<number[]>([])
  const [activeWaveformPeaks, setActiveWaveformPeaks] = React.useState<boolean[]>([])

  const formatDuration = (duration: number) => {
    return `${Math.floor(duration / 60)}:${('0' + Math.floor(duration % 60)).slice(-2)}`
  }

  React.useEffect(() => {
    if(!audioPlayerRef) return
    setWaveform(
      new Array(21).fill(null).map((_, i) => Math.floor(Math.random() * 95) + 5) /* TODO: generate actual waveform after MVP */
    )
  }, [audioPlayerRef])

  const handlePositionChange = () => {
    setActiveWaveformPeaks(
      waveform.map((_, i) => (
        audioPlayerRef.current!.currentTime > (audioPlayerRef.current!.duration / waveform.length * i)
      ))
    )
  }

  return (
    <div className={styles.audio}>
      <PlayButton 
        src={props.src} 
        onLoaded={() => setIsLoaded(true)} 
        audioPlayerRef={audioPlayerRef} 
        audioPlayerProps={{
          onTimeUpdate: handlePositionChange
        }}
      />
      <div className={styles.waveform}>
        {(audioPlayerRef.current && isLoaded)
          ? (
            waveform.map((peakHeight, i) => (
              <Peak key={i} height={peakHeight} active={activeWaveformPeaks[i]} />
            ))
          ) : (
            <span className={styles.loadingWaveform} />
          )
        }
      </div>
      <span className={styles.duration}>
        {(audioPlayerRef.current && isLoaded)
          ? formatDuration(audioPlayerRef.current.duration)
          : <div style={{ width: 20 }}><Skeleton paragraph={false} active /></div>
        }
      </span>
    </div>
  )
}

function Peak(props: { height: number, active: boolean }) {
  return (
    <span className={styles.peak} style={{ height: `${props.height}%`, backgroundColor: props.active ? '#4B2EFF' : undefined }} />
  )
}