import PageLayout from "../components/layout/PageLayout";
import RegisterForm from "../components/registration/RegisterForm";

export default function RegisterPage() {
  return (
    <PageLayout>
      <div className="max-w-xl ml-6 px-6 py-12 flex flex-col gap-12">

        <header className="pb-12">
          <h1 className="text-4xl font-bold leading-[35px]">Sign Up</h1>
        </header>

        <main>
          <RegisterForm />
        </main>
        </div>
      </PageLayout>
    );
  }
