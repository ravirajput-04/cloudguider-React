import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const cloudMigrationContent: SubServiceContent = {
  heroTitle: "Cloud Migration & Modernization",
  heroSubtitle: "Transform Your Infrastructure for the Future",
  heroDescription:
    "Seamlessly migrate, modernize, and scale your business operations with our secure and cost-efficient cloud solutions. We help organizations move to the cloud intelligently—ensuring agility, reliability, and innovation.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Cloud Migration & Modernization",
  mainDescription: (
    <>
      In a fast-evolving digital world, migrating to the cloud is no longer a choice — it’s a necessity for innovation
      and scalability. At <strong>Cloud Guider</strong>, we specialize in seamless{" "}
      <strong>cloud migration and modernization</strong> strategies that help businesses move their applications, data,
      and workloads to the cloud with zero disruption. Our experts ensure a secure, cost-efficient, and future-ready
      transition that aligns with your organization’s goals. From legacy systems to cutting-edge platforms, we modernize
      your entire IT landscape by re-architecting, re-platforming, or refactoring workloads to fully leverage the power
      of cloud-native technologies.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>End-to-End Cloud Migration:</strong> Plan, execute, and optimize migration across AWS, Azure, and
          Google Cloud — ensuring data integrity, minimal downtime, and business continuity throughout the process.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Legacy System Modernization:</strong> Transform outdated systems into agile, cloud-native applications
          using microservices, APIs, and containerization for improved scalability and performance.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Data Migration & Optimization:</strong> Move databases and analytics workloads securely to the cloud
          with minimal latency, optimized storage, and enhanced data accessibility.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Hybrid & Multi-Cloud Strategies:</strong> Implement flexible migration blueprints that support hybrid
          and multi-cloud setups, giving you the freedom to operate across multiple platforms with unified management.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Performance, Security & Compliance:</strong> We ensure every migration meets enterprise-grade
          security, performance benchmarks, and compliance standards like ISO 27001, SOC 2, and GDPR.
        </>
      )
    }
  ],
  secondaryTitle: "Accelerate Transformation with Modern Cloud Solutions",
  secondaryDescription: (
    <>
      Our Cloud Migration & Modernization services empower organizations to unlock new efficiencies, scalability, and
      agility. Whether you’re moving a single workload or modernizing your entire infrastructure,{" "}
      <strong>Cloud Guider</strong> ensures a smooth journey with proven methodologies, automation frameworks, and cost
      optimization strategies. We don’t just migrate — we transform your business for the cloud era, enabling innovation
      through container orchestration, DevOps integration, and serverless architectures that evolve with your future
      needs.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Seamless Cloud Migration",
      description:
        "Execute a smooth and secure migration strategy that minimizes downtime and data loss while maximizing application availability during the transition to the cloud."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Application Modernization",
      description:
        "Re-engineer legacy applications using cloud-native architectures, microservices, and containers to enhance performance, scalability, and long-term sustainability."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Optimization & Governance",
      description:
        "Achieve optimal cloud performance and cost efficiency with intelligent governance, continuous monitoring, and proactive resource management across cloud environments."
    }
  ]
};

const CloudMigrationAndModernization: React.FC = () => {
  return <SubServicesStructure content={cloudMigrationContent} />;
};

export default CloudMigrationAndModernization;
