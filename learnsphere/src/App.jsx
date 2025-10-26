import "./App.css";
import Auth from "./components/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import StudyMaterialDetail from "./pages/StudyMaterialDetail";
import InputForm from "./components/InputForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts"; // ✅ adjust if path differs
import { CreditsProvider } from "./context/CreditsContext";
import Index from "./pages/Index";
function App() {
  return (
    <AuthProvider>
      <CreditsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getstarted" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inputform" element={<InputForm />} />
            {/* ✅ make sure this param name matches useParams in StudyMaterialDetail */}
            <Route path="/study-material/:materialId" element={<StudyMaterialDetail />} />
            <Route path="/course/:materialId" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </CreditsProvider>
    </AuthProvider>
  );
}

export default App;
