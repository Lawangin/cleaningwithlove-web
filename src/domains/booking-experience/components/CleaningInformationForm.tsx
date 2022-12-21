import { Formik, Field, Form, FormikHelpers } from "formik";
import Button from "../../global/components/Button";
import CustomInputComponent from "../../global/components/CustomInputComponent";
import FormCounter from "./FormCounter";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const CleaningInformationForm = (): JSX.Element => {
  return (
    <div>
      <h3>Book Now and get same day response!</h3>
      <h3>1. Cleaning Information</h3>
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
          <div className="flex flex-col">
            <div className="flex justify-between py-2">
              <div className="mr-1">
                <FormCounter label={"Bedrooms"} />
              </div>

              <div className="ml-1">
                <FormCounter label={"Bathrooms"} />
              </div>
            </div>

            <div className="flex justify-between py-2">
              <div className="mr-1">
                <FormCounter label={"Livingrooms"} />
              </div>

              <div className="ml-1">
                <FormCounter label={"Kitchens"} />
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
          </div>
          <Button type="submit" className="flex flex-row-reverse">
            Next
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CleaningInformationForm;
