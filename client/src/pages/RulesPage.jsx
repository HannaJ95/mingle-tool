import PageLayout from '../components/layout/PageLayout.jsx'
import Text from "../components/Text.jsx";
import RulesSection from "../components/RulesSection.jsx";
import Button from "../components/ui/Button";
import { socket } from "../socket";

function RulesPage() {

    const handleStart = () => {
    console.log("START CLICKED");
    socket.emit("joinQueue");
  };

  return (
  <div className="min-h-screen bg-[#001A52]">  
    <PageLayout >
      <div className="max-w-xl mx-auto flex flex-col px-6 pt-14 ">

        <Text as="h1" className="text-center mb-12 text-white">
          How it works
        </Text>

        <div className="flex flex-col gap-9 ">
        <RulesSection
          index="1"
          title="Get you an animal card"
          description="You get a unique animal card. Everyone in your grouphas the same animal"
        />

        <RulesSection
          index="2"
          title="Find your pack"
          description="Walk around the room and ask: 'What animal do you have?' Find all 3 in your group."
        />

        <RulesSection
          index="3"
          title="Answer questions together"
          description="When the group is gathered, you'll get 3 questions to discuss. No right or wrong answers."
        />

        <RulesSection
          index="4"
          title="Collect contacts"
          description="Finally, you see each others contact information. Save them and play a new round!"
        />
        </div>
      <div className="mt-12 mb-12">
        <Button onClick={handleStart} variant="primary" arrow>
          START
        </Button>
      </div>
      </div>
      <div className="h-14">

      </div>
    </PageLayout>
    </div>
  );
}


export default RulesPage;