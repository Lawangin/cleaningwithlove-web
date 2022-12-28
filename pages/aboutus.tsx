import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { getPresignedUrlWithKey } from '../src/services/s3'
import { COUPLE_IMAGE } from '../src/domains/landing-page/constants/imageKeys'
import PageLayout from '../src/domains/global/components/layout/PageLayout'
import Spinner from '../src/domains/global/components/Spinner'
import ContainerWrapper from '../src/domains/landing-page/components/ContainerWrapper'

const AboutUs: NextPage = () => {
  const [imgUrl, setImgUrl] = useState<string>()

  const fetchImages = async () => {
    const { presignedUrls } = await getPresignedUrlWithKey(
      'publicAssets',
      COUPLE_IMAGE
    )

    setImgUrl(presignedUrls)
  }

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <>
      <PageLayout title='CWL - About US'>
        <ContainerWrapper>
          <div className='grid grid-cols-2 py-32 place-items-center max-sm:grid-cols-1 max-sm:py-16'>
            <div className='max-sm:px-4'>
              <p className='font-bold text-3xl py-8'>About Us</p>
              <p className='text-lg'>
                Welcome to our Cleaning With Love cleaning service in
                Williamsburg, VA! We understand that maintaining a clean and
                organized home can be a source of stress and frustration for
                many people. That's why we are dedicated to helping our
                customers improve their mental health and well-being through the
                power of a clean environment. Our team of professional cleaners
                is highly trained and experienced in all aspects of house
                cleaning. From dusting and vacuuming to scrubbing surfaces and
                cleaning bathrooms, we leave no corner untouched. We use only
                the highest quality products and equipment to ensure a thorough
                and safe clean for your home. In addition to our standard
                cleaning services, we also offer specialized services such as
                laundry and ironing, as well as deep cleaning for those
                extra-tough jobs. And if you have any special requests, we are
                happy to customize our services to meet your needs. We are proud
                to serve the Williamsburg community and are committed to
                providing the best possible service to our customers. When you
                choose us for your house cleaning needs, you can trust that we
                will leave your home sparkling clean and your mind at ease.
                Thank you for considering us for your house cleaning needs. We
                look forward to serving you and helping you create a clean and
                relaxing home environment.
              </p>
            </div>
            <div className='max-sm:px-4'>
              {imgUrl ? (
                <img
                  src={imgUrl}
                  alt='cartoon of couple standing infront of gaint bubble with cleaning gear'
                />
              ) : (
                <div className='place-self-center'>
                  <Spinner />
                </div>
              )}
            </div>
          </div>
        </ContainerWrapper>
      </PageLayout>
    </>
  )
}

export default AboutUs
