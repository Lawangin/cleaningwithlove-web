import { Formik, Field, Form, FormikHelpers } from 'formik'
import Button from '../../../global/components/Button'
import Checkbox from '../../../global/components/Checkbox'
import CustomInputComponent from '../../../global/components/CustomInputComponent'
import { useBookingContext } from '../../context/BookingContext'
import FormCounter from './FormCounter'
import PriceQuoteLabel from './PriceQuoteLabel'

interface Values {
  bedroom: string
  lastName: string
  email: string
}

const CleaningInformationForm = (): JSX.Element => {
  const { setPageName, setCleaningData, cleaningData } = useBookingContext()

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    setPageName('personalInformation')
    e.preventDefault()
  }

  return (
    <div>
      <h3 className='py-4'>Book Now and get same day response!</h3>
      <h3>1. Cleaning Information</h3>
      <Formik
        initialValues={{
          bedroom: '',
          lastName: '',
          email: ''
        }}
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
          <div className='flex flex-col max-w-lg py-4'>
            <div className='grid gap-4 grid-cols-2 grid-rows-2'>
              <FormCounter label={'Bedrooms'} />

              <FormCounter label={'Bathrooms'} />

              <FormCounter label={'Livingrooms'} />

              <FormCounter label={'Kitchens'} />
            </div>

            <div className='flex justify-between py-2'>
              <div className='mr-1 w-full'>
                <Field
                  id='date'
                  name='date'
                  placeholder='02/13/2022'
                  as={CustomInputComponent}
                />
              </div>

              <div className='ml-1 w-full'>
                <Field
                  id='time'
                  name='time'
                  placeholder='2:00 PM'
                  as={CustomInputComponent}
                />
              </div>
            </div>
            <div className='grid gap-4 grid-cols-2 py-4 justify-items-start'>
              <Checkbox label='Clean Inside Fridge' price='40' />
              <Checkbox label='Clean Inside Oven' price='40' />
              <Checkbox label='Deep Clean' price='40' />
              <Checkbox label='Laundry' price='40' />
              <Checkbox label='Dishes' price='30' />
              <Checkbox label='Assemble Furniture (1 hr)' price='60' />
            </div>
          </div>
          <PriceQuoteLabel />
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
