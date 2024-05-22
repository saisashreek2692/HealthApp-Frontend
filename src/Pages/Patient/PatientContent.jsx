import React from "react";
import { Link } from "react-router-dom";

const PatientContent = () => {
  return (
    <>
      <div className="mt-6 mx-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <Link
          to={`/dashboard/patient`}
          className="block bg-slate-200 rounded-lg p-4 shadow-sm shadow-indigo-100"
        >
          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-xl text-center font-bold text-gray-500">
                  Forms
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Created</p>

                  <p className="font-medium">100</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Active</p>

                  <p className="font-medium">60</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Assigned</p>

                  <p className="font-medium">80</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={`/dashboard/patient`}
          className="block bg-slate-200 rounded-lg p-4 shadow-sm shadow-indigo-100"
        >
          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-xl text-center font-bold text-gray-500">
                  Prescriptions
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Created</p>

                  <p className="font-medium">100</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Active</p>

                  <p className="font-medium">60</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Assigned</p>

                  <p className="font-medium">80</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={`/dashboard/patient`}
          className="block bg-slate-200 rounded-lg p-4 shadow-sm shadow-indigo-100"
        >
          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-xl text-center font-bold text-gray-500">
                  Diet Charts
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Created</p>

                  <p className="font-medium">100</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Active</p>

                  <p className="font-medium">60</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Assigned</p>

                  <p className="font-medium">80</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={`/dashboard/patient`}
          className="block bg-slate-200 rounded-lg p-4 shadow-sm shadow-indigo-100"
        >
          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-xl text-center font-bold text-gray-500">
                  Appointments
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Created</p>

                  <p className="font-medium">100</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Joined</p>

                  <p className="font-medium">60</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Assigned</p>

                  <p className="font-medium">80</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-6 mx-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Doctor Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Time of Appointment
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Appointment Type
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Forms
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Prescriptions
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Diet Charts
                </th>
                <th className="px-4 py-2">Info</th>
              </tr>
            </thead>

            <tbody className="text-center divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  24/05/2024
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Online
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </Link>
                </td>                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PatientContent;
