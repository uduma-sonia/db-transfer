import dynamic from 'next/dynamic'
import Head from 'next/head'
const HomeView = dynamic(() => import('@containers/Home'))

export default function Home() {
  return (
    <>
      <Head>
        <title>DB Transfer</title>
        <meta name="title" content="DB Transfer" />
        <meta name="description" content="DB Transfer" />
      </Head>
      <HomeView />
    </>
  )
}
