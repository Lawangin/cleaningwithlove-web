import { useEffect, useState } from 'react'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { BLOB_VACCUM, CLEANING_GUY_IMAGE } from '../constants/imageKeys'
import CallToActionCard from './CallToActionCard'
import Compressor from 'compressorjs'
import Spinner from '../../global/components/Spinner'

const TertiaryContent = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string>()

  const fetchImage = async () => {
    const { presignedUrls } = await getPresignedUrlWithKey(
      'publicAssets',
      BLOB_VACCUM
    )

    setImgUrl(presignedUrls)
  }

  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <div className='grid gap-2 grid-cols-2 grid-rows-1 justify-items-center max-sm:grid-cols-1'>
      {imgUrl ? (
        <img
          src={imgUrl}
          alt='cartoon man vacumming'
          className='max-w-lg'
          loading='lazy'
        />
      ) : (
        <div className='place-self-center'>
          <Spinner />
        </div>
      )}
      <div className='place-self-center'>
        <CallToActionCard />
      </div>
    </div>
  )
}

export default TertiaryContent
