export type TeamMember = {
  name: string;
  role: string;
};

export const patron: TeamMember = {
  name: "Dr. Andrew Katumba",
  role: "Patron",
};

export const committee: TeamMember[] = [
  { name: "Hakizimana Sylvan", role: "Co-Chairperson" },
  { name: "Elisha Alvin Bifandhuba", role: "Co-Chairperson" },
  { name: "Alinda Larry Musiimenta", role: "Deputy Chairperson" },
  { name: "Crystal Zawedde", role: "Secretary" },
  { name: "Able Abenaitwe", role: "Technical / AI Lead" },
  { name: "Ijoot Anthony", role: "Projects & Innovation Lead" },
  { name: "Drileba Shem Raymond", role: "Partnerships & Outreach" },
  { name: "Paul Pascal", role: "Partnerships & Outreach" },
  { name: "Kobusingye Nable", role: "Communications & Media" },
  { name: "Zoora Harrison", role: "Finance / Logistics Lead" },
];

export type Track = {
  id: "beginner" | "intermediate";
  label: string;
  level: string;
  description: string;
  topics: string[];
};

export const tracks: Track[] = [
  {
    id: "beginner",
    label: "Beginner",
    level: "Foundation level",
    description:
      "New to code or AI? Start with Python and data, then take your first steps in machine learning.",
    topics: [
      "Python",
      "Working with data",
      "Charts",
      "Basic statistics",
      "First machine learning ideas",
    ],
  },
  {
    id: "intermediate",
    label: "Intermediate",
    level: "Applied level",
    description:
      "Put your coding and data skills to work with models for text, images, and prediction.",
    topics: [
      "Machine learning",
      "Text",
      "Images",
      "Prediction",
      "Faster-paced learning",
    ],
  },
];

export type Stage = {
  name: string;
  description: string;
};

export const stages: Stage[] = [
  {
    name: "Learn",
    description: "DataCamp courses at your own pace, matched to your track.",
  },
  {
    name: "Collaborate",
    description: "Find a problem worth solving and a team with different skills.",
  },
  {
    name: "Build",
    description: "Work on a prototype with mentorship and technical reviews.",
  },
  {
    name: "Demonstrate",
    description: "Share what you built, explain what you learned, and plan what comes next.",
  },
];

export const disciplines = [
  "Engineering",
  "Computing",
  "Science",
  "Business",
  "Design",
  "Health",
  "Agriculture",
  "Law",
  "Arts",
  "Education",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Learning", href: "/learning/" },
  { label: "Team", href: "/team/" },
];

export const CONTACT_EMAIL = "turingaiclub@gmail.com";


export type Concept = {
  id: string;
  label: string;
  question: string;
  problem: string;
  idea: string;
  solution: string;
};

// Generic visual concepts only (illustrative, not TuringAI projects).
export const concepts: Concept[] = [
  {
    id: "transport",
    label: "Campus transport",
    question: "Could we spend less time waiting?",
    problem: "Long, unpredictable waits for campus transport",
    idea: "Predict demand from simple historical patterns",
    solution: "A smarter picture of when to travel",
  },
  {
    id: "weather",
    label: "Farming",
    question: "When is the right time to plant?",
    problem: "Farmers guessing when the rain will come",
    idea: "Learn from local weather and season data",
    solution: "Clearer planting windows",
  },
  {
    id: "budget",
    label: "Student budgets",
    question: "Where does the money go?",
    problem: "Keeping track of spending through the semester",
    idea: "Find patterns in spending data",
    solution: "A clearer plan for the weeks ahead",
  },
  {
    id: "notes",
    label: "Course notes",
    question: "What if your notes were easier to search?",
    problem: "Hours lost searching through scattered notes",
    idea: "Search by meaning, not just keywords",
    solution: "Find relevant passages in your course material",
  },
];

export const hero = {
  title: "Bring your curiosity.",
  highlight: "Build with AI.",
  sentence:
    "Learn the skills, find your team, and turn a problem you care about into a working prototype. Join the students exploring AI together at TuringAI Club.",
};

export const visionStatement =
  "Make Makerere a leading hub for practical AI learning and innovation in Uganda and the wider region.";

export const missionStatement =
  "Help students from every course develop practical AI skills, learn from one another, and build responsible solutions to problems in their communities.";

// Sample reading lines for the track menus (confirm before launch).
export const topicNotes: Record<string, string> = {
  Python: "Build a foundation in Python for data and machine learning.",
  "Working with data": "Load, clean, and explore data to answer useful questions.",
  Charts: "Choose clear visuals that help people understand your data.",
  "Basic statistics": "Understand patterns, variation, and uncertainty in data.",
  "First machine learning ideas": "What a model is, and what it is not.",
  "Machine learning": "Train models, test their performance, and understand their limits.",
  Text: "Reading and sorting language at scale.",
  Images: "Recognition and classification with common models.",
  Prediction: "Forecasting with what the data already shows.",
  "Faster-paced learning":
    "For students who are already comfortable with code.",
};
