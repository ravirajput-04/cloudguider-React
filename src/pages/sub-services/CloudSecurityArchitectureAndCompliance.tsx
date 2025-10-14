import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const cloudSecurityContent: SubServiceContent = {
  heroTitle: "Cloud Security Architecture & Compliance",
  heroSubtitle: "Secure and Compliant Cloud Environments",
  heroDescription:
    "Design and implement secure cloud infrastructures while maintaining regulatory compliance across multi-cloud and hybrid environments.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Cloud Security Architecture & Compliance",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> helps organizations design robust cloud security architectures that protect critical applications, data, and infrastructure while adhering to industry standards and regulatory requirements.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Secure Cloud Design:</strong> Architect infrastructures using network segmentation, firewalls, and zero-trust principles to protect workloads.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Regulatory Compliance:</strong> Implement controls to meet GDPR, SOC 2, ISO 27001, HIPAA, and other industry standards.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Identity & Access Management (IAM):</strong> Securely manage authentication, role-based access, and privileges across resources.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Threat Detection & Incident Response:</strong> Integrate automated monitoring, logging, and alerts to identify and respond to security incidents proactively.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Continuous Security Audits:</strong> Regularly assess cloud environments against best practices to maintain security posture and reduce risk.
        </>
      )
    }
  ],
  secondaryTitle: "Protect Your Cloud with Trusted Security Architecture",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> ensures secure, compliant, and resilient cloud infrastructures. Our services combine strategic planning, automated security practices, and continuous monitoring to mitigate risks, prevent breaches, and maintain regulatory adherence.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Secure Cloud Design",
      description:
        "Implement network segmentation, firewalls, and zero-trust models to protect applications and data across multi-cloud environments."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Compliance Management",
      description:
        "Maintain regulatory compliance with automated policies, audits, and controls aligned with industry standards."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Threat Detection & IAM",
      description:
        "Use proactive monitoring, automated alerts, and identity & access management to prevent unauthorized access and mitigate risks."
    }
  ]
};

const CloudSecurityArchitectureAndCompliance: React.FC = () => {
  return <SubServicesStructure content={cloudSecurityContent} />;
};

export default CloudSecurityArchitectureAndCompliance;
