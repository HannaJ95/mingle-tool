export const mockUser = {
  id: "mock-user-1",
  firstname: "Lina",
  lastname: "Andersson",
  email: "lina@example.com",
  role: "student",
  linkedin: "https://linkedin.com/in/lina",
  instagram: "@lina",
  portfolio: "https://lina.dev",
};

const mockMembers = [
  mockUser,
  {
    id: "mock-user-2",
    firstname: "Alex",
    lastname: "Berg",
    email: "alex@example.com",
    role: "company",
  },
  {
    id: "mock-user-3",
    firstname: "Sam",
    lastname: "Nilsson",
    email: "sam@example.com",
    role: "student",
  },
  {
    id: "mock-user-4",
    firstname: "Anna",
    lastname: "Karlsson",
    email: "Anna@example.com",
    role: "student",
  },
];

export const mockGroup = {
  id: "mock-group-1",
  status: "active",
  members: mockMembers,
};
export const mockCard = { id: "mock-card-1", name: "cat" };
export const mockQuestions = [
  { id: 1, question: "What surprised you the most when you started?" },
  { id: 2, question: "How do you stay updated in your industry?" },
  { id: 3, question: "What's a challenge you're dealing with right now?" },
];
