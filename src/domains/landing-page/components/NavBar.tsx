import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Storage } from 'aws-amplify'
import ContainerWrapper from './ContainerWrapper'

const NavBar = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  useEffect(() => {
    Storage.get('Asset 1.svg', { level: 'public' }) // for listing ALL files without prefix, pass '' instead
      .then((result) => setImgUrl(result))
      .catch((err) => console.log(err))
  }, [])

  return (
    <ContainerWrapper color={'white'}>
      <div className='grid grid-cols-2 grid-rows-1'>
        <Link href='/' className='w-20'>
          {imgUrl ? (
            <img src={imgUrl} alt='cleaning with love logo' />
          ) : (
            <p>Loading...</p>
          )}
        </Link>
        <div className='grid grid-cols-4 grid-rows-1 justify-items-center items-center'>
          <Link href='/booknow' className='font-sans text-primary'>
            Book Now
          </Link>
          <Link
            href='/'
            className='font-sans hover:text-tertiary focus:text-secondary focus:font-semibold'
          >
            Home
          </Link>
          <Link
            href='/aboutus'
            className='font-sans hover:text-secondary focus:text-secondary focus:font-semibold'
          >
            About Us
          </Link>
          <Link
            href='/faq'
            className='font-sans hover:text-tertiary focus:text-secondary focus:font-semibold'
          >
            FAQ
          </Link>
        </div>
      </div>
    </ContainerWrapper>
  )
}

export default NavBar
