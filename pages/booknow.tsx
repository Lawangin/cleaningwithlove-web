import type { NextPage } from "next";
import Head from "next/head";
import BookingTunnel from "../src/domains/booking-experience/components/BookingTunnel";
import BreadCrumb from "../src/domains/booking-experience/components/BreadCrumb/BreadCrumb";
import { BookingProvider } from "../src/domains/booking-experience/context/BookingContext";

const BookNow: NextPage = () => {
  return (
    <>
      <Head>
        <title>CWL - Book Now</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BookingProvider>
        <div className="pt-24 flex flex-col items-center">
          <div className="p-4">
            <BreadCrumb />
          </div>
          <BookingTunnel />
        </div>
      </BookingProvider>
    </>
  );
};

export default BookNow;
