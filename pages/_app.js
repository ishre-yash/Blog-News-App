import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shre Yash</title>
        <meta
          name="description"
          content="ShreYash Blog is my personal Blog Website which provide technology and programming related tips."
        />

        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/ishre-yash/ishre-yash/main/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://raw.githubusercontent.com/ishre-yash/ishre-yash/main/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://raw.githubusercontent.com/ishre-yash/ishre-yash/main/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://raw.githubusercontent.com/ishre-yash/ishre-yash/main/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://raw.githubusercontent.com/ishre-yash/ishre-yash/main/android-chrome-512x512.png"
          sizes="512x512"
         />
      </Head>
      <NavBar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
