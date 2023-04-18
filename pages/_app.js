import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { AuthContextProvider, useAuthContext } from "../contexts/AuthContext";
import ProductContextProvider from "../contexts/ProductsContext";
import ScreensizeProvider from "../contexts/Screensize";
import "../styles/globals.css";
import SignIn from "./SignIn";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = (page) => <Layout>{page}</Layout>;
  const { user, loading } = useAuthContext
  // if (!user) {
  //   return (
  //     <AuthContextProvider>
  //       <SignIn />
  //     </AuthContextProvider>
  //   )
  // }
  return (
    <AuthContextProvider>
      <ScreensizeProvider>
        <ProductContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </ProductContextProvider>
      </ScreensizeProvider>
    </AuthContextProvider>
  );
}
