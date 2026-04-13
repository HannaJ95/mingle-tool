import matchingCard from "../../assets/matching_card.svg";
import Button from "../../components/ui/Button";
import Text from "../../components/ui/Text.jsx";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import socket from "../../socket";
import { useEffect } from "react";


export default function MatchingPage() {

  const location = useLocation();
  const navigate = useNavigate();
  const { roomId, players } = location.state || {};

  useEffect(() => {
  const handleStart = () => {
    console.log("Starting questions...");
    navigate("/questions");
  };

  socket.on("startQuestions", handleStart);

  return () => {
    socket.off("startQuestions", handleStart);
  };
}, []);

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
            Total: {players?.length || 0} members
          </Text>
        </div>

        <Button onClick={() => socket.emit("ready") }>We are ready</Button>
      </main>
      </div>
  );
}
