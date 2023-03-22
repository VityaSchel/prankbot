import '@/styles/globals.scss'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { ru as ruYupLocale } from 'yup-locales'
import { setLocale as setYupLocale } from 'yup'

setYupLocale(ruYupLocale)

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}
