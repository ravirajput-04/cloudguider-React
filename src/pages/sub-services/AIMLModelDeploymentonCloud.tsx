import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const aimlDeploymentContent: SubServiceContent = {
  heroTitle: "AI/ML Model Deployment on Cloud",
  heroSubtitle: "Intelligent Deployment for Scalable Machine Learning",
  heroDescription:
    "Deploy, manage, and optimize AI/ML models seamlessly on cloud platforms with scalable, secure, and high-performance infrastructure.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true },
  ],
  mainTitle: "AI/ML Model Deployment on Cloud",
  mainDescription: (
    <>
      Accelerate your <strong>AI/ML initiatives</strong> by deploying machine learning models on scalable
      and reliable cloud infrastructure with <strong>Cloud Guider</strong>.  
      Our experts specialize in seamless deployment, monitoring, and management of AI/ML models across{" "}
      <strong>AWS</strong>, <strong>Azure</strong>, and <strong>Google Cloud</strong>.
      We focus on <strong>performance optimization</strong>, <strong>latency reduction</strong>, and{" "}
      <strong>continuous delivery</strong> to ensure your AI workloads operate efficiently, securely,
      and at scale.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Scalable Model Deployment:</strong> Deploy ML models on cloud-native platforms
          to handle variable workloads, ensuring reliability and high performance.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>CI/CD for AI/ML:</strong> Implement continuous integration and deployment pipelines
          tailored for AI workflows to maintain model accuracy and accelerate innovation.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Monitoring & Performance Tuning:</strong> Track model performance, latency,
          and resource utilization, applying optimizations for faster and more efficient predictions.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Security & Compliance:</strong> Ensure your AI/ML deployments meet industry
          security and data governance standards for sensitive workloads.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Multi-Cloud & Hybrid Deployment:</strong> Run AI/ML workloads across multiple cloud
          platforms for enhanced flexibility, redundancy, and cost efficiency.
        </>
      ),
    },
  ],
  secondaryTitle: "Unlock AI/ML Potential with Cloud Deployment",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> empowers organizations to operationalize AI/ML models efficiently
      using cloud-native infrastructure and DevOps best practices.  
      By leveraging scalable compute, CI/CD pipelines, and monitoring tools, we help data scientists
      and engineers focus on innovation while ensuring models run reliably, securely, and cost-effectively
      in production environments.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Scalable Deployment",
      description:
        "Deploy AI/ML models on resilient cloud infrastructure designed to handle high-volume requests with minimal latency and maximum reliability.",
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "CI/CD for AI/ML",
      description:
        "Automate integration, testing, and deployment of machine learning models using continuous pipelines for rapid, reliable updates.",
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Monitoring & Optimization",
      description:
        "Monitor performance, latency, and cost metrics continuously while applying optimizations to maintain model accuracy and production efficiency.",
    },
  ],
};

const AIMLModelDeploymentOnCloud: React.FC = () => {
  return <SubServicesStructure content={aimlDeploymentContent} />;
};

export default AIMLModelDeploymentOnCloud;
