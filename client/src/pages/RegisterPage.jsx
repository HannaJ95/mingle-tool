import { useSearchParams } from "react-router";
import PageLayout from "../components/layout/PageLayout";
import RegisterForm from "../components/registration/RegisterForm";

const VALID_ROLES = ["student", "company"];

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  // 
  if (!VALID_ROLES.includes(role)) {
    return (
      <PageLayout justify="center">
        <main>Invalid registration link. Please scan the QR code again.</main>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <header className="pb-12">
        <h1 className="text-4xl font-bold leading-8.75">Sign Up</h1>
      </header>

      <main>
        <RegisterForm />
      </main>
    </PageLayout>
  );
}
