import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/ui/Button";
import QuestionCard from "../components/questions/QuestionCard";

export default function QuestionsPage() {
  const questions = [
    {
      mainQuestion: "1. How do you feel about AI?",
      extraQuestion: "1. How do you work with AI?",
    },
    {
      mainQuestion: "2. How do you feel about AI?",
      extraQuestion: "2. How do you work with AI?",
    },
    {
      mainQuestion: "3. How do you feel about AI?",
      extraQuestion: "3. How do you work with AI?",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <PageLayout justify="between">
      <header className="flex-1 pb-12 text-center">
        <h1 className="text-4xl font-bold leading-8.75">Let´s Talk!</h1>
      </header>

      <main className="flex flex-1 flex-col justify-between gap-10">
        <div className="relative w-full">
          <div aria-live="polite" aria-atomic="true">
            <QuestionCard {...questions[current]} />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 -right-3 flex justify-between">
            <button
              aria-label="Previous question"
              className="size-14 rounded-full bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            >
              ←
            </button>
            <button
              aria-label="Next question"
              className="size-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
              onClick={() =>
                setCurrent((c) => Math.min(questions.length - 1, c + 1))
              }
            >
              →
            </button>
          </div>
        </div>

        <Button variant="secondary">We are finished</Button>
      </main>
    </PageLayout>
  );
}
