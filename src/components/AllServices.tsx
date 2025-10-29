import React from "react";
import { Link } from "react-router-dom";

const AllServices: React.FC = () => {
  return (
    <>
      {/* services area start*/}
      <section className="feature-area-s1">
        <div className="container">
          <div className="s-title-wrap">
            <span className="s-sub-title">Services We Deliver</span>
            <h2 className="s-title">All Kinds of IT Solutions Services</h2>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-6 floating">
              <Link
                to="/cloud-services"
                className="feature-s2 active wow animate__animated animate__fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div className="icon">
                  <img
                    src="assets/images/cloud-guider/services-feature-icons/cloud-services.png"
                    alt="cloud-services"
                  />
                </div>
                <div className="content">
                  <h4>Cloud Services</h4>
                  <p>
                    End-to-end cloud solutions for seamless migration, automation,
                    and optimized, secure, scalable operations.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-xl-4 col-md-6">
              <Link
                to="/devops-and-sre"
                className="feature-s2 wow animate__animated animate__fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div className="icon">
                  <img
                    src="assets/images/cloud-guider/services-feature-icons/devops-and-sre.png"
                    alt="devops-and-sre"
                  />
                </div>
                <div className="content">
                  <h4>DevOps &amp; SRE</h4>
                  <p>
                    Automating workflows and boosting reliability for faster,
                    stable software delivery.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-xl-4 col-md-6">
              <Link
                to="/devsecops-and-security"
                className="feature-s2 wow animate__animated animate__fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="1.5s"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div className="icon">
                  <img
                    src="assets/images/cloud-guider/services-feature-icons/devsecops-and-security.png"
                    alt="devsecops-and-security"
                  />
                </div>
                <div className="content">
                  <h4>DevSecOps &amp; Security</h4>
                  <p>
                    Integrating security into DevOps workflows to ensure safe,
                    compliant, and resilient software delivery.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-xl-4 col-md-6">
              <Link
                to="/consulting-and-advisory"
                className="feature-s2 wow animate__animated animate__fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="2s"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div className="icon">
                  <img
                    src="assets/images/cloud-guider/services-feature-icons/consulting-and-advisory.png"
                    alt="consulting-and-advisory"
                  />
                </div>
                <div className="content">
                  <h4>Consulting &amp; Advisory</h4>
                  <p>
                    Providing expert guidance to optimize strategies, improve
                    operations, and drive business growth.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-xl-4 col-md-6">
              <Link
                to="/data-and-ai-services"
                className="feature-s2 wow animate__animated animate__fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="2.5s"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div className="icon">
                  <img
                    src="assets/images/cloud-guider/services-feature-icons/data-and-ai-services.png"
                    alt="data-and-ai-services"
                  />
                </div>
                <div className="content">
                  <h4>Data &amp; AI Services</h4>
                  <p>
                    Leveraging data and AI to deliver actionable insights,
                    smarter decisions, and innovative business solutions.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-xl-4 col-md-6">
              <Link
                to="/resource-hiring"
                className="feature-s2 wow animate__animated animate__fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="3s"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div className="icon">
                  <img
                    src="assets/images/cloud-guider/services-feature-icons/resource-hiring.png"
                    alt="resource-hiring"
                  />
                </div>
                <div className="content">
                  <h4>Resource Hiring</h4>
                  <p>
                    Providing skilled IT professionals on-demand to strengthen
                    teams and accelerate project delivery.
                  </p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
      {/* services area end*/}
    </>
  );
};

export default AllServices;
