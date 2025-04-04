import { format } from 'date-fns'
import { FiHeart } from 'react-icons/fi'

function ArticleCard({ article, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {article.title}
          </h2>
          <button
            onClick={onToggleFavorite}
            className={`p-2 rounded-full ${
              isFavorite ? 'text-red-500' : 'text-gray-400 dark:text-gray-600'
            } hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            <FiHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {article.description}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{article.author || 'Unknown Author'}</span>
          <span>{format(new Date(article.publishedAt), 'MMM d, yyyy')}</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard 