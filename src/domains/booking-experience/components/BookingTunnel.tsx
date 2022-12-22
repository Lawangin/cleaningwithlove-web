import { useBookingContext } from "../context/BookingContext";
import CleaningInformationForm from "./CleaningInformationForm/CleaningInformationForm";
import PersonalInformationForm from "./PersonalInformationForm";
import ReviewInformation from "./ReviewInformation";

const BookingTunnel = (): JSX.Element => {
  const { pageName } = useBookingContext();
  return (
    <div>
      {pageName == "cleaningInformation" && <CleaningInformationForm />}
      {pageName == "personalInformation" && <PersonalInformationForm />}
      {pageName == "reviewAndBook" && <ReviewInformation />}
    </div>
  );
};

export default BookingTunnel;
