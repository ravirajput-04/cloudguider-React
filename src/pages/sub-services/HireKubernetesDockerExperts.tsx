import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireK8sDockerContent: SubServiceContent = {
  heroTitle: "Hire Kubernetes / Docker Experts",
  heroSubtitle: "Containerization & Orchestration Specialists",
  heroDescription:
    "Accelerate your containerization journey with expert Kubernetes and Docker professionals for scalable, secure, and optimized deployments.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true },
  ],
  mainTitle: "Hire Kubernetes / Docker Experts",
  mainDescription: (
    <>
      Accelerate your containerization journey by hiring <strong>Kubernetes</strong> and <strong>Docker</strong>
      experts from <strong>Cloud Guider</strong>. Our professionals design, deploy, and manage containerized
      applications and microservices with high availability, scalability, and security. They enable seamless
      orchestration, automated deployments, and efficient resource utilization across cloud and on-premise
      environments, helping organizations optimize operations and accelerate DevOps initiatives.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Containerization &amp; Orchestration:</strong> Package applications into Docker containers and
          orchestrate them using Kubernetes for scalable, resilient deployments.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>CI/CD Integration:</strong> Implement automated build, test, and deployment pipelines for
          containerized applications to accelerate delivery and reduce errors.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Multi-Cloud &amp; Hybrid Support:</strong> Deploy and manage containerized workloads across
          multiple cloud providers or hybrid infrastructures for maximum flexibility and reliability.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Monitoring &amp; Optimization:</strong> Continuously monitor container performance, optimize
          resource utilization, and ensure high availability and fault tolerance.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Security &amp; Compliance:</strong> Apply best practices for container security, including image
          scanning, secrets management, and compliance with industry standards.
        </>
      ),
    },
  ],
  secondaryTitle: "Empower Your DevOps with Container Expertise",
  secondaryDescription: (
    <>
      Hiring <strong>Kubernetes</strong> and <strong>Docker</strong> experts from <strong>Cloud Guider</strong>
      allows your organization to fully leverage container technologies. Our specialists ensure smooth deployments,
      scalable orchestration, and robust performance for microservices architectures, enabling faster innovation,
      operational efficiency, and reliable cloud-native applications.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Containerization &amp; Orchestration",
      description:
        "Package and manage applications in Docker containers orchestrated with Kubernetes for scalable, resilient deployments.",
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "CI/CD Integration",
      description:
        "Automate building, testing, and deploying containerized applications to accelerate delivery and reduce operational errors.",
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Monitoring &amp; Optimization",
      description:
        "Continuously monitor container performance, optimize resource usage, and ensure high availability and fault tolerance.",
    },
  ],
};

const HireKubernetesDockerExperts: React.FC = () => {
  return <SubServicesStructure content={hireK8sDockerContent} />;
};

export default HireKubernetesDockerExperts;
