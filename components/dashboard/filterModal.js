// the component is responsible for adding and deleting achievements in user profile

// necessary dependencies
import React from "react";
import { useState } from "react";
import ButtomPrimary from "../button-primary";

// the main component
const FilterModal = (props) => {
  const [class11, setClass11] = useState(true);
  const [class12, setClass12] = useState(true);
  const [alumni, setAlumni] = useState(true);
  const [executives, setExecutives] = useState(true);

  const handleClearFilter = () => {
    setClass11(true);
    setClass12(true);
    setExecutives(true);
    setAlumni(true);
  }

  const handleApply = () => {
    props.handleAction("designation", "Member")
    props.handleToggle();
  }
  return (
    <div>
      <div
        className={`${props.toggle == true ? "" : "hidden"
          } backdrop-blur-none md:backdrop-blur-[2px] fixed overflow-y-auto overflow-x-hidden flex justify-center z-50 w-full md:inset-0 h-modal md:h-full`}
      >
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-gray-700 px-6 py-8 rounded shadow-md w-full">
            <div className="flex flex-row justify-evenly mb-5">
              <h1 className="text-xl font-normal text-center text-white">
                Filter search results
              </h1>
              <button
                type="button"
                className="top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
                onClick={props.handleToggle}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="">
              <CheckBox name="Class 11" action={() => setClass11(!class11)} checked={class11} />
              <CheckBox name="Class 12" action={() => setClass12(!class12)} checked={class12} />
              <CheckBox name="Alumni" action={() => setAlumni(!alumni)} checked={alumni} />
              <CheckBox name="Executives" action={() => setExecutives(!executives)} checked={executives} />
            </div>
            <div className="flex flex-row flex-wrap justify-between">
              <ButtomPrimary text="Clear Filter" onClick={handleClearFilter} />
              <ButtomPrimary text="Apply" onClick={handleApply} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default FilterModal;

function CheckBox({ name, action, checked = true }) {
  return (
    <div className="flex items-center m-3">
      <input
        id="checkbox-all"
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={checked}
        onChange={action}
      />
      <label htmlFor="link-checkbox" className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">{name}</label>
    </div>
  )
}