// the component is responsible for adding and deleting achievements in user profile

// necessary dependencies
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// the main component
const Confirmation = (props) => {
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <div
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          props.toggle == true ? "" : "hidden"
        } backdrop-blur-none md:backdrop-blur-[2px] fixed overflow-y-auto overflow-x-hidden flex justify-center z-50 w-full md:inset-0 h-modal md:h-full`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="bg-gray-700 px-6 py-8 rounded-2xl shadow-md w-full">
            <div>
              <h1 className="mb-8 text-xl font-normal text-center text-white">
                {props.warning}
              </h1>
            </div>

            <div className="flex justify-around">
              <button
                type="submit"
                className="p-5 m-5 bg-gray-900 hover:bg-blue-600 uppercase text-white font-bold hover:scale-110 transition-all ease-in-out duration-100 shadow px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3"
                onClick={props.handleToggle}
              >
                No
              </button>
              <button
                type="submit"
                className="p-5 m-5 bg-gray-900 hover:bg-red-500 uppercase text-white font-bold hover:scale-110 transition-all ease-in-out duration-100 shadow px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3"
                onClick={() => {
                  props.handleAction();
                  props.handleToggle();
                  toast("Action Executed", {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                  })
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
