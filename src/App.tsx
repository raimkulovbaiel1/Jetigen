import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './app/components/home/HomePage';
import { BookingPage } from './app/Pages/BookingPage';
import { PlacesPage } from './app/Pages/PlacesPage';
import PaymentSuccess from "./app/components/home/PaymentSuccess";

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
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
