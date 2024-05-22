import React from "react";
import {
  PatientNav,
  PatientHeader,
  PatientContent,
  PatientFooter,
} from "../Pages/index";

const Patient = () => {
  return (
    <>
      <div className="flex w-full bg-slate-100 min-h-screen">
        <div className="flex flex-col">
          <PatientNav />
        </div>
        <div className="flex flex-col h-screen flex-1">
          <PatientHeader />
          <PatientContent />
          <PatientFooter />
        </div>
      </div>
    </>
  );
};

export default Patient;
