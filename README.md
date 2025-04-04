# Content Platform

A modern, responsive content platform built with React and Vite that showcases news articles from various categories. The application features real-time search, category filtering, pagination, and a dark mode toggle.


## Features

- **News Articles**: Fetches and displays top headlines from NewsAPI
- **Category Filtering**: Filter articles by different categories (general, business, entertainment, etc.)
- **Search**: Real-time search functionality across article titles and descriptions
- **Date Range Filter**: Filter articles by publication date
- **Pagination**: Navigate through multiple pages of articles
- **Dark Mode**: Toggle between light and dark themes
- **Favorites**: Save articles to favorites (persisted in localStorage)
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean and modern interface built with Tailwind CSS

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- A NewsAPI key (get one at [https://newsapi.org](https://newsapi.org))

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd content-platform
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your NewsAPI key:
```env
VITE_NEWS_API_KEY=your_api_key_here
```

4. Replace `YOUR_API_KEY` in `src/App.jsx` with your actual NewsAPI key.

## Running the Project

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
content-platform/
├── src/
│   ├── components/
│   │   ├── ArticleCard.jsx    # Article card component
│   │   ├── CategoryList.jsx   # Category filter component
│   │   ├── DateRangeFilter.jsx# Date range filter component
│   │   └── SearchBar.jsx      # Search component
│   ├── App.jsx               # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: Promise-based HTTP client
- **date-fns**: Modern JavaScript date utility library
- **React Icons**: Popular icons in React applications

## Features in Detail

### News API Integration
- Fetches top headlines from NewsAPI
- Supports pagination with 10 articles per page
- Includes category filtering through API parameters

### Search and Filtering
- Real-time search with debouncing
- Filter by multiple categories
- Date range filtering for article publication dates

### User Interface
- Responsive grid layout
- Loading states and animations
- Dark mode support
- Clean and modern design

### State Management
- Uses React hooks for state management
- Persists favorites in localStorage
- Manages loading states and pagination

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [NewsAPI](https://newsapi.org) for providing the news data
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [React Icons](https://react-icons.github.io/react-icons) for the icons
