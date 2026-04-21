import { useEffect, useRef, useState } from "react";
import Text from "../../../components/ui/Text.jsx";
import CloseIcon from "../../../assets/icons/close.svg?react";
import CopyIcon from "../../../assets/icons/copy.svg?react"

export default function ModalContact({ user, onClose }) {
  const dialogRef = useRef(null);
  const [toast, setToast] = useState(false);

  const fields = [
    {
      label: "Name",
      value: [user.firstname, user.lastname].filter(Boolean).join(" "),
    },
    { label: "Mail", value: user.email },
    { label: "Instagram", value: user.instagram },
    { label: "LinkedIn", value: user.linkedin },
    { label: "Website", value: user.website },
  ];

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  function handleClick(e) {
    if (e.target === dialogRef.current) onClose();
  }

  function handleCopy(value) {
    navigator.clipboard.writeText(value);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleClick}
      className="fixed min-w-70 top-1/2 -translate-y-1/2 left-0 right-0 mx-auto rounded-3xl bg-primary text-light p-8 w-4/5 max-w-87.5 flex flex-col gap-6 backdrop:bg-white/70"
    >
      {/* TOAST */}
      {toast && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-light/70 text-primary text-sm px-4 py-2 rounded-full">
          Copied!
        </div>
      )}

      {/* CLOSE BUTTON */}
      <button
        aria-label="Close contact modal"
        onClick={onClose}
        className="absolute top-4 right-4 text-light"
      >
        <CloseIcon />
      </button>

      {/* HEADING */}
      <Text as="h2" variant="label" className="pt-8 pb-3">
        CONTACT
      </Text>

      {/* CONTACT FIELDS */}
      <dl className="flex flex-col gap-10">
        {fields.map(({ label, value }) => (
          <div
            key={label}
            className="relative flex flex-col gap-2 border-b border-white"
          >
            <Text as="dt" variant="bodyBold" className="uppercase">
              {label}:
            </Text>
            <Text as="dd" variant="bodyRegular" className={!value ? "pb-5" : ""}>
              {value}
            </Text>
            {(label === "Mail" || label === "Website") && value && (
              <button onClick={() => handleCopy(value)} aria-label={`Copy ${label}`} className="cursor-pointer">
                <CopyIcon className="absolute bottom-1 right-0" />
              </button>
            )}
          </div>
        ))}
      </dl>
    </dialog>
  );
}
