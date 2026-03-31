import Text from "./Text";

export default function RulesSection({ title, description, index }) {
  return (
    <div className="flex gap-4 items-start">

      {/* CIRCLE */}
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E51536] text-white font-bold flex-shrink-0">
        {index}
      </div>

      {/* TEXT */}
      <div className="flex flex-col gap-1">
        <Text as="h2" className="text-white">
          {title}
        </Text>

        <Text className="text-white">
          {description}
        </Text>
      </div>

    </div>
  );
}