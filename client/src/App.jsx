import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import RulesPage from './pages/RulesPage'
import MatchingPage from './pages/MatchingPage'
import QuestionsPage from './pages/QuestionsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/questions" element={<QuestionsPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
