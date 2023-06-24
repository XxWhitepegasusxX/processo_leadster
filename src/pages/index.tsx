import Head from 'next/head'
import Header from '@/components/Header'
import MainBanner from '@/components/MainBanner'
import LibraryHeader from '@/components/LibraryHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leadster</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <MainBanner/>
        <LibraryHeader/>
      </main>
    </>
  )
}
