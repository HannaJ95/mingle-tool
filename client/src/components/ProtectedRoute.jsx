import { Navigate } from "react-router";
import useAppStore from "../store/useAppStore";

export default function ProtectedRoute({ children, require: requirements = [] }) {
  const { user, group, card, questions } = useAppStore();

  const checks = {
    user: !!user,
    group: !!group,
    card: !!card,
    questions: questions.length > 0,
  };

  if (import.meta.env.VITE_BYPASS_AUTH === 'true') return children;

  const allMet = requirements.every((req) => checks[req]);

  if (!allMet) return <Navigate to="/" replace />;

  return children;
}
