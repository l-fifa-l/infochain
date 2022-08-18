import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const CurrencyXchange = () => {
  // to store the currency list
  const [currencies, setCurrencies] = useState([]);

  // to store the currency which is selected by the user
  const [currency, setCurrency] = useState();

  // to store the Amount which is to be converted by the user
  const [fromAmount, setFromAmount] = useState();

  // to return the value of the currency
  const [value, setValue] = useState();

  // To get the currency list from the API
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`https://blockchain.info/ticker`);
      setCurrencies(Object.keys(data));
    };
    fetchData();
  }, []);

  // To get the currency value from the API
  const getCurrency = async () => {
    const { data } = await axios.get(
      `https://blockchain.info/tobtc?currency=${currency}&value=${fromAmount}`
    );
    setValue(data);
  };

  return (
    <Layout>
      <div className="font-manrope pt-10 flex w-full items-center justify-center">
        <div className="box-border w-[365px] border bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-[#64748B]">Currency Convertor</span>
          </div>
          <div className="mt-6">
            <div className="font-semibold pt-4">
              Select Which Currency to convert to ?
            </div>
            <div className="flex justify-center">
              <div className=" w-full cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]">
                {/* set the currency value to the currency which is selected by the user */}
                <select
                  className=" w-full"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {/* loop for the currencies list start */}
                  <option value="">Select an Currency </option>
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                  {/* loop for the currencies list end */}
                </select>
              </div>
            </div>

            <div className="font-semibold">
              How much {currency} would you like to convert to BTC ?
            </div>
            <div>
              {/* Input of the value to be converted */}
              <input
                className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                type="number"
                placeholder={100.0}
                onChange={(e) => setFromAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
              {/* if currency and fromAmount are selected show convert button else show warning */}
              {currency && fromAmount ? (
                <button
                  className="h-10 rounded-md w-full bg-indigo-500 text-white"
                  onClick={getCurrency}
                >
                  CONVERT
                </button>
              ) : (
                <div
                  className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Warning alert!</span> Please
                    select all the fields few things up and try submitting
                    again.
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="font-semibold text-gray-900">
            For {fromAmount} {currency} you would get BTC
          </div>

          {/* if cconverted value is there the show the converted value else show nothing */}
          {value ? (
            <div className="mt-6">
              <div className="w-full cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-semibold text-white">
                <h1>{value}</h1>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CurrencyXchange;
