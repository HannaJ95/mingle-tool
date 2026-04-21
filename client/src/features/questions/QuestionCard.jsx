import Text from "../../components/ui/Text";

export default function QuestionCard({ question }) {
  return (
    <article
      tabIndex={0}
      aria-label="Question card"
      className="
        aspect-10/16
        max-h-full
        overflow-y-auto
        rounded-3xl
        bg-primary
        p-4
        shadow-[4px_4px_26px_0px_rgba(18,18,18,0.30)]"
    >
      <div className="
        h-full 
        flex 
        flex-col 
        justify-center 
        gap-4 
        text-center 
        wrap-break-word 
        rounded-3xl 
        border-5 
        border-light"
      >

        <Text as="p" variant="subheading" className="text-light px-10">
          {question}
        </Text>

      </div>
    </article>
  );
}
