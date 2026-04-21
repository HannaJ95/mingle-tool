import Button from "../../../components/ui/Button";
import Text from "../../../components/ui/Text.jsx";
import cardIllustrations from "../../../assets/cards/cardIllustrations.js";
import { demoCard, demoGroup } from "../DemoAppStore";

export default function MatchingPage({ onNext }) {
  const cardImage = cardIllustrations[demoCard.name.toLowerCase()];

  return (
    <div className="max-w-sm mx-auto min-w-80 w-screen flex flex-col items-center min-h-screen justify-end">
      <main className="h-full flex flex-col gap-6 p-6 w-full max-w-md">
        <Text as="h1" variant="heading" className="text-dark text-center">
          Track down your matches
        </Text>

        <div className="flex flex-col items-center gap-4">
          <div className="rounded-[25px] shadow-[4px_4px_26px_0px_rgba(18,18,18,0.30)]">
            {cardImage ? (
              <img
                src={cardImage}
                alt={`Groupcard with illustration: ${demoCard.name}`}
                className="max-w-full max-h-112.5"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-[25px]" />
            )}
          </div>
          <Text as="p" variant="subheading" className="text-dark">
            Total: {demoGroup.members.length} members
          </Text>
        </div>

        <Button onClick={onNext}>We are ready</Button>
      </main>
    </div>
  );
}
