import { useEffect, useRef } from "react";
import Text from "../../components/ui/Text.jsx";
import CloseIcon from "../../assets/icons/close.svg?react";

export default function ContactModal({ user, onClose }) {
  const dialogRef = useRef(null);

  const fields = [
    { label: "Name", value: user.name },
    { label: "Mail", value: user.email },
    { label: "Instagram", value: user.instagram },
    { label: "LinkedIn", value: user.linkedin },
    { label: "Website", value: user.website },
  ].filter(({ value }) => value);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  function handleClick(e) {
    if (e.target === dialogRef.current) onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleClick}
      className="fixed top-1/2 -translate-y-1/2 left-0 right-0 mx-auto rounded-3xl bg-primary text-light p-8 w-full max-w-md flex flex-col gap-6 backdrop:bg-black/50"
    >
      {/* CLOSE BUTTON */}
      <button
        aria-label="Close contact modal"
        onClick={onClose}
        className="absolute top-4 right-4 text-light"
      >
        <CloseIcon />
      </button>

      {/* HEADING */}
      <Text as="h2" variant="label">
        CONTACT
      </Text>

      {/* CONTACT FIELDS */}
      <dl className="flex flex-col gap-4">
        {fields.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col gap-2 border-b border-white"
          >
            <Text as="dt" variant="bodyBold" className="uppercase">
              {label}:
            </Text>
            <Text as="dd" variant="bodyRegular">
              {value}
            </Text>
          </div>
        ))}
      </dl>
    </dialog>
  );
}
