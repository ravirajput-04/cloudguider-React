import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const onDemandScalabilityContent: SubServiceContent = {
  heroTitle: "On-Demand Scalability & Performance Tuning",
  heroSubtitle: "Ensure Agile, High-Performing Applications",
  heroDescription:
    "Cloud Guider helps organizations implement on-demand scalability and performance tuning to maintain peak performance, optimize resources, and deliver seamless digital experiences across dynamic workloads.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "On-Demand Scalability & Performance Tuning",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> specializes in <strong>auto-scaling strategies</strong>, resource optimization, and performance analysis to ensure applications remain responsive, cost-efficient, and highly available in dynamic cloud environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Dynamic Auto-Scaling:</strong> Automatically adjust computing resources based on workload demands for optimized performance and cost.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Performance Benchmarking:</strong> Continuously measure application and infrastructure performance to identify and resolve bottlenecks.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Resource Optimization:</strong> Fine-tune CPU, memory, storage, and network usage for maximum efficiency and reduced costs.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Proactive Monitoring & Alerts:</strong> Detect anomalies early with intelligent monitoring and alerting.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Load Testing & Stress Analysis:</strong> Simulate peak loads to ensure applications scale seamlessly and perform reliably.
        </>
      )
    }
  ],
  secondaryTitle: "Maximize Efficiency with Scalable Cloud Solutions",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> enables IT teams to proactively manage workloads, optimize resources, and maintain consistent user experiences even during peak demand. Our solutions combine intelligent scaling, monitoring, and performance tuning to ensure resilient, high-performing, and cost-efficient applications.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Dynamic Auto-Scaling",
      description:
        "Automatically scale compute resources up or down based on real-time demand to maintain performance, reduce costs, and ensure reliability."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Performance Tuning",
      description:
        "Optimize system performance through fine-tuning, load testing, and continuous monitoring for responsive and fast applications."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Monitoring & Optimization",
      description:
        "Implement intelligent monitoring and proactive optimization to detect anomalies early, improve efficiency, and ensure seamless experiences."
    }
  ]
};

const OnDemandScalabilityAndPerformanceTuning: React.FC = () => {
  return <SubServicesStructure content={onDemandScalabilityContent} />;
};

export default OnDemandScalabilityAndPerformanceTuning;
