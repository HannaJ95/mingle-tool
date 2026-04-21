import { useState } from "react";
import Button from "../../../components/ui/Button";
import Field from "./Field";
import SocialLinks from "./SocialLinks";
import { demoUser } from "../DemoAppStore";

export default function RegisterForm({ onNext }) {
  const [formData, setFormData] = useState({
    name: [demoUser.firstname, demoUser.lastname].filter(Boolean).join(" "),
    email: demoUser.email,
    instagram: demoUser.instagram ?? "",
    linkedin: demoUser.linkedin ?? "",
    website: demoUser.website ?? "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onNext(); }}
      aria-label="Registration form"
      noValidate
      className="flex flex-col gap-5 xs:gap-8"
    >
      <div className="flex flex-col gap-6 xs:gap-10">
        <Field
          id="name"
          label="Name"
          placeholder="Fullname"
          value={formData.name}
          onChange={handleChange("name")}
          maxLength={50}
          required
        />
        <Field
          id="email"
          label="Mail"
          placeholder="mail@example.com"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          maxLength={254}
          required
        />
      </div>

      <SocialLinks formData={formData} onChange={handleChange} />

      <Button type="submit" arrow>
        Ready
      </Button>
    </form>
  );
}
