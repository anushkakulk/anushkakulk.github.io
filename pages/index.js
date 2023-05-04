import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() { 
  return (
    <div>
    <Head>
      <title>Anushka Kulkarni | Full Stack Developer</title>
      <meta name = "description" content="Generaged by create next app" />
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Navbar />



    </div>
  )
}

   