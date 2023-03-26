import React from 'react'
import styles from './styles.module.scss'
import PlayButtonIcon from './playButton.svg'
import PauseButtonIcon from './pauseButton.svg'
import { mergeRefs } from 'react-merge-refs'
import { useAppDispatch } from '@/store/store'
import { selectAudioPlayerState, setAttachedPlayer, setIsPlaying } from '@/store/slices/audioPlayerState'
import { useSelector } from 'react-redux'

export default function PlayButton(props: { 
  src: string, 
  audioPlayerRef?: React.LegacyRef<HTMLAudioElement>, 
  onLoaded: () => any,
  audioPlayerProps: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>
}) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const audioPlayerRef = React.useRef<null | HTMLAudioElement>(null)
  const dispatch = useAppDispatch()
  const audioPlayerState = useSelector(selectAudioPlayerState)

  const handleLoadedMetadata = () => {
    setIsLoaded(true)
    props.onLoaded()
  }

  const handlePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if(!audioPlayerRef.current) return
    if(audioPlayerRef.current.paused) {
      audioPlayerRef.current.play()
      if(audioPlayerRef.current !== audioPlayerState.attachedPlayer) {
        if(audioPlayerState.attachedPlayer) {
          audioPlayerState.attachedPlayer.currentTime = 0
          audioPlayerState.attachedPlayer.pause()
        }
        dispatch(setAttachedPlayer(audioPlayerRef.current))
      }
      dispatch(setIsPlaying(true))
    } else {
      dispatch(setIsPlaying(false))
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
        {audioPlayerRef.current?.paused ? <PlayButtonIcon /> : <PauseButtonIcon />}
      </button>
      <audio 
        src={props.src} 
        ref={props.audioPlayerRef ? mergeRefs([audioPlayerRef, props.audioPlayerRef]) : audioPlayerRef} 
        onLoadedMetadata={handleLoadedMetadata}
        {...props.audioPlayerProps}
      />
    </>
  )
}