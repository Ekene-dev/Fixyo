import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import "./styles.css";

import ArtisanDashboard from "./pages/ArtisanDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import ArtisanProfile from "./pages/ArtisanProfile";
import ClientProfile from "./pages/ClientProfile";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ImageGallery />
      <AboutSection />
      <Footer />
    </div>
  );
}
function App() {
  const [jobs, setJobs] = React.useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/artisan-dashboard"
          element={<ArtisanDashboard jobs={jobs} setJobs={setJobs} />}
        />
        <Route
          path="/client-dashboard"
          element={<ClientDashboard jobs={jobs} setJobs={setJobs} />}
        />
        <Route path="/artisan-profile" element={<ArtisanProfile />} />
        <Route path="/client-profile" element={<ClientProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
