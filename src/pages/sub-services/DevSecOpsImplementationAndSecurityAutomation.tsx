import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const devSecOpsContent: SubServiceContent = {
  heroTitle: "DevSecOps Implementation & Security Automation",
  heroSubtitle: "Integrate Security Seamlessly into Your DevOps Lifecycle",
  heroDescription:
    "Automate security, compliance, and vulnerability checks across your CI/CD pipelines for faster, safer software delivery.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "DevSecOps Implementation & Security Automation",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> helps organizations embed security into every stage of the software lifecycle using DevSecOps practices and security automation. Our solutions reduce risk, enhance compliance, and ensure faster, safer deployments across cloud and hybrid environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Integrated Security in CI/CD:</strong> Embed security testing and compliance directly into build and deployment pipelines.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Automated Vulnerability Scanning:</strong> Continuously scan code, dependencies, and container images to detect security risks.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Secrets Management & Encryption:</strong> Securely store and manage credentials, keys, and sensitive data using automated encryption.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Policy Enforcement & Compliance:</strong> Automate security policy enforcement and maintain regulatory compliance.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Continuous Security Monitoring:</strong> Real-time monitoring, alerts, and automated responses to detect and mitigate threats proactively.
        </>
      )
    }
  ],
  secondaryTitle: "Deliver Secure Software Faster with DevSecOps",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> enables teams to deliver resilient, secure, and reliable applications without compromising speed. By combining automated security checks, continuous monitoring, and best-practice frameworks, we ensure safer software delivery and operational excellence.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Automated Security",
      description:
        "Integrate security checks and vulnerability scanning into CI/CD pipelines to identify risks early and reduce manual intervention."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Policy & Compliance Automation",
      description:
        "Automatically enforce security policies and maintain compliance across all environments without slowing development."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Continuous Security Monitoring",
      description:
        "Implement real-time monitoring, alerts, and automated responses to detect and address threats proactively."
    }
  ]
};

const DevSecOpsImplementationAndSecurityAutomation: React.FC = () => {
  return <SubServicesStructure content={devSecOpsContent} />;
};

export default DevSecOpsImplementationAndSecurityAutomation;
