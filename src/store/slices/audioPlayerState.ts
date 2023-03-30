import { User } from '@/store/definitions/User'
import type { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import Cookie from 'js-cookie'

type AudioPlayerState = {
  value: {
    isPlaying: boolean
    attachedPlayer: null | HTMLAudioElement
  }
}

const initialState: AudioPlayerState = {
  value: {
    isPlaying: false,
    attachedPlayer: null
  }
}

export const audioPlayerStateSlice = createSlice({
  name: 'audioPlayerState',
  initialState,
  reducers: {
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.value.isPlaying = action.payload
    },
    setAttachedPlayer: (state, action: PayloadAction<AudioPlayerState['value']['attachedPlayer']>) => {
      state.value.attachedPlayer = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.authState,
      }
    }
  }
})

export const { setIsPlaying, setAttachedPlayer } = audioPlayerStateSlice.actions
export const selectAudioPlayerState = (state: RootState) => state.audioPlayerState.value
export default audioPlayerStateSlice.reducer