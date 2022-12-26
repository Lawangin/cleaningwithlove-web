import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <div>
      <div className='text-white py-8 flex justify-between max-sm:flex-col px-4 max-sm:items-stretch'>
        <div className='flex flex-col'>
          <Link href='/booknow' className='hover:text-secondary p-1'>
            Book Now
          </Link>
          <Link href='/' className='hover:text-secondary p-1'>
            Home
          </Link>
          <Link href='/aboutus' className='hover:text-secondary p-1'>
            About Us
          </Link>
          <Link href='/faq' className='hover:text-secondary p-1'>
            FAQ
          </Link>
        </div>
        <div className='flex flex-col'>
          <Link href='/' className='hover:text-secondary p-1'>
            Twitter
          </Link>
          <Link href='/' className='hover:text-secondary p-1'>
            Instagram
          </Link>
          <Link href='/' className='hover:text-secondary p-1'>
            Email
          </Link>
        </div>
      </div>
      <p className='text-center text-white p-1'>
        © 2022 Cleaning With Love. All rights reserved
      </p>
    </div>
  )
}

export default Footer
