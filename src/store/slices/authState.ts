import { User } from '@/store/definitions/User'
import type { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import Cookie from 'js-cookie'

type AuthStateSliceState = /*{
  loggedIn: true
  user: User
} | {
  loggedIn: false
  user: null
} */ {
  value: {
    loggedIn: boolean
    user: User | null
    sessionRestored: boolean
  }
}

const initialState: AuthStateSliceState = {
  value: {
    loggedIn: false,
    user: null,
    sessionRestored: false
  }
}

export const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<{ user: User }>) => {
      state.value.loggedIn = true
      state.value.user = action.payload.user
    },
    handleLogout: (state) => {
      state.value.loggedIn = false
      state.value.user = null
    },
    handleRestoreSession: (state, action: PayloadAction<{ user: User | null }>) => {
      state.value.sessionRestored = true
      if(action.payload.user) {
        state.value.loggedIn = true
        state.value.user = action.payload.user
      } else {
        state.value.loggedIn = false
        state.value.user = null
      }
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

export const { handleLogin, handleLogout, handleRestoreSession } = authStateSlice.actions
export const selectAuthState = (state: RootState) => state.authState.value
export default authStateSlice.reducer