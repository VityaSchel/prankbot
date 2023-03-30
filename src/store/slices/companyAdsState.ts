import { User } from '@/store/definitions/User'
import type { RootState } from '@/store/store'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import Cookie from 'js-cookie'
import { fetchAPI } from '@/data/api'
import { AdvertisingCompanyResponse } from '@/data/ApiDefinitions'
import { resetVerificationStatus, hasCheckboxes } from '@x5io/ads_parameter'

type CompanyAdsStateSliceState = {
  value: {
    showCheckboxes: boolean
  }
}

const initialState: CompanyAdsStateSliceState = {
  value: {
    showCheckboxes: true
  }
}

export const verifyCheckboxes = createAsyncThunk(
  'checkboxes/verify',
  async (payload: undefined, thunkAPI) => {
    const ads = (new URLSearchParams(window.location.search)).get('ads')
    if(ads !== null) {
      const r = await fetchAPI<AdvertisingCompanyResponse>('/advertising_companies/' + ads, 'GET')
      resetVerificationStatus()
      return hasCheckboxes(r.status === 'active')
    } else {
      return true
    }
  }
)

export const showCheckboxesStateSlice = createSlice({
  name: 'companyAds',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(verifyCheckboxes.fulfilled, (state, action) => {
      state.value.showCheckboxes = action.payload
    })
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...(action as any).payload.authState,
      }
    })
  }
})

export const selectShowCheckboxes = (state: RootState) => state.companyAds.value
export default showCheckboxesStateSlice.reducer