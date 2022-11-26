import { useEffect, useState } from 'react'
import Button from '../../global/components/Button'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { WOMAN_CLEANING_IMAGE } from '../constants/imageKeys'

const MainContent = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string | null>()

  const fetchImage = async () => {
    const { error, presignedUrls } = await getPresignedUrlWithKey(
      'publicAssets',
      WOMAN_CLEANING_IMAGE
    )
    setImgUrl(presignedUrls)
  }

  useEffect(() => {
    fetchImage()
  }, [imgUrl])

  return (
    <div className='grid grid-cols-2 grid-rows-1 justify-items-center items-center py-8 pt-16 max-sm:grid-cols-1 max-sm:px-4 max-sm:pt-24'>
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
        <img
          src={imgUrl}
          alt='Cartoon woman mopping the floor'
          className='max-sm:hidden'
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MainContent
