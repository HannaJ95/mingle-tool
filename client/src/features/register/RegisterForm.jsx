import { useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate, useSearchParams } from "react-router";
import Field from "./Field";
import SocialLinks from "./SocialLinks";
import socket from "../../socket";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    linkedin: "",
    website: "",
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

    console.log("USER FROM DB:", data);
    socket.emit("joinQueue", data.user);

    if (!response.ok) {
      setErrors((prev) => ({ ...prev, server: data.error }));
      return;
    }

    sessionStorage.setItem("userId", JSON.stringify(data.user.id));
    navigate("/rules");
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

