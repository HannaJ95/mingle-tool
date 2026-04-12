import { useSearchParams } from "react-router";
import RegisterForm from "./RegisterForm";

import Text from "../../components/ui/Text";

const VALID_ROLES = ["student", "company"];

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  if (!VALID_ROLES.includes(role)) {
    return (
        <main className="min-w-screen min-h-screen p-6 flex items-center">
          <Text as="h1" variant="heading" className="text-center text-primary">
              Invalid registration link. Please scan the QR code again.
          </Text>
        </main>
    );
  }

  return (
      <div className="min-w-80 max-w-screen flex flex-col items-center">
      <div className="min-h-screen w-full max-w-md flex flex-col justify-end p-6">
        <header className="pb-12">
          <Text as="h1" variant="heading" className="text-primary">
            Sign Up
          </Text>
        </header>

        <main>
          <RegisterForm />
        </main>
      </div>
    </div>
  );
}
