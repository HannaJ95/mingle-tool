export default function Text({ as: Tag = "p", children, className = "" }) {
  const baseStyles = "";

  const variants = {
    h1: "text-3xl font-bold text-gray-800",
    h2: "text-2xl font-semibold text-gray-800",
    p: "text-base text-gray-800"
  };

  return (
    <Tag className={`${baseStyles} ${variants[Tag]} ${className}`}>
      {children}
    </Tag>
  );
}