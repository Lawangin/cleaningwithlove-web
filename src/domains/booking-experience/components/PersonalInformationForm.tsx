import { Formik, Field, Form, FormikHelpers } from 'formik'

interface Values {
  firstName: string
  lastName: string
  email: string
}

const PersonalInformationForm = (): JSX.Element => {
  return (
    <div className='bg-black'>
      <h3>Book Now and get same day response!</h3>
      <h3>1. Personal Information</h3>
      <Formik
        initialValues={{
          firstName: '',
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
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <Field id='firstName' name='firstName' placeholder='First Name' />

              <Field id='lastName' name='lastName' placeholder='Last Name' />
            </div>

            <Field
              id='email'
              name='email'
              placeholder='Email, john@acme.com'
              type='email'
            />

            <Field
              id='street'
              name='street'
              placeholder='Street Address, 1234 Main St Apt A'
            />
            <div className='flex'>
              <Field id='city' name='city' placeholder='City' />
              <Field id='state' as='select' name='state'>
                <option value='red'>Red</option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
              </Field>
              <Field id='zipcode' name='zipcode' placeholder='Zip Code' />
            </div>

            <button type='submit'>Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default PersonalInformationForm
