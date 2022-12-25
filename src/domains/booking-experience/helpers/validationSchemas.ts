import * as Yup from 'yup';

interface FormValues {
  [key: string]: any
}

export const validateFirstName = Yup.object<FormValues>().shape({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters long')
    .required('First name is required'),
    
});

export const validateLastName = Yup.object<FormValues>().shape({
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters long')
    .required('Last name is required'),
});

export const validateEmail = Yup.object<FormValues>().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

export const validatePhoneNumber = Yup.object<FormValues>().shape({
  phone: Yup.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must not be more than 15 digits')
    .required('Phone number is required'),
});

export const validateCity = Yup.object<FormValues>().shape({
  city: Yup.string().required('City is required'),
})

export const validateZipcode = Yup.object<FormValues>().shape({
  zipcode: Yup.string().matches(/^\d{5}(-\d{4})?$/, 'Invalid zip code')
  .required('Zip code is required'),
})