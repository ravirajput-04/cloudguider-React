import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const securityAuditsContent: SubServiceContent = {
  heroTitle: "Security Audits & Penetration Testing",
  heroSubtitle: "Proactively Strengthen Your IT Security",
  heroDescription:
    "Identify vulnerabilities, validate defenses, and maintain compliance with comprehensive audits and penetration testing.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Security Audits & Penetration Testing",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> delivers end-to-end security audits and penetration testing to help organizations identify vulnerabilities, assess risks, and enhance defenses across networks, applications, and cloud infrastructure.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Comprehensive Security Audits:</strong> Evaluate systems, networks, applications, and cloud infrastructure for vulnerabilities and misconfigurations.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Advanced Penetration Testing:</strong> Simulate attacks using latest tools and techniques to uncover security weaknesses proactively.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Risk Analysis & Remediation:</strong> Prioritize vulnerabilities by potential impact and implement actionable remediation strategies.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Compliance Assessment:</strong> Ensure adherence to ISO 27001, SOC 2, HIPAA, and GDPR with structured audits and reporting.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Continuous Security Improvement:</strong> Apply best practices to strengthen defenses, enhance monitoring, and reduce future risk exposure.
        </>
      )
    }
  ],
  secondaryTitle: "Enhance Security with Expert Testing & Audits",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> helps organizations proactively secure their digital environment. Through rigorous audits and penetration testing, we identify vulnerabilities, validate defenses, and provide actionable remediation to maintain compliance and operational continuity.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Security Audits",
      description:
        "Conduct thorough evaluations of networks, applications, and cloud infrastructure to identify and remediate security gaps."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Penetration Testing",
      description:
        "Simulate real-world cyberattacks to detect vulnerabilities, assess risks, and validate security defenses before threats occur."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Compliance & Remediation",
      description:
        "Maintain regulatory compliance and implement actionable remediation plans to strengthen security and reduce risks proactively."
    }
  ]
};

const SecurityAuditsAndPenetrationTesting: React.FC = () => {
  return <SubServicesStructure content={securityAuditsContent} />;
};

export default SecurityAuditsAndPenetrationTesting;
