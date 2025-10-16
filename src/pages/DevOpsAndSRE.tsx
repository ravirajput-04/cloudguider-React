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
    title: "DevOps Automation & CI/CD Pipelines",
    description: (
      <>
        <p>
          Streamline software delivery with automated DevOps workflows and CI/CD pipelines that enhance
          reliability, accelerate releases, and reduce manual errors. Our experts design, implement, and
          manage end-to-end pipelines across cloud and on-prem environments, ensuring seamless integration,
          testing, and deployment for faster time-to-market.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/devops-automation-and-ci-cd-pipelines.png",
    alt: "devops-automation-and-ci-cd-pipelines",
    link: "/devops-automation-and-ci-cd-pipelines",
  },
  {
    title: "Infrastructure as Code (IaC) & Configuration Management",
    description: (
      <>
        <p>
          Automate infrastructure provisioning and configuration with Infrastructure as Code and robust
          configuration management. Ensure consistent, scalable, and reliable environments across cloud
          and on-premises systems while reducing manual effort, accelerating deployments, and optimizing
          operational efficiency.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/infrastructure-as-code-and-configuration-management.png",
    alt: "infrastructure-as-code-and-configuration-management",
    link: "/infrastructure-as-code-and-configuration-management",
    reverse: true,
  },
  {
    title: "Site Reliability Engineering (SRE) Solutions",
    description: (
      <>
        <p>
          Enhance system reliability, performance, and scalability with our Site Reliability Engineering
          solutions. We implement automated monitoring, incident management, and proactive performance
          optimization to ensure resilient, highly available, and efficient operations across cloud and
          on-premises environments.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/site-reliability-engineering-solutions.png",
    alt: "site-reliability-engineering-solutions",
    link: "/site-reliability-engineering-solutions",
  },
  {
    title: "Monitoring, Observability & Incident Management",
    description: (
      <>
        <p>
          Enhance system reliability and operational efficiency with advanced monitoring and observability
          tools. Our experts track performance metrics, detect anomalies, and implement proactive incident
          management to minimize downtime, optimize resource utilization, and ensure seamless business
          operations across environments.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/monitoring-observability-and-incident-management.png",
    alt: "monitoring-observability-and-incident-management",
    link: "/monitoring-observability-and-incident-management",
    reverse: true,
  },
  {
    title: "Containerization & Kubernetes Orchestration",
    description: (
      <>
        <p>
          Streamline application deployment and management with containerization and Kubernetes orchestration.
          Our experts design scalable, resilient architectures, automate deployments, and manage clusters
          to ensure optimal performance, high availability, and seamless operation across diverse cloud
          and on-prem environments.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/containerization-and-kubernetes-orchestration.png",
    alt: "containerization-and-kubernetes-orchestration",
    link: "/containerization-and-kubernetes-orchestration",
  },
  {
    title: "On-Demand Scalability & Performance Tuning",
    description: (
      <>
        <p>
          Enhance system performance and handle varying workloads with on-demand scalability and performance
          tuning. Our experts optimize applications and infrastructure, implement auto-scaling strategies,
          and fine-tune resources to ensure high availability, fast response times, and cost-efficient
          operations across cloud and on-prem environments.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/on-demand-scalability-and-performance-tuning.png",
    alt: "on-demand-scalability-and-performance-tuning",
    link: "/on-demand-scalability-and-performance-tuning",
    reverse: true,
  },
  {
    title: "Hire DevOps & SRE Engineers",
    description: (
      <>
        <p>
          Strengthen your IT teams with our skilled DevOps and SRE engineers who drive automation, reliability,
          and scalability. From building CI/CD pipelines and managing cloud infrastructure to optimizing
          performance and ensuring high availability, our experts help you deliver seamless, resilient,
          and cost-efficient solutions.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-devops-and-sre-engineers.png",
    alt: "hire-devops-and-sre-engineers",
    link: "/hire-devops-and-sre-engineers",
  },
];

const DevOpsAndSRE: React.FC = () => {
  const title = "DevOps & SRE";

  const introText = (
    <>
      <p>
        Cloud Guider’s <strong>DevOps and Site Reliability Engineering (SRE)</strong> services help organizations
        streamline software delivery, improve system reliability, and foster a culture of continuous improvement.
        Our experts implement automation-driven workflows, CI/CD pipelines, and infrastructure-as-code solutions to
        ensure faster deployments and lower operational risk.
      </p>

      <p>
        With experience across major cloud platforms like AWS, Azure, and Google Cloud, we combine DevOps best practices
        with SRE principles to maintain resilient, scalable systems. From monitoring and alerting to proactive
        reliability engineering, Cloud Guider ensures your infrastructure is optimized for agility, stability, and
        long-term growth.
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

export default DevOpsAndSRE;
