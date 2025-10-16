import React from "react";
import SubServicesStructure from "./SubServicesStructure";
import type { SubServiceContent } from "./SubServicesStructure";

const dataAugmentationContent: SubServiceContent = {
  heroTitle: "Data Augmentation & Enrichment",
  heroSubtitle: "Unlock the Full Potential of Your Data",
  heroDescription:
    "Enhance the quality, diversity, and value of your datasets with Cloud Guider’s Data Augmentation & Enrichment services. Transform raw data into actionable insights by correcting inconsistencies, enriching with external sources, and applying advanced feature engineering for better AI models and analytics.",
  heroBackground: "assets/images/backgrounds/testimonial-bg.png",
  heroButtons: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact", outlined: true }
  ],
  mainTitle: "Data Augmentation & Enrichment",
  mainDescription: (
    <>
      <strong>Cloud Guider</strong> empowers organizations to maximize the value of their data by applying advanced augmentation and enrichment techniques. By improving data quality, consistency, and completeness, we enable more accurate analytics, better AI predictions, and data-driven decisions.
    </>
  ),
  highlights: [
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Data Cleansing & Normalization:</strong> Correct inconsistencies, remove duplicates, and standardize data for high-quality datasets.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Augmentation & Synthetic Data Generation:</strong> Expand datasets with synthetic samples or transformations to improve model robustness.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Data Enrichment with External Sources:</strong> Integrate external data such as demographics, geolocation, and market trends to enhance datasets.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Feature Engineering & Transformation:</strong> Extract, create, and optimize features to improve analytics and machine learning accuracy.
        </>
      )
    },
    {
      iconClass: "fa-solid fa-check",
      text: (
        <>
          <strong>Data Validation & Quality Assurance:</strong> Ensure all data meets quality, consistency, and usability standards for reliable decision-making.
        </>
      )
    }
  ],
  secondaryTitle: "Unlock the Full Potential of Your Data",
  secondaryDescription: (
    <>
      By applying advanced data augmentation and enrichment techniques, <strong>Cloud Guider</strong> helps businesses harness high-quality datasets to drive innovation, optimize operations, and gain a competitive edge.
    </>
  ),
  featureBoxes: [
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/data-and-ai-services/data-cleansing-and-normalization.png",
      title: "Data Cleansing & Normalization",
      description:
        "Correct inconsistencies, remove duplicates, and standardize data to ensure high-quality datasets ready for analytics or AI applications."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/data-and-ai-services/data-augmentation.png",
      title: "Data Augmentation",
      description:
        "Expand your datasets with synthetic samples, transformations, or additional attributes to enhance machine learning model performance."
    },
    {
      icon: "assets/images/cloud-guider/subservices-feature-icons/data-and-ai-services/data-enrichment.png",
      title: "Data Enrichment",
      description:
        "Integrate external sources, features, and transformations to enhance data quality, analytical insights, and AI model accuracy."
    }
  ]
};

const DataAugmentationAndEnrichment: React.FC = () => {
  return <SubServicesStructure content={dataAugmentationContent} />;
};

export default DataAugmentationAndEnrichment;
