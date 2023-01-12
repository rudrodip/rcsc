import { useState } from "react"

const PasswordInputField = ({ label = 'Password', name, handleChange, showPassToggle = false }) => {
    const [checked, setChecked] = useState(false)

    // password show state change handler
    const handleOnChange = () => {
        setChecked(!checked)
    }

    return (
        <div>
            <label className="text-white dark:text-gray-200">{label}</label>
            <input
                name={name}
                type={checked ? 'text' : 'password'}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleChange}
            />
            {
                showPassToggle &&

                <div className='text-sm text-gray-200 mt-3'>
                    <input
                        type="checkbox"
                        name="topping"
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                        checked={checked}
                        onChange={handleOnChange}
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
                </div>
            }
        </div >
    )
}

export default PasswordInputField