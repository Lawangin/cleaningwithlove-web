import { Formik, Field, Form, FormikHelpers } from "formik";
import Button from "../../global/components/Button";
import CustomInputComponent from "../../global/components/CustomInputComponent";
import { useBookingContext } from "../context/BookingContext";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const PersonalInformationForm = (): JSX.Element => {
  const { setPageName } = useBookingContext();

  const handleClick = (e: any): void => {
    setPageName("reviewAndBook");
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="py-4">Book Now and get same day response!</h3>
      <h3>2. Personal Information</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          {/* <label htmlFor='firstName'>First Name</label> */}
          <div className="flex flex-col max-w-lg py-4">
            <div className="flex justify-between py-2">
              <div className="mr-1 w-full">
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  as={CustomInputComponent}
                />
              </div>

              <div className="ml-1 w-full">
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  as={CustomInputComponent}
                />
              </div>
            </div>

            <div className="py-2 w-full">
              <Field
                id="email"
                name="email"
                placeholder="Email, john@acme.com"
                type="email"
                as={CustomInputComponent}
              />
            </div>

            <div className="py-2 w-full">
              <Field
                id="street"
                name="street"
                placeholder="Street Address, 1234 Main St Apt A"
                as={CustomInputComponent}
              />
            </div>

            <div className="flex py-2">
              <div className="">
                <Field
                  id="city"
                  name="city"
                  placeholder="City"
                  as={CustomInputComponent}
                />
              </div>
              <div className="px-2">
                <Field
                  id="state"
                  as="select"
                  name="state"
                  className="py-2 rounded-md"
                >
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
              </div>
              <div className="">
                <Field
                  id="zipcode"
                  name="zipcode"
                  placeholder="Zip Code"
                  as={CustomInputComponent}
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="flex flex-row-reverse"
            onClick={(e) => handleClick(e)}
          >
            Next
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInformationForm;
