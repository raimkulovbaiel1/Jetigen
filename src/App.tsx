import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './app/components/home/HomePage';
import { BookingPage } from './app/Pages/BookingPage';
import { PlacesPage } from './app/Pages/PlacesPage';
import PaymentStatus from "./app/Pages/PaymentStatus";


function App() {
  const handleNavigate = (page: "home" | "places" | "booking") => {
    window.location.href =
      page === "home" ? "/" : page === "places" ? "/places" : "/booking";
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/transactions" element={<Navigate to="/payment-status" replace />} />
        <Route path="/transactions/:transactionId" element={<PaymentStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
