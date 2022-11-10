import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Storage } from 'aws-amplify'
import ContainerWrapper from '../src/domains/landing-page/components/ContainerWrapper'
import NavBar from '../src/domains/landing-page/components/NavBar'
import MainContent from '../src/domains/landing-page/components/MainContent'
import SecondaryContent from '../src/domains/landing-page/components/SecondaryContent'
import TertiaryContent from '../src/domains/landing-page/components/TertiaryContent'
import Footer from '../src/domains/landing-page/components/Footer'

const Home: NextPage = () => {
  const [imgUrl, setImgUrl] = useState('/vercel.svg')

  // useEffect(() => {
  //   Storage.get('Asset 1.svg') // for listing ALL files without prefix, pass '' instead
  //     .then((result) => {
  //       console.log(result)
  //       return setImgUrl(result)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <>
      <Head>
        <title>Cleaing With Love</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ContainerWrapper color={'bg-brandBlueLight'}>
        <MainContent />
      </ContainerWrapper>

      <ContainerWrapper color={'bg-white'}>
        <SecondaryContent />
      </ContainerWrapper>

      <ContainerWrapper color={'bg-brandBlue'}>
        <TertiaryContent />
      </ContainerWrapper>

      <ContainerWrapper color={'bg-primary'}>
        <Footer />
      </ContainerWrapper>
    </>
  )
}

export default Home
