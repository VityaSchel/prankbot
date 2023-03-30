import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'

import { authStateSlice } from '@/store/slices/authState'
import { audioPlayerStateSlice } from '@/store/slices/audioPlayerState'
import { showCheckboxesStateSlice } from '@/store/slices/companyAdsState'

const configureReduxStore = () => configureStore({
  reducer: {
    [authStateSlice.name]: authStateSlice.reducer,
    [audioPlayerStateSlice.name]: audioPlayerStateSlice.reducer,
    [showCheckboxesStateSlice.name]: showCheckboxesStateSlice.reducer
  },
  devTools: true,
})

let store: ReturnType<typeof configureReduxStore>
const makeStore = () => {
  store = configureReduxStore()
  return store
}

export const wrapper = createWrapper(makeStore)
export type RootState = ReturnType<typeof store['getState']>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export { store }