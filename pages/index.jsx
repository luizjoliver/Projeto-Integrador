import Footer from '@/src/components/common/Footer'
import CardSection from '@/src/components/homeNoAuth/cardSection'
import HeaderNoAuth from '@/src/components/homeNoAuth/headerNoAuth'
import PresentationCardSection from '@/src/components/homeNoAuth/presentationSection'
import { Inter } from 'next/font/google'
import Head from 'next/head'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>PetZone - Index</title>
    </Head>
    <HeaderNoAuth/>
      <PresentationCardSection/>
      <CardSection/>
    <Footer/>
    </>
  )
}
