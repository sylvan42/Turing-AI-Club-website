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
  index: string;
  name: string;
  description: string;
};

export const stages: Stage[] = [
  {
    index: "01",
    name: "Learn",
    description: "DataCamp courses at your own pace, matched to your track.",
  },
  {
    index: "02",
    name: "Collaborate",
    description: "Bring a problem to the club and form a team across courses.",
  },
  {
    index: "03",
    name: "Build",
    description: "Work on a prototype with mentorship and technical reviews.",
  },
  {
    index: "04",
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
