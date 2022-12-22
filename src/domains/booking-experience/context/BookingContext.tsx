import { createContext, ReactNode, useContext, useState } from "react";

interface ICleaningData {
  bedrooms: number;
  bathrooms: number;
  livingrooms: number;
  kitchens: number;
  date: string;
  time: string;
  extras: {
    fridge: boolean;
    oven: boolean;
    deepClean: boolean;
    laundry: boolean;
    dishes: boolean;
    furniture: boolean;
  };
}

interface PageNameContextType {
  pageName: string;
  setPageName: (pageName: string) => void;
  cleaningData: ICleaningData;
  setCleaningData: (cleaningData: ICleaningData) => void;
}

interface IProps {
  children: ReactNode;
}

const BookingContext = createContext<PageNameContextType>({
  pageName: "",
  setPageName: () => {},
  cleaningData: {
    bedrooms: 0,
    bathrooms: 0,
    livingrooms: 0,
    kitchens: 0,
    date: "",
    time: "",
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
});

const BookingProvider = ({ children }: IProps): JSX.Element => {
  const [pageName, setPageName] = useState("cleaningInformation");
  const [cleaningData, setCleaningData] = useState({
    bedrooms: 0,
    bathrooms: 0,
    livingrooms: 0,
    kitchens: 0,
    date: "",
    time: "",
    extras: {
      fridge: false,
      oven: false,
      deepClean: false,
      laundry: false,
      dishes: false,
      furniture: false,
    },
  });

  return (
    <BookingContext.Provider
      value={{ pageName, setPageName, cleaningData, setCleaningData }}
    >
      {children}
    </BookingContext.Provider>
  );
};

const useBookingContext = () => useContext(BookingContext);

export { BookingProvider, useBookingContext };
