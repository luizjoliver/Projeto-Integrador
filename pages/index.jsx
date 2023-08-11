import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>PetZone - Index</title>
    </Head>
    <header>
       <p>Header não logado</p>
    </header>
    <h1>Home page</h1>
    <main>
      <p>Contéudo aqui</p>
    </main>
    <ul>
      <li className='hover:text-blue-600'><Link href="/register"> Click here to register </Link></li>
      <li className='hover:text-blue-600'><Link href="/login"> Click here to login </Link></li>
    </ul>
    <footer>
      <p>Footer Copyright Petzone &copy;</p>
    </footer>
    </>
  )
}
