import PageLayout from '../components/layout/PageLayout.jsx'
import Text from "../components/Text.jsx";
import RulesSection from "../components/RulesSection.jsx";
import Button from "../components/ui/Button";


function RulesPage() {
  return (
    <PageLayout >
      <div className="max-w-xl mx-auto flex flex-col px-6 pt-14">

        <Text as="h1" className="text-center mb-12">
          Game Rules
        </Text>

        <div className="flex flex-col gap-9">
        <RulesSection
          title="Get Your Card"
          description="Start the game and get your mystery animal card"
        />

        <RulesSection
          title="Find your group"
          description="Mingle, ask around and track down others with the same animal."
        />

        <RulesSection
          title="Unlock the fun"
          description="Found your group? Boom – conversation topics unlocked."
        />

        <RulesSection
          title="Stay connected"
          description="Game ends, but the connections don't."
        />
        </div>
      <div className="mt-12 mb-12">
        <Button variant="primary" arrow>
          START
        </Button>
      </div>
      </div>
      <div className="h-14">

      </div>
    </PageLayout>
  );
}


export default RulesPage;