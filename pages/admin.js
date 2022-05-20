import React from 'react'
import { useState } from 'react'

const Admin = () => {
  const [sideToggle, setSideToggle] = useState('hidden')

  return (
    <div>

      <div className="flex">
        <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">

          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <li>
                  <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md " href="#">
                    <span className="mx-4 font-medium">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <span className="mx-4 font-medium">Settings</span>
                  </a>
                </li><li>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <span className="mx-4 font-medium">Users</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <span className="mx-4 font-medium">Executives</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <span className="mx-4 font-medium">Blogs</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <span className="mx-4 font-medium">Gallery</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <span className="mx-4 font-medium">Events</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <span className="mx-4 font-medium">Settings</span>
                  </a>
                </li>
              </ul>
            </aside>

          </div>
        </div>
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="flex items-center justify-center p-40 border-4 border-dotted">
            Content...
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin