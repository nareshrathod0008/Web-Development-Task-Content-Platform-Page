function DateRangeFilter({ onDateChange }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Date Range</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            From
          </label>
          <input
            type="date"
            onChange={(e) => onDateChange(prev => ({ ...prev, from: e.target.value }))}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            To
          </label>
          <input
            type="date"
            onChange={(e) => onDateChange(prev => ({ ...prev, to: e.target.value }))}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  )
}

export default DateRangeFilter 