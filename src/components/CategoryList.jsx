function CategoryList({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`w-full text-left px-3 py-2 rounded-md capitalize ${
              selectedCategory === category
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryList