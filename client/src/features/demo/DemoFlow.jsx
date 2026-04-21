import { useState } from "react";
import RegisterPage from "./register/RegisterPage";
import RulesPage from "./rules/RulesPage";
import WaitingPage from "./waiting/WaitingPage";
import MatchingPage from "./matching/MatchingPage";
import QuestionsPage from "./questions/QuestionsPage";
import ContactsPage from "./contact/ContactsPage";

import ArrowLeftIcon from "../../assets/icons/arrowLeft.svg?react";

const STEPS = ["register", "rules", "waiting", "matching", "questions", "contact"];

export default function DemoFlow() {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));
  const restart = () => setCurrentStep(0);

  const step = STEPS[currentStep];

  return (
    <div className="relative">
      {currentStep > 0 && (
        <button
          onClick={goBack}
          aria-label="Go back"
          className="fixed top-4 left-4 z-50 flex items-center justify-center size-10 rounded-full bg-light/50 backdrop-blur-sm cursor-pointer"
        >
          <ArrowLeftIcon />
        </button>
      )}

      {step === "register" && <RegisterPage onNext={goNext} />}
      {step === "rules" && <RulesPage onNext={goNext} />}
      {step === "waiting" && <WaitingPage onNext={goNext} />}
      {step === "matching" && <MatchingPage onNext={goNext} />}
      {step === "questions" && <QuestionsPage onNext={goNext} />}
      {step === "contact" && <ContactsPage onRestart={restart} />}
    </div>
  );
}
