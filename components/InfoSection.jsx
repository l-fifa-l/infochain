/* eslint-disable @next/next/no-img-element */
import React from 'react';

// import data  to be displayed on the web site
import { data } from '../utitls/data';
import { Typography } from '@material-tailwind/react';

function InfoSection() {
  return (
    <>
      <div className="px-8 py-4 mx-auto bg-white dark:bg-gray-800 lg:mr-48 md:mr:20">
        {/* Topic 1 start */}
        <div className="mt-3">
          {/* Heading start */}
          <Typography
            variant="h1"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {data.topic1.heading}
          </Typography>
          {/* Heading end */}

          {/* paragraph For topic one start oooooo */}
          {data.topic1.description.map((datum, index) => (
            <p
              key={index}
              className="mt-2 pb-3 text-gray-900 dark:text-gray-300"
            >
              {datum}
            </p>
          ))}
          {/* paragraph For topic one end*/}

          {/* Key Takeway */}
          <div className="p-6 bg-teal-300 justify-evenly rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                key Takeaway
              </h5>
            </a>
            <div className="mb-3 text-lg  text-gray-900 dark:text-gray-700">
              <ul className="list-disc pl-5">
                {/* key takeway points oooo*/}
                {data.topic1.keyTakeaway.map((datum, index) => (
                  <li key={datum} className="pb-4">
                    {datum}
                  </li>
                ))}
                {/* key takeaway points end */}
              </ul>
            </div>
          </div>
          {/* key takeAway ends */}
        </div>
        {/* Topic 1 ends */}

        {/* Topic 2 start */}
        <div className="mt-6">
          {/* Heading start */}
          <Typography
            variant="h1"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {data.topic2.heading}
          </Typography>
          {/* Heading end */}

          {/* paragraph For topic one start*/}
          {data.topic2.description.map((datum, index) => (
            <p
              key={index}
              className="mt-2 pb-3 text-gray-900 dark:text-gray-300"
            >
              {datum}
            </p>
          ))}
          {/* paragraph For topic one end*/}

          {/* Images start */}
          {data.topic2.images.map((datum, index) => (
            <div key={index}>
              <Typography
                variant="h2"
                key={datum.id}
                className="text-xl font-bold text-gray-900 dark:text-white p-3"
              >
                {datum.heading}
              </Typography>
              <img
                src={datum.image}
                key={datum.image}
                alt={datum.heading}
                className="w-full h-auto border border-black-500 rounded-lg shadow-md"
              />
            </div>
          ))}
          {/* Images end */}
        </div>

        {/* topic 3 start */}
        <div className="mt-6">
          {/* Heading start */}
          <Typography
            variant="h1"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {data.topic3.heading}
          </Typography>
          {/* Heading end */}

          {/* paragraph For topic one start oooo*/}
          {data.topic3.description.map((datum, index) => (
            <p key={index} className="mt-2 text-gray-900 dark:text-gray-300">
              {datum}
            </p>
          ))}
          {/* paragraph For topic one end*/}
        </div>
        {/* Key important */}
        <div className="p-6 bg-red-300 justify-evenly rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
              Important
            </h5>
          </a>
          <div className="mb-3 text-lg  text-gray-900 dark:text-gray-700">
            {/* key important points */}
            {data.topic3.important}
            {/* key important points end */}
          </div>
        </div>
        {/* key important ends */}
        {/* topic 3 end */}

        {/* topic 4 start */}
        <div className="mt-6">
          {/* Heading start */}
          <Typography
            variant="h1"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {data.topic4.heading}
          </Typography>
          {/* Heading end */}

          {/* paragraph For topic one start*/}
          {data.topic4.description.map((datum, index) => (
            <p key={index} className="mt-2 text-gray-900 dark:text-gray-300">
              {datum}
            </p>
          ))}
          {/* paragraph For topic one end*/}
        </div>
        {/* topic 4 ends */}

        {/* topic 5 start */}
        <div className="mt-6">
          {/* Heading start */}
          <Typography
            variant="h1"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {data.topic5.heading}
          </Typography>
          {/* Heading end */}

          {/* paragraph For topic one start*/}
          {data.topic5.description.map((datum, index) => (
            <p key={index} className="mt-2 text-gray-900 dark:text-gray-300">
              {datum}
            </p>
          ))}
          {/* paragraph For topic one end*/}
        </div>
        {/* topic 5 ends */}

        {/* topic 6 start */}
        <div className="mt-6">
          {/* Heading start */}
          <Typography
            variant="h1"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {data.topic6.heading}
          </Typography>
          {/* Heading end */}

          {/* paragraph For topic one start*/}
          {data.topic6.description.map((datum, index) => (
            <p key={index} className="mt-2 text-gray-900 dark:text-gray-300">
              {datum}
            </p>
          ))}
          {/* paragraph For topic one end*/}
        </div>
        {/* topic 6 ends */}

        {/* topic 7 start */}
        <div className="mt-6">
          {/* Heading start */}
          <Typography
            variant="h1"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {data.topic7.heading}
          </Typography>
          {/* Heading end */}

          {/* paragraph For topic one start*/}
          {data.topic7.description.map((datum, index) => (
            <p key={index} className="mt-2 text-gray-900 dark:text-gray-300">
              {datum}
            </p>
          ))}
          {/* paragraph For topic one end*/}
        </div>
        {/* topic 7 ends */}

        {/* topic 8 start */}
        <div className="mt-6">
          {/* Heading start */}
          <Typography
            variant="h1"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {data.topic8.heading}
          </Typography>
          {/* Heading end */}

          {/* paragraph For topic one start*/}
          {data.topic8.description.map((datum, index) => (
            <p key={index} className="mt-2 text-gray-900 dark:text-gray-300">
              {datum}
            </p>
          ))}
          {/* paragraph For topic one end*/}
        </div>
        {/* topic 8 ends */}
      </div>
    </>
  );
}

export default InfoSection;
