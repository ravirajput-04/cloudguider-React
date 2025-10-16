import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const autoScalingContent: SubServiceContent = {
  heroTitle: "Auto Scaling & Cloud Performance Engineering",
  heroSubtitle: "Scale Intelligently, Perform Exceptionally",
  heroDescription:
    "Engineer intelligent, auto-scaling cloud environments that adapt dynamically to workload changes while ensuring peak performance and cost efficiency.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Auto Scaling & Cloud Performance Engineering",
  mainDescription: (
    <>
      In today’s fast-paced digital ecosystem, your applications must scale effortlessly and perform flawlessly — no matter the demand.
      At <strong>Cloud Guider</strong>, we engineer intelligent, auto-scaling cloud environments that adapt dynamically to workload changes,
      ensuring uninterrupted performance and cost efficiency. Our cloud performance engineers leverage advanced monitoring, predictive scaling,
      and performance optimization techniques to ensure your systems remain responsive, resilient, and reliable across all traffic conditions.
      From infrastructure-level scaling to application tuning, we empower your business with performance that scales seamlessly as you grow.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Dynamic Auto Scaling:</strong> Implement intelligent scaling policies that automatically adjust compute, storage,
          and network resources based on real-time demand — eliminating overprovisioning and underutilization.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Performance Engineering Expertise:</strong> Optimize workloads, APIs, and microservices to achieve faster response times,
          lower latency, and maximum throughput across distributed environments.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Predictive Scaling & Load Management:</strong> Utilize AI-powered forecasting and load balancing to anticipate
          spikes in traffic and proactively scale resources without impacting user experience.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Cloud-Native Optimization:</strong> Fine-tune performance for cloud-native architectures using container orchestration,
          service meshes, and distributed caching to maximize efficiency.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Continuous Monitoring & Benchmarking:</strong> Leverage real-time telemetry and observability tools to identify
          performance bottlenecks, benchmark workloads, and ensure consistent service delivery at scale.
        </>
      )
    }
  ],
  secondaryTitle: "Scale Intelligently, Perform Exceptionally",
  secondaryDescription: (
    <>
      <strong>Cloud Guider’s</strong> Auto Scaling & Cloud Performance Engineering services combine automation with analytics
      to ensure your infrastructure adapts intelligently to real-world demands. We help businesses maintain peak application
      performance during high-traffic periods while keeping costs predictable during idle times. Whether you’re running a
      multi-region SaaS platform or a data-intensive enterprise workload, our experts ensure your cloud systems deliver consistent,
      high-speed performance and reliability — no matter the scale.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/intelligent-auto-scaling.png",
      title: "Intelligent Auto Scaling",
      description:
        "Configure horizontal and vertical scaling strategies that automatically adjust to traffic, usage, and performance metrics — ensuring optimal resource allocation at all times."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/performance-engineering.png",
      title: "Performance Engineering",
      description:
        "Conduct comprehensive load and stress testing to uncover performance limits, optimize infrastructure, and enhance user experiences even under extreme workloads."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/performance-monitoring.png",
      title: "Real-Time Performance Monitoring",
      description:
        "Utilize advanced observability platforms and APM tools to gain visibility into system health, detect anomalies early, and maintain peak application responsiveness around the clock."
    }
  ]
};

const AutoScalingAndCloudPerformanceEngineering: React.FC = () => {
  return <SubServicesStructure content={autoScalingContent} />;
};

export default AutoScalingAndCloudPerformanceEngineering;
