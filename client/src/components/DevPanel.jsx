import { useNavigate } from "react-router";
import useAppStore from "../store/useAppStore";
import { mockUser, mockGroup, mockCard, mockQuestions } from "../mocks/fixtures";

const destinations = [
  { label: "Register", path: "/?role=student", seed: { user: mockUser } },
  { label: "Rules", path: "/rules", seed: { user: mockUser } },
  { label: "Waiting", path: "/waiting", seed: { user: mockUser } },
  { label: "Matching", path: "/matching", seed: { user: mockUser, group: mockGroup, card: mockCard } },
  { label: "Questions", path: "/questions", seed: { user: mockUser, group: mockGroup, questions: mockQuestions } },
  { label: "Contact", path: "/contact", seed: { user: mockUser, group: mockGroup } },
];

export default function DevPanel() {
  const navigate = useNavigate();
  const { setUser, setGroup, setCard, setQuestions, resetGame } = useAppStore();

  const goTo = (path, seed) => {
    if (seed.user) setUser(seed.user);
    if (seed.group) setGroup(seed.group);
    if (seed.card) setCard(seed.card);
    if (seed.questions) setQuestions(seed.questions);
    navigate(path);
  };

  const reset = () => {
    resetGame();
    setUser(null);
    navigate("/");
  };

  return (
    <div className="fixed bottom-2 right-2 z-50 flex flex-col gap-1 bg-black/80 p-2 rounded-lg text-xs">
      <span className="text-white/60 px-1">DEV</span>
      {destinations.map(({ label, path, seed }) => (
        <button
          key={path}
          onClick={() => goTo(path, seed)}
          className="text-white bg-white/10 hover:bg-white/20 rounded px-2 py-1 text-left"
        >
          {label}
        </button>
      ))}
      <button
        onClick={reset}
        className="text-white bg-red-500/30 hover:bg-red-500/50 rounded px-2 py-1 text-left mt-1"
      >
        Reset
      </button>
    </div>
  );
}
