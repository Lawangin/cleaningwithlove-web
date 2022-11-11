import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Storage } from 'aws-amplify'
import ContainerWrapper from './ContainerWrapper'
import { Amplify, Logger } from 'aws-amplify'
// import awsconfig from '../../../../src/aws-exports'

const logger = new Logger('AMP-LOGS')
// logger.debug('awsconfigs', awsconfig)

const some: Number = Number(
  process.env
    .NEXT_PUBLIC_AWS_COGNITO_PASSWORD_PROTECTION_SETTINGS_PASSWORDPOLICYMINLENGTH
)

const envVars = {
  aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id:
    process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
  oauth: {},
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: [
    process.env.NEXT_PUBLIC_AWS_COGNITO_SIGNUP_ATTRIBUTES
  ],
  aws_cognito_mfa_configuration:
    process.env.NEXT_PUBLIC_AWS_COGNITO_MFA_CONFIGURATION,
  aws_cognito_mfa_types: [process.env.NEXT_PUBLIC_AWS_COGNITO_MFA_TYPES],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: some,
    passwordPolicyCharacters: []
  },
  aws_cognito_verification_mechanisms: [
    process.env.NEXT_PUBLIC_AWS_COGNITO_VERIFICATION_MECHANISMS
  ],
  aws_user_files_s3_bucket: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET,
  aws_user_files_s3_bucket_region:
    process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION
}

console.log(envVars)
logger.debug('awsconfigs', envVars)

Amplify.configure(envVars)

const NavBar = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  useEffect(() => {
    Storage.get('Asset 1.svg', { level: 'public' }) // for listing ALL files without prefix, pass '' instead
      .then((result) => setImgUrl(result))
      .catch((err) => {
        logger.debug('GET_STORAGE', err)
        return console.log(err)
      })
  }, [])

  return (
    <ContainerWrapper color={'white'}>
      <div className='grid grid-cols-2 grid-rows-1'>
        <Link href='/' className='w-20'>
          {imgUrl ? (
            <img src={imgUrl} alt='cleaning with love logo' />
          ) : (
            <p>Loading...</p>
          )}
        </Link>
        <div className='grid grid-cols-4 grid-rows-1 justify-items-center items-center'>
          <Link href='/booknow' className='font-sans text-primary'>
            Book Now
          </Link>
          <Link
            href='/'
            className='font-sans hover:text-tertiary focus:text-secondary focus:font-semibold'
          >
            Home
          </Link>
          <Link
            href='/aboutus'
            className='font-sans hover:text-secondary focus:text-secondary focus:font-semibold'
          >
            About Us
          </Link>
          <Link
            href='/faq'
            className='font-sans hover:text-tertiary focus:text-secondary focus:font-semibold'
          >
            FAQ
          </Link>
        </div>
      </div>
    </ContainerWrapper>
  )
}

export default NavBar
