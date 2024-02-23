"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    // Given date string
    const dateString = "2023-12-25T13:32:01.878Z";

    // Convert the string to a Date object
    const givenDate = new Date(dateString);

    // Current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference: number = currentDate.getTime() - givenDate.getTime();

    // Convert milliseconds to days
    setDaysPassed(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));

    // Update the current date and time every second
    const intervalId = setInterval(() => {
      if (currentDateTime.getHours() == 0 && currentDateTime.getMinutes() == 0) {
        setDaysPassed((old) => old + 1);
      }

      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Check if the current time has crossed 23:59

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Days since the last Printed PassPort
        </p>
      </div>

      <div className="relative text-9xl flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {daysPassed}
      </div>

      <div className="mb-32 grid text-lg text-center font-bold w-full">
        {currentDateTime
          .toLocaleString('en-UK',{ timeZone: 'Africa/Harare' })
          .replace(/\//g, ":")
          .split(",")
          .join(" ")}
      </div>
    </main>
  );
}
