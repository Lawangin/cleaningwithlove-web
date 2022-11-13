import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/domains/landing-page/components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
