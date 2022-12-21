import type { NextPage } from "next";
import Head from "next/head";
import BreadCrumb from "../src/domains/booking-experience/components/BreadCrumb/BreadCrumb";
import CleaningInformationForm from "../src/domains/booking-experience/components/CleaningInformationForm";
import PersonalInformationForm from "../src/domains/booking-experience/components/PersonalInformationForm";

const BookNow: NextPage = () => {
  return (
    <>
      <Head>
        <title>CWL - Book Now</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-24 flex flex-col items-center">
        <div className="p-4">
          <BreadCrumb />
        </div>
        <CleaningInformationForm />
        <PersonalInformationForm />
      </div>
    </>
  );
};

export default BookNow;
