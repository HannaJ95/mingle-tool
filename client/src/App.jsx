import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect } from "react";
import socket from "./socket";

import RegisterPage from "./features/register/RegisterPage";
import RulesPage from "./features/rules/RulesPage";
import WaitingPage from "./features/waiting/WaitingPage";
import MatchingPage from "./features/matching/MatchingPage";
import QuestionsPage from "./features/questions/QuestionsPage";
import ContactsPage from "./features/contact/ContactsPage";

import "./App.css";

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
        <Route path="/waiting" element={<WaitingPage />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/contact" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
