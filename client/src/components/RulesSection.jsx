import Text from "./Text";

export default function RulesSection({title, description}) {
    return(
        <div className="">
            <Text as="h2">{title}</Text>
            <Text>{description}</Text>
        </div>
    );
}