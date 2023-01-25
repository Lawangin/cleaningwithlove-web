import aws from 'aws-sdk'
import { NextApiRequest, NextApiResponse } from 'next'

aws.config.credentials = new aws.Credentials({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY_ID || ''
})

const ses = new aws.SES({ region: 'us-east-1' })

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Extract the email parameters from the query string
  const { email, data, name } = req.body

  return new Promise<void>((resolve, reject) => {
    sesTest('lawangin.khan@gmail.com', email, data, name)
      .then((val) => {
        console.log('got this back', val)
        res.status(200).send('Successfully Sent Email')
        resolve()
      })
      .catch((err) => {
        res.status(400).send('/error')

        console.log('There was an error!', err)
        resolve()
      })
  })
}

function sesTest(emailTo: any, emailFrom: any, data: any, name: any) {
  const extras = data?.cleaningData.extras
  const extraLabels = []

  for (const key in extras) {
    if (extras[key] === true) {
      switch (key) {
        case 'fridge':
          extraLabels.push('+ Clean Inside Fridge\n')
          break
        case 'oven':
          extraLabels.push('+ Clean Inside Oven\n')
          break
        case 'deepClean':
          extraLabels.push('+ Deep Clean\n')
          break
        case 'laundry':
          extraLabels.push('+ Laundry\n')
          break
        case 'dishes':
          extraLabels.push('+ Dishes\n')
          break
        case 'furniture':
          extraLabels.push('+ Clean Furniture\n')
          break
      }
    }
  }

  var params = {
    Destination: {
      ToAddresses: [emailTo]
    },
    Message: {
      Body: {
        Text: {
          Data: `Hello from Cleaning with Love!\n\nHere is the potential order informaiton:\n
First Name\n${data?.personalData.firstName}\n\nLast Name\n${data?.personalData.lastName}\n\nEmail\n${data?.personalData.email}\n\nAddress\n${data?.personalData.street}, ${data?.personalData.city},${data?.personalData.state} ${data.personalData.zipcode}\n\nPhone\n${data.personalData.phone}\n\nCleaning Information\n\nRooms To Be Cleaned\n${data?.cleaningData.bedrooms} Bedrooms\n${data?.cleaningData.bathrooms} Bathrooms\n\nDate and Time\n${data?.cleaningData.date} ${data?.cleaningData.time.hour}:${data?.cleaningData.time.minute} ${data?.cleaningData.time.amOrPm}\n\nExtras\n${extraLabels}\n\nRough Estimate\n${data?.cleaningData.price}`
        }
      },

      Subject: { Data: 'You Have A New Request!' }
    },
    Source: emailFrom
  }

  return ses.sendEmail(params).promise()
}
