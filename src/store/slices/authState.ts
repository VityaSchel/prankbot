import { User } from '@/store/definitions/User'
import type { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

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
  }
}

const initialState: AuthStateSliceState = {
  value: {
    loggedIn: false,
    user: null
  }
}

export const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<{ user: User }>) => {
      state.value = {
        loggedIn: true,
        user: action.payload.user
      }
    },
    handleLogout: (state) => {
      state.value = {
        loggedIn: false,
        user: null
      }
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.authState,
        }
      }
    }
  }
})

export const { handleLogin, handleLogout } = authStateSlice.actions
export const selectAuthState = (state: RootState) => state.authState.value
export default authStateSlice.reducer