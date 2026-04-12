import Text from "../../components/ui/Text";

export default function QuestionCard({ mainQuestion, extraQuestion }) {
  return (
    <article
      tabIndex={0}
      aria-label="Question card"
      className="
        aspect-9/16 
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

        <Text as="p" variant="subheading" className="text-light px-15">
          {mainQuestion}
        </Text>

      </div>
    </article>
  );
}
