import MainServices from "../components/MainServices";
import type { ServiceItem } from "../components/MainServices";
import AllServices from "../components/AllServices";
import CallToAction from "../components/CallToAction";
import Counter from "../components/Counter";
import Partners from "../components/Partners";
import Testimonial from "../components/Testimonial";

const servicesData: ServiceItem[] = [
  {
    title: "Cloud & DevOps Consulting",
    description: (
      <>
        <p>
          Accelerate your digital initiatives with expert Cloud and DevOps consulting. We assess your infrastructure,
          design scalable architectures, and implement best practices for automation, CI/CD, and cloud adoption,
          ensuring improved performance, cost-efficiency, and operational excellence across AWS, Azure, and Google Cloud.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Cloud-Architecture.png",
    alt: "Cloud Architecture and Design Implementation",
    link: "/cloud-and-devops-consulting",
  },
  {
    title: "Cloud Strategy & Architecture Design",
    description: (
      <>
        <p>
          Develop a robust cloud strategy and scalable architecture with our expert guidance. We design cloud solutions
          that optimize performance, ensure reliability, and support automation and CI/CD practices, helping you achieve
          operational excellence and cost-efficient, future-ready cloud environments across AWS, Azure, and Google Cloud.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Kubernetes-Services.png",
    alt: "Migrate to Kubernetes Services",
    link: "/cloud-strategy-and-architecture-design",
    reverse: true,
  },
  {
    title: "Technology Assessment & Roadmapping",
    description: (
      <>
        <p>
          Evaluate your existing technology landscape and plan a strategic roadmap for digital transformation. Our experts
          assess infrastructure, applications, and processes to identify gaps, optimize performance, and design future-ready
          solutions that drive efficiency, scalability, and business growth.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Monitoring-Services.png",
    alt: "Infrastructure Monitoring Services",
    link: "/technology-assessment-and-roadmapping",
  },
  {
    title: "Migration Planning & Execution Support",
    description: (
      <>
        <p>
          Ensure seamless cloud migrations with expert planning and execution support. Our specialists assess workloads,
          design migration strategies, and manage execution across cloud and on-premises environments, minimizing downtime,
          optimizing performance, and ensuring business continuity throughout the transition.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Devops.png",
    alt: "DevOps",
    link: "/migration-plannning-and-execution-support",
    reverse: true,
  },
  {
    title: "Hire Cloud Consultants",
    description: (
      <>
        <p>
          Strengthen your cloud initiatives by hiring our experienced cloud consultants. They provide expert guidance on
          architecture design, migration strategies, and performance optimization, ensuring scalable, secure, and
          cost-efficient cloud solutions tailored to your business needs.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/others/Web-development.png",
    alt: "Web Development",
    link: "/hire-cloud-consultants",
  },
];

const ConsultingAndAdvisory: React.FC = () => {
  const title = "Consulting & Advisory";

  const introText = (
    <>
      <p>
        Cloud Guider’s <strong>Consulting and Advisory</strong> services help organizations navigate complex cloud
        and IT transformations with strategic insights and expert guidance. We assess your existing infrastructure,
        processes, and workflows to provide actionable recommendations that enhance performance, efficiency, and
        scalability.
      </p>

      <p>
        Our team combines industry best practices with deep technical expertise across cloud platforms and DevOps
        methodologies. Whether planning a cloud migration, optimizing multi-cloud operations, or defining
        security and compliance strategies, Cloud Guider ensures your business decisions are informed, risk-aware, and
        aligned with long-term growth objectives.
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
    </>
  );
};

export default ConsultingAndAdvisory;
