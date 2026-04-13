import Text from "../../components/ui/Text.jsx";
import RulesSection from "./RulesSection.jsx";
import Button from "../../components/ui/Button.jsx";
import socket from "../../socket";
import { useNavigate } from "react-router";

function RulesPage() {
const navigate = useNavigate();

const handleContinue = () => {
  console.log("CLICKED");
  socket.emit("joinQueue");
  navigate("/waiting");
};

  return (
    <div className="min-w-80 max-w-screen flex flex-col items-center bg-primary">
      <div className="min-h-screen w-full max-w-md flex flex-col justify-end p-6">
        <header>
          <Text
            as="h1"
            variant="heading"
            className="mb-12 text-white uppercase"
          >
            Game Rules
          </Text>
        </header>

        <main className="flex flex-col">
          <div className="flex flex-col gap-8 pb-14">
            <RulesSection
              index="1"
              title="Get you an animal card"
              description="You get a unique animal card. Everyone in your group has the same animal."
            />

            <RulesSection
              index="2"
              title="Find your pack"
              description="Walk around the room and ask: 'What animal do you have?' Find all 4 in your group."
            />

            <RulesSection
              index="3"
              title="Answer questions together"
              description="When the group is together, you get 3 questions to discuss. No right or wrong answers."
            />

            <RulesSection
              index="4"
              title="Collect contacts"
              description="Finally, you see each other's contact information. Save them and play a new round!"
            />
          </div>

          <Button arrow onClick={handleContinue}>START</Button>
        </main>
      </div>
    </div>
  );
}

export default RulesPage;
