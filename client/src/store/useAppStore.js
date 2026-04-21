import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAppStore = create(
  persist(
    (set) => ({
      user: null,
      group: null,
      card: null,
      questions: [],
      contacts: [],
      step: "register",

      setUser: (user) => set({ user }),
      setStep: (step) => set({ step }),
      setGroup: (group) => set({ group }),
      setCard: (card) => set({ card }),
      setQuestions: (questions) => set({ questions }),
      setContacts: (contacts) => set({ contacts }),
      resetGame: () => set({ group: null, card: null, questions: [], contacts: [], step: "register" }),
    }),
    {
      name: "mingle-session",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAppStore;
