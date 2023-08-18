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
      <CardSection imgUrl="https://petanjo.com/blog/wp-content/uploads/2021/06/meu-gato-nao-para-de-miar-709x384.jpg" directionRigth={false}/>
      <CardSection directionRigth={true} imgUrl="https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=90&strip=info&w=1280&h=720&crop=1"/>
    <Footer/>
    </>
  )
}
