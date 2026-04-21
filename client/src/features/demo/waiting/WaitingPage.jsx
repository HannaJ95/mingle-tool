import Text from "../../../components/ui/Text.jsx";
import Button from "../../../components/ui/Button.jsx";
import waitingVideo from "../../../assets/video/Väntrum Motion-3.mp4";

export default function WaitingPage({ onNext }) {
  return (
    <div
      onClick={onNext}
      className="min-w-80 max-w-sm mx-auto w-screen flex flex-col items-center cursor-pointer"
    >
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
