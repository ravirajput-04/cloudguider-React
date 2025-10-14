import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireCloudEngineersContent: SubServiceContent = {
  heroTitle: "Hire Cloud Engineers",
  heroSubtitle: "Expert Talent to Build and Manage Your Cloud Infrastructure",
  heroDescription:
    "Gain access to skilled Cloud Engineers to design, implement, and optimize scalable, secure, and high-performance cloud environments.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true },
  ],
  mainTitle: "Hire Cloud Engineers",
  mainDescription: (
    <>
      Gain access to skilled <strong>Cloud Engineers</strong> from <strong>Cloud Guider</strong> to design, implement, and manage your cloud infrastructure efficiently.
      Our experts specialize in building scalable, secure, and highly available cloud solutions across AWS, Azure, and Google Cloud.
      By hiring our professionals, organizations can accelerate cloud adoption, optimize costs, and ensure continuous performance while focusing on core business objectives.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cloud Architecture &amp; Design:</strong> Build robust and scalable cloud architectures tailored to business needs, ensuring high availability and security.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cloud Migration &amp; Deployment:</strong> Seamlessly migrate applications and workloads to the cloud while minimizing downtime and operational disruption.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>DevOps &amp; Automation:</strong> Implement CI/CD pipelines, automated deployments, and infrastructure-as-code to accelerate delivery and reduce errors.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cloud Performance &amp; Cost Optimization:</strong> Monitor cloud resources to optimize performance, scalability, and reduce overall cloud expenditure.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Security &amp; Compliance:</strong> Ensure cloud environments comply with industry standards and regulations, implementing best-in-class security practices.
        </>
      ),
    },
  ],
  secondaryTitle: "Empower Your Business with Expert Cloud Talent",
  secondaryDescription: (
    <>
      Hiring <strong>Cloud Engineers</strong> from <strong>Cloud Guider</strong> enables your organization to leverage professional expertise for cloud adoption and management.
      Our engineers provide end-to-end support for cloud strategy, implementation, optimization, and governance, ensuring your infrastructure is secure, cost-efficient, and ready to scale with your business needs.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Cloud Architecture &amp; Design",
      description:
        "Design and implement cloud solutions that are scalable, resilient, and aligned with your business goals.",
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Cloud Migration &amp; Deployment",
      description:
        "Migrate and deploy applications seamlessly across cloud platforms while minimizing downtime and maintaining performance.",
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "DevOps &amp; Automation",
      description:
        "Implement automated workflows, CI/CD pipelines, and infrastructure-as-code for faster, error-free deployments.",
    },
  ],
};

const HireCloudEngineers: React.FC = () => {
  return <SubServicesStructure content={hireCloudEngineersContent} />;
};

export default HireCloudEngineers;
