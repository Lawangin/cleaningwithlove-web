import { useEffect, useState } from 'react'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { CLEANING_GUY_IMAGE } from '../constants/imageKeys'
import CallToActionCard from './CallToActionCard'
import Compressor from 'compressorjs'

const TertiaryContent = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<File | Blob>()

  const fetchImage = async () => {
    const { presignedUrls } = await getPresignedUrlWithKey(
      'publicAssets',
      CLEANING_GUY_IMAGE
    )

    const image = await fetch(presignedUrls as RequestInfo | URL)
    const imageBlob = await image.blob()

    new Compressor(imageBlob, {
      quality: 0.8,
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
    <div className='grid gap-2 grid-cols-2 grid-rows-1 justify-items-center max-sm:grid-cols-1'>
      {imgUrl ? (
        <img
          src={URL.createObjectURL(imgUrl)}
          alt='cartoon man vacumming'
          className='max-w-lg'
          loading='lazy'
        />
      ) : (
        <p>Loading...</p>
      )}
      <div className='place-self-center'>
        <CallToActionCard />
      </div>
    </div>
  )
}

export default TertiaryContent
