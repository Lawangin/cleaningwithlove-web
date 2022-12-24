import React from 'react'
import Button from '../../global/components/Button'
import { useBookingContext } from '../context/BookingContext'

const ReviewInformation = (): JSX.Element => {
  const { cleaningData, personalData } = useBookingContext()

  const handleClick = (e: React.MouseEvent) => {
    return
  }

  const rooms = ['bedrooms', 'bathrooms', 'livingrooms', 'kitchens']
  const roomsLabels = rooms.map((room) => {
    if (cleaningData[room] > 0) {
      const word = room.charAt(0).toUpperCase() + room.slice(1)
      return <p>{`${cleaningData[room]} ${word}`}</p>
    }
  })

  let extraLabels = []
  for (const property in cleaningData.extras) {
    const extras = cleaningData.extras
    if (extras[property]) {
      property === 'fridge' ? extraLabels.push('+ Clean Inside Fridge') : null
      property === 'oven' ? extraLabels.push('+ Clean Inside Oven') : null
      property === 'deepClean' ? extraLabels.push('+ Deep Clean') : null
      property === 'laundry' ? extraLabels.push('+ Laundry') : null
      property === 'dishes' ? extraLabels.push('+ Dishes') : null
      property === 'furniture'
        ? extraLabels.push('+ Assemble Furniture (1hr)')
        : null
    }
  }

  return (
    <div className='w-full'>
      <h3 className='py-4'>Book Now and get same day response!</h3>
      <h3>3. Review and Book</h3>
      <section className='py-4 grid grid-cols-1 gap-4'>
        <h3 className='font-bold'>Personal Information</h3>
        <div className='grid grid-cols-2'>
          <div>
            <p className='text-gray-400'>First Name</p>
            <p>{personalData.firstName}</p>
          </div>
          <div>
            <p className='text-gray-400'>Last Name</p>
            <p>{personalData.lastName}</p>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div>
            <p className='text-gray-400'>Email</p>
            <p>{personalData.email}</p>
          </div>
          <div>
            <p className='text-gray-400'>Phone Number</p>
            <p>{personalData.phone}</p>
          </div>
        </div>

        <div>
          <p className='text-gray-400'>Address</p>
          <p>{`${personalData.street}, ${personalData.city}, ${personalData.state} ${personalData.zipcode}`}</p>
        </div>

        <h3 className='font-bold'>Cleaning Information</h3>
        <div>
          <p className='text-gray-400'>Rooms To Be Cleaned</p>
          {roomsLabels}
        </div>
        <div>
          <p className='text-gray-400'>Date and Time</p>
          <p>
            {cleaningData.date.getMonth() +
              '/' +
              cleaningData.date.getDate() +
              '/' +
              cleaningData.date.getFullYear()}
            {' ' + cleaningData.time.hour}:{cleaningData.time.minute}{' '}
            {cleaningData.time.amOrPm}
          </p>
        </div>
        <div>
          <p className='text-gray-400'>Extras</p>
          {extraLabels.map((extra) => (
            <p>{extra}</p>
          ))}
        </div>
        <div>
          <p className='text-gray-400'>Rough Estimate</p>
          <p>${cleaningData.price}.00</p>
        </div>
        <Button
          type='submit'
          className='flex flex-row-reverse'
          onClick={(e) => handleClick(e)}
        >
          Submit
        </Button>
      </section>
    </div>
  )
}

export default ReviewInformation
