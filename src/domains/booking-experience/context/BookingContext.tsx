import { createContext, ReactNode, useContext, useState } from "react";

interface PageNameContextType {
  pageName: string;
  setPageName: (pageName: string) => void;
}

interface IProps {
  children: ReactNode;
}

const BookingContext = createContext<PageNameContextType>({
  pageName: "",
  setPageName: () => {},
});

const BookingProvider = ({ children }: IProps): JSX.Element => {
  const [pageName, setPageName] = useState("cleaningInformation");

  return (
    <BookingContext.Provider value={{ pageName, setPageName }}>
      {children}
    </BookingContext.Provider>
  );
};

const useBookingContext = () => useContext(BookingContext);

export { BookingProvider, useBookingContext };
