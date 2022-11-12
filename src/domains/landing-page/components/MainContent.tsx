import { useEffect, useState } from 'react'
import { Storage } from 'aws-amplify'
import Button from '../../global/components/Button'

const MainContent = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  useEffect(() => {
    Storage.get(
      'vecteezy_woman-mopping-the-floor-for-spring-cleaning-concept_5860249 [Converted] 1.png'
    ) // for listing ALL files without prefix, pass '' instead
      .then((result) => setImgUrl(result))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='grid grid-cols-2 grid-rows-1 justify-items-center items-center'>
      <div className='max-w-md'>
        <p className='font-sans font-bold text-4xl py-4'>
          Cleaning never felt so good
        </p>
        <p>
          We help people address mental health through cleaning. It’s therapy
          through a clean environment. Book now instantly online.
        </p>
        <div className='py-8'>
          <Button>Book Now</Button>
        </div>
      </div>
      {imgUrl ? (
        <img src={imgUrl} alt='Cartoon woman mopping the floor' />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MainContent
