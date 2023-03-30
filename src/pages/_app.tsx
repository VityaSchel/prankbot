import React from 'react'
import '@/styles/globals.scss'
import { ConfigProvider } from 'antd'
import { Provider as ReduxProvider } from 'react-redux'
import { wrapper } from '@/store/store'
import type { AppProps } from 'next/app'
import { ru as ruYupLocale } from 'yup-locales'
import Cookie from 'js-cookie'
import { handleRestoreSession, selectAuthState } from '@/store/slices/authState'
import { useSelector } from 'react-redux'

import { setLocale as setYupLocale } from 'yup'
import { verifyCheckboxes } from '@/store/slices/companyAdsState'
setYupLocale(ruYupLocale)

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  React.useEffect(() => {
    if(Cookie.get('prankbot_session')) {
      store.dispatch(handleRestoreSession({ user: { _no_data: true } }))
    } else {
      store.dispatch(handleRestoreSession({ user: null }))
    }
  }, [])
  
  React.useEffect(() => {
    store.dispatch(verifyCheckboxes())
  }, [])

  return (
    <ReduxProvider store={store}>
      {/* <SessionSuspense> */}
        <ConfigProvider
          // theme={{
          //   token: {
          //     colorPrimary: 'rgb(237, 234, 255)',
          //     colorTextLightSolid: 'rgb(75, 46, 255)'
          //   },
          // }}
        >
          <Component {...pageProps} />
        </ConfigProvider>
      {/* </SessionSuspense>   */}
    </ReduxProvider>
  )
}

// literally kills SSR omg
function SessionSuspense(props: { children: React.ReactNode }) {
  const authState = useSelector(selectAuthState)

  return (
    <>{authState.sessionRestored && props.children}</>
  )
}