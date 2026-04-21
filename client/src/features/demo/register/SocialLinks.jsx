import { useState } from "react";
import Field from "./Field";

import InstagramIcon from "../../../assets/icons/instagram.svg?react";
import LinkedinIcon from "../../../assets/icons/linkedin.svg?react";
import WebsiteIcon from "../../../assets/icons/website.svg?react";

const SOCIAL_LINKS = [
  {
    key: "instagram",
    label: "Instagram",
    icon: <InstagramIcon />,
    placeholder: "@insta_username",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: <LinkedinIcon />,
    placeholder: "linkedin.com/in/...",
  },
  {
    key: "website",
    label: "Website",
    icon: <WebsiteIcon />,
    placeholder: "yoursite.com",
  },
];

export default function SocialLinks({ formData, onChange }) {
  const [open, setOpen] = useState("instagram");

  const activeLink = SOCIAL_LINKS.find((l) => l.key === open);

  return (
    <fieldset className="border-none flex flex-col gap-4.5">
      <legend className="text-2xl font-medium uppercase pb-4.5 text-primary">Socials</legend>

      {/* SHOW CLICKABLE ICON-BUTTONS */}
      <div className="flex justify-between items-center">
        {SOCIAL_LINKS.map(({ key, label, icon }) => {
          const isActive = open === key || !!formData[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => setOpen(key)}
              aria-label={`${label}${formData[key] ? ` — ${formData[key]}` : ""}`}
              aria-pressed={isActive}
              className={`flex items-center justify-center aspect-square rounded-[9px] ${isActive ? "bg-primary text-white" : "bg-white text-primary"}`}
            >
              {icon}
            </button>
          );
        })}
      </div>

      {/* SOCIAL INPUT FIELD */}
      <Field
        id={open}
        label={activeLink?.label}
        placeholder={activeLink?.placeholder}
        type="url"
        value={formData[open]}
        onChange={onChange(open)}
        maxLength={200}
      />
    </fieldset>
  );
}

