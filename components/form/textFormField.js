const TextFormField = ({ label, name, placeholder, handleChange }) => {
    return (
        <div>
            <label className="text-white dark:text-gray-200">{label}</label>
            <input
                name={name}
                type='text'
                className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextFormField