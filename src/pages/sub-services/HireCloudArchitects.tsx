import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireCloudArchitectsContent: SubServiceContent = {
  heroTitle: "Hire Cloud Architects",
  heroSubtitle: "Expert Planning & Design for Scalable Cloud Solutions",
  heroDescription:
    "Engage Cloud Architects to design, plan, and implement secure, scalable, and high-performance cloud infrastructures.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true },
  ],
  mainTitle: "Hire Cloud Architects",
  mainDescription: (
    <>
      Engage expert <strong>Cloud Architects</strong> from <strong>Cloud Guider</strong> to design, plan, and
      implement enterprise-grade cloud solutions. Our architects bring deep expertise in cloud strategy, architecture design,
      and deployment across AWS, Azure, and Google Cloud, ensuring your cloud infrastructure is secure, scalable, and aligned
      with business objectives. With their guidance, organizations can adopt best practices, optimize costs, and accelerate
      digital transformation initiatives.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cloud Strategy &amp; Planning:</strong> Develop cloud roadmaps and architectures tailored to
          business goals for efficient adoption and long-term scalability.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Architecture Design &amp; Implementation:</strong> Build resilient, secure, and cost-efficient cloud
          environments using industry best practices.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Multi-Cloud &amp; Hybrid Expertise:</strong> Design integrated solutions across multiple cloud
          platforms and on-premise systems for seamless operations.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Governance &amp; Compliance:</strong> Implement security, regulatory, and operational governance
          frameworks to maintain compliance and reduce risk.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Performance Optimization &amp; Scalability:</strong> Ensure cloud solutions are optimized for high
          performance, reliability, and growth potential.
        </>
      ),
    },
  ],
  secondaryTitle: "Empower Your Business with Expert Cloud Architecture",
  secondaryDescription: (
    <>
      Hiring <strong>Cloud Architects</strong> from <strong>Cloud Guider</strong> ensures your organization
      benefits from expert planning, design, and execution of cloud solutions. Our architects enable secure, scalable,
      and cost-effective cloud infrastructure, helping businesses accelerate innovation, streamline operations,
      and achieve long-term technology goals with confidence.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/resource-hiring/cloud-strategy-and-planning.png",
      title: "Cloud Strategy & Planning",
      description:
        "Craft a cloud roadmap that aligns with business objectives, ensuring efficient adoption and scalable solutions.",
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/resource-hiring/architecture-design-and-implementation.png",
      title: "Architecture Design & Implementation",
      description:
        "Design and deploy secure, resilient, and cost-effective cloud infrastructures that meet your business requirements.",
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/resource-hiring/multi-cloud-and-hybrid-expertise.png",
      title: "Multi-Cloud & Hybrid Expertise",
      description:
        "Integrate and manage resources across multiple cloud platforms and on-premise systems for seamless operations.",
    },
  ],
};

const HireCloudArchitects: React.FC = () => {
  return <SubServicesStructure content={hireCloudArchitectsContent} />;
};

export default HireCloudArchitects;
