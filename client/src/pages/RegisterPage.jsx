import PageLayout from "../components/layout/PageLayout";
import RegisterForm from "../components/registration/RegisterForm";

export default function RegisterPage() {
  return (
    <PageLayout>
      <header className="pb-12">
        <h1 className="text-4xl font-medium leading-[35px]">Sign Up</h1>
      </header>

      <main>
        <RegisterForm />
      </main>
    </PageLayout>
  );
}
