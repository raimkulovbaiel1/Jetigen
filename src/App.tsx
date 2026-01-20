import { useState } from 'react'
import HomePage from './app/components/home/HomePage' 
import { BookingPage } from './app/Pages/BookingPage'
import { PlacesPage } from './app/Pages/PlacesPage'
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
      {renderPage()}
    </div>
  );
}

export default App;