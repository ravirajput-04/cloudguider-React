import AllServices from "../components/AllServices";
import CallToAction from "../components/CallToAction";
import Cookies from "../components/Cookies";
import Counter from "../components/Counter";
import MainServices from "../components/MainServices";
import type { ServiceItem } from "../components/MainServices";
import Partners from "../components/Partners";
import Testimonial from "../components/Testimonial";

const servicesData: ServiceItem[] = [
    {
        title: "Cloud Platform Development & Management",
        description: (
            <>
                <p>
                    Empower your business with a robust, custom-built cloud platform designed for agility and growth.
                    Our engineers architect, develop, and manage end-to-end cloud environments — from provisioning and security
                    to automation and lifecycle management. Whether you need a scalable SaaS backbone, data platform, or
                    enterprise-grade
                    cloud ecosystem, we ensure seamless performance, governance, and operational excellence across AWS, Azure,
                    and Google Cloud.
                </p>
            </>
        ),
        image: "assets/images/cloud-guider/service-images/cloud-platform-development-and-management.png",
        alt: "cloud-platform-development-and-management",
        link: "/cloud-platform-development-and-management",
    },
    {
        title: "Cloud Infrastructure & Automation",
        description: (
            <>
                <p>
                    Build a resilient, scalable, and fully automated cloud foundation with our Infrastructure & Automation
                    services.
                    From Infrastructure as Code (IaC) and CI/CD pipelines to monitoring and auto-healing systems, we streamline
                    deployment,
                    management, and scaling across AWS, Azure, and Google Cloud. Gain speed, consistency, and reliability while
                    reducing
                    manual effort and operational costs.
                </p>
            </>
        ),
        image: "assets/images/cloud-guider/service-images/cloud-infrastructure-and-automation.png",
        alt: "cloud-infrastructure-and-automation",
        link: "/cloud-infrastructure-and-automation",
        reverse: true,
    },
    {
        title: "Cloud Migration & Modernization",
        description: (
            <>
                <p>
                    Seamlessly migrate your workloads and applications to the cloud with minimal disruption and maximum impact.
                    Our specialists assess, plan, and execute end-to-end migrations across AWS, Azure, and Google Cloud —
                    ensuring
                    security, scalability, and business continuity. We modernize legacy systems using cloud-native
                    architectures,
                    containers, and serverless technologies to future-proof your digital infrastructure.
                </p>
            </>
        ),
        image: "assets/images/cloud-guider/service-images/cloud-migration-and-modernization.png",
        alt: "cloud-migration-and-modernization",
        link: "/cloud-migration-and-modernization",
    },
    {
        title: "Cloud Cost Optimization & Performance Tuning",
        description: (
            <>
                <p>
                    Maximize efficiency and reduce cloud spend without sacrificing performance.
                    Our experts analyze resource utilization, identify inefficiencies, and implement automation
                    to ensure you only pay for what you use. Through advanced monitoring, workload balancing,
                    and infrastructure right-sizing, we fine-tune your environment for superior performance and cost savings.
                </p>
            </>
        ),
        image: "assets/images/cloud-guider/service-images/cloud-cost-optimization-and-performance-tuning.png",
        alt: "cloud-cost-optimization-and-performance-tuning",
        link: "/cloud-cost-optimization-and-performance-tuning",
        reverse: true,
    },
    {
        title: "Auto Scaling & Cloud Performance Engineering",
        description: (
            <>
                <p>
                    Achieve unmatched reliability and responsiveness with intelligent Auto Scaling and Cloud Performance
                    Engineering.
                    Our team ensures your applications automatically adjust to demand spikes and traffic fluctuations —
                    maintaining peak performance while optimizing costs. From load balancing and monitoring to performance
                    tuning,
                    we help you deliver seamless user experiences at any scale.
                </p>
            </>
        ),
        image: "assets/images/cloud-guider/service-images/auto-scaling-and-cloud-performance-engineering.jpeg",
        alt: "auto-scaling-and-cloud-performance-engineering",
        link: "/auto-scaling-and-cloud-performance-engineering",
    },
    {
        title: "Multi-Cloud & Hybrid Cloud Solutions",
        description: (
            <>
                <p>
                    Unlock the power of flexibility and resilience with our Multi-Cloud and Hybrid Cloud strategies.
                    Seamlessly integrate AWS, Azure, and Google Cloud environments to optimize performance, cost, and
                    compliance.
                    Our experts design unified infrastructures that balance on-premises systems with public cloud resources —
                    ensuring business continuity, data sovereignty, and enhanced scalability.
                </p>
            </>
        ),
        image: "assets/images/cloud-guider/service-images/multi-cloud-and-hybrid-cloud-solutions.png",
        alt: "multi-cloud-and-hybrid-cloud-solutions",
        link: "/multi-cloud-and-hybrid-cloud-solutions",
        reverse: true,
    },
    {
        title: "Hire Cloud Engineers / Architects",
        description: (
            <>
                <p>
                    Accelerate your digital transformation with our skilled cloud professionals.
                    From designing scalable, secure architectures to modernizing legacy systems on AWS, Azure, or Google Cloud,
                    our experts ensure optimal performance, cost-efficiency, and seamless deployment.
                    Build, migrate, or optimize your cloud infrastructure with confidence.
                </p>
            </>
        ),
        image: "assets/images/cloud-guider/service-images/hire-cloud-engineers.png",
        alt: "hire-cloud-engineers",
        link: "/hire-cloud-engineers",
    },
];

const CloudServices: React.FC = () => {
  const title = "Cloud Services";
  const introText = (
    <>
      <p>
      Cloud Guider’s Cloud Services are designed to help businesses harness the power of modern cloud technologies to
      scale efficiently, enhance security, and drive innovation. We provide tailored solutions for organizations of all
      sizes — from startups embracing digital transformation to enterprises optimizing complex multi-cloud environments.
      Our certified experts deliver seamless cloud migration, robust architecture design, and cost-effective cloud
      management that ensures reliability and performance across every workload.
    </p>

    <p>
      With expertise across major cloud platforms like AWS, Microsoft Azure, and Google Cloud, we offer a complete suite
      of services including infrastructure automation, DevOps implementation, security hardening, and ongoing managed
      cloud support. By combining best practices with cutting-edge automation tools, Cloud Guider enables your business
      to innovate faster, reduce operational overhead, and maintain a future-ready cloud ecosystem built for growth and
      long-term success.
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
    )

};

export default CloudServices;
