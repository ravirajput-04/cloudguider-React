import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const sreSolutionsContent: SubServiceContent = {
  heroTitle: "Site Reliability Engineering (SRE) Solutions",
  heroSubtitle: "Reliable & Scalable Systems for Your Business",
  heroDescription:
    "Build resilient, high-performance systems with automation and proactive monitoring. Cloud Guider’s SRE solutions ensure uptime, scalability, and operational excellence.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Site Reliability Engineering (SRE) Solutions",
  mainDescription: (
    <>
      At <strong>Cloud Guider</strong>, our <strong>SRE solutions</strong> ensure reliable, scalable systems by applying software engineering
      principles to operations. We automate processes, monitor performance, and optimize cloud and hybrid environments for maximum uptime and efficiency.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Reliability & Resilience:</strong> Build systems that recover automatically from failures, ensuring high availability.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Automated Operations:</strong> Reduce manual work with automated deployments, scaling, and incident response.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Monitoring & Observability:</strong> Detect issues early with comprehensive monitoring, logging, and alerting.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Performance & Capacity Planning:</strong> Optimize resources and forecast capacity to prevent bottlenecks.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Incident Management & SLAs:</strong> Ensure structured response processes and maintain service quality.
        </>
      )
    }
  ],
  secondaryTitle: "Achieve Operational Excellence with SRE",
  secondaryDescription: (
    <>
      <strong>Cloud Guider’s</strong> SRE approach combines automation, monitoring, and best practices to reduce downtime,
      improve performance, and keep your cloud systems resilient and ready for growth.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/resilient-systems.png",
      title: "Resilient Systems",
      description:
        "Build fault-tolerant architectures that automatically recover from failures, ensuring uninterrupted service delivery."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/monitoring-and-observability.png",
      title: "Monitoring & Observability",
      description:
        "Gain real-time insights with monitoring, logging, and alerting solutions to detect issues before they impact users."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/automated-operations.png",
      title: "Automated Operations",
      description:
        "Streamline deployments, scaling, and incident response with automated workflows to improve operational efficiency."
    }
  ]
};

const SiteReliabilityEngineeringSolutions: React.FC = () => {
  return <SubServicesStructure content={sreSolutionsContent} />;
};

export default SiteReliabilityEngineeringSolutions;
