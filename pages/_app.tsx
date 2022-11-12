import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/domains/landing-page/components/NavBar'
import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'

// const some: Number = Number(
//   process.env
//     .NEXT_PUBLIC_AWS_COGNITO_PASSWORD_PROTECTION_SETTINGS_PASSWORDPOLICYMINLENGTH
// )

// const envVars = {
//   aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
//   aws_cognito_identity_pool_id:
//     process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
//   aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
//   aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
//   aws_user_pools_web_client_id:
//     process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
//   oauth: {},
//   aws_cognito_username_attributes: [],
//   aws_cognito_social_providers: [],
//   aws_cognito_signup_attributes: [
//     process.env.NEXT_PUBLIC_AWS_COGNITO_SIGNUP_ATTRIBUTES
//   ],
//   aws_cognito_mfa_configuration:
//     process.env.NEXT_PUBLIC_AWS_COGNITO_MFA_CONFIGURATION,
//   aws_cognito_mfa_types: [process.env.NEXT_PUBLIC_AWS_COGNITO_MFA_TYPES],
//   aws_cognito_password_protection_settings: {
//     passwordPolicyMinLength: some,
//     passwordPolicyCharacters: []
//   },
//   aws_cognito_verification_mechanisms: [
//     process.env.NEXT_PUBLIC_AWS_COGNITO_VERIFICATION_MECHANISMS
//   ],
//   aws_user_files_s3_bucket: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET,
//   aws_user_files_s3_bucket_region:
//     process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION
// }

// const envS3 = {
//   Auth: {
//     identityPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID, // (required) - Amazon Cognito Identity Pool ID
//     region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION, // (required) - Amazon Cognito Region
//     userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID, // (optional) - Amazon Cognito User Pool ID
//     userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID, // (optional) - Amazon Cognito Web Client ID (App client secret needs to be disabled)
//     mandatorySignIn: false
//   },
//   Storage: {
//     AWSS3: {
//       bucket: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET, // (required) -  Amazon S3 bucket name
//       region: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION,
//       identityPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID // (optional) -  Amazon service region
//     }
//   }
// }

// console.log(envVars)

Amplify.configure(awsExports)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
