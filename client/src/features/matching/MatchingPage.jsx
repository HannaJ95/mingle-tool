import Button from "../../components/ui/Button";
import Text from "../../components/ui/Text.jsx";
import useAppStore from "../../store/useAppStore";

import cardImages from "../../assets/cards/cardImages.js";

export default function MatchingPage() {
  const { card, group } = useAppStore();

  const cardImage = card ? cardImages[card.name.toLowerCase()] : null;

  return (
    <div className="min-w-80 max-w-screen flex flex-col items-center min-h-screen justify-end">
      <main className="h-full flex flex-col gap-6 p-6 w-full max-w-md">
        <Text as="h1" variant="heading" className="text-dark text-center">
          Track down your matches
        </Text>

        <div className="flex flex-col items-center gap-4">
          <div className="rounded-[25px] shadow-[4px_4px_26px_0px_rgba(18,18,18,0.30)]">
            {cardImage ? (
              <img
                src={cardImage}
                alt={`Groupcard with illustration: ${card.name}`}
                className="max-w-full max-h-112.5"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-[25px]" />
            )}
          </div>
          <Text as="p" variant="subheading" className="text-dark">
            Total: {group?.members?.length ?? 0} members
          </Text>
        </div>

        <Button>We are ready</Button>
      </main>
    </div>
  );
}
