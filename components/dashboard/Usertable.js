import React from "react";
import Link from 'next/link'
import FilterModal from "./filterModal";
import { useState, useEffect } from "react";

const Table = (props) => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [userList, setUserList] = useState(props?.list);

  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle);
  }
  
  const sortAZ = () => {
    setUserList([...userList.sort(AZcompare)])
  }

  const sortClass = () => {
    setUserList([...userList.sort(ClassCompare)])
  }

  const sortRoll = () => {
    setUserList([...userList.sort(RollCompare)])
  }

  const filter = (prop, value) => {
    let filtered = userList?.filter(elem => elem.data()[prop] == value)
    setUserList([...filtered])
  }
  
  useEffect(()=> {
    setUserList(props?.list?.sort(AZcompare))
  }, [props?.list])
  return (
    <div>
      <FilterModal 
        toggle={filterToggle}
        handleToggle={handleFilterToggle}
        handleAction={filter}
      />
      <div className="flex flex-col">
        <div className="">
          <div className="flex justify-between py-3 pl-2">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <button 
                className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
                onClick={handleFilterToggle}
                >
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    </div>
                    <div className="hidden sm:block">
                      Filters
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-4">
                      <div className="flex items-center h-5">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="checkbox"
                          className="sr-only"
                        >
                          Checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Profile
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      <span className="inline-flex items-center cursor-pointer" onClick={sortAZ}>
                        Name
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 11l5-5m0 0l5 5m-5-5v12"
                          />
                        </svg>
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Designation
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      <span className="inline-flex items-center cursor-pointer" onClick={sortClass}>
                        Class
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 13l-5 5m0 0l-5-5m5 5V6"
                          />
                        </svg>
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      <span className="inline-flex items-center cursor-pointer" onClick={sortRoll}>
                        Roll
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 13l-5 5m0 0l-5-5m5 5V6"
                          />
                        </svg>
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {
                    userList && userList.map(elem => {
                      let user = elem.data()
                      return (
                        <tr key={elem}>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor="checkbox"
                                className="sr-only"
                              >
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                            <Link href={`/user/${elem?.id}`}>
                              <img src={user.photoURL} alt="Avatar" className="w-10 h-10 rounded-full align-middle cursor-pointer" />
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                            <Link href={`/user/${elem?.id}`}>
                              {user.name}
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                            {user.designation}
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                            {user?.class}
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                            {user?.roll}
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                            <a
                              className="text-green-500 hover:text-green-700"
                              href={`mailto: ${user.email}`}
                            >
                              {user.email}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm text-left whitespace-nowrap">
                            <a
                              className="text-red-500 hover:text-red-700"
                              href="#"
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Table;


function AZcompare(a, b){
  let name1 = a.data().name.toLowerCase();
  let name2 = b.data().name.toLowerCase();

  if (name1 > name2) return 1;
  if (name1 < name2) return -1;
  return 0;
}

function ClassCompare(a, b){
  if (a.data()?.class && b.data()?.class){
    let class1 = parseInt(a.data().class);
    let class2 = parseInt(b.data().class);
  
    if (class1 > class2) return 1;
    if (class1 < class2) return -1;
    return 0;
  }
}

function RollCompare(a, b){
  if (a.data()?.roll && b.data()?.roll){
    let roll1 = parseInt(a.data().roll);
    let roll2 = parseInt(b.data().roll);
  
    if (roll1 > roll2) return 1;
    if (roll1 < roll2) return -1;
    return 0;
  }
}