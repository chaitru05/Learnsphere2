import './App.css'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import InputForm from './components/InputForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/index'  // ✅ adjust path if needed

function App() {
  return (
    <AuthProvider>   {/* ✅ Wrap all routes inside AuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/getstarted' element={<Auth />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/inputform' element={<InputForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
