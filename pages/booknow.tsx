import type { NextPage } from 'next'
import Head from 'next/head'
import BookingTunnel from '../src/domains/booking-experience/components/BookingTunnel'
import BreadCrumb from '../src/domains/booking-experience/components/BreadCrumb/BreadCrumb'
import { BookingProvider } from '../src/domains/booking-experience/context/BookingContext'
import PageLayout from '../src/domains/global/components/layout/PageLayout'

const BookNow: NextPage = () => {
  return (
    <>
      <PageLayout title='CWL - Book Now'>
        <BookingProvider>
          <div className='pt-24 flex flex-col items-center'>
            <div className='p-4'>
              <BreadCrumb />
            </div>
            <BookingTunnel />
          </div>
        </BookingProvider>
      </PageLayout>
    </>
  )
}

export default BookNow
