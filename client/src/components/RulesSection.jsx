import Text from "./Text";

export default function RulesSection({title, description}) {
    return(
        <div className="space-y-2">
            <Text as="h2">{title}</Text>
            <Text>{description}</Text>
        </div>
    );
}