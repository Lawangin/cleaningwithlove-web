import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import ContainerWrapper from '../src/domains/landing-page/components/ContainerWrapper'
import MainContent from '../src/domains/landing-page/components/MainContent'
import SecondaryContent from '../src/domains/landing-page/components/SecondaryContent'
import TertiaryContent from '../src/domains/landing-page/components/TertiaryContent'
import Footer from '../src/domains/landing-page/components/Footer'
import { getPresignedUrlWithKey } from '../src/services/s3'
import { BKG_IMAGE } from '../src/domains/landing-page/constants/imageKeys'
import theme from '../src/tailwind-theme'

const Home: NextPage = () => {
  const [imgUrl, setImgUrl] = useState<string | undefined>()

  const { colors }: any = theme

  const fetchImages = async () => {
    const { presignedUrls: groupImgUrl } = await getPresignedUrlWithKey(
      'publicAssets',
      BKG_IMAGE
    )

    setImgUrl(groupImgUrl)
  }

  useEffect(() => {
    fetchImages()
  }, [imgUrl])

  return (
    <>
      <Head>
        <title>Cleaing With Love</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ContainerWrapper color={colors?.brandBlueLight}>
        <MainContent />
      </ContainerWrapper>

      {/* <ContainerWrapper color={'white'} bkg={imgUrl}>
        <SecondaryContent />
      </ContainerWrapper> */}

      <ContainerWrapper color={colors?.primary}>
        <SecondaryContent />
      </ContainerWrapper>

      <ContainerWrapper color={colors?.brandBlueLight}>
        <TertiaryContent />
      </ContainerWrapper>

      <ContainerWrapper color={colors?.primary}>
        <Footer />
      </ContainerWrapper>
    </>
  )
}

export default Home
