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
    title: "DevSecOps Implementation & Security Automation",
    description: (
      <>
        <p>
          Integrate security seamlessly into your DevOps workflows with our DevSecOps solutions. Our experts implement
          automated security checks, vulnerability management, and compliance controls across development, CI/CD
          pipelines, and cloud environments to ensure secure, reliable, and scalable software delivery.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/devsecops-implementation-and-security-automation.png",
    alt: "Cloud Architecture and Design Implementation",
    link: "/devsecops-implementation-and-security-automation",
  },
  {
    title: "Cloud Security Architecture & Compliance",
    description: (
      <>
        <p>
          Design secure, compliant, and resilient cloud environments with our Cloud Security Architecture services. We
          implement robust security frameworks, enforce compliance standards, and integrate monitoring and automation
          to protect data, streamline operations, and ensure consistent, scalable, and reliable cloud deployments
          across AWS, Azure, and Google Cloud.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/cloud-security-architecture-and-compliance.png",
    alt: "Migrate to Kubernetes Services",
    link: "/cloud-security-architecture-and-compliance",
    reverse: true,
  },
  {
    title: "Vulnerability Management & Threat Detection",
    description: (
      <>
        <p>
          Protect your systems with proactive vulnerability management and advanced threat detection. Our experts
          continuously scan, assess, and remediate security risks while implementing real-time monitoring and
          automated alerts to ensure your infrastructure remains secure, compliant, and resilient against evolving threats.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/vulnerability-management-and-threat-detection.png",
    alt: "Infrastructure Monitoring Services",
    link: "/vulnerability-management-and-threat-detection",
  },
  {
    title: "Security Audits & Penetration Testing",
    description: (
      <>
        <p>
          Strengthen your security posture with comprehensive audits and penetration testing. Our experts identify
          vulnerabilities, assess risks, and simulate real-world attacks to ensure robust defenses, regulatory compliance,
          and resilient systems across all applications and infrastructure.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/security-audits-and-penetration-testing.png",
    alt: "DevOps",
    link: "/security-audits-and-penetration-testing",
    reverse: true,
  },
  {
    title: "Hire DevSecOps & Security Experts",
    description: (
      <>
        <p>
          Strengthen your security and DevOps initiatives by hiring our skilled DevSecOps professionals. They integrate
          security into CI/CD pipelines, manage cloud infrastructure, and implement proactive threat detection to ensure
          resilient, compliant, and high-performing software delivery across all environments.
        </p>
      </>
    ),
    image: "assets/images/cloud-guider/service-images/hire-devsecops-and-security-experts.png",
    alt: "Web Development",
    link: "/hire-devsecops-and-security-experts",
  },
];

const DevSecOpsAndSecurity: React.FC = () => {
  const title = "DevSecOps & Security";

  const introText = (
    <>
      <p>
        Cloud Guider’s <strong>DevSecOps and Security</strong> services integrate security seamlessly into your
        software development lifecycle, ensuring robust protection without slowing down delivery. We implement
        automated security testing, vulnerability scanning, and compliance checks to identify and mitigate risks early,
        enabling your teams to deliver secure applications at speed.
      </p>

      <p>
        Leveraging expertise across cloud platforms like AWS, Azure, and Google Cloud, we combine DevSecOps practices
        with advanced threat detection, identity management, and encryption strategies. Cloud Guider helps businesses
        achieve continuous compliance, reduce security incidents, and maintain a resilient, future-ready infrastructure
        that supports both innovation and safety.
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

export default DevSecOpsAndSecurity;
