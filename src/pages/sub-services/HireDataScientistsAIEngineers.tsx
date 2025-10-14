import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const hireDataScientistsContent: SubServiceContent = {
  heroTitle: "Hire Data Scientists / AI Engineers",
  heroSubtitle: "Expert Talent to Transform Data into Actionable Intelligence",
  heroDescription:
    "Unlock the power of data and AI by hiring certified Data Scientists and AI Engineers to accelerate innovation, improve decision-making, and drive business growth.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true },
  ],
  mainTitle: "Hire Data Scientists / AI Engineers",
  mainDescription: (
    <>
      Unlock the power of data and artificial intelligence by hiring expert <strong>Data Scientists</strong> and <strong>AI Engineers</strong> from <strong>Cloud Guider</strong>.
      Our professionals bring extensive experience in machine learning, deep learning, predictive analytics, and AI model deployment, helping organizations transform data into actionable insights.
      From designing intelligent algorithms to operationalizing AI solutions, our team accelerates innovation, enhances decision-making, and drives business growth across industries.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Machine Learning &amp; AI Expertise:</strong> Develop, train, and deploy predictive models, recommendation engines, and intelligent automation systems tailored to your business needs.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Data Analysis &amp; Modeling:</strong> Apply statistical analysis, data mining, and feature engineering to extract meaningful insights and improve model accuracy.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>AI/ML Deployment on Cloud:</strong> Operationalize models on AWS, Azure, or Google Cloud with scalable, secure, and optimized cloud infrastructure for production use.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Custom AI Solutions:</strong> Build tailored AI-driven applications such as chatbots, recommendation systems, anomaly detection, and predictive analytics platforms.
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Collaboration &amp; Knowledge Transfer:</strong> Work closely with your teams to ensure smooth integration of AI/ML solutions, while sharing expertise for long-term independence and success.
        </>
      ),
    },
  ],
  secondaryTitle: "Empower Your Business with AI & Data Science Talent",
  secondaryDescription: (
    <>
      Hiring <strong>Data Scientists</strong> and <strong>AI Engineers</strong> from <strong>Cloud Guider</strong> allows businesses to bridge the gap between data and actionable intelligence.
      Our experts help you build robust AI pipelines, optimize model performance, and unlock insights that drive innovation.
      With a combination of technical proficiency and domain knowledge, our team ensures your AI and data initiatives deliver measurable business impact efficiently and effectively.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/feature-icons/time-saving-icon.png",
      title: "AI &amp; ML Expertise",
      description:
        "Develop and deploy machine learning and AI models that transform data into actionable insights for strategic advantage.",
    },
    {
      icon: "assets/images/feature-icons/management-icon.png",
      title: "Data Analysis &amp; Modeling",
      description:
        "Apply advanced analytics, feature engineering, and statistical techniques to improve model accuracy and decision-making insights.",
    },
    {
      icon: "assets/images/feature-icons/collaborative-icon.png",
      title: "AI/ML Deployment",
      description:
        "Operationalize machine learning and AI models on cloud platforms with scalable, secure, and optimized infrastructure for production environments.",
    },
  ],
};

const HireDataScientistsAIEngineers: React.FC = () => {
  return <SubServicesStructure content={hireDataScientistsContent} />;
};

export default HireDataScientistsAIEngineers;
