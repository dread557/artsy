import Layout from '../components/Layout'
import ProductContextProvider from '../contexts/ProductsContext'
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
