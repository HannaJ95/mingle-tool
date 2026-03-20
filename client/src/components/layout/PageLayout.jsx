export default function PageLayout({ children, centered = true }) {
  return (
    <div className="min-h-screen max-w-full mx-auto px-6 flex flex-col m-10 items-center">
      {children}
    </div>
  )
}