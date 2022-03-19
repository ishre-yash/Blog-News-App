import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shre Yash</title>
        <meta name="description" content="Coding Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Welcome to ShreYash Blog
        </h1>
        <p className={styles.description}>
          A Blog for Coders by a coder.
        </p>
        
        <div className='blogs'>
          <div className='blogItem'>
            <h1>JavaScript</h1>
            <p>lo</p>
          </div>

        </div>
        
      </main>

      
    </div>
  )
}
