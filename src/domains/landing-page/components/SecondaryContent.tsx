import { useEffect, useState } from 'react'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { BKG_IMAGE, GROUP_CLEANING } from '../constants/imageKeys'
import AbilitiesHeader from './AbilitiesHeader'
import Card from './Card'

const SecondaryContent = (): JSX.Element => {
  const [largeImg, setLargeImg] = useState<string | undefined>()

  const fetchImages = async () => {
    const { presignedUrls: groupImgUrl } = await getPresignedUrlWithKey(
      'publicAssets',
      GROUP_CLEANING
    )

    setLargeImg(groupImgUrl)
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
          <img src={largeImg} className='rounded-3xl drop-shadow-sm' />
          <ul className='list-disc mx-16 max-sm:mx-2'>
            <li className='py-2'>
              We are well experienced in the art of cleaning and consistently
              improving our process.
            </li>
            <li className='py-2'>
              We are well experienced in the art of cleaning and consistently
              improving our process.
            </li>
            <li className='py-2'>
              We are well experienced in the art of cleaning and consistently
              improving our process.
            </li>
          </ul>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-3 grid-rows-1 place-items-center mt-8 mb-16 max-sm:grid-cols-1'>
        <Card
          header={['Experienced', 'Cleaners']}
          body='We are well experienced in the art of cleaning and consistently
            improving our process.'
          img={manyCleansImg}
        />
        <Card
          header={['Great', 'Service']}
          body='We are well experienced in the art of cleaning and consistently
            improving our process.'
          img={serviceImg}
        />
        <Card
          header={['Cost', 'Effective']}
          body='We are well experienced in the art of cleaning and consistently
            improving our process.'
          img={costImg}
        />
      </div>
    </div>
  )
}

export default SecondaryContent
