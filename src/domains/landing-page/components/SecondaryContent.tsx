import { useEffect, useState } from 'react'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { BKG_IMAGE, GROUP_CLEANING } from '../constants/imageKeys'
import Card from './Card'
import Compressor from 'compressorjs'
import Spinner from '../../global/components/Spinner'

const SecondaryContent = (): JSX.Element => {
  const [largeImg, setLargeImg] = useState<Blob | File>()

  const fetchImages = async () => {
    const { presignedUrls: groupImgUrl } = await getPresignedUrlWithKey(
      'publicAssets',
      GROUP_CLEANING
    )

    const image = await fetch(groupImgUrl as RequestInfo | URL)
    const imageBlob = await image.blob()

    new Compressor(imageBlob, {
      quality: 0.5,
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        setLargeImg(compressedResult)
      }
    })
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const manyCleansImg = '/group-people-team-svgrepo-com.svg'
  const serviceImg = '/thumbs-up-svgrepo-com.svg'
  const costImg = '/dollar-svgrepo-com.svg'

  return (
    <div className='flex flex-col'>
      <div className='my-8 text-white'>
        <p className='font-bold text-center my-8 text-lg'>
          How does cleaning therapy work?
        </p>
        <div className='grid grid-cols-2 grid-rows-1 gap-16 px-4 items-center max-sm:grid-cols-1'>
          {largeImg ? (
            <img
              src={URL.createObjectURL(largeImg)}
              className='rounded-3xl drop-shadow-sm'
              loading='lazy'
            />
          ) : (
            <div className='place-self-center'>
              <Spinner />
            </div>
          )}

          <p className='w-3/4'>
            Studies have shown that a clean and organized environment can have a
            positive impact on mental health, particularly for people who
            struggle with anxiety, depression, or other mental health
            conditions. By taking care of the cleaning tasks that can be
            overwhelming or stressful, we can help you create a peaceful and
            relaxing space in your home.
          </p>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-3 grid-rows-1 place-items-center mt-8 mb-16 max-sm:grid-cols-1 max-sm:px-4'>
        <Card
          header={['Experienced', 'Cleaners']}
          body='Our professional house cleaning team has the experience and expertise to leave your home spotless and stress-free.'
          img={manyCleansImg}
        />
        <Card
          header={['Great', 'Service']}
          body='Our top priority is providing excellent service and delivering a clean and sparkling home that exceeds your expectations.'
          img={serviceImg}
        />
        <Card
          header={['Cost', 'Effective']}
          body='We offer competitive pricing and flexible service options to make our professional house cleaning services cost effective for your budget and needs.'
          img={costImg}
        />
      </div>
    </div>
  )
}

export default SecondaryContent
