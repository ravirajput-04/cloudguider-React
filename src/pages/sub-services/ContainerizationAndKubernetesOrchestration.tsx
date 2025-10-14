import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const containerizationK8sContent: SubServiceContent = {
  heroTitle: "Containerization & Kubernetes Orchestration",
  heroSubtitle: "Seamless Application Deployment & Scalability",
  heroDescription:
    "Cloud Guider helps organizations adopt containerization and Kubernetes orchestration to deploy, manage, and scale applications efficiently across cloud and hybrid environments.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Containerization & Kubernetes Orchestration",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> specializes in <strong>containerization</strong> and <strong>Kubernetes orchestration</strong>, enabling modern application delivery with high availability,
      portability, and optimized resource usage across cloud and hybrid environments.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Containerization:</strong> Package applications and dependencies into portable containers for consistent deployments.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Kubernetes Orchestration:</strong> Automate deployment, scaling, and management of containerized apps.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>CI/CD Integration:</strong> Integrate container workflows into pipelines for rapid, repeatable deployments.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Multi-Cloud & Hybrid Support:</strong> Ensure consistency and portability across AWS, Azure, GCP, or on-premises.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Monitoring & Autoscaling:</strong> Enable real-time monitoring, health checks, and auto-scaling for optimal resource usage.
        </>
      )
    }
  ],
  secondaryTitle: "Streamline Application Delivery with Containers",
  secondaryDescription: (
    <>
      By standardizing deployments, automating scaling, and integrating with CI/CD pipelines, <strong>Cloud Guider</strong> ensures reliable,
      repeatable, and scalable application operations. Accelerate time-to-market while maintaining operational control and security across all environments.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Containerization",
      description:
        "Package applications and dependencies into portable containers, ensuring consistent performance and simplified deployment."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Kubernetes Orchestration",
      description:
        "Automate deployment, scaling, and management of containerized applications, ensuring high availability and performance."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "CI/CD Integration",
      description:
        "Integrate containers into continuous integration and delivery pipelines for rapid, reliable, and repeatable deployments."
    }
  ]
};

const ContainerizationAndKubernetesOrchestration: React.FC = () => {
  return <SubServicesStructure content={containerizationK8sContent} />;
};

export default ContainerizationAndKubernetesOrchestration;
