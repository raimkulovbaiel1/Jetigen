import { useState } from 'react'
import PlacesPage from './app/Pages/PlacesPage'
import BookingPage from './app/Pages/BookingPage'
import HomePage from './app/components/home/HomePage' 
import Header from './app/components/home/Header'
function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'places' | 'booking'>('home')

  const renderHomePage = () => (
    <HomePage onNavigate={setCurrentPage} />
  )

  const renderPage = () => {
    switch (currentPage) {
      case 'places':
        return <PlacesPage />
      case 'booking':
        return <BookingPage />
      default:
        return renderHomePage()
    }
  }

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;