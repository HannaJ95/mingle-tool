export default function PageLayout({
  children,
  py = "py-14",
  justify = "between",
}) {
  const justifyClass = {
    between: "justify-between",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <div
      className={`min-h-screen max-w-sm mx-auto px-6 flex flex-col ${py} ${justifyClass[justify]}`}
    >
      {children}
    </div>
  );
}
