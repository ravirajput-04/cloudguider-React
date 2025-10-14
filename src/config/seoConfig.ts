// src/config/seoConfig.ts

interface SEOContent {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
}

// Default SEO
const defaultSEO: SEOContent = {
  title: "Cloud Guider | Cloud, DevOps, Security & Data Intelligence Services",
  description:
    "Cloud Guider empowers enterprises with innovative cloud, DevOps, security, and data intelligence solutions — driving scalability, automation, and efficiency.",
  keywords:
    "Cloud Guider, cloud services, DevOps, security, SRE, AI, automation, consulting, cloud management, data analytics",
  canonical: "https://www.cloudguider.com/",
};

// SEO configuration for all pages
const seoConfig: Record<string, SEOContent> = {
  home: {
    title: "Cloud Guider | Cloud, DevOps, Security & Data Intelligence",
    description:
      "Accelerate your digital transformation with Cloud Guider’s expert cloud, DevOps, and AI-driven automation solutions.",
    keywords:
      "Cloud Guider, cloud development, DevOps, automation, AI services, managed cloud, IT consulting",
    canonical: "https://www.cloudguider.com/",
  },
  about: {
    title: "About Us | Cloud Guider",
    description:
      "Learn about Cloud Guider’s mission to deliver world-class cloud, DevOps, security, and AI-powered solutions to global enterprises.",
    keywords:
      "Cloud Guider, about, cloud company, DevOps provider, AI services, IT consulting",
    canonical: "https://www.cloudguider.com/about",
  },
  services: {
    title: "Services | Cloud Guider",
    description:
      "Explore Cloud Guider’s services — Cloud, DevOps, Security, Consulting, and Data & AI — designed to transform and optimize business operations.",
    keywords:
      "Cloud Guider services, cloud, DevOps, DevSecOps, AI, consulting, automation, cloud management",
    canonical: "https://www.cloudguider.com/services",
  },
  contact: {
    title: "Contact Us | Cloud Guider",
    description:
      "Get in touch with Cloud Guider for cloud consulting, DevOps, and data intelligence services tailored to your enterprise needs.",
    keywords:
      "Cloud Guider, contact, cloud consulting, DevOps experts, AI consulting",
    canonical: "https://www.cloudguider.com/contact",
  },
  "privacy-policy": {
    title: "Privacy Policy | Cloud Guider",
    description:
      "Read Cloud Guider’s privacy policy to understand how we handle your data responsibly and securely.",
    keywords:
      "Cloud Guider, privacy, data protection, GDPR, security policy",
    canonical: "https://www.cloudguider.com/privacy-policy",
  },
  "terms-and-conditions": {
    title: "Terms & Conditions | Cloud Guider",
    description:
      "Review the terms and conditions for using Cloud Guider’s services and website.",
    keywords:
      "Cloud Guider, terms, conditions, user agreement, policies",
    canonical: "https://www.cloudguider.com/terms-and-conditions",
  },

  // Main Service Categories
  "cloud-services": {
    title: "Cloud Services | Cloud Guider",
    description:
      "End-to-end cloud services including platform development, migration, performance optimization, and automation.",
    keywords:
      "Cloud Guider, cloud platform, cloud automation, cloud migration, optimization, managed cloud",
    canonical: "https://www.cloudguider.com/cloud-services",
  },
  "devops-and-sre": {
    title: "DevOps & SRE Services | Cloud Guider",
    description:
      "Accelerate software delivery with Cloud Guider’s DevOps and Site Reliability Engineering expertise.",
    keywords:
      "DevOps, SRE, CI/CD, automation, infrastructure, Kubernetes, reliability engineering",
    canonical: "https://www.cloudguider.com/devops-and-sre",
  },
  "consulting-and-advisory": {
    title: "Consulting & Advisory Services | Cloud Guider",
    description:
      "Get expert cloud, DevOps, and digital transformation consulting from Cloud Guider’s certified professionals.",
    keywords:
      "consulting, cloud strategy, DevOps advisory, migration planning, cloud architecture",
    canonical: "https://www.cloudguider.com/consulting-and-advisory",
  },
  "devsecops-and-security": {
    title: "DevSecOps & Cloud Security | Cloud Guider",
    description:
      "Strengthen your infrastructure with Cloud Guider’s DevSecOps and cloud security architecture services.",
    keywords:
      "DevSecOps, cloud security, compliance, vulnerability management, automation, security testing",
    canonical: "https://www.cloudguider.com/devsecops-and-security",
  },
  "data-and-ai-services": {
    title: "Data & AI Services | Cloud Guider",
    description:
      "Leverage Cloud Guider’s expertise in data engineering, analytics, and AI to make intelligent business decisions.",
    keywords:
      "data analytics, AI services, ML models, data visualization, data pipelines, cloud AI",
    canonical: "https://www.cloudguider.com/data-and-ai-services",
  },
  "resource-hiring": {
    title: "Resource Hiring | Cloud Guider",
    description:
      "Hire experienced cloud engineers, DevOps, SRE, and AI experts from Cloud Guider for your projects.",
    keywords:
      "hire cloud engineers, hire DevOps, hire SRE, hire AI experts, staff augmentation",
    canonical: "https://www.cloudguider.com/resource-hiring",
  },

  // Cloud Sub-Services
  "cloud-platform-development-and-management": {
    title: "Cloud Platform Development & Management | Cloud Guider",
    description:
      "Custom cloud platform design, automation, and lifecycle management to ensure scalable and secure operations.",
    keywords:
      "cloud platform development, cloud management, AWS, Azure, GCP, automation",
    canonical:
      "https://www.cloudguider.com/cloud-platform-development-and-management",
  },
  "cloud-infrastructure-and-automation": {
    title: "Cloud Infrastructure & Automation | Cloud Guider",
    description:
      "Automate cloud infrastructure setup and operations using Terraform, Ansible, and container orchestration tools.",
    keywords:
      "cloud infrastructure, automation, Terraform, Ansible, cloud provisioning",
    canonical:
      "https://www.cloudguider.com/cloud-infrastructure-and-automation",
  },
  "cloud-migration-and-modernization": {
    title: "Cloud Migration & Modernization | Cloud Guider",
    description:
      "Seamless cloud migration and legacy modernization with minimal downtime and cost optimization.",
    keywords:
      "cloud migration, modernization, re-platforming, cloud transition, application migration",
    canonical:
      "https://www.cloudguider.com/cloud-migration-and-modernization",
  },
  "cloud-cost-optimization-and-performance-tuning": {
    title: "Cloud Cost Optimization & Performance Tuning | Cloud Guider",
    description:
      "Optimize cloud spend and enhance performance through smart monitoring and architecture refinement.",
    keywords:
      "cloud cost optimization, performance tuning, cloud monitoring, FinOps, AWS cost control",
    canonical:
      "https://www.cloudguider.com/cloud-cost-optimization-and-performance-tuning",
  },
  "auto-scaling-and-cloud-performance-engineering": {
    title: "Auto Scaling & Cloud Performance Engineering | Cloud Guider",
    description:
      "Achieve efficiency and reliability with auto-scaling and performance engineering tailored to your workloads.",
    keywords:
      "auto-scaling, performance engineering, cloud scaling, load management, AWS autoscale",
    canonical:
      "https://www.cloudguider.com/auto-scaling-and-cloud-performance-engineering",
  },
  "multi-cloud-and-hybrid-cloud-solutions": {
    title: "Multi-Cloud & Hybrid Cloud Solutions | Cloud Guider",
    description:
      "Design, deploy, and manage multi-cloud and hybrid infrastructures for flexibility and redundancy.",
    keywords:
      "multi-cloud, hybrid cloud, cloud management, AWS, Azure, GCP, Kubernetes",
    canonical:
      "https://www.cloudguider.com/multi-cloud-and-hybrid-cloud-solutions",
  },
  "hire-cloud-engineers-architects": {
    title: "Hire Cloud Engineers & Architects | Cloud Guider",
    description:
      "Hire skilled cloud engineers and architects to build and optimize your enterprise infrastructure.",
    keywords:
      "hire cloud engineers, hire cloud architects, AWS experts, Azure engineers",
    canonical: "https://www.cloudguider.com/hire-cloud-engineers-architects",
  },

  // DevOps & SRE Sub-Services
  "devops-automation-and-ci-cd-pipelines": {
    title: "DevOps Automation & CI/CD Pipelines | Cloud Guider",
    description:
      "Implement CI/CD pipelines and DevOps automation for faster, reliable, and scalable software delivery.",
    keywords:
      "DevOps automation, CI/CD, Jenkins, GitHub Actions, GitLab CI, continuous integration",
    canonical:
      "https://www.cloudguider.com/devops-automation-and-ci-cd-pipelines",
  },
  "infrastructure-as-code-and-configuration-management": {
    title:
      "Infrastructure as Code & Configuration Management | Cloud Guider",
    description:
      "Manage infrastructure at scale using Terraform, Ansible, and automation-driven configuration solutions.",
    keywords:
      "Infrastructure as Code, Terraform, Ansible, automation, configuration management",
    canonical:
      "https://www.cloudguider.com/infrastructure-as-code-and-configuration-management",
  },
  "site-reliability-engineering-solutions": {
    title: "Site Reliability Engineering (SRE) Solutions | Cloud Guider",
    description:
      "Ensure uptime and reliability with Cloud Guider’s advanced SRE services and monitoring solutions.",
    keywords:
      "SRE, reliability engineering, observability, automation, incident response",
    canonical:
      "https://www.cloudguider.com/site-reliability-engineering-solutions",
  },
  "monitoring-observability-and-incident-management": {
    title: "Monitoring, Observability & Incident Management | Cloud Guider",
    description:
      "Get proactive visibility into your infrastructure with robust monitoring and incident response systems.",
    keywords:
      "monitoring, observability, incident management, alerting, DevOps monitoring tools",
    canonical:
      "https://www.cloudguider.com/monitoring-observability-and-incident-management",
  },
  "containerization-and-kubernetes-orchestration": {
    title: "Containerization & Kubernetes Orchestration | Cloud Guider",
    description:
      "Streamline deployment with Docker, Kubernetes, and container orchestration strategies for scalable systems.",
    keywords:
      "containerization, Kubernetes, Docker, orchestration, microservices",
    canonical:
      "https://www.cloudguider.com/containerization-and-kubernetes-orchestration",
  },
  "on-demand-scalability-and-performance-tuning": {
    title: "On-Demand Scalability & Performance Tuning | Cloud Guider",
    description:
      "Optimize application performance and scalability dynamically using cloud-native tools and strategies.",
    keywords:
      "on-demand scaling, performance tuning, cloud elasticity, resource optimization",
    canonical:
      "https://www.cloudguider.com/on-demand-scalability-and-performance-tuning",
  },
  "hire-devops-and-sre-engineers": {
    title: "Hire DevOps & SRE Engineers | Cloud Guider",
    description:
      "Augment your team with experienced DevOps and SRE engineers to manage automation and reliability.",
    keywords:
      "hire DevOps engineers, hire SRE experts, cloud automation, infrastructure management",
    canonical: "https://www.cloudguider.com/hire-devops-and-sre-engineers",
  },

  // DevSecOps Sub-Services
  "devsecops-implementation-and-security-automation": {
    title: "DevSecOps Implementation & Security Automation | Cloud Guider",
    description:
      "Automate security checks, compliance, and vulnerability management with DevSecOps integration.",
    keywords:
      "DevSecOps, security automation, compliance, vulnerability scanning, CI/CD security",
    canonical:
      "https://www.cloudguider.com/devsecops-implementation-and-security-automation",
  },
  "cloud-security-architecture-and-compliance": {
    title: "Cloud Security Architecture & Compliance | Cloud Guider",
    description:
      "Design and implement secure cloud architectures compliant with ISO, SOC 2, and GDPR standards.",
    keywords:
      "cloud security, compliance, secure architecture, governance, risk management",
    canonical:
      "https://www.cloudguider.com/cloud-security-architecture-and-compliance",
  },
  "vulnerability-management-and-threat-detection": {
    title: "Vulnerability Management & Threat Detection | Cloud Guider",
    description:
      "Identify, monitor, and mitigate vulnerabilities with advanced threat detection and automation.",
    keywords:
      "vulnerability management, threat detection, security automation, SIEM, DevSecOps",
    canonical:
      "https://www.cloudguider.com/vulnerability-management-and-threat-detection",
  },
  "security-audits-and-penetration-testing": {
    title: "Security Audits & Penetration Testing | Cloud Guider",
    description:
      "Comprehensive security audits and penetration testing to safeguard your cloud infrastructure.",
    keywords:
      "penetration testing, security audit, vulnerability testing, DevSecOps, compliance",
    canonical:
      "https://www.cloudguider.com/security-audits-and-penetration-testing",
  },
  "hire-devsecops-and-security-experts": {
    title: "Hire DevSecOps & Security Experts | Cloud Guider",
    description:
      "Hire certified DevSecOps and cybersecurity professionals for enterprise-level cloud environments.",
    keywords:
      "hire DevSecOps, hire security engineers, cloud security, compliance experts",
    canonical:
      "https://www.cloudguider.com/hire-devsecops-and-security-experts",
  },

  // Consulting Sub-Services
  "cloud-and-devops-consulting": {
    title: "Cloud & DevOps Consulting | Cloud Guider",
    description:
      "Strategic cloud and DevOps consulting for architecture design, optimization, and implementation support.",
    keywords:
      "cloud consulting, DevOps consulting, cloud strategy, optimization",
    canonical: "https://www.cloudguider.com/cloud-and-devops-consulting",
  },
  "cloud-strategy-and-architecture-design": {
    title: "Cloud Strategy & Architecture Design | Cloud Guider",
    description:
      "Build a strong cloud foundation with expert strategy and architecture design services.",
    keywords:
      "cloud strategy, architecture design, AWS, Azure, GCP, hybrid cloud",
    canonical:
      "https://www.cloudguider.com/cloud-strategy-and-architecture-design",
  },
  "technology-assessment-and-roadmapping": {
    title: "Technology Assessment & Roadmapping | Cloud Guider",
    description:
      "Assess current systems and build a transformation roadmap for your cloud and DevOps adoption.",
    keywords:
      "technology assessment, roadmap, cloud readiness, IT consulting",
    canonical:
      "https://www.cloudguider.com/technology-assessment-and-roadmapping",
  },
  "migration-planning-and-execution-support": {
    title: "Migration Planning & Execution Support | Cloud Guider",
    description:
      "Plan and execute seamless migration strategies with Cloud Guider’s expert consulting team.",
    keywords:
      "cloud migration, planning, execution, consulting, modernization",
    canonical:
      "https://www.cloudguider.com/migration-planning-and-execution-support",
  },
  "hire-cloud-consultants": {
    title: "Hire Cloud Consultants | Cloud Guider",
    description:
      "Hire experienced cloud consultants for architecture, migration, and optimization projects.",
    keywords:
      "hire cloud consultants, AWS architects, cloud migration experts",
    canonical: "https://www.cloudguider.com/hire-cloud-consultants",
  },

  // Data & AI Sub-Services
  "data-augmentation-and-enrichment": {
    title: "Data Augmentation & Enrichment | Cloud Guider",
    description:
      "Enhance your data pipelines with augmentation and enrichment for better analytics and ML results.",
    keywords:
      "data enrichment, augmentation, AI data, data processing, ETL pipelines",
    canonical: "https://www.cloudguider.com/data-augmentation-and-enrichment",
  },
  "data-analytics-and-visualization": {
    title: "Data Analytics & Visualization | Cloud Guider",
    description:
      "Unlock business insights through advanced analytics and interactive visualization dashboards.",
    keywords:
      "data analytics, visualization, Power BI, Tableau, dashboards, insights",
    canonical: "https://www.cloudguider.com/data-analytics-and-visualization",
  },
  "ai-ml-model-deployment-on-cloud": {
    title: "AI & ML Model Deployment on Cloud | Cloud Guider",
    description:
      "Deploy and scale machine learning models on AWS, Azure, or GCP with end-to-end MLOps support.",
    keywords:
      "AI model deployment, MLOps, machine learning, cloud AI, model serving",
    canonical: "https://www.cloudguider.com/ai-ml-model-deployment-on-cloud",
  },
  "hire-data-scientists-ai-engineers": {
    title: "Hire Data Scientists & AI Engineers | Cloud Guider",
    description:
      "Hire top-tier data scientists and AI engineers to accelerate your analytics and automation projects.",
    keywords:
      "hire data scientists, hire AI engineers, ML experts, data analytics talent",
    canonical: "https://www.cloudguider.com/hire-data-scientists-ai-engineers",
  },

  // Resource Hiring Sub-Services
  "hire-cloud-engineers": {
    title: "Hire Cloud Engineers | Cloud Guider",
    description:
      "Hire certified cloud engineers to manage infrastructure, automation, and deployment operations.",
    keywords:
      "hire cloud engineers, AWS experts, Azure engineers, GCP cloud professionals",
    canonical: "https://www.cloudguider.com/hire-cloud-engineers",
  },
  "hire-cloud-architects": {
    title: "Hire Cloud Architects | Cloud Guider",
    description:
      "Hire experienced cloud architects to design scalable, secure, and high-performance architectures.",
    keywords:
      "hire cloud architects, AWS solutions architect, hybrid cloud design",
    canonical: "https://www.cloudguider.com/hire-cloud-architects",
  },
  "hire-kubernetes-docker-experts": {
    title: "Hire Kubernetes & Docker Experts | Cloud Guider",
    description:
      "Hire Kubernetes and Docker experts to containerize and optimize your application deployment workflows.",
    keywords:
      "hire Kubernetes experts, Docker engineers, container orchestration, DevOps",
    canonical: "https://www.cloudguider.com/hire-kubernetes-docker-experts",
  },
  "hire-data-and-ai-engineers": {
    title: "Hire Data & AI Engineers | Cloud Guider",
    description:
      "Hire skilled data and AI engineers to enhance your analytics, ML, and data-driven initiatives.",
    keywords:
      "hire data engineers, hire AI engineers, ML developers, data experts",
    canonical: "https://www.cloudguider.com/hire-data-and-ai-engineers",
  },
  "hire-devops-sre-and-automation-engineers": {
    title: "Hire DevOps, SRE & Automation Engineers | Cloud Guider",
    description:
      "Hire top DevOps, SRE, and automation engineers to improve your CI/CD, reliability, and scalability.",
    keywords:
      "hire DevOps engineers, SRE experts, automation engineers, CI/CD",
    canonical:
      "https://www.cloudguider.com/hire-devops-sre-and-automation-engineers",
  },
  "hire-devsecops-and-security-engineers": {
    title: "Hire DevSecOps & Security Engineers | Cloud Guider",
    description:
      "Hire skilled DevSecOps and cybersecurity engineers to enhance compliance and cloud protection.",
    keywords:
      "hire DevSecOps engineers, security engineers, cloud protection, cybersecurity",
    canonical:
      "https://www.cloudguider.com/hire-devsecops-and-security-engineers",
  },
};

export default seoConfig;
export { defaultSEO };
