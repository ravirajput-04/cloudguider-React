import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const devOpsAutomationContent: SubServiceContent = {
  heroTitle: "DevOps Automation & CI/CD Pipelines",
  heroSubtitle: "Accelerate Delivery with Streamlined Workflows",
  heroDescription:
    "Implement automated DevOps pipelines and CI/CD workflows to enhance collaboration, reduce errors, and deliver software faster and more reliably across multi-cloud environments.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "DevOps Automation & CI/CD Pipelines",
  mainDescription: (
    <>
      Efficient software delivery requires a seamless integration of development and operations. At <strong>Cloud Guider</strong>,
      we specialize in <strong>DevOps automation</strong> and building robust <strong>CI/CD pipelines</strong> that accelerate deployment cycles,
      enhance collaboration, and reduce operational risks. Our team implements fully automated workflows using modern tools like Jenkins,
      GitLab CI/CD, GitHub Actions, and Terraform, ensuring rapid, reliable, and repeatable software releases across multi-cloud environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Continuous Integration:</strong> Automate the building and testing of code every time changes are committed,
          reducing integration errors and ensuring consistent code quality across the development lifecycle.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Continuous Delivery & Deployment:</strong> Enable automated release pipelines that deploy changes safely and efficiently,
          allowing frequent updates without impacting stability or user experience.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Infrastructure as Code (IaC):</strong> Provision, configure, and manage cloud resources programmatically using tools
          like Terraform, Ansible, and CloudFormation, ensuring reproducible and scalable infrastructure.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Monitoring & Feedback Loops:</strong> Implement continuous monitoring and feedback systems that detect failures,
          performance bottlenecks, and deployment issues early, enabling proactive remediation.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Collaboration & Agile Practices:</strong> Facilitate cross-functional collaboration between development, QA,
          and operations teams to streamline workflows and improve release velocity.
        </>
      )
    }
  ],
  secondaryTitle: "Accelerate Delivery with Automated DevOps Pipelines",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> helps organizations achieve faster time-to-market while maintaining stability, security,
      and performance. By implementing automated DevOps pipelines, we reduce manual effort, eliminate errors, and foster a
      culture of continuous improvement. Whether deploying microservices, monolithic applications, or cloud-native workloads,
      our solutions ensure reliable, repeatable, and efficient delivery, enabling your teams to focus on innovation and business growth.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Continuous Integration",
      description:
        "Automate builds and tests with every code commit to ensure reliable, consistent, and high-quality software delivery across all environments."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Continuous Delivery & Deployment",
      description:
        "Deploy code automatically to staging or production environments with zero downtime, reducing errors and accelerating time-to-market for critical updates."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "DevOps Collaboration",
      description:
        "Enhance team collaboration across development, QA, and operations with streamlined workflows, automated feedback, and shared dashboards to improve efficiency and accountability."
    }
  ]
};

const DevOpsAutomationAndCICDPipelines: React.FC = () => {
  return <SubServicesStructure content={devOpsAutomationContent} />;
};

export default DevOpsAutomationAndCICDPipelines;
