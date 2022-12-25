import { Formik, Field, Form, FormikHelpers } from 'formik'
import React, { useState } from 'react'
import Button from '../../global/components/Button'
import CustomInputComponent from '../../global/components/CustomInputComponent'
import ErrorBar from '../../global/components/ErrorBar'
import { useBookingContext } from '../context/BookingContext'
import {
  validateCity,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePhoneNumber,
  validateZipcode
} from '../helpers/validationSchemas'

interface Values {}

const PersonalInformationForm = (): JSX.Element => {
  const { setPageName, personalData, setPersonalData } = useBookingContext()
  const [error, setError] = useState('')

  const [firstName, setFirstName] = useState(personalData.firstName)
  const [lastName, setLastName] = useState(personalData.lastName)
  const [email, setEmail] = useState(personalData.email)
  const [street, setStreet] = useState(personalData.street)
  const [city, setCity] = useState(personalData.city)
  const [state, setState] = useState(personalData.state)
  const [zipcode, setZipcode] = useState(personalData.zipcode)
  const [phone, setPhone] = useState(personalData.phone)

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault()

    try {
      // Validate the input value
      await Promise.all([
        validateFirstName.validateSync({ firstName }, { abortEarly: false }),
        validateLastName.validateSync({ lastName }, { abortEarly: false }),
        validateEmail.validateSync({ email: email }, { abortEarly: false }),
        validateCity.validateSync({ city }, { abortEarly: false }),
        validateZipcode.validateSync({ zipcode }, { abortEarly: false }),
        validatePhoneNumber.validateSync({ phone }, { abortEarly: false })
      ])

      setError('')
    } catch (error: any) {
      setError(error.errors[0])
      return null
    }

    setPageName('reviewAndBook')
    setPersonalData({
      ...personalData,
      firstName: firstName,
      lastName: lastName,
      email: email,
      street: street,
      city: city,
      state: state,
      zipcode: +zipcode,
      phone: +phone
    })
  }

  const handleBack = (e: React.MouseEvent): void => {
    setPageName('cleaningInformation')
    e.preventDefault()
  }

  const handleFirstNameBlur = () => {
    try {
      // Validate the input value
      validateFirstName.validateSync(
        { firstName: firstName },
        { abortEarly: false }
      )
      setError('')
    } catch (error: any) {
      console.log(error)
      setError(error.errors[0])
    }
  }

  const handleLastNameBlur = () => {
    try {
      // Validate the input value
      validateLastName.validateSync(
        { lastName: lastName },
        { abortEarly: false }
      )
      setError('')
    } catch (error: any) {
      setError(error.errors[0])
    }
  }

  const handleEmailBlur = () => {
    try {
      // Validate the input value
      validateEmail.validateSync({ email: email }, { abortEarly: false })
      setError('')
    } catch (error: any) {
      setError(error.errors[0])
    }
  }

  const handlePhoneBlur = () => {
    try {
      // Validate the input value
      validatePhoneNumber.validateSync({ phone: phone }, { abortEarly: false })
      setError('')
    } catch (error: any) {
      setError(error.errors[0])
    }
  }

  const handleCityBlur = () => {
    try {
      // Validate the input value
      validateCity.validateSync({ city: city }, { abortEarly: false })
      setError('')
    } catch (error: any) {
      setError(error.errors[0])
    }
  }

  const handleZipBlur = () => {
    try {
      // Validate the input value
      validateZipcode.validateSync({ zipcode: zipcode }, { abortEarly: false })
      setError('')
    } catch (error: any) {
      setError(error.errors[0])
    }
  }

  return (
    <div>
      {error && (
        <div onClick={() => alert(error)}>
          <ErrorBar errorMessage={error} />
        </div>
      )}
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
          <div className='flex flex-col py-4'>
            <div className='flex justify-between py-2'>
              <div className='mr-1 w-full'>
                <Field
                  id='firstName'
                  name='firstName'
                  placeholder='First Name'
                  as={CustomInputComponent}
                  onBlur={handleFirstNameBlur}
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
                  onBlur={handleLastNameBlur}
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
                onBlur={handleEmailBlur}
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
                  onBlur={handleCityBlur}
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
                  value={state}
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
                  onBlur={handleZipBlur}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setZipcode(+e.target.value)
                  }
                  value={zipcode !== 0 ? zipcode : ''}
                />
              </div>
            </div>
            <div className='py-2 w-full'>
              <Field
                id='phone'
                name='phone'
                placeholder='Phone Number'
                as={CustomInputComponent}
                onBlur={handlePhoneBlur}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(+e.target.value)
                }
                value={phone !== 0 ? phone.toString() : ''}
              />
            </div>
          </div>
          <div className='flex flex-row-reverse'>
            <Button
              type='submit'
              className='px-2 min-w-[7rem]'
              onClick={(e) => handleNext(e)}
            >
              Next
            </Button>
            <Button
              type='submit'
              className='px-2'
              onClick={(e) => handleBack(e)}
              style='secondary'
            >
              Back
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default PersonalInformationForm
