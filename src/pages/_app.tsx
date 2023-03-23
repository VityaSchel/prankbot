import '@/styles/globals.scss'
import { ConfigProvider } from 'antd'
import { Provider as ReduxProvider } from 'react-redux'
import { wrapper } from '@/store/store'
import type { AppProps } from 'next/app'
import { ru as ruYupLocale } from 'yup-locales'

import { setLocale as setYupLocale } from 'yup'
setYupLocale(ruYupLocale)

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props;
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  )
}
