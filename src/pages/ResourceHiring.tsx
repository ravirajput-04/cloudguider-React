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
    title: "Hire Cloud Engineers",
    description: (
      <>
        <p>
          Scale your cloud capabilities by hiring experienced Cloud Engineers. Our professionals design, deploy, and
          manage secure, scalable, and high-performance cloud environments, ensuring seamless operations, cost efficiency,
          and adherence to best practices across AWS, Azure, and Google Cloud.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-cloud-engineers.png",
    alt: "hire-cloud-engineers",
    link: "/hire-cloud-engineers",
  },
  {
    title: "Hire DevOps & SRE Engineers",
    description: (
      <>
        <p>
          Strengthen your DevOps and site reliability capabilities by hiring skilled engineers. Our experts implement
          CI/CD pipelines, automate infrastructure, and manage cloud environments to ensure scalable, secure, and highly
          available systems across AWS, Azure, and Google Cloud.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-devops-and-sre-engineers.png",
    alt: "hire-devops-and-sre-engineers",
    link: "/hire-devops-and-sre-engineers",
    reverse: true,
  },
  {
    title: "Hire DevSecOps & Security Experts",
    description: (
      <>
        <p>
          Strengthen your security and DevOps initiatives by hiring experienced DevSecOps professionals. They integrate
          security into CI/CD pipelines, manage cloud infrastructure, and implement proactive threat detection to ensure
          compliant, resilient, and high-performing systems across AWS, Azure, and Google Cloud.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-devsecops-and-security-experts.png",
    alt: "hire-devsecops-and-security-experts",
    link: "/hire-devsecops-and-security-experts",
  },
  {
    title: "Hire Cloud Architects",
    description: (
      <>
        <p>
          Elevate your cloud strategy by hiring expert Cloud Architects. Our professionals design scalable, secure, and
          efficient cloud architectures, optimize resource utilization, and implement best practices to ensure reliable,
          cost-effective, and high-performing cloud solutions.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-cloud-architects.png",
    alt: "hire-cloud-architects",
    link: "/hire-cloud-architects",
    reverse: true,
  },
  {
    title: "Hire Kubernetes / Docker Experts",
    description: (
      <>
        <p>
          Strengthen your containerization and orchestration capabilities by hiring Kubernetes and Docker experts. Our
          specialists design, deploy, and manage scalable containerized applications, implement orchestration strategies,
          and optimize performance to ensure resilient, automated, and efficient cloud environments.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-kubernetes-docker-experts.png",
    alt: "hire-kubernetes-docker-experts",
    link: "/hire-kubernetes-docker-experts",
  },
  {
    title: "Hire Data Scientists / AI Engineers",
    description: (
      <>
        <p>
          Strengthen your AI and data initiatives by hiring skilled Data & AI Engineers. Our experts develop, deploy, and
          optimize AI/ML models, manage data pipelines, and implement scalable, high-performance solutions to drive
          insights and business growth.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-data-and-ai-engineers.png",
    alt: "hire-data-and-ai-engineers",
    link: "/hire-data-scientists-ai-engineers",
    reverse: true,
  },
  {
    title: "Hire Technical Consultants",
    description: (
      <>
        <p>
          Enhance your technology initiatives by hiring expert Technical Consultants. Our professionals provide guidance
          on cloud strategy, architecture design, and system optimization, ensuring scalable, secure, and high-performing
          solutions tailored to your business goals.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-technical-consultants.png",
    alt: "hire-technical-consultants",
    link: "/hire-technical-consultants",
  },
];

const ResourceHiring: React.FC = () => {
  const title = "Resource Hiring";

  const introText = (
    <>
      <p>
        Cloud Guider’s <strong>Resource Hiring Services</strong> help businesses acquire top IT and cloud talent
        efficiently and cost-effectively. We provide flexible hiring solutions, from temporary contractors to
        full-time professionals, ensuring your teams have the right skills to meet project demands and business goals.
      </p>

      <p>
        Leveraging our network of certified experts across cloud platforms, DevOps, Data & AI, and cybersecurity,
        Cloud Guider streamlines the recruitment process, reduces hiring risks, and accelerates project delivery.
        Our services ensure you have skilled, reliable resources ready to drive innovation and maintain operational
        excellence.
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

export default ResourceHiring;
