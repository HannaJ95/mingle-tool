export default function PageLayout({ children, justify = "between" }) {
  return (
    <div
      className={`min-h-screen max-w-sm mx-auto px-6 flex flex-col py-14 ${justify === "between" ? "justify-end" : "justify-center"}`}
    >
      {children}
    </div>
  );
}