import React from "react";
import logo from "../../assets/images/react.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  FiSettings,
  FiLogOut,
  FiCalendar,
  FiGrid,
  FiFileText,
  FiMap,
  FiPenTool,
  FiUser,
} from "react-icons/fi";

const PatientNav = () => {
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <Link to="/dashboard/patient">
              <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                <img src={logo} alt="logo" />
              </span>
            </Link>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-3">
              <div className="py-4">
                <Link
                  to={``}
                  className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                >
                  <FiSettings className="size-5 opacity-75" />

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    General
                  </span>
                </Link>
              </div>

              <ul className="space-y-6 border-t border-gray-100 pt-4">
                <li>
                  <Link
                    to={`/dashboard/patient`}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FiGrid className="size-6 opacity-75" />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Dashboard
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={``}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FiCalendar className="size-6 opacity-75" />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Appointments
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={``}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FiFileText className="size-6 opacity-75" />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Forms
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={``}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FiMap className="size-6 opacity-75" />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Diet Charts
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={``}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FiPenTool className="size-6 opacity-75" />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Prescriptions
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={``}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FiUser className="size-6 opacity-75" />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Account
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <button
            type="submit"
            onClick={logoutHandler}
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <FiLogOut className="size-5 opacity-75" />

            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientNav;
