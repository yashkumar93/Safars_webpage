import {
  ShieldAlert,
  Bot,
  Code,
  FlaskConical,
  Cloud,
  Search,
  Lock,
  FileWarning,
  Bug,
  Network,
  Cpu,
  MessageSquare,
  Workflow,
  Zap,
  BrainCircuit,
  Smartphone,
  Globe,
  Palette,
  Gauge,
  ShoppingCart,
  Layers,
  Microscope,
  Lightbulb,
  TestTube,
  BookOpen,
  TrendingUp,
  Target,
  Server,
  Shield,
  GitBranch,
  Container,
  Activity,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  heroDescription: string;
  image: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  stats: ServiceStat[];
  whyChoose: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    shortTitle: "Pen Testing",
    icon: ShieldAlert,
    tagline: "Uncover vulnerabilities before attackers do",
    description:
      "Deep-dive security assessments by OSCP, eJPT v2, and CEH certified professionals.",
    heroDescription:
      "Our certified security professionals simulate real-world attacks to identify vulnerabilities in your systems, applications, and infrastructure. We deliver comprehensive reports with actionable remediation strategies.",
    image: "/services/security.png",
    features: [
      {
        icon: Search,
        title: "Network Penetration Testing",
        description:
          "Comprehensive assessment of your internal and external network infrastructure to identify exploitable vulnerabilities.",
      },
      {
        icon: Globe,
        title: "Web Application Testing",
        description:
          "Deep analysis of web applications following OWASP Top 10 methodology to uncover critical security flaws.",
      },
      {
        icon: Lock,
        title: "API Security Testing",
        description:
          "Thorough testing of REST and GraphQL APIs for authentication bypass, injection attacks, and business logic flaws.",
      },
      {
        icon: FileWarning,
        title: "Compliance Assessments",
        description:
          "Security testing aligned with industry standards including PCI DSS, HIPAA, SOC 2, and ISO 27001.",
      },
      {
        icon: Bug,
        title: "Red Team Operations",
        description:
          "Full-scope adversarial simulation testing your detection and response capabilities across the kill chain.",
      },
      {
        icon: Network,
        title: "Social Engineering",
        description:
          "Phishing campaigns and physical security assessments to evaluate human vulnerability factors.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Scoping & Reconnaissance",
        description:
          "Define testing boundaries, gather intelligence, and map the attack surface.",
      },
      {
        step: 2,
        title: "Vulnerability Discovery",
        description:
          "Systematic scanning and manual testing to identify security weaknesses.",
      },
      {
        step: 3,
        title: "Exploitation & Validation",
        description:
          "Safely exploit vulnerabilities to confirm risk and demonstrate impact.",
      },
      {
        step: 4,
        title: "Reporting & Remediation",
        description:
          "Deliver detailed findings with severity ratings and actionable fix recommendations.",
      },
    ],
    stats: [
      { value: "500+", label: "Vulnerabilities Found" },
      { value: "99.9%", label: "Zero False Positives" },
      { value: "48h", label: "Report Turnaround" },
    ],
    whyChoose: [
      "OSCP, eJPT v2, and CEH certified team members",
      "Manual testing approach — not just automated scanners",
      "Detailed reports with proof-of-concept exploits",
      "Post-assessment remediation support included",
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Agents & Solutions",
    shortTitle: "AI Solutions",
    icon: Bot,
    tagline: "Intelligent automation, tailored to your workflow",
    description: "Custom LLM-powered agents tuned for your workflows.",
    heroDescription:
      "We design and deploy intelligent AI agents that integrate seamlessly into your existing workflows. From customer support bots to autonomous data pipelines, we build AI that actually works in production.",
    image: "/services/ai.png",
    features: [
      {
        icon: Cpu,
        title: "Custom AI Agents",
        description:
          "Purpose-built AI agents designed to automate complex workflows and decision-making processes.",
      },
      {
        icon: MessageSquare,
        title: "Conversational AI",
        description:
          "Intelligent chatbots and virtual assistants powered by fine-tuned language models.",
      },
      {
        icon: Workflow,
        title: "Process Automation",
        description:
          "End-to-end workflow automation using AI to eliminate manual bottlenecks.",
      },
      {
        icon: Zap,
        title: "RAG Systems",
        description:
          "Retrieval-augmented generation systems that ground AI responses in your proprietary data.",
      },
      {
        icon: BrainCircuit,
        title: "Model Fine-Tuning",
        description:
          "Custom-trained models optimized for your specific domain and use cases.",
      },
      {
        icon: Shield,
        title: "AI Safety & Guardrails",
        description:
          "Robust safety measures, content filtering, and hallucination prevention systems.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Use Case Mapping",
        description:
          "Identify high-impact automation opportunities within your business processes.",
      },
      {
        step: 2,
        title: "Architecture & Prototyping",
        description:
          "Design the AI system architecture and build rapid proof-of-concept prototypes.",
      },
      {
        step: 3,
        title: "Development & Training",
        description:
          "Build production-ready agents with fine-tuned models and robust integrations.",
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description:
          "Ship to production with observability, feedback loops, and continuous improvement.",
      },
    ],
    stats: [
      { value: "10x", label: "Efficiency Gains" },
      { value: "95%+", label: "Accuracy Rate" },
      { value: "24/7", label: "Always-On Agents" },
    ],
    whyChoose: [
      "Deep expertise in LLM orchestration and fine-tuning",
      "Production-hardened AI systems, not just demos",
      "Full-stack integration with your existing tools",
      "Built-in safety guardrails and monitoring",
    ],
  },
  {
    slug: "web-development",
    title: "Web & App Development",
    shortTitle: "Web & App Dev",
    icon: Code,
    tagline: "Modern, secure applications built to scale",
    description: "Modern, secure applications built to scale.",
    heroDescription:
      "We craft high-performance web and mobile applications using cutting-edge technologies. From responsive landing pages to complex SaaS platforms, every product is built with security, performance, and user experience at its core.",
    image: "/services/dev.png",
    features: [
      {
        icon: Globe,
        title: "Web Applications",
        description:
          "Full-stack web apps built with Next.js, React, and modern frameworks for blazing-fast performance.",
      },
      {
        icon: Smartphone,
        title: "Mobile Apps",
        description:
          "Cross-platform mobile applications using React Native and Flutter.",
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description:
          "Research-driven interface design that delights users and drives conversion.",
      },
      {
        icon: Gauge,
        title: "Performance Optimization",
        description:
          "Core Web Vitals optimization, lazy loading, and edge caching for sub-second load times.",
      },
      {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
          "Custom e-commerce platforms with secure payment integration and inventory management.",
      },
      {
        icon: Layers,
        title: "API Development",
        description:
          "RESTful and GraphQL APIs designed for scalability, security, and developer experience.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "Understand your vision, define requirements, and create a detailed project roadmap.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Create high-fidelity designs and interactive prototypes for user validation.",
      },
      {
        step: 3,
        title: "Agile Development",
        description:
          "Build in sprints with regular demos, code reviews, and continuous integration.",
      },
      {
        step: 4,
        title: "Launch & Support",
        description:
          "Deploy with confidence, monitor performance, and iterate based on real user data.",
      },
    ],
    stats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "<1s", label: "Average Load Time" },
      { value: "99.9%", label: "Uptime Guarantee" },
    ],
    whyChoose: [
      "Security-first development methodology",
      "Performance-obsessed engineering culture",
      "Full-stack team from design to DevOps",
      "Transparent sprints with weekly progress demos",
    ],
  },
  {
    slug: "research-development",
    title: "Research & Development",
    shortTitle: "R&D",
    icon: FlaskConical,
    tagline: "Pushing boundaries through technical innovation",
    description: "Technical research and proof-of-concept development.",
    heroDescription:
      "Our R&D team explores emerging technologies and develops cutting-edge proof-of-concepts. We help you stay ahead of the curve with deep technical research, experimental prototypes, and innovation strategy.",
    image: "/services/research.png",
    features: [
      {
        icon: Microscope,
        title: "Security Research",
        description:
          "Vulnerability discovery, exploit development, and responsible disclosure across platforms.",
      },
      {
        icon: Lightbulb,
        title: "Innovation Labs",
        description:
          "Rapid experimentation with emerging technologies to identify competitive advantages.",
      },
      {
        icon: TestTube,
        title: "Proof of Concepts",
        description:
          "Fast-tracked prototypes to validate ideas before committing to full-scale development.",
      },
      {
        icon: BookOpen,
        title: "Technical Papers",
        description:
          "In-depth research papers and whitepapers on security, AI, and emerging technology trends.",
      },
      {
        icon: TrendingUp,
        title: "Technology Audits",
        description:
          "Comprehensive evaluation of your tech stack with modernization recommendations.",
      },
      {
        icon: Target,
        title: "Competitive Analysis",
        description:
          "Deep technical analysis of market solutions to inform your product strategy.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Research Question Definition",
        description:
          "Frame the technical problem, define success criteria, and scope the research.",
      },
      {
        step: 2,
        title: "Literature & Landscape Review",
        description:
          "Survey existing solutions, academic papers, and market trends.",
      },
      {
        step: 3,
        title: "Experimentation & Prototyping",
        description:
          "Build and test hypotheses through rapid iteration and controlled experiments.",
      },
      {
        step: 4,
        title: "Findings & Recommendations",
        description:
          "Deliver actionable insights, technical documentation, and go/no-go recommendations.",
      },
    ],
    stats: [
      { value: "30+", label: "Research Papers" },
      { value: "12", label: "CVEs Discovered" },
      { value: "8+", label: "Patents Filed" },
    ],
    whyChoose: [
      "Published researchers with conference speaking experience",
      "Track record of responsible vulnerability disclosure",
      "Bridge between academic research and practical application",
      "Cross-disciplinary expertise in security, AI, and systems",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    shortTitle: "Cloud Infra",
    icon: Cloud,
    tagline: "Scalable architecture with DevOps excellence",
    description: "Scalable cloud architecture with DevOps best practices.",
    heroDescription:
      "We design, build, and manage cloud infrastructure that scales effortlessly. From migration strategies to Kubernetes orchestration, our DevOps team ensures your systems are reliable, secure, and cost-optimized.",
    image: "/services/cloud.png",
    features: [
      {
        icon: Server,
        title: "Cloud Architecture",
        description:
          "Scalable, fault-tolerant cloud architectures on AWS, GCP, and Azure.",
      },
      {
        icon: Container,
        title: "Containerization",
        description:
          "Docker and Kubernetes deployments with automated scaling and self-healing.",
      },
      {
        icon: GitBranch,
        title: "CI/CD Pipelines",
        description:
          "Automated build, test, and deployment pipelines for rapid and reliable releases.",
      },
      {
        icon: Shield,
        title: "Infrastructure Security",
        description:
          "Zero-trust networking, secrets management, and compliance-ready configurations.",
      },
      {
        icon: Activity,
        title: "Monitoring & Observability",
        description:
          "Full-stack monitoring with alerting, log aggregation, and distributed tracing.",
      },
      {
        icon: TrendingUp,
        title: "Cost Optimization",
        description:
          "Right-sizing, reserved instances, and architectural optimizations to reduce cloud spend.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Infrastructure Assessment",
        description:
          "Audit current infrastructure, identify bottlenecks, and define target architecture.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "Design scalable, secure, and cost-effective cloud architecture with IaC.",
      },
      {
        step: 3,
        title: "Migration & Implementation",
        description:
          "Execute migration with zero-downtime strategies and automated provisioning.",
      },
      {
        step: 4,
        title: "Operations & Optimization",
        description:
          "Ongoing monitoring, cost optimization, and infrastructure evolution.",
      },
    ],
    stats: [
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "40%", label: "Cost Reduction" },
      { value: "5min", label: "Deploy Time" },
    ],
    whyChoose: [
      "Multi-cloud expertise across AWS, GCP, and Azure",
      "Infrastructure as Code — everything version controlled",
      "24/7 monitoring with proactive incident response",
      "Proven cost optimization delivering 30-50% savings",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
