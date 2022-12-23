import { Formik, Field, Form, FormikHelpers } from 'formik'
import { useState } from 'react'
import Button from '../../global/components/Button'
import CustomInputComponent from '../../global/components/CustomInputComponent'
import { useBookingContext } from '../context/BookingContext'

interface Values {}

const PersonalInformationForm = (): JSX.Element => {
  const { setPageName, personalData, setPersonalData } = useBookingContext()

  const [firstName, setFirstName] = useState(personalData.firstName)
  const [lastName, setLastName] = useState(personalData.lastName)
  const [email, setEmail] = useState(personalData.email)
  const [street, setStreet] = useState(personalData.street)
  const [city, setCity] = useState(personalData.city)
  const [state, setState] = useState(personalData.state)
  const [zipcode, setZipcode] = useState(personalData.zipcode)

  const handleClick = (e: any): void => {
    setPageName('reviewAndBook')
    setPersonalData({
      ...personalData,
      firstName: firstName,
      lastName: lastName,
      email: email,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode
    })
    e.preventDefault()
  }

  return (
    <div>
      <h3 className='py-4'>Book Now and get same day response!</h3>
      <h3>2. Personal Information</h3>
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
          <div className='flex flex-col max-w-lg py-4'>
            <div className='flex justify-between py-2'>
              <div className='mr-1 w-full'>
                <Field
                  id='firstName'
                  name='firstName'
                  placeholder='First Name'
                  as={CustomInputComponent}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                  value={firstName}
                />
              </div>

              <div className='ml-1 w-full'>
                <Field
                  id='lastName'
                  name='lastName'
                  placeholder='Last Name'
                  as={CustomInputComponent}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                  value={lastName}
                />
              </div>
            </div>

            <div className='py-2 w-full'>
              <Field
                id='email'
                name='email'
                placeholder='Email, john@acme.com'
                type='email'
                as={CustomInputComponent}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                value={email}
              />
            </div>

            <div className='py-2 w-full'>
              <Field
                id='street'
                name='street'
                placeholder='Street Address, 1234 Main St Apt A'
                as={CustomInputComponent}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStreet(e.target.value)
                }
                value={street}
              />
            </div>

            <div className='flex py-2'>
              <div className=''>
                <Field
                  id='city'
                  name='city'
                  placeholder='City'
                  as={CustomInputComponent}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCity(e.target.value)
                  }
                  value={city}
                />
              </div>
              <div className='px-2'>
                <Field
                  id='state'
                  as='select'
                  name='state'
                  className='py-2 rounded-md'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                  }
                  defaultValue={state}
                >
                  <option value='VA'>VA</option>
                </Field>
              </div>
              <div className=''>
                <Field
                  id='zipcode'
                  name='zipcode'
                  placeholder='Zip Code'
                  as={CustomInputComponent}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setZipcode(+e.target.value.toString())
                  }
                  value={zipcode !== 0 ? zipcode : ''}
                />
              </div>
            </div>
          </div>
          <Button
            type='submit'
            className='flex flex-row-reverse'
            onClick={(e) => handleClick(e)}
          >
            Next
          </Button>
        </Form>
      </Formik>
    </div>
  )
}

export default PersonalInformationForm
