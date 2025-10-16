import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const migrationPlanningContent: SubServiceContent = {
  heroTitle: "Migration Planning & Execution Support",
  heroSubtitle: "Seamless Cloud Migration with Expert Guidance",
  heroDescription:
    "Ensure a smooth and secure transition to the cloud with Cloud Guider’s Migration Planning & Execution Support. From assessing your IT landscape to executing structured migration plans, we minimize downtime and maximize efficiency for applications, databases, and workloads across multi-cloud environments.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Migration Planning & Execution Support",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> provides end-to-end assistance for migrating workloads safely and efficiently. Our certified cloud experts use industry best practices, automation tools, and strategic methodologies to ensure minimal disruption, operational continuity, and optimized performance post-migration.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Comprehensive Environment Assessment:</strong> Analyze existing infrastructure, dependencies, and select the optimal migration approach.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Migration Strategy Development:</strong> Craft a detailed roadmap with timelines, resources, and risk mitigation for smooth adoption.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Execution & Deployment Support:</strong> Provide hands-on assistance during migration using automated tools, real-time monitoring, and validation.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Post-Migration Optimization:</strong> Fine-tune infrastructure and applications to enhance performance, scalability, and cost efficiency.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Risk & Compliance Management:</strong> Ensure all migration processes comply with security standards and regulatory frameworks.
        </>
      )
    }
  ],
  secondaryTitle: "Seamless Cloud Migration with Expert Guidance",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> helps organizations migrate workloads efficiently with minimal downtime. Our experts combine proven methodologies with automation tools to ensure secure, cost-effective, and optimized cloud adoption.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/environment-assessment.png",
      title: "Environment Assessment",
      description:
        "Evaluate current infrastructure and dependencies to select the most efficient migration strategy."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/migration-strategy.png",
      title: "Migration Strategy",
      description:
        "Design a structured roadmap with milestones, resource allocation, and risk mitigation for smooth execution."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/execution-and-support.png",
      title: "Execution & Support",
      description:
        "Provide hands-on migration assistance with automated tools, real-time monitoring, and post-migration optimization."
    }
  ]
};

const MigrationPlanningAndExecutionSupport: React.FC = () => {
  return <SubServicesStructure content={migrationPlanningContent} />;
};

export default MigrationPlanningAndExecutionSupport;
