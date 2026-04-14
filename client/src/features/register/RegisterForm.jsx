import { useState } from "react";
import Button from "../../components/ui/Button";
import { useSearchParams } from "react-router";
import Field from "./Field";
import SocialLinks from "./SocialLinks";
import useAppStore from "../../store/useAppStore";
import { connectSocket } from "../../services/socket";

export default function RegisterForm() {
  const { user, setUser, setStep } = useAppStore();

  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: user ? [user.firstname, user.lastname].filter(Boolean).join(" ") : "",
    email: user?.email ?? "",
    instagram: user?.instagram ?? "",
    linkedin: user?.linkedin ?? "",
    website: user?.website ?? "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      setErrors((prev) => ({ ...prev, server: data.error }));
      return;
    }

    setUser(data.user);
    connectSocket(data.user.id);
    setStep("rules");
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Registration form"
      noValidate
      className="flex flex-col gap-5 xs:gap-8"
    >
      {/* REQUIRED NAME FIELD */}
      <div className="flex flex-col gap-6 xs:gap-10">
        <Field
          id="name"
          label="Name"
          placeholder="Fullname"
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

      <Button type="submit" arrow>
        Ready
      </Button>
    </form>
  );
}

