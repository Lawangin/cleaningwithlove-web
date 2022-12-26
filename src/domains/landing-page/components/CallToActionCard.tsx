import Button from '../../global/components/Button'
import { useRouter } from 'next/router'

const CallToActionCard = (): JSX.Element => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/booknow')
  }

  return (
    <div className='bg-white my-8 rounded-lg p-6 max-w-md drop-shadow-md'>
      <p className='font-sans font-bold text-4xl'>
        Cleaning With Love House Service
      </p>
      <div className='m-8 font-semibold'>
        <div className='my-4'>
          <span className='mx-2'>✔</span>
          <span>All cleaning supplies covered.</span>
        </div>
        <div className='my-4'>
          <span className='mx-2'>✔</span>
          <span>Organization services offered.</span>
        </div>
        <div className='my-4'>
          <span className='mx-2'>✔</span>
          <span>Professional cleaners.</span>
        </div>
        <div className='my-4'>
          <span className='mx-2'>✔</span>
          <span>Stress free.</span>
        </div>
      </div>
      <Button onClick={handleClick}>Book Now</Button>
    </div>
  )
}

export default CallToActionCard
