import { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

import InstagramIcon from "../../assets/instagram.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import LinkIcon from "../../assets/link.svg";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    linkedin: "",
    portfolio: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  {
    /* VALIDATE NAME AND EMAIL INPUT + SETERRORS */
  }
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("submit", formData);
    // navigate("/rules");
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Registration form"
      noValidate
      className="flex flex-col gap-14"
    >
      {/* EVENT-INFO */}
      <div className="flex justify-between border-b-1 items-center">
        <h2 className="text-2xl font-medium">Event:</h2>
        <p className="text-right font-bold text-base">
          Information om eventet. Välkommen
        </p>
      </div>

      {/* REQUIRED NAME FIELD */}
      <div className="flex flex-col gap-14">
        <Field
          id="name"
          label="Name"
          placeholder="First name _ Last name"
          value={formData.name}
          onChange={handleChange("name")}
          error={errors.name}
          maxLength={50}
          required
        />

        {/* REQUIRED EMAIL FIELD */}
        <Field
          id="email"
          label="Mail"
          placeholder="mail@example.com"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          error={errors.email}
          maxLength={254}
          required
        />
      </div>

      {/* OPTIONAL SOCIAL FIELDS */}
      <SocialLinks formData={formData} onChange={handleChange} />

      <Button type="submit" arrow>Ready</Button>
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  required = false,
  maxLength,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-2xl font-medium uppercase">
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`border-b font-normal outline-none 
                    placeholder:text-muted placeholder:text-xs min-h-[44px] 
                    ${error ? "border-red-600" : "border-black focus:border-black"}
                `}
      />

      {/* ERROR MESSAGE */}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          className="text-xs text-red-600 flex items-center gap-1 mt-1"
        >
          <span aria-hidden="true">!</span>
          {error}
        </span>
      )}
    </div>
  );
}

function SocialLinks({ formData, onChange }) {
  const [open, setOpen] = useState(null);

  const links = [
    {
      key: "instagram",
      label: "Instagram",
      icon: <img src={InstagramIcon} alt="" aria-hidden="true" />,
      placeholder: "instagram.com/...",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: <img src={LinkedinIcon} alt="" aria-hidden="true" />,
      placeholder: "linkedin.com/in/...",
    },
    {
      key: "portfolio",
      label: "Portfolio or webbsite",
      icon: <img src={LinkIcon} alt="" aria-hidden="true" />,
      placeholder: "yoursite.com",
    },
  ];

  return (
    <fieldset className="border-none p-0 m-0 flex flex-col gap-3">
      <legend className="sr-only">Social media links</legend>

      {/* SHOW CLICKABLE ICON-BUTTONS */}
      <div className="flex justify-between items-center" role="group">
        {links.map(({ key, label, icon }) => {
          const isActive = open === key || !!formData[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => setOpen(open === key ? null : key)}
              aria-label={`${label}${formData[key] ? ` — ${formData[key]}` : ""}`}
              aria-pressed={isActive}
              aria-expanded={open === key}
              className={`flex items-center justify-center rounded-2xl ${isActive ? "bg-black" : ""}`}
            >
              <span
                aria-hidden="true"
                className={`transition-colors duration-300 ${isActive ? "invert" : ""}`}
              >
                {icon}
              </span>
            </button>
          );
        })}
      </div>

      {/* OPTIONAL EXPANDED INPUT FIELD SOCIAL */}
      {open && (
        <Field
          id={open}
          label={links.find((l) => l.key === open)?.label}
          placeholder={links.find((l) => l.key === open)?.placeholder}
          type="url"
          value={formData[open]}
          onChange={onChange(open)}
          maxLength={200}
        />
      )}
    </fieldset>
  );
}
