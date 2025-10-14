import MainServices from "../components/MainServices";
import type { ServiceItem } from "../components/MainServices";
import AllServices from "../components/AllServices";
import CallToAction from "../components/CallToAction";
import Counter from "../components/Counter";
import Partners from "../components/Partners";
import Testimonial from "../components/Testimonial";
import Cookies from "../components/Cookies";

const servicesData: ServiceItem[] = [
  {
    title: "Data Augmentation & Enrichment",
    description: (
      <>
        <p>
          Enhance your datasets with advanced data augmentation and enrichment techniques. Our experts clean, transform,
          and supplement raw data to improve accuracy, completeness, and usability—empowering analytics, AI models, and
          data-driven decision-making across your organization.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Cloud-Architecture.png",
    alt: "Cloud Architecture and Design Implementation",
    link: "/data-augmentation-and-enrichment",
  },
  {
    title: "Data Analytics & Visualization",
    description: (
      <>
        <p>
          Transform raw data into actionable insights with our data analytics and visualization services. We collect,
          process, and analyze data to uncover trends, generate reports, and create interactive dashboards that empower
          data-driven decision-making and enhance business performance.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Kubernetes-Services.png",
    alt: "Migrate to Kubernetes Services",
    link: "/data-analytics-and-visualization",
    reverse: true,
  },
  {
    title: "AI/ML Model Deployment on Cloud",
    description: (
      <>
        <p>
          Accelerate AI/ML initiatives by deploying models seamlessly on cloud platforms. Our experts optimize model
          performance, manage scalable infrastructure, and implement automated pipelines to ensure high availability,
          reliability, and efficient inference for real-time and batch AI/ML workloads.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Monitoring-Services.png",
    alt: "Infrastructure Monitoring Services",
    link: "/ai-ml-model-deployment-on-cloud",
  },
  {
    title: "Hire Data Scientists / AI Engineers",
    description: (
      <>
        <p>
          Strengthen your AI and data initiatives by hiring skilled Data Scientists and AI Engineers. Our experts design,
          develop, and deploy advanced models, perform data analysis, and implement AI-driven solutions to drive insights,
          automation, and informed decision-making across your organization.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Devops.png",
    alt: "DevOps",
    link: "/hire-data-scientists-ai-engineers",
    reverse: true,
  },
];

const DataAndAIServices: React.FC = () => {
  const title = "Data & AI Services";

  const introText = (
    <>
      <p>
        Cloud Guider’s <strong>Data & AI Services</strong> empower organizations to transform raw data into actionable
        insights and intelligent solutions. We provide end-to-end services including data strategy, analytics, machine
        learning, and AI-driven automation that drive smarter decision-making and operational efficiency.
      </p>

      <p>
        Leveraging expertise across cloud platforms and AI frameworks, our team builds scalable data pipelines, predictive
        models, and intelligent applications. Cloud Guider helps businesses unlock the full potential of their data, improve
        customer experiences, and innovate faster while maintaining security, compliance, and optimal performance.
      </p>
    </>
  );

  return (
    <>
      <MainServices title={title} introText={introText} services={servicesData} />
      <AllServices />
      <Partners />
      <CallToAction />
      <Counter />
      <Testimonial />
      <Cookies />
    </>
  );
};

export default DataAndAIServices;
