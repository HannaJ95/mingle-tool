import RegisterForm from "./RegisterForm";
import Text from "../../../components/ui/Text";

export default function RegisterPage({ onNext }) {
  return (
    <div className="min-w-80 max-w-screen flex flex-col items-center">
      <div className="min-h-screen w-full max-w-md flex flex-col justify-end p-6">
        <header className="pb-12">
          <Text as="h1" variant="heading" className="text-primary">
            Sign Up
          </Text>
        </header>
        <main>
          <RegisterForm onNext={onNext} />
        </main>
      </div>
    </div>
  );
}
