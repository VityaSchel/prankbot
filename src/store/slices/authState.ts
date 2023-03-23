import { User } from '@/store/definitions/User'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

type AuthStateSliceState = /*{
  loggedIn: true
  user: User
} | {
  loggedIn: false
  user: null
} */ {
  loggedIn: boolean
  user: User | null
}

const initialState: AuthStateSliceState = {
  loggedIn: false,
  user: null
}

export const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<{ user: User }>) => {
      state = {
        loggedIn: true,
        user: action.payload.user
      }
    },
    handleLogout: (state) => {
      state = {
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
export const selectAuthState = (state: AuthStateSliceState) => state
export default authStateSlice.reducer