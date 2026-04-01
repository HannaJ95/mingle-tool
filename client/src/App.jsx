import { BrowserRouter, Routes, Route } from 'react-router'
import RegisterPage from './pages/RegisterPage'
import RulesPage from './pages/RulesPage'
import MatchingPage from './pages/MatchingPage'
import QuestionsPage from './pages/QuestionsPage'
import ContactsPage from './pages/ContactsPage'
import WaitingPage from "./pages/WaitingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/waiting" element={<WaitingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
