import NavBar from '../components/NavBar'
import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>Shre Yash</title>
        <meta name="description" content="Coding Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <NavBar />
  <Component {...pageProps} />
  </>
}

export default MyApp
