import Link from 'next/link'
import { useEffect, useState } from 'react'
import ContainerWrapper from './ContainerWrapper'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { BLOB_LOGO } from '../constants/imageKeys'
import HamburgerMenu from '../../global/components/HamburgerMenu'
import Compressor from 'compressorjs'
import Spinner from '../../global/components/Spinner'

// import awsconfig from '../../../../src/aws-exports'

// logger.debug('awsconfigs', awsconfig)

const NavBar = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string>()

  const fetchImage = async () => {
    const { presignedUrls } = await getPresignedUrlWithKey(
      'publicAssets',
      BLOB_LOGO
    )

    setImgUrl(presignedUrls)
  }

  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <ContainerWrapper color={'white'} styling='fixed w-full z-10 max-sm:p-2'>
      <div className='grid grid-cols-2 grid-rows-1 content-center'>
        <Link href='/' className='w-20 mx-4 mt-2 max-sm:m-0'>
          {imgUrl ? (
            <img src={imgUrl} alt='cleaning with love logo' />
          ) : (
            <div className='place-self-center'>
              <Spinner />
            </div>
          )}
        </Link>
        <div className='flex justify-around items-center max-sm:hidden'>
          <Link
            href='/booknow'
            className='font-sans text-primary focus:text-secondary'
          >
            Book Now
          </Link>
          <Link
            href='/'
            className='font-sans hover:text-secondary focus:text-secondary focus:font-semibold'
          >
            Home
          </Link>
          <Link
            href='/faq'
            className='font-sans hover:text-secondary focus:text-secondary focus:font-semibold'
          >
            FAQ
          </Link>
          <Link
            href='/aboutus'
            className='font-sans hover:text-secondary focus:text-secondary focus:font-semibold'
          >
            About Us
          </Link>
        </div>
        <div className='sm:hidden'>
          <HamburgerMenu />
        </div>
      </div>
    </ContainerWrapper>
  )
}

export default NavBar
