import "./App.css";
import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import StudyMaterialDetail from "./pages/StudyMaterialDetail";
import InputForm from "./components/InputForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts"; // ✅ adjust if path differs
import { CreditsProvider } from "./context/CreditsContext";
import Index from "./pages/Index";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      <Header scrollY={scrollY} />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

function App() {
  
  return (
    <>
    
    <AuthProvider>
      <ThemeProvider>
      <CreditsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getstarted" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inputform" element={<InputForm />} />
            {/* ✅ make sure this param name matches useParams in StudyMaterialDetail */}
            <Route path="/study-material/:materialId" element={<StudyMaterialDetail />} />
            <Route path="/course/:materialId" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </CreditsProvider>
      </ThemeProvider>
    </AuthProvider>
    </>
  );
}

export default App;
