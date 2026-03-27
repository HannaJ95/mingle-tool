export default function QuestionCard({ mainQuestion, extraQuestion }) {
  return (
    <article
      tabIndex={0}
      aria-label="Question card"
      className="w-full h-[60dvh] overflow-y-auto rounded-3xl bg-gray-200 p-8 max-w-9/10 mx-auto"
    >
      <div className="min-h-full flex flex-col justify-center gap-4 text-center wrap-break-word">
        <p className="text-2xl font-bold">{mainQuestion}</p>
        {extraQuestion && (
          <p className="text-2xl font-bold">
            <span className="sr-only">Extra question: </span>
            <span
              className="text-sm font-medium uppercase tracking-widest"
              aria-hidden="true"
            >
              Extra:{" "}
            </span>
            <br />
            {extraQuestion}
          </p>
        )}
      </div>
    </article>
  );
}
