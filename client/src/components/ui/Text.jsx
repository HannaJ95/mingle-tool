export default function Text({ as: Tag = "p", children, variant, className = "" }) {


  const styles = {
    heading: "text-4xl font-bold leading-10",
    subheading: "text-2xl font-bold leading-8",
    label: "text-2xl font-medium leading-8",
    body: "text-base font-medium leading-6",
    bodyBold: "text-base font-bold leading-6",
    bodyRegular: "text-sm font-normal leading-[1.375rem]",
  };

  return (
    <Tag className={`${styles[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
