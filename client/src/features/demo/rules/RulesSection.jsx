import Text from "../../../components/ui/Text";

export default function RulesSection({ title, description, index }) {
  return (
    <div className="flex gap-4 items-start">
      {/* CIRCLE */}
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary text-white font-bold text-2xl shrink-0">
        {index}
      </div>

      {/* TEXT */}
      <div className="flex flex-col gap-2">
        <Text as="h2" variant="subheading" className="text-light">
          {title}
        </Text>

        <Text className="text-light">{description}</Text>
      </div>
    </div>
  );
}
