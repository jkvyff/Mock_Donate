import React, { useState } from "react";

const DonateForm = () => {
  const [donationAmount, setDonationAmount] = useState(50.0);
  const [sameAddresses, setSameAddresses] = useState(true);
  const [checkedTerms, setCheckedTerms] = useState(false);

  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  return (
    <>
      <form className="flex flex-col justify-center md:justify-start mx-auto my-auto pt-8 md:pt-0 px-8 md:px-24 lg:mx-0 lg:px-32 max-w-2xl">
        <h2 className="text-indigo-600 text mb-10 font-semibold pt-12">
          Donate by Card
        </h2>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-medium mb-2"
              htmlFor="donationAmount"
            >
              Donation Amount
            </label>
            <div className="flex content-around">
              <div
                onClick={(ev) => setDonationAmount(15)}
                className={
                  "w-1/5 shadow-sm appearance-none text-center cursor-pointer text-xs align-middle border rounded py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outline " +
                  (donationAmount === 15
                    ? " text-white bg-indigo-600"
                    : " text-gray-700")
                }
              >
                $15
              </div>
              <div
                onClick={(ev) => setDonationAmount(25)}
                className={
                  "w-1/5 shadow-sm appearance-none text-center cursor-pointer text-xs align-middle border rounded mx-2 py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline" +
                  (donationAmount === 25
                    ? " text-white bg-indigo-600"
                    : " text-gray-700")
                }
              >
                $25
              </div>
              <div
                onClick={(ev) => setDonationAmount(50)}
                className={
                  "w-1/5 shadow-sm appearance-none text-center cursor-pointer text-xs align-middle border rounded py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline" +
                  (donationAmount === 50
                    ? " text-white bg-indigo-600"
                    : " text-gray-700")
                }
              >
                $50
              </div>
              <div
                onClick={(ev) => setDonationAmount(75)}
                className={
                  "w-1/5 shadow-sm appearance-none text-center cursor-pointer text-xs align-middle border rounded mx-2 py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline" +
                  (donationAmount === 75
                    ? " text-white bg-indigo-600"
                    : " text-gray-700")
                }
              >
                $75
              </div>
              <input
                type="donationAmount"
                id="donationAmount"
                placeholder="Other"
                onChange={(ev) => setDonationAmount(ev.target.value)}
                className="w-1/5 shadow-sm appearance-none text-center cursor-pointer text-xs align-middle border rounded py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <p className="hidden text-red-500 text-xs italic mt-2">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="jane.doe@example.com"
              className="shadow-sm appearance-none text-xs border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="hidden text-red-500 text-xs italic mt-2">
              Please fill out this field.
            </p>
          </div>
        </div>

        <fieldset className="mb-6">
          <label className="block tracking-wide text-gray-700 text-xs font-medium mb-2">
            Card Information
          </label>
          <div className="rounded-md shadow-sm">
            <div className="flex relative">
              <input
                type="cardNumber"
                id="cardNumber"
                placeholder="1234 1234 1234 1234"
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5"
              />
              {/* Discover */}
              <span className="absolute inset-y-0 right-0">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <title>discover</title>
                  <path
                    d="M32,14.3A2.3,2.3,0,0,0,29.7,12H10.3A2.3,2.3,0,0,0,8,14.3H8V25.7A2.3,2.3,0,0,0,10.3,28h4.1A51,51,0,0,0,32,19.3Z"
                    fill="#efefef"
                  />
                  <path
                    d="M32,25.7V19.3A51,51,0,0,1,14.3,28H29.7A2.3,2.3,0,0,0,32,25.7Z"
                    fill="#f48120"
                  />
                  <circle cx="20" cy="20" r="4.6" fill="#f48120" />
                </svg>
              </span>
              {/* Amexerican Express */}
              <span className="absolute inset-y-0 right-1">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <title>AMEX</title>
                  <rect
                    x="8"
                    y="12"
                    width="24"
                    height="16"
                    rx="2.3"
                    ry="2.3"
                    fill="#00adef"
                  />
                  <path
                    d="M18.3,21.2l-1.4-3.1H15.2v4.4l-2-4.4H11.8l-2,4.6H11l.4-1h2.2l.4,1h2.3V19.3l1.5,3.4h1l1.5-3.3v3.3h1.1V18.2H19.7l-1.4,3.1Zm-5.8-.5h-.7l.7-1.6h0l.7,1.5Z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                  <path
                    d="M28.4,20.4l.8-.9,1.2-1.3H29l-1.3,1.4-1.3-1.4H22.1v4.5h4.3l1.3-1.5L29,22.7h1.4l-1.2-1.4Zm-2.7,1.4H23.2v-.9h2.5V20H23.2v-.8h2.5L27,20.4Z"
                    fill="#fff"
                  />
                </svg>
              </span>
              {/* Master Card */}
              <span className="absolute inset-y-0 right-2">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <title>mastercard</title>
                  <rect
                    x="8"
                    y="12"
                    width="24"
                    height="16"
                    rx="2.3"
                    ry="2.3"
                    fill="#192169"
                  />
                  <circle cx="16.2" cy="20" r="5" fill="#ff0016" />
                  <path
                    d="M23.8,15A5,5,0,0,0,20,16.7l-.6.8h1.1a5,5,0,0,1,.4,1H19a4.9,4.9,0,0,0-.2,1h2.4a4.8,4.8,0,0,1,0,.5,5,5,0,0,1,0,.5H18.8a4.9,4.9,0,0,0,.2,1h2a5,5,0,0,1-.4,1H19.4l.6.8A5,5,0,1,0,23.8,15Z"
                    fill="#ffa916"
                  />
                </svg>
              </span>
              {/* Visa */}
              <span className="absolute inset-y-0 right-3">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <title>visa</title>
                  <rect x="8" y="15" width="24" height="10" fill="#fff" />
                  <path
                    d="M29.7,12H10.3A2.3,2.3,0,0,0,8,14.3H8V15H32v-.7A2.3,2.3,0,0,0,29.7,12Z"
                    fill="#0a5296"
                  />
                  <path
                    d="M8,25.7A2.3,2.3,0,0,0,10.3,28H29.7A2.3,2.3,0,0,0,32,25.7V25H8Z"
                    fill="#f4a428"
                  />
                  <polygon
                    points="16.6 23 17.6 17 19.2 17 18.2 23 16.6 23"
                    fill="#00589f"
                  />
                  <path
                    d="M23.9,17.2,22.5,17c-1.6,0-2.7.8-2.7,1.9s.8,1.3,1.4,1.6.8.5.8.7-.5.6-.9.6a3.3,3.3,0,0,1-1.5-.3h-.2l-.2,1.3A5,5,0,0,0,21,23c1.7,0,2.7-.8,2.8-2s-.4-1.2-1.3-1.6-.9-.4-.9-.7.3-.5.9-.5l1.2.2h.1l.2-1.3"
                    fill="#00589f"
                  />
                  <path
                    d="M28,17H26.8a.9.9,0,0,0-.8.6L23.6,23h1.7l.3-.9h2l.2.9h1.5L28,17m-2,4a8.9,8.9,0,0,0,.6-1.7l.2-.6v.6a16.9,16.9,0,0,0,.4,1.7Z"
                    fill="#00589f"
                  />
                  <path
                    d="M15.3,17l-1.6,4-.2-.8a4.5,4.5,0,0,0-2.2-2.4L12.8,23h1.6L17,17H15"
                    fill="#00589f"
                  />
                  <path
                    d="M12,17H9.7v.2a5.3,5.3,0,0,1,3.8,3.1L13,17.5a.7.7,0,0,0-.7-.5"
                    fill="#f9a51a"
                  />
                </svg>
              </span>
            </div>
            <div className="-mt-px flex">
              <div className="w-1/2 flex-1 min-w-0">
                <input
                  type="cardExpiration"
                  id="cardExpiration"
                  placeholder="MM/DD"
                  className="relative block w-full px-3 py-2 border border-gray-300 rounded-bl-md focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5"
                />
              </div>
              <div className="w-1/2 flex-1 min-w-0">
                <input
                  type="cvv"
                  id="cvv"
                  placeholder="CVV"
                  className="relative block w-full px-3 py-2 border border-l-0 border-gray-300 rounded-br-md focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5"
                />
              </div>
            </div>
          </div>
          <p className="hidden text-red-500 text-xs italic mt-2">
            Please fill out this field.
          </p>
        </fieldset>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-medium mb-2"
              htmlFor="name"
            >
              Name on Card
            </label>
            <input
              type="name"
              id="name"
              placeholder="Jane Doe"
              className="shadow-sm text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="hidden text-red-500 text-xs italic mt-2">
              Please fill out this field.
            </p>
          </div>
        </div>

        <fieldset className="mb-6">
          <label className="block tracking-wide text-gray-700 text-xs font-medium mb-2">
            Billing Address
          </label>
          <div className="rounded-md shadow-sm">
            <div>
              <input
                type="addressLine1"
                id="addressLine1"
                placeholder="Address line 1"
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5"
              />
            </div>
            <div>
              <input
                type="addressLine2"
                id="addressLine2"
                placeholder="Address line 2"
                className="relative block w-full px-3 py-2 border border-t-0 border-gray-300 focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5"
              />
            </div>
            <div className="-mt-px flex">
              <div className="w-1/2 flex-1 min-w-0">
                <input
                  type="city"
                  id="city"
                  placeholder="City"
                  className="relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5"
                />
              </div>
              <div className="w-1/2 flex-1 min-w-0">
                <input
                  type="zip"
                  id="zip"
                  placeholder="ZIP"
                  className="relative block w-full px-3 py-2 border border-l-0 border-gray-300 focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5"
                />
              </div>
            </div>
            <div className="relative -mt-px flex items-center">
              <div className="relative w-1/2 min-w-0">
                <select
                  type="state"
                  id="state"
                  defaultValue="State"
                  className={
                    "form-select w-full px-2 py-2 border border-gray-300 rounded-bl-md focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5" +
                    (state.length === 0 ? " text-gray-500 " : "")
                  }
                  onChange={(ev) => setState(ev.target.value)}
                >
                  <option value="">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                </select>
              </div>
              <div className="relative w-1/2 min-w-0">
                <select
                  type="country"
                  id="country"
                  defaultValue="Country"
                  className={
                    "form-select w-full px-2 py-2 border border-l-0 border-gray-300 rounded-br-md focus:outline-none focus:shadow-outline focus:border-blue-300 focus:z-10 sm:text-xs sm:leading-5" +
                    (country.length === 0 ? " text-gray-500 " : "")
                  }
                  onChange={(ev) => setCountry(ev.target.value)}
                >
                  <option value="">Country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                </select>
              </div>
            </div>
          </div>
          <p className="hidden text-red-500 text-xs italic mt-2">
            Please fill out this field.
          </p>
        </fieldset>
        <div
          onClick={(ev) => setSameAddresses(!sameAddresses)}
          className="relative py-2 z-10"
        >
          <label
            htmlFor="toggleA"
            className="text-2xs select-none text-gray-700"
          >
            Shipping address is same as billing
          </label>
          <div className="absolute right-0 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggleA"
              className={
                "toggle-checkbox outline-none absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" +
                (sameAddresses ? " border-indigo-600 right-0" : "")
              }
            />
            <label
              htmlFor="toggleA"
              className={
                "toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" +
                (sameAddresses ? " bg-indigo-600" : "")
              }
            ></label>
          </div>
        </div>

        <div
          onClick={(ev) => setCheckedTerms(!checkedTerms)}
          className="relative pt-2 pb-4"
        >
          <label
            htmlFor="toggleB"
            className="text-2xs select-none text-gray-700"
          >
            I have read and agree with the
            <span className="text-indigo-400"> terms and conditions.</span>
          </label>
          <div className="absolute right-0 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggleB"
              className={
                "toggle-checkbox outline-none absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" +
                (checkedTerms ? " border-indigo-600 right-0" : "")
              }
            />
            <label
              htmlFor="toggleB"
              className={
                "toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" +
                (checkedTerms ? " bg-indigo-600" : "")
              }
            ></label>
          </div>
        </div>

        <button className="bg-indigo-600 mb-6 hover:bg-indigo-700 text-white py-2 px-4 rounded">
          <span className="font-bold">Donate </span>(${donationAmount})
        </button>
      </form>
    </>
  );
};

export default DonateForm;
