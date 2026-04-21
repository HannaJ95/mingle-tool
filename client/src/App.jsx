import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router";

import RegisterPage from "./features/register/RegisterPage";
import RulesPage from "./features/rules/RulesPage";
import WaitingPage from "./features/waiting/WaitingPage";
import MatchingPage from "./features/matching/MatchingPage";
import QuestionsPage from "./features/questions/QuestionsPage";
import ContactsPage from "./features/contact/ContactsPage";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import DemoFlow from "./features/demo/DemoFlow.jsx";
import useAppStore from "./store/useAppStore";
import "./App.css";

const stepToPath = {
  register: "/",
  rules: "/rules",
  waiting: "/waiting",
  matching: "/matching",
  questions: "/questions",
  contact: "/contact",
};

function Navigator() {
  const { step } = useAppStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/demo")) return;
    if (step === "register") return;
    const path = stepToPath[step];
    if (path) navigate(path);
  }, [step]);

  return null;
}

function AppContent() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route
          path="/rules"
          element={
            <ProtectedRoute require={["user"]}>
              <RulesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/waiting"
          element={
            <ProtectedRoute require={["user"]}>
              <WaitingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/matching"
          element={
            <ProtectedRoute require={["user", "group", "card"]}>
              <MatchingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions"
          element={
            <ProtectedRoute require={["user", "group", "questions"]}>
              <QuestionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute require={["user", "group"]}>
              <ContactsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/demo" element={<DemoFlow />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
