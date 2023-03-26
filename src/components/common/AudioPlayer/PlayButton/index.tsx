import React from 'react'
import styles from './styles.module.scss'
import PlayButtonIcon from './playButton.svg'
import { mergeRefs } from 'react-merge-refs'

export default function PlayButton(props: { src: string, audioPlayerRef?: React.LegacyRef<HTMLAudioElement>, onLoaded: () => any }) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const audioPlayerRef = React.useRef<null | HTMLAudioElement>(null)

  const handleLoadedMetadata = () => {
    setIsLoaded(true)
    props.onLoaded()
  }

  const handlePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if(!audioPlayerRef.current) return
    if(audioPlayerRef.current.paused) {
      audioPlayerRef.current.play()
    } else {
      audioPlayerRef.current.pause()
    }
  }

  return (
    <>
      <button 
        className={styles.playpauseButton} 
        onClick={handlePlayPause}
        disabled={Boolean(!props.audioPlayerRef && isLoaded)}
      >
        <PlayButtonIcon />
      </button>
      <audio 
        src={props.src} 
        ref={props.audioPlayerRef ? mergeRefs([audioPlayerRef, props.audioPlayerRef]) : audioPlayerRef} 
        onLoadedMetadata={handleLoadedMetadata}
      />
    </>
  )
}