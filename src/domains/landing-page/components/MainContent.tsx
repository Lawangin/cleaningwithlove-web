import { useEffect, useState, useRef } from 'react'
import Button from '../../global/components/Button'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { BLOB_MOP, WOMAN_CLEANING_IMAGE } from '../constants/imageKeys'
import { useRouter } from 'next/router'
import Compressor from 'compressorjs'
import Spinner from '../../global/components/Spinner'

const MainContent = (): JSX.Element => {
  // const [imgUrl, setImgUrl] = useState<Blob | File>()
  const [imgUrl, setImgUrl] = useState<string>()
  const [mobile, setMobile] = useState<MediaQueryList | undefined>(undefined)

  const router = useRouter()

  const windowRef = useRef<Window | null>(null)

  const fetchImage = async () => {
    const { error, presignedUrls } = await getPresignedUrlWithKey(
      'publicAssets',
      BLOB_MOP
    )

    setImgUrl(presignedUrls)

    // const { error, presignedUrls } = await getPresignedUrlWithKey(
    //   'publicAssets',
    //   WOMAN_CLEANING_IMAGE
    // )

    // const image = await fetch(presignedUrls as RequestInfo | URL)
    // const imageBlob = await image.blob()

    // new Compressor(imageBlob, {
    //   quality: 0.5,
    //   success: (compressedResult) => {
    //     // compressedResult has the compressed file.
    //     setImgUrl(compressedResult)
    //   }
    // })
  }

  const handleClick = () => {
    router.push('/booknow')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      windowRef.current = window
      setMobile(windowRef.current.matchMedia('(min-width: 767px)'))
    }
    fetchImage()
  }, [])

  return (
    <div className='grid grid-cols-2 grid-rows-1 justify-items-center items-center py-8 pt-16 max-sm:grid-cols-1 max-sm:px-4 max-sm:pt-24'>
      <div className='max-w-md'>
        <p className='font-sans font-bold text-4xl py-4'>
          Cleanse Your Mind and Your Space
        </p>
        <p>
          Improve your mental health with our cleaning services. Book instantly
          online for quick and easy access to professional cleaning that
          promotes well-being.
        </p>
        <div className='py-8'>
          <Button onClick={handleClick}>Book Now</Button>
        </div>
      </div>
      {mobile !== undefined && mobile.matches ? (
        imgUrl ? (
          <img
            // src={URL.createObjectURL(imgUrl)}
            src={imgUrl}
            alt='Cartoon woman mopping the floor'
            className='max-sm:hidden'
          />
        ) : (
          <div className='place-self-center'>
            <Spinner />
          </div>
        )
      ) : (
        ''
      )}
    </div>
  )
}

export default MainContent
