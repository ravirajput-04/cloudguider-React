import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const cloudServiceContent: SubServiceContent = {
  heroTitle: "Cloud Platform Development",
  heroSubtitle: "Efficient Cloud Solutions for Seamless Management",
  heroDescription: "Enhance your infrastructure & streamline cloud operations",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Cloud Platform Development & Management",
  mainDescription: (
    <>
      In today’s digital era, cloud platforms are the backbone of business transformation.
      At <strong>Cloud Guider</strong>, we build and manage scalable, secure, and resilient cloud infrastructures
      tailored to your goals — from startups to global enterprises. Our certified cloud architects leverage{" "}
      <strong>AWS</strong>, <strong>Azure</strong>, and <strong>Google Cloud</strong> to deliver end-to-end solutions
      with automation, security, and performance optimization. We focus on driving innovation, agility, and cost
      efficiency through intelligent cloud platform development and management.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Full-stack Cloud Development:</strong> We architect and build custom cloud platforms using
          microservices, containers, and serverless technologies that ensure flexibility and fast time-to-market.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cross-Platform Integration:</strong> Seamlessly integrate applications across AWS, Azure, and GCP for
          unified management, centralized security, and improved interoperability.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Continuous Deployment & Monitoring:</strong> Implement CI/CD pipelines and real-time monitoring
          dashboards to ensure applications are always optimized for peak performance and minimal downtime.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cost Optimization & Governance:</strong> Our experts design resource utilization strategies and
          governance frameworks to eliminate cloud waste and keep your spending predictable and efficient.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Data Security & Compliance:</strong> We integrate advanced encryption, IAM controls, and regulatory
          compliance (GDPR, ISO 27001, SOC 2) into every layer of your cloud infrastructure.
        </>
      )
    }
  ],
  secondaryTitle: "Empower Your Business with Scalable Cloud Solutions",
  secondaryDescription: (
    <>
      Our Cloud Platform Development & Management services ensure your business applications are always available,
      secure, and optimized for peak performance. From architecture design to automated scaling, we help you reduce
      operational overhead while achieving consistent service reliability. Our DevOps-driven approach accelerates
      innovation, boosts agility, and keeps your infrastructure future-ready for growing workloads and business demands.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Automation & Time Efficiency",
      description:
        "Streamline deployments, updates, and scaling through intelligent automation tools that save time and eliminate manual errors across cloud environments."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Centralized Cloud Management",
      description:
        "Gain full visibility and control of your multi-cloud infrastructure through unified dashboards and advanced monitoring solutions that simplify resource management."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Collaborative Development",
      description:
        "Foster teamwork between DevOps, developers, and IT operations with collaborative workflows and version-controlled deployments powered by modern cloud frameworks."
    }
  ]
};

const CloudPlatformDevelopmentAndManagement: React.FC = () => {
  return <SubServicesStructure content={cloudServiceContent} />;
};

export default CloudPlatformDevelopmentAndManagement;
