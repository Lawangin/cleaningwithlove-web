import Link from 'next/link'
import { useEffect, useState } from 'react'
import ContainerWrapper from './ContainerWrapper'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { LOGO } from '../constants/imageKeys'
import HamburgerMenu from '../../global/components/HamburgerMenu'
import Compressor from 'compressorjs'

// import awsconfig from '../../../../src/aws-exports'

// logger.debug('awsconfigs', awsconfig)

const NavBar = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<Blob | File>()

  const fetchImage = async () => {
    const { presignedUrls } = await getPresignedUrlWithKey('publicAssets', LOGO)

    const image = await fetch(presignedUrls as RequestInfo | URL)
    const imageBlob = await image.blob()

    new Compressor(imageBlob, {
      quality: 0.5,
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        setImgUrl(compressedResult)
      }
    })
  }

  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <ContainerWrapper color={'white'} styling='fixed w-full z-10 max-sm:p-2'>
      <div className='grid grid-cols-2 grid-rows-1 content-center'>
        <Link href='/' className='w-20 mx-4 mt-2 max-sm:m-0'>
          {imgUrl ? (
            <img
              src={URL.createObjectURL(imgUrl)}
              alt='cleaning with love logo'
            />
          ) : (
            <p>Loading...</p>
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
            className='font-sans hover:text-tertiary focus:text-secondary focus:font-semibold'
          >
            Home
          </Link>
          <Link
            href='/faq'
            className='font-sans hover:text-tertiary focus:text-secondary focus:font-semibold'
          >
            FAQ
          </Link>
          {/* <Link
            href="/aboutus"
            className="font-sans hover:text-secondary focus:text-secondary focus:font-semibold"
          >
            About Us
          </Link> */}
        </div>
        <div className='sm:hidden'>
          <HamburgerMenu />
        </div>
      </div>
    </ContainerWrapper>
  )
}

export default NavBar
