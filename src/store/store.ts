import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { authStateSlice } from '@/store/slices/authState'
import { useDispatch } from 'react-redux'

const configureReduxStore = () => configureStore({
  reducer: {
    [authStateSlice.name]: authStateSlice.reducer
  },
  devTools: true,
})

let store: ReturnType<typeof configureReduxStore>
const makeStore = () => {
  store = configureReduxStore()
  return store
}

export const wrapper = createWrapper(makeStore)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export { store }