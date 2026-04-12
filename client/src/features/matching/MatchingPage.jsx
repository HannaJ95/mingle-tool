import matchingCard from "../../assets/matching_card.svg";
import Button from "../../components/ui/Button";
import Text from "../../components/ui/Text.jsx";

export default function MatchingPage() {
  return (
    <div className="min-w-80 max-w-screen flex flex-col items-center min-h-screen justify-end">
      <main className="h-full flex flex-col gap-6 p-6 w-full max-w-md">
        <Text as="h1" variant="heading" className="text-dark text-center">
          Track down your matches
        </Text>

        <div className="flex flex-col items-center gap-4">
          <div className="rounded-[25px] shadow-[4px_4px_26px_0px_rgba(18,18,18,0.30)]">
            <img
              src={matchingCard}
              alt="Illustration of a matching card with group members"
              className="max-w-full max-h-112.5"
            />
          </div>
          <Text as="p" variant="subheading" className="text-dark">
            Total: 4 members
          </Text>
        </div>

        <Button>We are ready</Button>
      </main>
      </div>
  );
}
