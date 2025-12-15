export const projects = [
  {
    slug: "enterprise-hrms",
    title: "Enterprise HRMS",
    category: "Human Resources",
    description: "Complete HR management solution with payroll automation, leave management, and employee self-service portal.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    challenge: "The client, a multinational corporation with over 5,000 employees, was struggling with fragmented HR processes. Employee data was scattered across spreadsheets and legacy systems, leading to payroll errors, compliance risks, and a frustrating experience for employees requesting leave or accessing documents.",
    solution: "We developed a unified, cloud-native Human Resource Management System (HRMS). Key features included: \n- Automated Payroll Processing: Integrated with banking APIs for one-click salary disbursement.\n- Self-Service Portal: Allowed employees to view payslips, apply for leave, and update personal info.\n- AI-Driven Analytics: Provided HR managers with insights into attrition rates, performance trends, and recruitment bottlenecks.",
    results: [
      "40% reduction in HR administrative time",
      "100% payroll accuracy achieved in the first quarter",
      "30% improvement in employee satisfaction scores"
    ],
    tech: [".NET Core", "Angular", "PostgreSQL", "Redis", "Azure"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    slug: "digital-banking-platform",
    title: "Digital Banking Platform",
    category: "FinTech",
    description: "Secure mobile and web banking application with real-time transactions, loan processing, and fraud detection.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    challenge: "A regional bank wanted to compete with digital-first neobanks. Their existing mobile app was slow, lacked essential features, and had poor security ratings. They needed a complete overhaul to retain younger customers and streamline operations.",
    solution: "We built a secure, high-performance digital banking platform using a microservices architecture. The solution featured:\n- Biometric Authentication: FaceID and Fingerprint login for enhanced security.\n- Real-Time Payments: Instant fund transfers and bill payments.\n- AI Fraud Detection: Machine learning models to detect and block suspicious transactions in real-time.",
    results: [
      "2 Million+ app downloads within 6 months",
      "4.8/5 average app store rating",
      "30% increase in digital transaction volume"
    ],
    tech: ["React", "React Native", "Node.js", "Kafka", "TensorFlow"],
    gradient: "from-accent/20 to-primary/20"
  },
  {
    slug: "smart-retail-pos",
    title: "Smart Retail POS",
    category: "Retail",
    description: "Modern point-of-sale system with inventory management, sales analytics, and multi-location support.",
    image: "https://plus.unsplash.com/premium_photo-1745208003112-17059d1cadb8?auto=format&fit=crop&q=80&w=800",
    challenge: "A retail chain with 50+ locations faced issues with inventory discrepancies and system downtime. Their legacy POS required a constant internet connection, causing sales halts during outages. They needed a robust, offline-first solution.",
    solution: "We engineered a tablet-based POS system with offline capabilities. The system automatically syncs data when connectivity is restored. Features included:\n- Real-Time Inventory: Centralized dashboard showing stock levels across all stores.\n- Predictive Stocking: AI algorithms suggesting reorder quantities based on sales trends.\n- CRM Integration: Customer loyalty program built directly into the checkout flow.",
    results: [
      "15% increase in revenue due to reduced downtime",
      "99.9% system uptime",
      "20% reduction in inventory waste"
    ],
    tech: ["Flutter", "Firebase", "MySQL", "Google Cloud", "Stripe"],
    gradient: "from-primary/15 to-accent/25"
  },
  {
    slug: "fleet-tracking-system",
    title: "Fleet Tracking System",
    category: "Logistics",
    description: "Real-time GPS tracking platform with route optimization, driver management, and delivery notifications.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    challenge: "A logistics company was losing money due to inefficient route planning, fuel theft, and vehicle breakdowns. They lacked visibility into their fleet's real-time location and status.",
    solution: "We implemented an IoT-enabled fleet management system. The solution utilized GPS trackers and OBD-II sensors to collect data. Key components:\n- Live Tracking Dashboard: Real-time map view of all vehicles.\n- Route Optimization: AI algorithms to calculate the most fuel-efficient routes.\n- Driver Behavior Monitoring: Alerts for speeding, harsh braking, and idling.",
    results: [
      "20% reduction in fuel costs",
      "25% improvement in on-time deliveries",
      "Extended vehicle lifespan through predictive maintenance alerts"
    ],
    tech: ["React", ".NET Core", "PostgreSQL", "RabbitMQ", "Google Maps API"],
    gradient: "from-accent/25 to-primary/15"
  }
];
