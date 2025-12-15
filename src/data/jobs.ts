export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "senior-full-stack-engineer",
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "We are looking for an experienced Full Stack Engineer to join our core product team. You will be responsible for designing and building scalable web applications using modern technologies. You will work closely with product managers and designers to deliver high-quality software.",
    requirements: [
      "5+ years of experience with React, Node.js, and TypeScript",
      "Strong understanding of cloud architecture (AWS/Azure)",
      "Experience with database design (SQL/NoSQL)",
      "Excellent problem-solving and communication skills"
    ],
    postedDate: "2025-12-10"
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Remote",
    type: "Full-time",
    description: "Join our AI research team to build next-generation solutions. You will work on developing and fine-tuning machine learning models for various applications, including NLP and Computer Vision. This role requires a deep understanding of deep learning frameworks and algorithms.",
    requirements: [
      "3+ years of experience with Python and PyTorch/TensorFlow",
      "Experience with NLP or Computer Vision projects",
      "Knowledge of MLOps and model deployment",
      "Master's or PhD in Computer Science or related field is a plus"
    ],
    postedDate: "2025-12-12"
  }
];
