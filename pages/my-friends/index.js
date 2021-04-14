import Head from "next/head";
import styles from "../../styles/Friends.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: { friends: data }
  }
}

const Index = ({ friends }) => {
  return (
    <>
      <Head>
        <title>Friend List | My Friends</title>
        <meta name="keywords" content="creativesingh.tech" />
      </Head>

      <h1>My Friends Page</h1>
      {friends.map((frnd) => (
        <Link key={frnd.id} href={`/my-friends/${frnd.id}`}>
          <a className={styles.single}>
            <h3>{frnd.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
}

export default Index;