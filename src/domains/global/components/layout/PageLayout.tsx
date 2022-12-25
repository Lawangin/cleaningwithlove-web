import Head from 'next/head'
import { ReactNode } from 'react'
import ContainerWrapper from '../../../landing-page/components/ContainerWrapper'
import Footer from '../../../landing-page/components/Footer'
import theme from '../../../../../src/tailwind-theme'

interface IProps {
  children: ReactNode
  title?: string
}

const PageLayout = ({ children, title }: IProps): JSX.Element => {
  const { colors }: any = theme
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Head>
        <title>{title || 'Cleaning With Love'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {children}

      <ContainerWrapper color={colors?.primary} styling='relative bottom-0'>
        <Footer />
      </ContainerWrapper>
    </div>
  )
}

export default PageLayout
