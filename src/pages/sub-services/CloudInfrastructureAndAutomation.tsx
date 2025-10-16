import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const cloudInfrastructureContent: SubServiceContent = {
  heroTitle: "Cloud Infrastructure & Automation",
  heroSubtitle: "Smart Cloud Systems for Efficient Operations",
  heroDescription:
    "Build scalable infrastructure & automate workflows to boost efficiency, reduce downtime, and optimize cloud performance.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Cloud Infrastructure & Automation",
  mainDescription: (
    <>
      In the modern digital landscape, efficient and intelligent cloud infrastructure forms the core of every successful
      enterprise. At <strong>Cloud Guider</strong>, we design, build, and automate cloud infrastructures that are
      reliable, cost-efficient, and scalable to meet evolving business demands. Our approach goes beyond traditional
      deployment — we focus on automation-first architecture that minimizes manual processes, optimizes performance, and
      ensures security across multi-cloud environments. Leveraging tools like <strong>Terraform</strong>,{" "}
      <strong>Ansible</strong>, <strong>Kubernetes</strong>, and <strong>AWS CloudFormation</strong>, our experts create
      cloud systems that automatically adapt, heal, and evolve with your business.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>End-to-End Infrastructure Automation:</strong> Automate the provisioning, configuration, and management
          of servers, storage, and networks with Infrastructure as Code (IaC), enabling faster delivery and consistent
          deployments.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Scalable Cloud Architecture:</strong> Build flexible and auto-scaling environments that grow with your
          workload demands — maintaining stability, performance, and cost efficiency during traffic spikes or seasonal
          peaks.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Multi-Cloud & Hybrid Integration:</strong> Integrate resources across AWS, Azure, and Google Cloud for
          seamless operations, centralized management, and unified security policies in hybrid or multi-cloud ecosystems.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Intelligent Monitoring & Optimization:</strong> Implement automated monitoring and alerting systems
          that proactively identify inefficiencies, enhance resource utilization, and prevent downtime before it occurs.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Compliance & Security Automation:</strong> Enforce security baselines and compliance controls
          automatically through pre-defined templates that align with GDPR, SOC 2, and ISO 27001 frameworks.
        </>
      )
    }
  ],
  secondaryTitle: "Achieve Efficiency Through Smart Cloud Automation",
  secondaryDescription: (
    <>
      Our Cloud Infrastructure & Automation services help organizations transition from manual, time-consuming operations
      to fully automated, self-sustaining environments. By combining DevOps methodologies with next-generation automation
      tools, we enable continuous delivery, auto-scaling, and self-healing systems that respond dynamically to real-time
      demands. Whether you’re building a new cloud foundation or modernizing legacy systems,{" "}
      <strong>Cloud Guider</strong> ensures your infrastructure remains secure, high-performing, and future-ready —
      driving faster innovation and business continuity.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/infrastructure-as-code.png",
      title: "Infrastructure as Code (IaC)",
      description:
        "Build, replicate, and scale your cloud environments through reusable templates and automation scripts, reducing deployment times and improving reliability across multiple environments."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/devops-driven-cloud-automation.png",
      title: "DevOps-Driven Cloud Automation",
      description:
        "Integrate automation at every stage of development and operations with CI/CD pipelines, auto-deployments, and version-controlled configurations that streamline delivery and reduce risk."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/autonomous-monitoring-and-scaling.png",
      title: "Autonomous Monitoring & Scaling",
      description:
        "Enable real-time visibility into cloud resources with AI-powered monitoring, automatic fault detection, and adaptive scaling that keeps your infrastructure performing at its best — always."
    }
  ]
};

const CloudInfrastructureAndAutomation: React.FC = () => {
  return <SubServicesStructure content={cloudInfrastructureContent} />;
};

export default CloudInfrastructureAndAutomation;
