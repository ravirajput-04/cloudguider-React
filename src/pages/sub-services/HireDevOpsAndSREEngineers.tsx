import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireDevOpsContent: SubServiceContent = {
  heroTitle: "Hire DevOps & SRE Engineers",
  heroSubtitle: "Expert Cloud Talent for Scalable, Reliable Systems",
  heroDescription:
    "Access top DevOps and SRE professionals to automate, optimize, and manage cloud infrastructures efficiently.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Hire DevOps & SRE Engineers",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> connects organizations with top-tier DevOps and SRE professionals who implement automation, monitoring, and reliability frameworks to deliver high-performing, resilient, and scalable cloud environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Expert DevOps Engineers:</strong> Automate CI/CD pipelines, infrastructure provisioning, and deployments to accelerate software delivery.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Skilled SRE Professionals:</strong> Ensure high availability and performance through monitoring, incident response, and reliability practices.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cloud & Multi-Platform Expertise:</strong> Proficient across AWS, Azure, GCP, and hybrid environments for seamless integration and management.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Automation & Performance Optimization:</strong> Enhance efficiency with self-healing mechanisms, auto-scaling, and proactive performance tuning.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Flexible Engagement Models:</strong> Hire engineers on-demand, full-time, or for specific projects to meet business needs efficiently.
        </>
      )
    }
  ],
  secondaryTitle: "Empower Your Teams with Expert Cloud Engineers",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> ensures reliable, automated, and high-performing cloud infrastructures by providing top DevOps and SRE talent. Our experts reduce downtime, optimize performance, and enable organizations to scale cloud operations while focusing on core business objectives.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/devops-expertise.png",
      title: "DevOps Expertise",
      description:
        "Accelerate software delivery with automated CI/CD pipelines, infrastructure management, and deployment workflows."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/sre-reliability.png",
      title: "SRE Reliability",
      description:
        "Maintain high availability, robust monitoring, and proactive incident management for consistent system performance."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/flexible-hiring.png",
      title: "Flexible Hiring",
      description:
        "Engage top DevOps and SRE engineers on-demand, full-time, or for specific projects to scale operations efficiently."
    }
  ]
};

const HireDevOpsAndSREEngineers: React.FC = () => {
  return <SubServicesStructure content={hireDevOpsContent} />;
};

export default HireDevOpsAndSREEngineers;
