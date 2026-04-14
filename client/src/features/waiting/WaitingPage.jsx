  import Text from "../../components/ui/Text.jsx";
  import { useEffect } from "react";
  import socket from "../../socket";
  import { useNavigate } from "react-router";
  import useAppStore from "../../store/useAppStore";

  export default function WaitingPage() {
    const navigate = useNavigate();

    const user = useAppStore((state) => state.user);
    // const user = useAppStore((state) => state.user) || 
    // JSON.parse(sessionStorage.getItem("user") || "null");

    const setGroup = useAppStore((state) => state.setGroup);
    

  useEffect(() => {
    if (!user || !user.id) return; 
    socket.emit("joinQueue", user);

    console.log("Joining queue as:", user);


    const handleGroupReady = (group) => {
      console.log("GROUP FROM SERVER:", group);

      setGroup(group);

      navigate("/matching");
    };

    socket.on("groupReady", handleGroupReady);

    return () => {
      socket.off("groupReady", handleGroupReady);
    };
  }, []);

    //   return <div>Waiting for players...</div>;
    return (
        <div className="min-w-80 max-w-screen flex flex-col items-center">
        <main className="min-h-screen w-full max-w-md flex flex-col justify-center gap-10 xs:gap-14">
          <header className="text-center">
            <Text as="h1" variant="heading" className="text-primary">
              We are finding <br /> your Group!
            </Text>
          </header>

          {/* place for mp4 animation */}
          <div className="w-full aspect-square bg-gray-200"></div>

          <Text as="h1" variant="heading" className="text-center text-primary">
            Almost there...
          </Text>
        </main>
      </div>
    );
  }
