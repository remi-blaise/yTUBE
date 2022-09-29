import '../styles/globals.css'
import Header from '../components/Header'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <div>
    <SessionProvider session={session}>
      <Header></Header>
      <Component {...pageProps}/>
    </SessionProvider>
  </div>
}

export default MyApp
