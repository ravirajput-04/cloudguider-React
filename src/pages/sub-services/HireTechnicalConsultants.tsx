import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireTechnicalConsultantsContent: SubServiceContent = {
  heroTitle: "Hire Technical Consultants",
  heroSubtitle: "Expert IT & Cloud Advisory",
  heroDescription:
    "Leverage professional technical consultants to guide your IT, cloud, and DevOps transformations efficiently and securely.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true },
  ],
  mainTitle: "Hire Technical Consultants",
  mainDescription: (
    <>
      Leverage the expertise of professional <strong>Technical Consultants</strong> from <strong>Cloud Guider</strong> 
      to guide your organization through complex IT, cloud, and DevOps transformations. Our consultants provide 
      strategic advice, technology assessments, and hands-on support to ensure efficient, scalable, and secure 
      technology implementations. By hiring our experts, organizations can make informed decisions, reduce risk, 
      and accelerate digital transformation initiatives while optimizing costs and resources.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>IT &amp; Cloud Strategy:</strong> Define clear roadmaps for cloud adoption, infrastructure modernization, 
          and technology integration aligned with business goals.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Technical Assessments &amp; Audits:</strong> Evaluate existing systems, workflows, and security 
          posture to identify gaps and optimize performance.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Solution Design &amp; Implementation:</strong> Recommend and implement tailored solutions across cloud, 
          DevOps, and enterprise IT environments for maximum efficiency.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Governance &amp; Compliance Guidance:</strong> Ensure systems meet regulatory standards and security 
          best practices while mitigating operational risks.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Performance Optimization &amp; Best Practices:</strong> Enhance infrastructure and application 
          efficiency through actionable recommendations and expert oversight.
        </>
      ),
    },
  ],
  secondaryTitle: "Transform Your Technology with Expert Consulting",
  secondaryDescription: (
    <>
      Hiring <strong>Technical Consultants</strong> from <strong>Cloud Guider</strong> empowers your organization 
      to achieve successful IT and cloud transformations. Our consultants combine strategic insight with hands-on 
      expertise to ensure your infrastructure, applications, and workflows are optimized for performance, security, 
      and scalability — driving long-term business growth and technology innovation.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/resource-hiring/it-and-cloud-strategy.png",
      title: "IT & Cloud Strategy",
      description:
        "Define strategic technology roadmaps that align cloud, infrastructure, and application initiatives with business objectives.",
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/resource-hiring/technical-assessments-and-audits.png",
      title: "Technical Assessments & Audits",
      description:
        "Evaluate current IT and cloud environments to identify gaps, risks, and areas for performance and security improvements.",
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/resource-hiring/solution-design-and-implementation.png",
      title: "Solution Design & Implementation",
      description:
        "Recommend and implement tailored solutions across cloud and IT environments to maximize efficiency, security, and scalability.",
    },
  ],
};

const HireTechnicalConsultants: React.FC = () => {
  return <SubServicesStructure content={hireTechnicalConsultantsContent} />;
};

export default HireTechnicalConsultants;
