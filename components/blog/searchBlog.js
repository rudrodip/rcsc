import React from 'react'
import { useState } from 'react'
import Categories from '../../categories.json'

const SearchBlog = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='m-5'>
            <div className="relative inline-block text-left z-50">
                <div>
                    <button
                        type="button"
                        className="flex justify-end rounded-md border shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-500 outline-none"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        Categories
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div 
                className={`origin-top-right ${toggle ? 'absolute' : 'hidden'} right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-500 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto`} role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="menu-button" 
                tabIndex="-1">
                    <div className="py-1 h-48" role="none">
                        {Object.keys(Categories).map(i => {
                            return (
                                <div key={i}>
                                    <a href="#" className="text-gray-100 block px-4 py-2 text-sm hover:bg-gray-400" role="menuitem" tabIndex="-1" id="menu-item-0">{Categories[i]}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBlog