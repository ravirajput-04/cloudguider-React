import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const technologyAssessmentContent: SubServiceContent = {
  heroTitle: "Technology Assessment & Roadmapping",
  heroSubtitle: "Plan, Optimize, and Innovate Your IT Landscape",
  heroDescription:
    "Drive informed technology decisions with Cloud Guider’s Technology Assessment & Roadmapping services. Evaluate IT systems, identify gaps, and define strategic roadmaps to enhance performance, reduce risks, and ensure sustainable growth.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Technology Assessment & Roadmapping",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> evaluates your IT landscape, identifies gaps, and defines strategic roadmaps that align technology initiatives with business goals. Our services ensure operational efficiency, scalability, innovation, and risk mitigation while improving ROI.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Comprehensive Technology Assessment:</strong> Evaluate systems, processes, and infrastructure to identify strengths, weaknesses, and opportunities.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Strategic Roadmapping:</strong> Develop a clear IT roadmap prioritizing initiatives and ensuring smooth technology adoption.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Technology Gap Analysis:</strong> Identify performance, security, scalability, and compliance gaps to plan improvements.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Innovation & Emerging Technology Advisory:</strong> Recommend tools, platforms, and architectures for digital transformation.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Risk & Compliance Evaluation:</strong> Ensure plans comply with industry standards and mitigate operational, security, and financial risks.
        </>
      )
    }
  ],
  secondaryTitle: "Plan Your Technology Future with Confidence",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> provides actionable assessments and roadmaps that empower organizations to make data-driven IT decisions. By identifying gaps, prioritizing initiatives, and recommending best-fit solutions, we help businesses enhance performance, reduce risks, and achieve sustainable growth.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Technology Assessment",
      description:
        "Conduct in-depth evaluations of IT systems and infrastructure to identify strengths, weaknesses, and improvement opportunities."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Strategic Roadmapping",
      description:
        "Define a clear IT roadmap prioritizing initiatives, aligning with business goals, and ensuring smooth technology adoption."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Innovation & Risk Management",
      description:
        "Recommend emerging technologies, ensure compliance, and mitigate risks while driving innovation and business growth."
    }
  ]
};

const TechnologyAssessmentAndRoadmapping: React.FC = () => {
  return <SubServicesStructure content={technologyAssessmentContent} />;
};

export default TechnologyAssessmentAndRoadmapping;
