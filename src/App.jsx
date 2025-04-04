import { useState, useEffect } from 'react'
import axios from 'axios'
// import { format } from 'date-fns'
import { FiMoon, FiSun, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ArticleCard from './components/ArticleCard'
import CategoryList from './components/CategoryList'
import SearchBar from './components/SearchBar'
import DateRangeFilter from './components/DateRangeFilter'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('general')
  const [dateRange, setDateRange] = useState({ from: '', to: '' })
  const [currentPage, setCurrentPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  const categories = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${activeCategory}&page=${currentPage}&pageSize=10&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        )
        setArticles(response.data.articles)
        setTotalResults(response.data.totalResults)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching articles:', error)
        setLoading(false)
      }
    }

    fetchArticles()
  }, [activeCategory, currentPage])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleFavorite = (article) => {
    setFavorites(prev => {
      const isArticleFavorited = prev.some(fav => fav.title === article.title)
      if (isArticleFavorited) {
        return prev.filter(fav => fav.title !== article.title)
      }
      return [...prev, article]
    })
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalResults / 10)) {
      setCurrentPage(newPage)
      window.scrollTo(0, 0)
    }
  }

  const filteredArticles = articles.filter(article => {
    const matchesSearch = !searchTerm || 
      article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const articleDate = new Date(article.publishedAt)
    const matchesDateFrom = !dateRange.from || articleDate >= new Date(dateRange.from)
    const matchesDateTo = !dateRange.to || articleDate <= new Date(dateRange.to)

    return matchesSearch && matchesDateFrom && matchesDateTo
  })

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Content Platform</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 space-y-6">
            <SearchBar onSearch={setSearchTerm} />
            <DateRangeFilter onDateChange={setDateRange} />
            <CategoryList 
              categories={categories}
              selectedCategory={activeCategory}
              onSelectCategory={(category) => {
                setActiveCategory(category)
                setCurrentPage(1)
              }}
            />
          </aside>

          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article, index) => (
                    <ArticleCard
                      key={index}
                      article={article}
                      isFavorite={favorites.some(fav => fav.title === article.title)}
                      onToggleFavorite={() => toggleFavorite(article)}
                    />
                  ))}
                </div>

                <div className="mt-8 flex justify-center items-center space-x-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiChevronLeft className="mr-2" />
                    Previous
                  </button>
                  <span className="text-gray-700 dark:text-gray-200">
                    Page {currentPage} of {Math.ceil(totalResults / 10)}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= Math.ceil(totalResults / 10)}
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <FiChevronRight className="ml-2" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
