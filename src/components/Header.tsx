import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Sticky Header Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-s3 ${isSticky ? "sticky" : ""}`}>
      <div className="header-container">
        {/* ===== Top Bar ===== */}
        <div className="header-top-container">
          <div className="container">
            <div className="header-s3__top">
              <div className="p-left">
                {/* Phone */}
                <div className="tb-single-info-s2">
                  <div className="icon">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className="content">
                    <p><a href="tel:+918989829182">+91 8989829182</a></p>
                  </div>
                </div>
                {/* Email */}
                <div className="tb-single-info-s2">
                  <div className="icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="content">
                    <p>
                      <a href="mailto:connect@cloudguider.com">
                        connect@cloudguider.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="tb-single-info-s2">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="content">
                    <p>
                      <a
                        href="https://maps.app.goo.gl/VR923mYx9mFniBb7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        103, City Center, Mahatma Gandhi Rd, Indore
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-right">
                <ul className="social-icons-s1">
                  <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                  <li><a href="#"><i className="fa-brands fa-youtube" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom Nav Bar ===== */}
        <div className="header-bottom-container">
          <div className="container">
            <div className="header-s3__bottom">
              {/* Logo */}
              <div className="p-left">
                <div className="logo">
                  <NavLink to="/">
                    <img
                      src="assets/images/cloud-guider/fancy-box/logonew2.png"
                      style={{ height: 60 }}
                      alt="Cloud Guider Logo"
                    />
                  </NavLink>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-center">
                <nav className="m-nav">
                  <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>

                    {/* Cloud Services */}
                    <li className="dropdown">
                      <NavLink to="/cloud-services">
                        Cloud Services <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="d-menu">
                        <li><NavLink to="/cloud-platform-development-and-management">Cloud Platform Development &amp; Management</NavLink></li>
                        <li><NavLink to="/cloud-infrastructure-and-automation">Cloud Infrastructure &amp; Automation</NavLink></li>
                        <li><NavLink to="/cloud-migration-and-modernization">Cloud Migration &amp; Modernization</NavLink></li>
                        <li><NavLink to="/cloud-cost-optimization-and-performance-tuning">Cloud Cost Optimization &amp; Performance Tuning</NavLink></li>
                        <li><NavLink to="/auto-scaling-and-cloud-performance-engineering">Auto Scaling &amp; Cloud Performance Engineering</NavLink></li>
                        <li><NavLink to="/multi-cloud-and-hybrid-cloud-solutions">Multi-Cloud &amp; Hybrid Cloud Solutions</NavLink></li>
                        <li><NavLink to="/hire-cloud-engineers-architects">Hire Cloud Engineers / Architects</NavLink></li>
                      </ul>
                    </li>

                    {/* DevOps & SRE */}
                    <li className="dropdown">
                      <NavLink to="/devops-and-sre">
                        DevOps &amp; SRE <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="d-menu">
                        <li><NavLink to="/devops-automation-and-ci-cd-pipelines">DevOps Automation &amp; CI/CD Pipelines</NavLink></li>
                        <li><NavLink to="/infrastructure-as-code-and-configuration-management">Infrastructure as Code (IaC) &amp; Configuration Management</NavLink></li>
                        <li><NavLink to="/site-reliability-engineering-solutions">Site Reliability Engineering (SRE) Solutions</NavLink></li>
                        <li><NavLink to="/monitoring-observability-and-incident-management">Monitoring, Observability &amp; Incident Management</NavLink></li>
                        <li><NavLink to="/containerization-and-kubernetes-orchestration">Containerization &amp; Kubernetes Orchestration</NavLink></li>
                        <li><NavLink to="/on-demand-scalability-and-performance-tuning">On-Demand Scalability &amp; Performance Tuning</NavLink></li>
                        <li><NavLink to="/hire-devops-and-sre-engineers">Hire DevOps &amp; SRE Engineers</NavLink></li>
                      </ul>
                    </li>

                    {/* DevSecOps */}
                    <li className="dropdown">
                      <NavLink to="/devsecops-and-security">
                        DevSecOps &amp; Security <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="d-menu">
                        <li><NavLink to="/devsecops-implementation-and-security-automation">DevSecOps Implementation &amp; Security Automation</NavLink></li>
                        <li><NavLink to="/cloud-security-architecture-and-compliance">Cloud Security Architecture &amp; Compliance</NavLink></li>
                        <li><NavLink to="/vulnerability-management-and-threat-detection">Vulnerability Management &amp; Threat Detection</NavLink></li>
                        <li><NavLink to="/security-audits-and-penetration-testing">Security Audits &amp; Penetration Testing</NavLink></li>
                        <li><NavLink to="/hire-devsecops-and-security-experts">Hire DevSecOps &amp; Security Experts</NavLink></li>
                      </ul>
                    </li>

                    {/* Consulting */}
                    <li className="dropdown">
                      <NavLink to="/consulting-and-advisory">
                        Consulting <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="d-menu">
                        <li><NavLink to="/cloud-and-devops-consulting">Cloud &amp; DevOps Consulting</NavLink></li>
                        <li><NavLink to="/cloud-strategy-and-architecture-design">Cloud Strategy &amp; Architecture Design</NavLink></li>
                        <li><NavLink to="/technology-assessment-and-roadmapping">Technology Assessment &amp; Roadmapping</NavLink></li>
                        <li><NavLink to="/migration-planning-and-execution-support">Migration Planning &amp; Execution Support</NavLink></li>
                        <li><NavLink to="/hire-cloud-consultants">Hire Cloud Consultants</NavLink></li>
                      </ul>
                    </li>

                    {/* Data & AI */}
                    <li className="dropdown">
                      <NavLink to="/data-and-ai-services">
                        Data &amp; AI Services <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="d-menu">
                        <li><NavLink to="/data-augmentation-and-enrichment">Data Augmentation &amp; Enrichment</NavLink></li>
                        <li><NavLink to="/data-analytics-and-visualization">Data Analytics &amp; Visualization</NavLink></li>
                        <li><NavLink to="/ai-ml-model-deployment-on-cloud">AI/ML Model Deployment on Cloud</NavLink></li>
                        <li><NavLink to="/hire-data-scientists-ai-engineers">Hire Data Scientists / AI Engineers</NavLink></li>
                      </ul>
                    </li>

                    {/* Resource Hiring */}
                    <li className="dropdown">
                      <NavLink to="/resource-hiring">
                        Resource Hiring <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="d-menu">
                        <li><NavLink to="/hire-cloud-engineers">Hire Cloud Engineers</NavLink></li>
                        <li><NavLink to="/hire-devops-and-sre-engineers">Hire DevOps &amp; SRE Engineers</NavLink></li>
                        <li><NavLink to="/hire-devsecops-and-security-experts">Hire DevSecOps &amp; Security Experts</NavLink></li>
                        <li><NavLink to="/hire-cloud-architects">Hire Cloud Architects</NavLink></li>
                        <li><NavLink to="/hire-kubernetes-docker-experts">Hire Kubernetes / Docker Experts</NavLink></li>
                        <li><NavLink to="/hire-data-and-ai-engineers">Hire Data &amp; AI Engineers</NavLink></li>
                        <li><NavLink to="/hire-technical-consultants">Hire Technical Consultants</NavLink></li>
                      </ul>
                    </li>

                    <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
                </nav>
              </div>

              {/* CTA Button */}
              <div className="p-right">
                <NavLink to="/services" className="btn btn-s3">
                  Let's Talk
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
