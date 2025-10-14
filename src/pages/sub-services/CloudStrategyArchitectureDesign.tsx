import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const cloudStrategyArchitectureContent: SubServiceContent = {
  heroTitle: "Cloud Strategy & Architecture Design",
  heroSubtitle: "Expert Planning & Scalable Cloud Architectures",
  heroDescription:
    "Unlock the full potential of cloud computing with Cloud Guider’s expert cloud strategy and architecture design services. Ensure efficiency, scalability, and security across multi-cloud environments.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Cloud Strategy & Architecture Design",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> helps organizations define cloud adoption strategies, design scalable and resilient architectures, and align technology with business objectives. We ensure optimal cloud deployment, cost efficiency, and operational excellence while maintaining security and compliance across multi-cloud environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Strategic Cloud Planning:</strong> Define a roadmap for cloud adoption aligned with business goals, operational needs, and budget.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Scalable Architecture Design:</strong> Build highly available, resilient, and flexible cloud architectures that grow with business demands.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cost Optimization & Efficiency:</strong> Implement strategies to maximize performance while minimizing cloud expenditure.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Security & Compliance Alignment:</strong> Integrate robust security controls and regulatory compliance measures into your architecture.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Multi-Cloud & Hybrid Integration:</strong> Seamlessly integrate AWS, Azure, and Google Cloud for unified management and interoperability.
        </>
      )
    }
  ],
  secondaryTitle: "Transform Your Business with Expert Cloud Design",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> empowers businesses to achieve operational agility, cost efficiency, and innovation with expert cloud strategy and architecture design. From planning and design to implementation and optimization, our solutions provide a robust foundation for long-term digital transformation.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Strategic Cloud Planning",
      description:
        "Develop a structured cloud adoption roadmap aligned with business goals, operational priorities, and budget considerations."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Scalable Architecture Design",
      description:
        "Build resilient, highly available, and flexible cloud architectures that can adapt to changing workloads and business requirements."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Cost Optimization & Security",
      description:
        "Optimize cloud resource usage for maximum efficiency while integrating robust security and compliance measures into your architecture."
    }
  ]
};

const CloudStrategyArchitectureDesign: React.FC = () => {
  return <SubServicesStructure content={cloudStrategyArchitectureContent} />;
};

export default CloudStrategyArchitectureDesign;
