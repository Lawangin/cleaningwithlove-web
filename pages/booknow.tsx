import type { NextPage } from 'next'
import Head from 'next/head'
import { Amplify } from 'aws-amplify'
import awsconfig from '../src/aws-exports'

Amplify.configure(awsconfig)

const BookNow: NextPage = () => {
  return (
    <>
      <Head>
        <title>CWL - Book Now</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Book Now Page</h1>
    </>
  )
}

export default BookNow
