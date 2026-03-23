export default function Text({ as: Tag = "p", children, className = "" }) {
  const baseStyles = "text-gray-800";

  const variants = {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-semibold",
    p: "text-base"
  };

  return (
    <Tag className={`${baseStyles} ${variants[Tag]} ${className}`}>
      {children}
    </Tag>
  );
}