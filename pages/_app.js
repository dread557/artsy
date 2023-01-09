import Layout from '../components/Layout'
import ProductContextProvider from '../contexts/productContext'
import ScreensizeProvider from '../contexts/Screensize'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ScreensizeProvider>
      <ProductContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductContextProvider>
    </ScreensizeProvider>
  )
}
