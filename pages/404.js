import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router"
import { useEffect } from "react"

const NotFound = () => {
  const Route = useRouter()

  useEffect(() => {
    setTimeout(() => {
      Route.push("/")
    }, 3000)
  }, [])

  return (
    <>
      <Head>
        <title>Friend List | Error Page</title>
        <meta name="keywords" content="creativesingh.tech" />
      </Head>
      <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That Page Cannot Be Found</h2>
        <p>Go Back To The <Link href="/"><a>Homepage</a></Link></p>
      </div>
    </>
  );
}

export default NotFound;