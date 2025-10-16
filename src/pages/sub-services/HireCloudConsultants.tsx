import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireCloudConsultantsContent: SubServiceContent = {
  heroTitle: "Hire Cloud Consultants",
  heroSubtitle: "Leverage Expert Cloud Knowledge for Your Business",
  heroDescription:
    "Accelerate your cloud initiatives with Cloud Guider’s expert Cloud Consultants. From strategy and architecture to migration, security, and cost optimization, we guide organizations through every stage of cloud adoption to ensure efficiency, scalability, and business continuity.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Hire Cloud Consultants",
  mainDescription: (
    <>
      By hiring <strong>Cloud Guider</strong> consultants, your organization gains access to seasoned professionals who combine technical expertise with strategic insights. From planning and design to implementation and optimization, our consultants help achieve agility, scalability, and operational efficiency in complex cloud environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cloud Strategy & Advisory:</strong> Expert guidance on adoption, cost optimization, and alignment with business goals.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Architecture & Design Consultation:</strong> Design secure, scalable, and resilient cloud architectures tailored to your workloads.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Migration & Modernization Planning:</strong> Plan and execute migrations efficiently with minimal downtime and maximum performance.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Security & Compliance Advisory:</strong> Implement best practices for cloud security, identity management, and regulatory compliance.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cost Management & Optimization:</strong> Analyze and optimize cloud spending to improve efficiency and reduce unnecessary costs.
        </>
      )
    }
  ],
  secondaryTitle: "Leverage Expert Cloud Knowledge for Your Business",
  secondaryDescription: (
    <>
      Our consultants ensure that cloud initiatives are executed with precision, empowering your business to navigate complex cloud environments confidently while achieving operational excellence.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/cloud-strategy-and-advisory.png",
      title: "Cloud Strategy & Advisory",
      description:
        "Receive expert guidance to align cloud initiatives with business objectives, optimize costs, and plan long-term cloud adoption."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/architecture-and-design.png",
      title: "Architecture & Design",
      description:
        "Design secure, scalable, and high-performing cloud architectures that meet your business and operational requirements."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/migration-and-optimization.png",
      title: "Migration & Optimization",
      description:
        "Plan and execute smooth cloud migrations while optimizing performance, scalability, security, and cost across your infrastructure."
    }
  ]
};

const HireCloudConsultants: React.FC = () => {
  return <SubServicesStructure content={hireCloudConsultantsContent} />;
};

export default HireCloudConsultants;
