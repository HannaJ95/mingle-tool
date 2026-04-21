import { useEffect } from "react";
import waitingVideo from "../../assets/video/Väntrum Motion-3.mp4";
import Text from "../../components/ui/Text.jsx";
import { getSocket } from "../../services/socket";
import useAppStore from "../../store/useAppStore";

export default function WaitingPage() {
  const { user, setGroup, setCard, setQuestions, setStep } = useAppStore();

  useEffect(() => {
    const socket = getSocket();
    if (!socket || !user) return;

    function onMatchFound({ group, card, questions }) {
      setGroup(group);
      setCard(card);
      setQuestions(questions);
      setStep("matching");
    }

    socket.on("match_found", onMatchFound);
    socket.emit("join_waiting_room", user.id);

    return () => {
      socket.off("match_found", onMatchFound);
    };
  }, []);

  return (
    <div className="min-w-80 max-w-sm mx-auto w-screen flex flex-col items-center">
      <main className="min-h-screen w-full max-w-md flex flex-col justify-center items-center gap-10 xs:gap-14">
          <Text as="h1" variant="heading" className="text-black text-center">
            We are finding <br /> your Group!
          </Text>

        <div className="w-screen max-w-md aspect-square">
          <video
          src={waitingVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full"
        />
        </div>

        <Text as="h1" variant="heading" className="text-center text-black">
          Almost there...
        </Text>
      </main>
    </div>
  );
}
