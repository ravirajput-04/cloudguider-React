import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireDevSecOpsContent: SubServiceContent = {
  heroTitle: "Hire DevSecOps & Security Experts",
  heroSubtitle: "Skilled Professionals to Secure Your Software & Infrastructure",
  heroDescription:
    "Access certified DevSecOps and cybersecurity experts to integrate security, automate compliance, and protect your digital assets.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Hire DevSecOps & Security Experts",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> connects organizations with top-tier DevSecOps and cybersecurity professionals who secure CI/CD pipelines, automate compliance, and implement threat-resilient systems across development, operations, and cloud environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Certified DevSecOps Professionals:</strong> Experts who integrate automated security controls throughout the software lifecycle.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cybersecurity Specialists:</strong> Skilled in vulnerability management, threat detection, penetration testing, and incident response.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Customized Security Solutions:</strong> Tailored strategies aligned with business objectives, compliance requirements, and technology stacks.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Flexible Engagement Models:</strong> Full-time, part-time, or project-based hiring to scale your security team efficiently.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Continuous Knowledge & Best Practices:</strong> Experts bring industry-leading frameworks, tools, and practices to enhance security posture continuously.
        </>
      )
    }
  ],
  secondaryTitle: "Enhance Your Security with Skilled Professionals",
  secondaryDescription: (
    <>
      Hiring <strong>DevSecOps & Security Experts</strong> through <strong>Cloud Guider</strong> ensures secure, compliant, and resilient solutions. Our experts automate security workflows, monitor threats in real-time, and protect software, infrastructure, and cloud environments, enabling your business to innovate safely.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devsecops-and-security/expert-devsecops.png",
      title: "Expert DevSecOps",
      description:
        "Certified DevSecOps professionals integrate security into CI/CD pipelines, automate compliance, and reduce risks across development and operations."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devsecops-and-security/cybersecurity-experts.png",
      title: "Cybersecurity Experts",
      description:
        "Specialists skilled in vulnerability management, threat detection, penetration testing, and incident response to safeguard business-critical assets."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devsecops-and-security/flexible-engagements.png",
      title: "Flexible Engagements",
      description:
        "Full-time, part-time, or project-based engagements to scale your security team according to business needs."
    }
  ]
};

const HireDevSecOpsAndSecurityExperts: React.FC = () => {
  return <SubServicesStructure content={hireDevSecOpsContent} />;
};

export default HireDevSecOpsAndSecurityExperts;
