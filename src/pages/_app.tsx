import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'rgb(237, 234, 255)',
          colorTextLightSolid: 'rgb(75, 46, 255)'
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
