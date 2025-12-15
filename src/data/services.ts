import { 
  Globe, 
  Smartphone, 
  Cloud, 
  CreditCard, 
  LayoutDashboard, 
  Palette, 
  Headphones,
  Code,
  Database,
  Server,
  Shield,
  Zap,
  Users,
  BarChart,
  Bot
} from "lucide-react";

export const servicesData = {
  "ai-integration": {
    title: "AI Integration",
    icon: Bot,
    description: "Intelligent AI solutions to automate processes and gain data-driven insights.",
    problem: "Businesses are drowning in data but lack actionable insights, and manual processes are slowing down growth and innovation.",
    features: [
      "Custom AI Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Chatbot & Virtual Assistants",
      "Process Automation (RPA)"
    ],
    techStack: [
      { name: "Python", icon: Code },
      { name: "TensorFlow", icon: Code },
      { name: "OpenAI API", icon: Cloud },
      { name: "PyTorch", icon: Code },
      { name: "LangChain", icon: Zap }
    ],
    useCases: [
      "Customer Support Automation",
      "Sales Forecasting",
      "Document Analysis",
      "Personalized Recommendations"
    ]
  },
  "web-development": {
    title: "Web Application Development",
    icon: Globe,
    description: "Scalable, high-performance web applications tailored to your business needs.",
    problem: "Businesses often struggle with outdated, slow, or non-responsive web interfaces that drive customers away and hinder operational efficiency.",
    features: [
      "Custom Web App Development",
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
      "API Development & Integration",
      "Cloud-Native Architecture",
      "Responsive Design"
    ],
    techStack: [
      { name: "React", icon: Code },
      { name: "Node.js", icon: Server },
      { name: "TypeScript", icon: Code },
      { name: "PostgreSQL", icon: Database },
      { name: "AWS", icon: Cloud }
    ],
    useCases: [
      "E-commerce Platforms",
      "Customer Portals",
      "Booking Systems",
      "Educational Platforms"
    ]
  },
  "mobile-development": {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    problem: "Reaching customers on their preferred devices is critical, but maintaining separate codebases for iOS and Android is costly and inefficient.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions (React Native/Flutter)",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Offline Capabilities",
      "Push Notifications"
    ],
    techStack: [
      { name: "React Native", icon: Code },
      { name: "Flutter", icon: Code },
      { name: "Swift", icon: Code },
      { name: "Kotlin", icon: Code },
      { name: "Firebase", icon: Database }
    ],
    useCases: [
      "On-demand Service Apps",
      "Social Networking Apps",
      "Health & Fitness Trackers",
      "Mobile Banking"
    ]
  },
  "saas-development": {
    title: "SaaS Development",
    icon: Cloud,
    description: "Scalable Software-as-a-Service solutions built for growth and reliability.",
    problem: "Building a SaaS product requires handling multi-tenancy, subscription billing, and security at scale, which can be overwhelming for startups and enterprises.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Billing Integration",
      "Role-Based Access Control",
      "Scalable Cloud Infrastructure",
      "Analytics Dashboard",
      "API-First Design"
    ],
    techStack: [
      { name: "Next.js", icon: Code },
      { name: "Docker", icon: Server },
      { name: "Kubernetes", icon: Server },
      { name: "Stripe", icon: CreditCard },
      { name: "Redis", icon: Database }
    ],
    useCases: [
      "Project Management Tools",
      "CRM Platforms",
      "Marketing Automation Tools",
      "Collaboration Software"
    ]
  },
  "pos-payment-systems": {
    title: "POS / Payment Systems",
    icon: CreditCard,
    description: "Secure and efficient point-of-sale and payment processing solutions.",
    problem: "Retailers and service providers face challenges with slow transactions, inventory sync issues, and fragmented payment methods.",
    features: [
      "Custom POS Software",
      "Payment Gateway Integration",
      "Inventory Management Sync",
      "Sales Reporting & Analytics",
      "Contactless Payments",
      "Loyalty Program Integration"
    ],
    techStack: [
      { name: "Electron", icon: Code },
      { name: "Node.js", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "Stripe/PayPal", icon: CreditCard },
      { name: "Socket.io", icon: Zap }
    ],
    useCases: [
      "Retail Stores",
      "Restaurants & Cafes",
      "Service Centers",
      "Pop-up Shops"
    ]
  },
  "erp-hrms-inventory": {
    title: "ERP / HRMS / Inventory",
    icon: LayoutDashboard,
    description: "Integrated management systems to streamline your business operations.",
    problem: "Disparate systems for HR, inventory, and resource planning lead to data silos, manual errors, and operational inefficiencies.",
    features: [
      "Employee Management",
      "Payroll Processing",
      "Real-time Inventory Tracking",
      "Supply Chain Management",
      "Automated Reporting",
      "Workflow Automation"
    ],
    techStack: [
      { name: "Python/Django", icon: Code },
      { name: "PostgreSQL", icon: Database },
      { name: "React", icon: Code },
      { name: "Redis", icon: Database },
      { name: "Celery", icon: Zap }
    ],
    useCases: [
      "Manufacturing Plants",
      "Logistics Companies",
      "Corporate Offices",
      "Retail Chains"
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: Palette,
    description: "User-centric design that drives engagement and conversion.",
    problem: "Even the best technology fails if users can't understand or enjoy using it. Poor design leads to high churn and low adoption.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Interaction Design",
      "Usability Testing",
      "Accessibility Compliance"
    ],
    techStack: [
      { name: "Figma", icon: Palette },
      { name: "Adobe XD", icon: Palette },
      { name: "Sketch", icon: Palette },
      { name: "Principle", icon: Zap },
      { name: "Zeplin", icon: Code }
    ],
    useCases: [
      "Mobile App Redesign",
      "Website Overhaul",
      "Dashboard Design",
      "Brand Identity"
    ]
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    icon: Headphones,
    description: "Reliable support and maintenance to keep your software running smoothly.",
    problem: "Software requires ongoing care to remain secure, fast, and compatible. Neglecting maintenance leads to downtime and security vulnerabilities.",
    features: [
      "24/7 Monitoring",
      "Security Patches & Updates",
      "Performance Optimization",
      "Bug Fixes",
      "Server Management",
      "Backup & Recovery"
    ],
    techStack: [
      { name: "Jira", icon: LayoutDashboard },
      { name: "Datadog", icon: BarChart },
      { name: "Sentry", icon: Shield },
      { name: "GitHub Actions", icon: Code },
      { name: "AWS CloudWatch", icon: Cloud }
    ],
    useCases: [
      "Legacy System Support",
      "Cloud Infrastructure Management",
      "Application Upgrades",
      "Security Audits"
    ]
  }
};
