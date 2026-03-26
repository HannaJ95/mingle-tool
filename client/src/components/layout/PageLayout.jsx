export default function PageLayout({ children, py = "py-14" }) {
  return (
    <div
      className={`min-h-screen max-w-sm mx-auto px-6 flex flex-col justify-between ${py}`}
    >
      {children}
    </div>
  );
}