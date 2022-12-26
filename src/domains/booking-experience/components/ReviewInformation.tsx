import React from 'react'
import Button from '../../global/components/Button'
import { useBookingContext } from '../context/BookingContext'

const ReviewInformation = (): JSX.Element => {
  const { cleaningData, personalData, setPageName } = useBookingContext()

  const handleSubmit = (e: React.MouseEvent) => {
    return
  }

  const handleBack = (e: React.MouseEvent): void => {
    setPageName('personalInformation')

    e.preventDefault()
  }

  const rooms = ['bedrooms', 'bathrooms', 'livingrooms', 'kitchens']
  const roomsLabels = rooms.map((room) => {
    if (cleaningData[room] > 0) {
      const word = room.charAt(0).toUpperCase() + room.slice(1)
      return <p>{`${cleaningData[room]} ${word}`}</p>
    }
  })

  const labelsByProperty: { [key: string]: string } = {
    fridge: '+ Clean Inside Fridge',
    oven: '+ Clean Inside Oven',
    deepClean: '+ Deep Clean',
    laundry: '+ Laundry',
    dishes: '+ Dishes',
    furniture: '+ Assemble Furniture (1hr)'
  }

  const extraLabels: string[] = Object.entries(cleaningData.extras)
    .filter(([_, value]) => value)
    .map(([property]) => labelsByProperty[property])

  return (
    <div className='w-[32rem] max-sm:w-[80vw]'>
      <h3 className='py-4'>Book Now and get same day response!</h3>
      <h3>3. Review and Book</h3>
      <section className='py-4 grid grid-cols-1 gap-4'>
        <h3 className='font-bold'>Personal Information</h3>
        <div className='grid grid-cols-2 max-sm:grid-cols-1'>
          <div>
            <p className='text-gray-400'>First Name</p>
            <p className='max-sm:pb-2'>{personalData.firstName}</p>
          </div>
          <div>
            <p className='text-gray-400 max-sm:pt-2'>Last Name</p>
            <p>{personalData.lastName}</p>
          </div>
        </div>

        <div className='grid grid-cols-2 max-sm:grid-cols-1'>
          <div>
            <p className='text-gray-400'>Email</p>
            <p className='max-sm:pb-2'>{personalData.email}</p>
          </div>
          <div>
            <p className='text-gray-400 max-sm:pt-2'>Phone Number</p>
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
        <div className='flex flex-row-reverse py-4 max-sm:flex-col'>
          <Button
            type='submit'
            className='px-2 min-w-[7rem] max-sm:px-0 max-sm:py-2'
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
          <Button
            type='submit'
            className='px-2 max-sm:px-0 max-sm:py-2'
            onClick={(e) => handleBack(e)}
            style='secondary'
          >
            Back
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ReviewInformation
