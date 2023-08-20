import Footer from '@/src/components/common/Footer'
import CardSection from '@/src/components/homeNoAuth/cardSection'
import HeaderNoAuth from '@/src/components/homeNoAuth/headerNoAuth'
import PresentationCardSection from '@/src/components/homeNoAuth/presentationSection'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import AOS from 'aos'
import { useEffect } from 'react'
import styles from "../styles/homeNoAuth.module.scss"
import "aos/dist/aos.css";
import TextSection from '@/src/components/homeNoAuth/textSection'
import CardsSection from '@/src/components/homeNoAuth/cardsSection'
import VideoSection from '@/src/components/homeNoAuth/videoSection'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Head>
      <title>PetZone - Index</title>
    </Head>
    <main className={styles.main}>
      <HeaderNoAuth/>
          <div data-aos="zoom-in" data-aos-duration="2000" >
              <PresentationCardSection/>
          </div>

          <div data-aos="fade-right" data-aos-duration="2000" >
            <CardSection imgUrl="https://petanjo.com/blog/wp-content/uploads/2021/06/meu-gato-nao-para-de-miar-709x384.jpg" directionRigth={false}/>
          </div>

         <div data-aos="fade-left" data-aos-duration="2000">
          <CardSection directionRigth={true} imgUrl="https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=90&strip=info&w=1280&h=720&crop=1"/>
        </div>

        <TextSection bgColor="Pink"   >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
        </TextSection>

        <div data-aos="fade-right" data-aos-duration="2000" >
        <CardsSection imgUrl1="https://uploads.metropoles.com/wp-content/uploads/2022/05/02141436/conheca_as_racas_de_cachorros_mais_inteligentes_widexl.jpg" imgUrl2="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3261558:1659119891/Maltes.jpg?f=16x9&h=720&q=0.8&w=1280&$p$h$w=878c96e" title="Lorem ipsum">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ullam necessitatibus neque dolore, officiis pariatur quibusdam non expedita quas porro nemo quis ipsam nobis magni, rem quaerat sint earum. Quisquam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsam impedit labore unde reiciendis cupiditate dolor nulla, rem quis! Nisi excepturi, corporis similique eum tenetur optio aperiam distinctio vitae cum?
        </CardsSection>
        </div>

        <TextSection   showButton={true} href="/register" childrenBtn="Cadastre-se" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora vero harum earum natus id expedita magni debitis eos, consequuntur porro cupiditate praesentium ullam pariatur incidunt dolore molestiae quas voluptas.
        </TextSection>

        <VideoSection />
      <Footer/>
    </main>
    </>
  )
}
