import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import RulesPage from './pages/RulesPage'
import MatchingPage from './pages/MatchingPage'
import QuestionsPage from './pages/QuestionsPage'
import ContactsPage from './pages/ContactsPage'
import WaitingPage from "./pages/WaitingPage";
import { useEffect } from "react";
import { socket } from "./socket";

function App() {

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("match", (data) => {
      console.log("Matched with:", data.opponent);
    });
  }, []);

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

export default App;