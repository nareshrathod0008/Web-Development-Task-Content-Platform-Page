import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(value)
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [value, onSearch])

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search articles..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
}

export default SearchBar 