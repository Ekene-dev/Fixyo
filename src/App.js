import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ImageGallery from "./components/ImageGallery";
import JoinPrompt from "./components/JoinPrompt";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ImageGallery />
      <JoinPrompt />
      <Footer />
    </div>
  );
}

export default App;
