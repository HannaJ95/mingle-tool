import { upsertUser } from "../db/models/user.js";

export async function registerUser(req, res) {
  const { name, email, role, instagram, linkedin, website } = req.body;

  // VALIDATE REQUIRED FIELDS NAME, EMAIL AND ROLE
  if (!name || !email || !role) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  // EMAIL VALIDATION
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res
      .status(400)
      .json({ error: "Please enter a valid email address." });
  }

  // VALIDATE ROLE
  if (!["student", "company"].includes(role)) {
    return res
      .status(400)
      .json({
        error: "Invalid registration link. Please scan the QR code again.",
      });
  }

  // SPLIT NAME INTO FIRSTNAME AND LASTNAME
  const [firstname, ...rest] = name.trim().split(" ");
  const lastname = rest.join(" ") || null;

  // SAVE USER
  const { data: user, error } = await upsertUser({
    firstname,
    lastname,
    email,
    role,
    instagram: instagram || null,
    linkedin: linkedin || null,
    website: website || null,
  });
  if (error) {
    return res.status(500).json({ error: "Something went wrong, please try again" });
  }

  res.status(201).json({ user });
}
