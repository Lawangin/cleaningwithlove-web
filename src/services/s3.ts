import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3 = new S3Client({ region: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION, credentials: {
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY_ID || ''
}})
const BUCKET = process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET

const getImageKeys = async (folder: string) => {
  const command =  new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: folder,
  })

  const { Contents = [] } = await s3.send(command)

  return Contents.map((image) => image.Key)
}

export const getPresignedUrls = async (folder: string) => {
  try {
    const imageKeys = await getImageKeys(folder)
    const presignedUrls = await Promise.all(
      imageKeys.map((key) => {
        const command = new GetObjectCommand({ Bucket: BUCKET, Key: key})
        return getSignedUrl(s3, command)
      })
    )

    return { presignedUrls }
  } catch (error) {
    console.log(error)
    return {error}
  }
}

export const getPresignedUrlWithKey = async (folder: string, key: string) => {
  try {
    const combinedKey = folder + '/' + key
    const command = new GetObjectCommand({ Bucket: BUCKET, Key: combinedKey})

    const presignedUrls = await getSignedUrl(s3, command)

    return { presignedUrls }
  } catch (error) {
    console.log(error)
    return {error}
  }
}