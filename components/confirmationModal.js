// the component is responsible for adding and deleting achievements in user profile


// necessary dependencies
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'

// the main component
const Confirmation = (props) => {

    return (
        <div>
            <div className={`${props.toggle} backdrop-blur-none md:backdrop-blur-sm absolute overflow-y-auto overflow-x-hidden flex justify-center z-50 w-full md:inset-0 h-modal md:h-full`}>
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-gray-700 px-6 py-8 rounded shadow-md w-full">
                        <div className='flex flex-row justify-end'>
                            <h1 className="mb-8 text-xl font-normal text-center text-white">{props.warning}</h1>
                            <button type="button" className="mb-7 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white" onClick={props.handleToggle}>
                                <svg className="w-5 h-5" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div className='flex justify-around'>

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
                                onClick={props.handleSubmit}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation