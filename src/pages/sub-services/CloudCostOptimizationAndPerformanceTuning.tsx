import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const cloudCostOptimizationContent: SubServiceContent = {
  heroTitle: "Cloud Cost Optimization & Performance Tuning",
  heroSubtitle: "Maximize ROI with Intelligent Cloud Optimization",
  heroDescription:
    "Optimize cloud performance and minimize costs with AI-driven insights, real-time monitoring, and automation strategies that deliver measurable efficiency gains.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Cloud Cost Optimization & Performance Tuning",
  mainDescription: (
    <>
      Managing cloud costs while ensuring peak performance is a challenge for most modern enterprises.
      At <strong>Cloud Guider</strong>, we specialize in optimizing cloud resources to deliver maximum performance
      with minimal expenditure. Our experts use advanced analytics, automation, and monitoring tools to identify
      inefficiencies, eliminate waste, and right-size your infrastructure. We go beyond simple cost-cutting —
      we ensure that every dollar you spend drives measurable business value through smarter resource allocation,
      workload balancing, and continuous performance enhancement.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Comprehensive Cost Analysis:</strong> Get a 360° view of your cloud expenses across AWS, Azure, and GCP
          to uncover hidden costs, underutilized resources, and inefficient configurations impacting your budget.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Right-Sizing & Resource Optimization:</strong> Match your compute, storage, and network resources
          precisely to workload requirements through real-time usage analytics and AI-driven recommendations.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Performance Benchmarking & Tuning:</strong> Continuously test, monitor, and refine system performance
          to achieve optimal speed, latency, and throughput across all layers of your cloud infrastructure.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Automation-Driven Efficiency:</strong> Implement intelligent scaling, automated cost policies, and workload
          scheduling that dynamically adapt to demand — minimizing idle time and unnecessary spend.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Billing Visibility & Governance:</strong> Establish centralized dashboards, cost policies, and alerts
          to maintain transparency, prevent overspending, and align cloud usage with business objectives.
        </>
      )
    }
  ],
  secondaryTitle: "Maximize Cloud ROI with Intelligent Optimization",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> helps businesses achieve a perfect balance between cost efficiency and top-tier performance.
      Our optimization framework integrates performance engineering with financial accountability — ensuring your systems run faster,
      scale smarter, and cost less. From performance diagnostics to real-time optimization, we enable your teams to focus on innovation
      while we take care of efficiency. Experience sustainable savings, improved reliability, and faster response times — all powered
      by intelligent cloud management and continuous improvement strategies.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/cloud-cost-visibility.png",
      title: "Cloud Cost Visibility",
      description:
        "Gain granular insights into your cloud spending patterns with detailed reports and analytics that highlight optimization opportunities and potential savings across multi-cloud environments."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/performance-tuning-and-optimization.png",
      title: "Performance Tuning & Optimization",
      description:
        "Fine-tune cloud workloads, databases, and applications to reduce latency, improve throughput, and deliver seamless user experiences without over-provisioning resources."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/automated-cost-governance.png",
      title: "Automated Cost Governance",
      description:
        "Implement policies and automation scripts that control spending, enforce budgets, and ensure compliance — helping your teams maintain financial discipline without slowing innovation."
    }
  ]
};

const CloudCostOptimizationAndPerformanceTuning: React.FC = () => {
  return <SubServicesStructure content={cloudCostOptimizationContent} />;
};

export default CloudCostOptimizationAndPerformanceTuning;
