import Layout from '../components/Layout'
import ScreensizeProvider from '../contexts/Screensize'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ScreensizeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScreensizeProvider>

  )
}
