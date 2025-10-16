import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const monitoringObservabilityContent: SubServiceContent = {
  heroTitle: "Monitoring, Observability & Incident Management",
  heroSubtitle: "Proactive Insights for Reliable Systems",
  heroDescription:
    "Ensure high availability and performance with Cloud Guider’s proactive monitoring, observability, and incident management solutions that reduce downtime and optimize operations.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Monitoring, Observability & Incident Management",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> provides comprehensive <strong>Monitoring, Observability, and Incident Management</strong> solutions
      that deliver deep insights into system health, detect anomalies early, and enable rapid incident resolution to maintain reliable, high-performing environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Comprehensive Monitoring:</strong> Track metrics, logs, and events in real-time to proactively detect issues.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Full Observability:</strong> Gain end-to-end visibility across applications and infrastructure for root cause analysis.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Automated Alerts:</strong> Intelligent notifications ensure fast response to anomalies and failures.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Incident Management:</strong> Structured workflows for detection, escalation, and resolution maintain service reliability.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Performance Optimization:</strong> Fine-tune infrastructure and applications based on monitoring insights for maximum efficiency.
        </>
      )
    }
  ],
  secondaryTitle: "Enhance Reliability with Proactive Monitoring",
  secondaryDescription: (
    <>
      Our services help organizations maintain high availability, reduce operational risks, and continuously improve system performance.
      By combining real-time monitoring, intelligent alerting, and structured incident response, we keep your cloud and hybrid environments resilient and optimized.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/real-time-monitoring.png",
      title: "Real-Time Monitoring",
      description:
        "Continuously track system metrics, logs, and events to detect issues early and maintain optimal performance."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/observability-and-analytics.png",
      title: "Observability & Analytics",
      description:
        "Gain deep insights into applications and infrastructure for root cause analysis and continuous improvement."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/devops-and-sre/incident-management.png",
      title: "Incident Management",
      description:
        "Structured workflows for detecting, escalating, and resolving incidents quickly, reducing downtime and maintaining reliability."
    }
  ]
};

const MonitoringObservabilityAndIncidentManagement: React.FC = () => {
  return <SubServicesStructure content={monitoringObservabilityContent} />;
};

export default MonitoringObservabilityAndIncidentManagement;
