import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import RulesPage from './pages/RulesPage'
import WaitingPage from "./pages/WaitingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/waiting" element={<WaitingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
