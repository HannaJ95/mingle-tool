import { create } from "zustand";

const useAppStore = create((set) => ({
  user: {
    id: 1,
    firstname: "Lars",
    lastname: "Larsson",
    email: "Larsson@test.com",
    role: "student",
    instagram: null,
    linkedin: "linkedin.com/in/Larsson",
    website: null,
  },
  group: {
    id: 1,
    status: "active",
    members: [
      {
        id: 2,
        firstname: "Lena",
        lastname: null,
        role: "student",
        email: "Lensson@test.com",
        instagram: null,
        linkedin: "linkedin.com/in/LLensson",
        website: "LLensson.dev",
      },
      {
        id: 3,
        firstname: "Acme AB",
        lastname: null,
        role: "company",
        email: "hello@acme.com",
        instagram: null,
        linkedin: "linkedin.com/in/acme",
        website: null,
      },
      {
        id: 1,
        firstname: "Lars",
        lastname: "Larsson",
        role: "student",
        email: "Larsson@test.com",
        instagram: null,
        linkedin: "linkedin.com/in/Larsson",
        website: null,
      },
      {
        id: 4,
        firstname: "Bill",
        lastname: "Billsson",
        role: "student",
        email: "@bolt.com",
        instagram: "bolt_ig",
        linkedin: "BoltInc/linkedin",
        website: "bolt.com",
      },
    ],
  },
  card: {
    id: 1,
    name: "hund",
  },
  questions: [
    {
      id: 10,
      question: "Vad motiverar dig mest i ditt arbete?",
      topics: { name: "Karriär" },
    },
    {
      id: 11,
      question: "Hur ser din idealiska arbetsplats ut?",
      topics: { name: "Kultur" },
    },
    {
      id: 12,
      question: "Vilket projekt är du mest stolt över?",
      topics: { name: "Erfarenhet" },
    },
  ],
  contacts: [],

  setUser: (user) => set({ user }),
  setGroup: (group) => set({ group }),
  setCard: (card) => set({ card }),
  setQuestions: (questions) => set({ questions }),
  setContacts: (contacts) => set({ contacts }),
}));

export default useAppStore;
