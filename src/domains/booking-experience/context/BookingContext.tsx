import { createContext, ReactNode, useContext, useState } from 'react'

interface ITime {
  hour: string
  minute: string
  amOrPm: string
}

interface IExtras {
  [key: string]: boolean
  fridge: boolean
  oven: boolean
  deepClean: boolean
  laundry: boolean
  dishes: boolean
  furniture: boolean
}

interface ICleaningData {
  [key: string]: number | string | IExtras | ITime | Date
  price: number
  bedrooms: number
  bathrooms: number
  livingrooms: number
  kitchens: number
  date: Date
  time: ITime
  extras: IExtras
}

interface IPersonalData {
  firstName: string
  lastName: string
  email: string
  street: string
  city: string
  state: string
  zipcode: number
  phone: number
}

interface PageNameContextType {
  pageName: string
  setPageName: (pageName: string) => void
  cleaningData: ICleaningData
  setCleaningData: (cleaningData: ICleaningData) => void
  personalData: IPersonalData
  setPersonalData: (personalData: IPersonalData) => void
}

interface IProps {
  children: ReactNode
}

const BookingContext = createContext<PageNameContextType>({
  pageName: '',
  setPageName: () => {},
  cleaningData: {
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    livingrooms: 0,
    kitchens: 0,
    date: new Date(),
    time: {
      hour: '00',
      minute: '00',
      amOrPm: 'AM'
    },
    extras: {
      fridge: false,
      oven: false,
      deepClean: false,
      laundry: false,
      dishes: false,
      furniture: false
    }
  },
  setCleaningData: () => {},
  personalData: {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: 'VA',
    zipcode: 0,
    phone: 0
  },
  setPersonalData: () => {}
})

const BookingProvider = ({ children }: IProps): JSX.Element => {
  const [pageName, setPageName] = useState('cleaningInformation')
  const [cleaningData, setCleaningData] = useState({
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    livingrooms: 0,
    kitchens: 0,
    date: new Date(),
    time: {
      hour: '00',
      minute: '00',
      amOrPm: 'AM'
    },
    extras: {
      fridge: false,
      oven: false,
      deepClean: false,
      laundry: false,
      dishes: false,
      furniture: false
    }
  })
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: 'VA',
    zipcode: 0,
    phone: 0
  })

  return (
    <BookingContext.Provider
      value={{
        pageName,
        setPageName,
        cleaningData,
        setCleaningData,
        personalData,
        setPersonalData
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

const useBookingContext = () => useContext(BookingContext)

export { BookingProvider, useBookingContext }
