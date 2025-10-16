import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const multiCloudContent: SubServiceContent = {
  heroTitle: "Multi-Cloud & Hybrid Cloud Solutions",
  heroSubtitle: "Unify Your Cloud Ecosystem with Strategic Integration",
  heroDescription:
    "Design and implement integrated cloud ecosystems that seamlessly connect multiple cloud providers and on-premises environments, ensuring agility, scalability, and reliability.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Multi-Cloud & Hybrid Cloud Solutions",
  mainDescription: (
    <>
      Modern enterprises demand flexibility, agility, and reliability — and that’s exactly what a multi-cloud and hybrid cloud strategy delivers.
      At <strong>Cloud Guider</strong>, we design and implement integrated cloud ecosystems that seamlessly connect multiple cloud providers
      and on-premises environments. Our experts enable you to leverage the strengths of AWS, Azure, Google Cloud, and private infrastructure,
      ensuring unified control, enhanced scalability, and data sovereignty. Whether your goal is workload portability, disaster recovery,
      or cost optimization, our tailored multi-cloud and hybrid architectures empower your business with the freedom to innovate securely
      and efficiently — without vendor lock-in.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Unified Cloud Architecture:</strong> Design and deploy a consistent, integrated framework that connects
          multiple public and private cloud environments with secure data exchange and centralized management.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Seamless Workload Mobility:</strong> Enable smooth migration and interoperability between cloud platforms
          to improve flexibility, eliminate downtime, and ensure business continuity.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Centralized Governance & Security:</strong> Apply uniform compliance, identity management, and
          security controls across multi-cloud and on-premise systems to protect data and meet regulatory requirements.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Optimized Resource Utilization:</strong> Balance workloads dynamically across cloud providers to
          maximize performance, minimize latency, and achieve cost efficiency without sacrificing reliability.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>High Availability & Disaster Recovery:</strong> Build fault-tolerant architectures with multi-region
          replication, automated failover, and redundancy to ensure zero downtime for mission-critical workloads.
        </>
      )
    }
  ],
  secondaryTitle: "Unify Your Cloud Ecosystem with Strategic Integration",
  secondaryDescription: (
    <>
      <strong>Cloud Guider’s</strong> Multi-Cloud & Hybrid Cloud Solutions empower organizations to harness the best
      features of diverse platforms under one cohesive strategy. Our engineers integrate cloud environments to ensure
      secure connectivity, data synchronization, and consistent application performance across all infrastructures.
      By aligning your workloads with the most suitable cloud environments, we help you accelerate innovation, improve
      agility, and achieve operational excellence — while keeping full control of your digital ecosystem.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/hybrid-cloud-integration.png",
      title: "Hybrid Cloud Integration",
      description:
        "Bridge on-premises and cloud systems with secure, automated workflows that enable seamless data flow and unified operations across your entire IT ecosystem."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/cloud-interoperability.png",
      title: "Cloud Interoperability",
      description:
        "Achieve cross-cloud compatibility with optimized APIs, automation frameworks, and containerized deployments that ensure seamless workload transitions between providers."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/cloud-services/unified-cloud-management.png",
      title: "Unified Cloud Management",
      description:
        "Simplify multi-cloud operations with centralized monitoring, governance, and policy enforcement tools that deliver complete visibility and control across all environments."
    }
  ]
};

const MultiCloudAndHybridCloudSolutions: React.FC = () => {
  return <SubServicesStructure content={multiCloudContent} />;
};

export default MultiCloudAndHybridCloudSolutions;
