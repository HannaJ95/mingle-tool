import PageLayout from '../components/layout/PageLayout.jsx'
import Text from "../components/Text.jsx";
import RulesSection from "../components/RulesSection.jsx";

function RulesPage() {
  return (
    <PageLayout >
      <div className="space-y-6 text-center max-w-xl mx-auto">

        <Text as="h1">Game Rules</Text>

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
    </PageLayout>
  );
}

export default RulesPage;