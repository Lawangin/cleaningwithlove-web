import { createContext, ReactNode, useContext, useState } from "react";

interface ITime {
  hour: number;
  minute: number;
  amOrPm: string;
}

interface IExtras {
  fridge: boolean;
  oven: boolean;
  deepClean: boolean;
  laundry: boolean;
  dishes: boolean;
  furniture: boolean;
}

interface ICleaningData {
  [key: string]: number | string | IExtras | ITime | Date;
  price: number;
  bedrooms: number;
  bathrooms: number;
  livingrooms: number;
  kitchens: number;
  date: Date;
  time: ITime;
  extras: IExtras;
}

interface IPersonalData {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: number;
}

interface PageNameContextType {
  pageName: string;
  setPageName: (pageName: string) => void;
  cleaningData: ICleaningData;
  setCleaningData: (cleaningData: ICleaningData) => void;
  personalData: IPersonalData;
  setPersonalData: (personalData: IPersonalData) => void;
  calculatePrice: () => void;
}

interface IProps {
  children: ReactNode;
}

const BookingContext = createContext<PageNameContextType>({
  pageName: "",
  setPageName: () => {},
  cleaningData: {
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    livingrooms: 0,
    kitchens: 0,
    date: new Date(),
    time: {
      hour: 0,
      minute: 0,
      amOrPm: "AM",
    },
    extras: {
      fridge: false,
      oven: false,
      deepClean: false,
      laundry: false,
      dishes: false,
      furniture: false,
    },
  },
  setCleaningData: () => {},
  personalData: {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: 0,
  },
  setPersonalData: () => {},
  calculatePrice: () => {},
});

const BookingProvider = ({ children }: IProps): JSX.Element => {
  const [pageName, setPageName] = useState("cleaningInformation");
  const [cleaningData, setCleaningData] = useState({
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    livingrooms: 0,
    kitchens: 0,
    date: new Date(),
    time: {
      hour: 0,
      minute: 0,
      amOrPm: "AM",
    },
    extras: {
      fridge: false,
      oven: false,
      deepClean: false,
      laundry: false,
      dishes: false,
      furniture: false,
    },
  });
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: 0,
  });

  const calculatePrice = () => {
    let price = 0;
    price =
      cleaningData.bedrooms * 25 +
      cleaningData.bathrooms * 30 +
      cleaningData.livingrooms * 30 +
      cleaningData.kitchens * 30;

    const { extras } = cleaningData;
    const { fridge, oven, deepClean, laundry, dishes, furniture } = extras;

    price =
      price +
      (fridge ? 40 : 0) +
      (oven ? 40 : 0) +
      (deepClean ? 40 : 0) +
      (laundry ? 40 : 0) +
      (dishes ? 30 : 0) +
      (furniture ? 60 : 0);

    setCleaningData({
      ...cleaningData,
      price: price,
    });
  };

  return (
    <BookingContext.Provider
      value={{
        pageName,
        setPageName,
        cleaningData,
        setCleaningData,
        personalData,
        setPersonalData,
        calculatePrice,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

const useBookingContext = () => useContext(BookingContext);

export { BookingProvider, useBookingContext };
