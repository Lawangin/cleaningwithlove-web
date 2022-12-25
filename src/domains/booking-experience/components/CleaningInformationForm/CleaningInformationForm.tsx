import { Field, Form, Formik, FormikHelpers } from 'formik'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../../../global/components/Button'
import Checkbox from '../../../global/components/Checkbox'
import CustomTimeComponent from '../../../global/components/CustomTimeComponent'
import { useBookingContext } from '../../context/BookingContext'
import FormCounter from './FormCounter'
import PriceQuoteLabel from './PriceQuoteLabel'

interface Values {}

const CleaningInformationForm = (): JSX.Element => {
  const { setPageName, setCleaningData, cleaningData } = useBookingContext()

  const [isPrice, setIsPrice] = useState(cleaningData.price)
  const [startDate, setStartDate] = useState(cleaningData.date)
  const [isFridgeChecked, setIsFridgeChecked] = useState<boolean>(
    cleaningData.extras.fridge
  )
  const [isOvenChecked, setIsOvenChecked] = useState<boolean>(
    cleaningData.extras.oven
  )
  const [isDeepCleanChecked, setIsDeepCleanChecked] = useState<boolean>(
    cleaningData.extras.deepClean
  )
  const [isLaundryChecked, setIsLaundryChecked] = useState<boolean>(
    cleaningData.extras.laundry
  )
  const [isDishesChecked, setIsDishedChecked] = useState<boolean>(
    cleaningData.extras.dishes
  )
  const [isAssembleChecked, setIsAssembledChecked] = useState<boolean>(
    cleaningData.extras.furniture
  )

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    setPageName('personalInformation')
    e.preventDefault()
  }

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsFridgeChecked(e.target.checked)
  }

  const handleOvenChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsOvenChecked(e.target.checked)
  }

  const handleDeepCleanChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsDeepCleanChecked(e.target.checked)
  }

  const handleLaundryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsLaundryChecked(e.target.checked)
  }

  const handleDishesChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsDishedChecked(e.target.checked)
  }

  const handleAssembleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsAssembledChecked(e.target.checked)
  }

  const calculatePrice = () => {
    let price = 0
    price =
      cleaningData.bedrooms * 40 +
      cleaningData.bathrooms * 50 +
      cleaningData.livingrooms * 40 +
      cleaningData.kitchens * 50

    return (price =
      price +
      (isFridgeChecked ? 40 : 0) +
      (isOvenChecked ? 40 : 0) +
      (isDeepCleanChecked ? 40 : 0) +
      (isLaundryChecked ? 40 : 0) +
      (isDishesChecked ? 30 : 0) +
      (isAssembleChecked ? 60 : 0))
  }

  useEffect(() => {
    setCleaningData({
      ...cleaningData,
      price: isPrice,
      date: startDate,
      extras: {
        fridge: isFridgeChecked,
        oven: isOvenChecked,
        deepClean: isDeepCleanChecked,
        laundry: isLaundryChecked,
        dishes: isDishesChecked,
        furniture: isAssembleChecked
      }
    })

    setIsPrice(calculatePrice())
  }, [
    startDate,
    isFridgeChecked,
    isOvenChecked,
    isDeepCleanChecked,
    isLaundryChecked,
    isDishesChecked,
    isAssembleChecked,
    isPrice,
    cleaningData.bedrooms,
    cleaningData.bathrooms,
    cleaningData.livingrooms,
    cleaningData.kitchens
  ])

  return (
    <div>
      <h3 className='py-4'>Book Now and get same day response!</h3>
      <h3>1. Cleaning Information</h3>
      <Formik
        initialValues={{}}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        <Form>
          {/* <label htmlFor='firstName'>First Name</label> */}
          <div className='flex flex-col py-4'>
            <div className='grid gap-4 grid-cols-2 grid-rows-2'>
              <FormCounter label={'Bedrooms'} />

              <FormCounter label={'Bathrooms'} />

              <FormCounter label={'Livingrooms'} />

              <FormCounter label={'Kitchens'} />
            </div>

            <div className='grid grid-cols-2 py-2'>
              <div className='mr-1'>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => (date ? setStartDate(date) : null)}
                />
              </div>

              <div className='ml-1 w-full'>
                <CustomTimeComponent />
              </div>
            </div>
            <div className='grid grid-cols-2 py-4 justify-items-start'>
              <Checkbox
                label='Clean Inside Fridge'
                price='40'
                checked={cleaningData.extras.fridge}
                onChange={handleCheckChange}
              />
              <Checkbox
                label='Clean Inside Oven'
                price='40'
                checked={cleaningData.extras.oven}
                onChange={handleOvenChange}
              />
              <Checkbox
                label='Deep Clean'
                price='40'
                checked={cleaningData.extras.deepClean}
                onChange={handleDeepCleanChange}
              />
              <Checkbox
                label='Laundry'
                price='40'
                checked={cleaningData.extras.laundry}
                onChange={handleLaundryChange}
              />
              <Checkbox
                label='Dishes'
                price='30'
                checked={cleaningData.extras.dishes}
                onChange={handleDishesChange}
              />
              <Checkbox
                label='Assemble Furniture (1 hr)'
                price='60'
                checked={cleaningData.extras.furniture}
                onChange={handleAssembleChange}
              />
            </div>
          </div>
          <PriceQuoteLabel price={cleaningData.price} />
          <Button
            type='submit'
            className='flex flex-row-reverse py-4'
            onClick={(e) => handleClick(e)}
          >
            Next
          </Button>
        </Form>
      </Formik>
    </div>
  )
}

export default CleaningInformationForm
