import Text from "./Text";

export default function RulesSection({title, description}) {
    return(
        <div className="flex flex-col gap-4">
            <Text as="h2">{title}</Text>
            <Text>{description}</Text>
        </div>
    );
}