import Text from "../../components/ui/Text.jsx";

export default function WaitingPage() {
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
