// src/components/MobileOverlay.tsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const MobileOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const offcanvasRef = useRef<HTMLDivElement>(null);

  // Open/Close handlers
  const openNav = () => {
    document.body.style.overflowY = "hidden";
    setIsOpen(true);
  };

  const closeNav = () => {
    document.body.style.overflowY = "";
    setIsOpen(false);
  };

  // Close nav on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (offcanvasRef.current && !offcanvasRef.current.contains(event.target as Node) && isOpen) {
        closeNav();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* mobile navigation start */}
      <header className="mobile-header">
        <div className="container">
          <div className="mobile-header__container">
            <div className="p-left">
              <div className="logo">
                <NavLink to="/">
                  <img
                    src="assets/images/cloud-guider/fancy-box/logonew2.png"
                    style={{ height: 60 }}
                    alt="logo"
                  />
                </NavLink>
              </div>
            </div>
            <div className="p-right">
              <button id="nav-opn-btn" onClick={openNav}>
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* offcanvas */}
      <aside
        id="offcanvas-nav"
        ref={offcanvasRef}
        className={isOpen ? "open" : ""}
      >
        <nav className="m-nav">
          <button id="nav-cls-btn" onClick={closeNav}>
            <i className="fa-solid fa-xmark" />
          </button>
          <div className="logo">
            <NavLink to="/">
              <img
                src="assets/images/cloud-guider/fancy-box/logonew2.png"
                style={{ height: 60 }}
                alt="logo"
              />
            </NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="dropdown">
              <NavLink to="/cloud-services">
                Cloud Services <i className="fa-solid fa-chevron-down" />
              </NavLink>
              <ul className="d-menu">
                <li>
                  <NavLink to="/cloud-platform-development-and-management">
                    Cloud Platform Development &amp; Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cloud-infrastructure-and-automation">
                    Cloud Infrastructure &amp; Automation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cloud-migration-and-modernization">
                    Cloud Migration &amp; Modernization
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cloud-cost-optimization-and-performance-tuning">
                    Cloud Cost Optimization &amp; Performance Tuning
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/auto-scaling-and-cloud-performance-engineering">
                    Auto Scaling &amp; Cloud Performance Engineering
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/multi-cloud-and-hybrid-cloud-solutions">
                    Multi-Cloud &amp; Hybrid Cloud Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-cloud-engineers-architects">
                    Hire Cloud Engineers / Architects
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <NavLink to="/devops-and-sre">
                DevOps &amp; SRE <i className="fa-solid fa-chevron-down" />
              </NavLink>
              <ul className="d-menu">
                <li>
                  <NavLink to="/devops-automation-and-ci-cd-pipelines">
                    DevOps Automation &amp; CI/CD Pipelines
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/infrastructure-as-code-and-configuration-management">
                    Infrastructure as Code (IaC) &amp; Configuration Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/site-reliability-engineering-solutions">
                    Site Reliability Engineering (SRE) Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/monitoring-observability-and-incident-management">
                    Monitoring, Observability &amp; Incident Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/containerization-and-kubernetes-orchestration">
                    Containerization &amp; Kubernetes Orchestration
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/on-demand-scalability-and-performance-tuning">
                    On-Demand Scalability &amp; Performance Tuning
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-devops-and-sre-engineers">
                    Hire DevOps &amp; SRE Engineers
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <NavLink to="/devsecops-and-security">
                DevSecOps &amp; Security <i className="fa-solid fa-chevron-down" />
              </NavLink>
              <ul className="d-menu">
                <li>
                  <NavLink to="/devsecops-implementation-and-security-automation">
                    DevSecOps Implementation &amp; Security Automation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cloud-security-architecture-and-compliance">
                    Cloud Security Architecture &amp; Compliance
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cloud-optimization">
                    Vulnerability Management &amp; Threat Detection
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cloud-platform">
                    Security Audits &amp; Penetration Testing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-devssecops-and-security-experts">
                    Hire DevSecOps &amp; Security Experts
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <NavLink to="/consulting-and-advisory">
                Consulting &amp; Advisory <i className="fa-solid fa-chevron-down" />
              </NavLink>
              <ul className="d-menu">
                <li>
                  <NavLink to="/cloud-and-devops-consulting">
                    Cloud &amp; DevOps Consulting
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cloud-strategy-and-architecture-design">
                    Cloud Strategy &amp; Architecture Design
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/technology-assessment-and-roadmapping">
                    Technology Assessment &amp; Roadmapping
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/migration-planning-and-execution-supporting">
                    Migration Planning &amp; Execution Support
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-cloud-consultants">
                    Hire Cloud Consultants
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <NavLink to="/data-and-ai-services">
                Data &amp; AI Services <i className="fa-solid fa-chevron-down" />
              </NavLink>
              <ul className="d-menu">
                <li>
                  <NavLink to="/data-augmentation-and-enrichment">
                    Data Augmentation &amp; Enrichment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/data-analytics-and-visualization">
                    Data Analytics &amp; Visualization
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ai-ml-model-deployment-on-cloud">
                    AI/ML Model Deployment on Cloud
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-data-scientists-ai-engineers">
                    Hire Data Scientists / AI Engineers
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <NavLink to="/resource-hiring">
                Resource Hiring <i className="fa-solid fa-chevron-down" />
              </NavLink>
              <ul className="d-menu">
                <li>
                  <NavLink to="/hire-cloud-engineers">Hire Cloud Engineers</NavLink>
                </li>
                <li>
                  <NavLink to="/dire-devops-and-sre-engineers">
                    Hire DevOps &amp; SRE Engineers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-devsecops-and-security-experts">
                    Hire DevSecOps &amp; Security Experts
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-cloud-architects">Hire Cloud Architects</NavLink>
                </li>
                <li>
                  <NavLink to="/hire-kubernetes-docker-experts">
                    Hire Kubernetes / Docker Experts
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-data-and-ai-engineers">
                    Hire Data &amp; AI Engineers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hire-technical-consultants">
                    Hire Technical Consultants
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <ul className="social-icons-s1">
            <li>
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <i className="fa-brands fa-youtube" />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      {/* mobile navigation end */}
    </>
  );
};

export default MobileOverlay;
