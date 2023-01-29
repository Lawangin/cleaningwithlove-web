import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY || '')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, data, name } = req.body
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

  const template = `<h3 className='font-bold'>Personal Information</h3>
    <div className='grid grid-cols-2 max-sm:grid-cols-1'>
      <div>
        <p className='text-gray-400'>Name</p>
        <p className='max-sm:pb-2'>${name}</p>
      </div>
    </div>

    <div className='grid grid-cols-2 max-sm:grid-cols-1'>
      <div>
        <p className='text-gray-400'>Email</p>
        <p className='max-sm:pb-2'>${email}</p>
      </div>
      <div>
        <p className='text-gray-400 max-sm:pt-2'>Data</p>
        ${JSON.stringify(data, null, 2)}
      </div>
    </div>`

  const msg = {
    to: 'lawangin.khan@gmail.com',
    from: 'lawangin.khan@gmail.com',
    subject: 'Have new order inquiry',
    text: 'We have a potential new order from Cleaning With Love.',
    html: template
  }
  try {
    await sgMail.send(msg)
    res.status(200).json({ message: 'Email sent' })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
