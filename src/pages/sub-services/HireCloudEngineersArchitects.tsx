import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireCloudEngineersContent: SubServiceContent = {
  heroTitle: "Hire Cloud Engineers / Architects",
  heroSubtitle: "Empower Your Business with Top-Tier Cloud Expertise",
  heroDescription:
    "Access certified cloud engineers and architects to design, implement, and manage secure, scalable, and high-performance cloud solutions tailored to your business.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Hire Cloud Engineers / Architects",
  mainDescription: (
    <>
      The success of your cloud journey depends on the expertise behind it. At <strong>Cloud Guider</strong>, we offer
      top-tier <strong>Cloud Engineers</strong> and <strong>Cloud Architects</strong> who bring years of experience in designing,
      building, and managing secure, scalable, and high-performance cloud infrastructures. Whether you’re migrating to the cloud,
      optimizing your workloads, or building next-gen digital platforms, our professionals provide the technical depth and strategic
      insight your business needs to thrive. With proficiency across <strong>AWS</strong>, <strong>Azure</strong>, and
      <strong>Google Cloud Platform (GCP)</strong>, our engineers ensure seamless implementation, automation, and operational excellence.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Certified Cloud Experts:</strong> Work with certified AWS, Azure, and GCP professionals who specialize in infrastructure design,
          automation, DevOps, and security — ensuring enterprise-grade reliability for every project.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>End-to-End Cloud Solutions:</strong> From initial architecture planning and deployment to optimization and monitoring, our experts
          manage the entire cloud lifecycle to maximize performance and minimize downtime.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Infrastructure Automation & DevOps:</strong> Implement CI/CD pipelines, Infrastructure as Code (IaC), and automation frameworks
          to accelerate releases and maintain operational consistency across environments.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Security & Compliance Focus:</strong> Ensure robust data protection and governance through best-in-class security architectures,
          IAM policies, and adherence to global compliance standards like ISO 27001 and SOC 2.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Scalable Team Models:</strong> Hire dedicated cloud engineers or build a complete remote team — fully aligned with your business goals
          and project timelines, providing flexibility and cost efficiency.
        </>
      )
    }
  ],
  secondaryTitle: "Empower Your Business with Cloud Expertise",
  secondaryDescription: (
    <>
      With <strong>Cloud Guider’s</strong> dedicated cloud professionals, you gain more than technical assistance — you gain a strategic partner
      committed to accelerating your digital transformation. Our engineers blend deep technical knowledge with practical experience in multi-cloud
      environments, ensuring every deployment is optimized for performance, cost, and security. Whether you’re scaling operations, implementing
      hybrid architectures, or modernizing legacy systems, we deliver the right talent to make your cloud initiatives successful from day one.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/expert-cloud-engineers.png",
      title: "Expert Cloud Engineers",
      description:
        "Leverage the expertise of certified professionals skilled in automating, optimizing, and managing workloads across AWS, Azure, and Google Cloud platforms for maximum efficiency."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/cloud-architecture-design.png",
      title: "Cloud Architecture Design",
      description:
        "Build robust, secure, and future-ready architectures designed to handle complex workloads while maintaining compliance and cost efficiency in multi-cloud or hybrid environments."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/dedicated-cloud-support.png",
      title: "Dedicated Cloud Support",
      description:
        "Get 24/7 assistance and proactive monitoring from our dedicated engineers who ensure smooth operations, quick issue resolution, and continuous performance improvements."
    }
  ]
};

const HireCloudEngineersArchitects: React.FC = () => {
  return <SubServicesStructure content={hireCloudEngineersContent} />;
};

export default HireCloudEngineersArchitects;
