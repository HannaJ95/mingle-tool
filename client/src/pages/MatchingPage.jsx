import PageLayout from "../components/layout/PageLayout";
import matchingCard from "../assets/matching_card.svg";
import Button from "../components/ui/Button";

export default function MatchingPage() {
  return (
    <PageLayout py="py-6">
      <header className="pb-6 text-center">
        <h1 className="text-4xl font-bold leading-9">
          Find your card <br />
          twins-track down <br />
          your matches!
        </h1>
      </header>

      <main className="flex flex-1 flex-col justify-between items-center text-center">
        
        <div className="flex flex-col items-center gap-4.5">

          <img src={matchingCard} alt="Matching card" />

          <p className="text-2xl font-medium leading-[18px]">
            Hunt down your wild 5
          </p>
          
        </div>

        <Button variant="secondary">We are ready</Button>
        
      </main>
    </PageLayout>
  );
}
