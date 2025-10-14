import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const iacConfigurationContent: SubServiceContent = {
  heroTitle: "Infrastructure as Code (IaC) & Configuration Management",
  heroSubtitle: "Simplify Cloud Management with Code-Driven Automation",
  heroDescription:
    "Automate, standardize, and scale your cloud infrastructure using Infrastructure as Code (IaC) and advanced configuration management strategies across multi-cloud and hybrid environments.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Infrastructure as Code (IaC) & Configuration Management",
  mainDescription: (
    <>
      Managing cloud infrastructure manually is time-consuming and prone to errors. At <strong>Cloud Guider</strong>, we implement
      <strong>Infrastructure as Code (IaC)</strong> and advanced <strong>configuration management</strong> strategies to automate,
      standardize, and scale your IT environments. Using tools like <strong>Terraform</strong>, <strong>Ansible</strong>,
      <strong>Chef</strong>, and <strong>Puppet</strong>, we codify infrastructure, enforce consistent configurations, and streamline
      deployments, ensuring repeatability, reliability, and rapid provisioning across multi-cloud and hybrid setups.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Automated Infrastructure Provisioning:</strong> Deploy servers, networks, and storage automatically using code,
          eliminating manual setup errors and reducing provisioning time significantly.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Consistent Configuration Management:</strong> Maintain uniform configurations across all environments with tools
          that automate updates, patches, and compliance settings, reducing configuration drift and ensuring reliability.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Version-Controlled Infrastructure:</strong> Treat infrastructure definitions as code, enabling version tracking,
          rollback, and auditing for every change in your environment.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Rapid Scaling & Flexibility:</strong> Automate scaling and provisioning across cloud platforms, allowing your infrastructure
          to respond dynamically to workload changes without manual intervention.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Compliance & Security Automation:</strong> Integrate security policies, IAM roles, and compliance checks directly
          into your IaC and configuration management workflows to ensure safe and regulatory-compliant deployments.
        </>
      )
    }
  ],
  secondaryTitle: "Simplify Cloud Management with Code-Driven Automation",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> empowers organizations to manage infrastructure programmatically, reducing operational overhead,
      enhancing security, and enabling rapid deployments. With IaC and configuration management, you gain full control over your
      environments, ensure consistency across multiple clouds, and accelerate the delivery of business-critical applications.
      Our experts combine coding best practices with cloud-native solutions to make your infrastructure scalable, auditable, and
      resilient — providing a foundation for agile and future-ready IT operations.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "Infrastructure as Code",
      description:
        "Automate the creation, deployment, and management of infrastructure with reusable, version-controlled code that ensures consistency and speeds up provisioning across environments."
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Configuration Management",
      description:
        "Maintain consistent system configurations, automate updates and patches, and prevent drift across multi-cloud and hybrid environments for reliable, secure operations."
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "Version Control & Auditing",
      description:
        "Track every change in your infrastructure and configuration code, enabling auditing, rollback, and controlled deployments for enhanced security and compliance."
    }
  ]
};

const InfrastructureAsCodeAndConfigurationManagement: React.FC = () => {
  return <SubServicesStructure content={iacConfigurationContent} />;
};

export default InfrastructureAsCodeAndConfigurationManagement;
