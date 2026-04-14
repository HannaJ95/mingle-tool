import { useState } from "react";
import Button from "../../components/ui/Button.jsx";
import Text from "../../components/ui/Text.jsx";
import QuestionCard from "./QuestionCard";
import useAppStore from "../../store/useAppStore";

import ArrowLeftIcon from "../../assets/icons/arrowLeft.svg?react";
import ArrowRightIcon from "../../assets/icons/arrowRight.svg?react";

export default function QuestionsPage() {

  const navigate = useNavigate();
  const { questions } = useAppStore();

  const [current, setCurrent] = useState(0);

  return (
    <div className="min-w-80 max-w-screen flex flex-col items-center min-h-screen justify-end">
      <main className="h-full max-w-md flex flex-col items-center gap-10 p-6">
        <Text as="h1" variant="heading">
          Let´s Talk!
        </Text>

        {/* QUESTION CARD WITH QUESTION */}
        <div className="relative">

          {/* CARD */}
          <div aria-live="polite" aria-atomic="true">
            <QuestionCard question={questions[current].question} />
          </div>

          {/* NAV BUTTONS */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between">
            <NavButton
              label="Previous question"
              icon={ArrowLeftIcon}
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            />
            <NavButton
              label="Next question"
              icon={ArrowRightIcon}
              onClick={() =>
                setCurrent((c) => Math.min(questions.length - 1, c + 1))
              }
            />
          </div>
        </div>

        <Button className={current === questions.length - 1 ? "" : "invisible pointer-events-none"}>
          We are finished
        </Button>

      </main>
    </div>
  );
}

function NavButton({ label, icon: Icon, onClick }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="flex items-center justify-center text-light size-17 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
    >
      <Icon />
    </button>
  );
}
