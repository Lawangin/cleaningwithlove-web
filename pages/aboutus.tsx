import type { NextPage } from 'next'
import Head from 'next/head'
import { Amplify } from 'aws-amplify'
import awsconfig from '../src/aws-exports'

Amplify.configure(awsconfig)

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>CWL - About Us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>About us Page</h1>
    </>
  )
}

export default AboutUs
