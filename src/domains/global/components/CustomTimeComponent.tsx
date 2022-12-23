import React, { useEffect, useState } from "react";
import { useBookingContext } from "../../booking-experience/context/BookingContext";

const CustomTimeComponent = (): JSX.Element => {
  const { cleaningData, setCleaningData } = useBookingContext();

  const [selectedHour, setSelectedHour] = useState<string>(
    cleaningData.time.hour.toString()
  );
  const [selectedMinute, setSelectedMinute] = useState<string>(
    cleaningData.time.minute.toString()
  );
  const [selectedAmOrPm, setSelectedAmOrPM] = useState<string>(
    cleaningData.time.amOrPm
  );

  const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(event.target.value);
  };

  const handleMinuteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMinute(event.target.value);
  };

  const handleAmPmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAmOrPM(event.target.value);
  };

  const hoursList = [];
  const minutesList = [];
  for (let i = 0; i < 12; i++) {
    hoursList.push(
      <option
        value={`${i < 10 ? 0 : ""}${i}`}
        selected={selectedHour === i.toString() ? true : false}
        key={"hour " + i}
      >{`${i < 10 ? 0 : ""}${i}`}</option>
    );
  }

  for (let i = 0; i < 60; i++) {
    minutesList.push(
      <option
        value={`${i < 10 ? 0 : ""}${i}`}
        selected={selectedMinute === i.toString() ? true : false}
        key={"minute " + i}
      >{`${i < 10 ? 0 : ""}${i}`}</option>
    );
  }

  useEffect(() => {
    setCleaningData({
      ...cleaningData,
      time: {
        hour: +selectedHour,
        minute: +selectedMinute,
        amOrPm: selectedAmOrPm,
      },
    });
  }, [selectedHour, selectedMinute, selectedAmOrPm]);

  return (
    <div className="inline-flex text-lg border rounded-md shadow p-1.5 w-full text-gray-700">
      <select
        name="hour"
        id="hour"
        className="px-2 outline-none appearance-none bg-transparent"
        onChange={handleHourChange}
      >
        {hoursList.map((o) => o)}
      </select>
      <span className="px-2">:</span>
      <select
        name="minute"
        id="minute"
        className="px-2 outline-none appearance-none bg-transparent"
        onChange={handleMinuteChange}
      >
        {minutesList.map((o) => o)}
      </select>
      <select
        name="ampm"
        id="ampm"
        className="px-2 outline-none appearance-none bg-transparent"
        onChange={handleAmPmChange}
      >
        <option value="AM" selected={selectedAmOrPm === "AM"}>
          AM
        </option>
        <option value="PM" selected={selectedAmOrPm === "PM"}>
          PM
        </option>
      </select>
    </div>
  );
};

export default CustomTimeComponent;
