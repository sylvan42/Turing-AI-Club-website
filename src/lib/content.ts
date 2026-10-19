export type TeamMember = {
  name: string;
  role: string;
  featured?: boolean;
};

export const patron: TeamMember = {
  name: "Dr. Andrew Katumba",
  role: "Patron",
  featured: true,
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
  index: string;
  description: string;
  topics: string[];
};

export const tracks: Track[] = [
  {
    id: "beginner",
    label: "Beginner",
    level: "Foundation level",
    index: "A",
    description:
      "Start from the ground up. Build a solid base before touching machine learning.",
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
    index: "B",
    description:
      "Already comfortable with code and data? Go straight into applied machine learning.",
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
    description: "Bring a problem to the club and form a team across courses.",
  },
  {
    name: "Build",
    description: "Work on a prototype with mentorship and technical reviews.",
  },
  {
    name: "Demonstrate",
    description: "Show your work, document it, and keep the best work going.",
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
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Tracks", href: "#tracks" },
  { label: "Team", href: "#team" },
];

export const CONTACT_EMAIL = "turingaiclub@gmail.com";

// Static export is served under the repo base path in production
export const BASE =
  process.env.NODE_ENV === "production" ? "/Turing-AI-Club-website" : "";

export type Concept = {
  id: string;
  label: string;
  problem: string;
  idea: string;
  solution: string;
};

// Generic visual concepts only (illustrative, not TuringAI projects).
export const concepts: Concept[] = [
  {
    id: "transport",
    label: "Campus transport",
    problem: "Long, unpredictable waits for campus transport",
    idea: "Predict demand from simple historical patterns",
    solution: "A smarter picture of when to travel",
  },
  {
    id: "weather",
    label: "Farming",
    problem: "Farmers guessing when the rain will come",
    idea: "Learn from local weather and season data",
    solution: "Clearer planting windows",
  },
  {
    id: "budget",
    label: "Student budgets",
    problem: "Student budgets that vanish mid-semester",
    idea: "Spot spending patterns automatically",
    solution: "Early warnings before money runs out",
  },
  {
    id: "notes",
    label: "Course notes",
    problem: "Hours lost searching through scattered notes",
    idea: "Let a model read and organize them",
    solution: "Answers from your own material, faster",
  },
];

export const hero = {
  title: "AI, done here.",
  sentence:
    "TuringAI Club is a student AI community at Makerere University — coursework in, working prototypes out.",
};

export const visionStatement =
  "Make Makerere a leading hub for practical AI learning and innovation in Uganda and the wider region.";

export const missionStatement =
  "Give students from every course real AI skills, put them in mixed teams, and help them build responsible solutions to real problems.";

// Sample reading lines for the track menus (confirm before launch).
export const topicNotes: Record<string, string> = {
  Python:
    "The one language all club projects are written in.",
  "Working with data":
    "Load a table, clean it up, ask it questions.",
  Charts:
    "Turn rows into pictures people actually read.",
  "Basic statistics":
    "Meaning behind the averages and the noise.",
  "First machine learning ideas":
    "What a model is, and what it is not.",
  "Machine learning":
    "Train, test, and repeat until it holds up.",
  Text: "Reading and sorting language at scale.",
  Images: "Recognition and classification with common models.",
  Prediction:
    "Forecasting with what the data already shows.",
  "Faster-paced learning":
    "For students who are already comfortable with code.",
};
