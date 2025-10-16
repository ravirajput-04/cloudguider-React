import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const dataAnalyticsContent: SubServiceContent = {
  heroTitle: "Data Analytics & Visualization",
  heroSubtitle: "Transform Raw Data into Actionable Insights",
  heroDescription:
    "Analyze complex datasets, uncover trends, and present meaningful insights with Cloud Guider’s Data Analytics & Visualization services. Empower decision-makers to drive strategic initiatives effectively across all business levels.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Data Analytics & Visualization",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> helps organizations analyze complex datasets, uncover trends, and deliver insights through intuitive visualizations. Our services enable decision-makers to monitor performance metrics, detect opportunities, and make informed decisions that drive business growth.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Data Analysis & Reporting:</strong> Process structured and unstructured data to uncover patterns, correlations, and actionable insights for informed decision-making.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Interactive Dashboards:</strong> Build real-time dashboards with tools like Power BI, Tableau, or Looker to visualize KPIs and monitor business performance.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Predictive & Advanced Analytics:</strong> Apply machine learning, statistical analysis, and forecasting to predict trends and optimize strategies.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Data Integration & Transformation:</strong> Consolidate data from multiple sources, clean, and transform it for accuracy and usability in analytics workflows.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Custom Visualization Solutions:</strong> Create tailored charts, graphs, and reports to accelerate decision-making and improve insight clarity.
        </>
      )
    }
  ],
  secondaryTitle: "Empower Decisions with Actionable Insights",
  secondaryDescription: (
    <>
      <strong>Cloud Guider</strong> enables organizations to leverage their data strategically. By combining advanced analytics techniques with engaging visual storytelling, we ensure that insights are actionable, empowering teams to respond proactively and drive business success.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/data-and-ai-services/data-analysis-and-reporting.png",
      title: "Data Analysis & Reporting",
      description:
        "Analyze complex datasets to uncover trends, insights, and correlations that drive informed business decisions."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/data-and-ai-services/interactive-dashboards.png",
      title: "Interactive Dashboards",
      description:
        "Visualize KPIs and performance metrics in real-time using interactive dashboards tailored for executives and teams."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/data-and-ai-services/predictive-and-advanced-analytics.png",
      title: "Predictive & Advanced Analytics",
      description:
        "Apply machine learning and statistical models to forecast trends, optimize strategies, and improve operational outcomes."
    }
  ]
};

const DataAnalyticsAndVisualization: React.FC = () => {
  return <SubServicesStructure content={dataAnalyticsContent} />;
};

export default DataAnalyticsAndVisualization;
