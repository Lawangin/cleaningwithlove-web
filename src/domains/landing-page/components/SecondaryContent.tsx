import { useEffect, useState } from 'react'
import { getPresignedUrlWithKey } from '../../../services/s3'
import { BKG_IMAGE, GROUP_CLEANING } from '../constants/imageKeys'

const SecondaryContent = (): JSX.Element => {
  const [largeImg, setLargeImg] = useState<string | undefined>()
  const [manyCleansImg, setManyCleansImg] = useState(
    '/group-people-team-svgrepo-com.svg'
  )
  const [serviceImg, setServiceImg] = useState('/thumbs-up-svgrepo-com.svg')
  const [costImg, setCostImg] = useState('/dollar-svgrepo-com.svg')

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
  return (
    <div className='grid grid-cols-1 grid-rows-2'>
      <div className=''>
        <p className='font-bold text-center py-8'>
          How does cleaning therapy work?
        </p>
        <div className='grid grid-cols-2 grid-rows-1 gap-8 px-4 items-center'>
          <img src={largeImg} />
          <ul className='list-disc'>
            <li>
              We are well experienced in the art of cleaning and consistently
              improving our process.
            </li>
            <li>
              We are well experienced in the art of cleaning and consistently
              improving our process.
            </li>
            <li>
              We are well experienced in the art of cleaning and consistently
              improving our process.
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-3 grid-rows-1 place-items-center'>
        <div className='px-6'>
          <div className='rounded-full bg-white w-32 h-32 flex justify-center border-4'>
            <img src={manyCleansImg} width='80%' />
          </div>
          <p className='text-center'>
            We are well experienced in the art of cleaning and consistently
            improving our process.
          </p>
        </div>
        <div className='px-6'>
          <div className='rounded-full bg-white w-32 h-32 flex justify-center border-4'>
            <img src={serviceImg} width='70%' />
          </div>
          <p className='text-center'>
            We are well experienced in the art of cleaning and consistently
            improving our process.
          </p>
        </div>
        <div className='px-6'>
          <div className='rounded-full bg-white w-32 h-32 flex justify-center border-4'>
            <img src={costImg} width='80%' />
          </div>
          <p className='text-center'>
            We are well experienced in the art of cleaning and consistently
            improving our process.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SecondaryContent
