import Link from 'next/link'
import Head from "next/head"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Friend List | Home</title>
        <meta name="keywords" content="creativesingh.tech" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Link href="/my-friends">
          <a className={styles.btn}>
            Look my friends
        </a>
        </Link>
      </div>
    </>
  )
}
