import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const cloudDevOpsConsultingContent: SubServiceContent = {
  heroTitle: "Cloud & DevOps Consulting",
  heroSubtitle: "Expert Guidance for Cloud Adoption & DevOps Excellence",
  heroDescription:
    "Achieve operational agility and business growth with Cloud Guider’s consulting on cloud architecture, DevOps workflows, automation, and security.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Cloud & DevOps Consulting",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> helps organizations strategize, design, and implement cloud architectures and DevOps processes that optimize performance, reduce costs, and accelerate innovation. Our consulting aligns technology solutions with business objectives for seamless transformation in cloud-native and hybrid environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cloud Strategy & Architecture:</strong> Tailored cloud adoption strategies, scalable architectures, and optimized cloud investments.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>DevOps Process Implementation:</strong> CI/CD pipelines, automated workflows, and DevOps best practices for faster, higher-quality delivery.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cost Optimization & Performance Tuning:</strong> Assess cloud usage, optimize resources, and enhance system performance.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Security & Compliance Guidance:</strong> Expert advice on cloud security, regulatory compliance, and risk management.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Technology & Tool Advisory:</strong> Recommend best-fit tools for orchestration, automation, monitoring, and DevOps efficiency.
        </>
      )
    }
  ],
  secondaryTitle: "Transform Your Business with Expert Cloud & DevOps Guidance",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> provides actionable insights, strategic roadmaps, and hands-on guidance for successful cloud adoption and DevOps implementation. We enable businesses to innovate faster, optimize costs, and maintain resilient, secure, and scalable operations.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/cloud-strategy-architecture.png",
      title: "Cloud Strategy & Architecture",
      description:
        "Craft scalable, secure, and cost-efficient cloud architectures aligned with business objectives and technology goals."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/devops-process-implementation.png",
      title: "DevOps Process Implementation",
      description:
        "Enable CI/CD pipelines, automated workflows, and collaborative DevOps practices to improve delivery speed and quality."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/consulting-and-advisory/cost-optimization-and-performance.png",
      title: "Cost Optimization & Performance",
      description:
        "Assess cloud usage, enhance system performance, and optimize resource utilization for maximum efficiency and ROI."
    }
  ]
};

const CloudAndDevOpsConsulting: React.FC = () => {
  return <SubServicesStructure content={cloudDevOpsConsultingContent} />;
};

export default CloudAndDevOpsConsulting;
