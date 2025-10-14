import React from "react";
import { Link } from "react-router-dom";
import AllServices from "../../components/AllServices";
import CallToAction from "../../components/CallToAction";
import ContactForm from "../../components/ContactForm";
import Counter from "../../components/Counter";
import Partners from "../../components/Partners";
import Testimonial from "../../components/Testimonial";
import Cookies from "../../components/Cookies";

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface SubServiceContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroButtons: { label: string; href: string; outlined?: boolean }[];
  heroBackground?: string;
  mainTitle: string;
  mainDescription: React.ReactNode;
  highlights: { iconClass?: string; text: React.ReactNode }[];
  secondaryTitle: string;
  secondaryDescription: React.ReactNode;
  featureBoxes: FeatureItem[];
}

interface SubServicesStructureProps {
  content: SubServiceContent;
}

const SubServicesStructure: React.FC<SubServicesStructureProps> = ({ content }) => {
  const heroStyle = content.heroBackground
    ? {
        backgroundImage: `url(${content.heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <>
      {/* Hero Section */}
      <section className="hero-s7" style={heroStyle}>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            {/* Left Content - col-lg-6 */}
            <div className="col-lg-6 col-md-12 hero-s1__content p-4">
              <h2 className="content-sh">{content.heroTitle}</h2>
              <h1 className="content-h">{content.heroSubtitle}</h1>
              <p className="content-d">{content.heroDescription}</p>

              <div className="btn-group">
                {content.heroButtons.map((btn, idx) => (
                  <Link
                    key={idx}
                    to={btn.href}
                    className={`btn btn-s3 ${btn.outlined ? "outlined" : ""}`}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Offset of 1 and Contact Form - col-lg-5 */}
            <div className="col-lg-5 col-md-12 offset-lg-1 hero-s1__thumb p-4">
              <div 
                className="bg-white rounded shadow p-4"
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.95)"
                }}
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <main className="col-lg-12 service-detail-main s-padding">
              <h2 className="title">{content.mainTitle}</h2>
              <p className="desc">{content.mainDescription}</p>

              <ul className="i-list">
                {content.highlights.map((item, idx) => (
                  <li key={idx}>
                    <span className="icon">
                      {item.iconClass && <i className={item.iconClass} />}
                    </span>
                    <span className="text">{item.text}</span>
                  </li>
                ))}
              </ul>

              <h3 className="title-2">{content.secondaryTitle}</h3>
              <p className="desc">{content.secondaryDescription}</p>

              <div className="row s-box-cont">
                {content.featureBoxes.map((box, idx) => (
                  <div className="col-lg-4" key={idx}>
                    <div
                      className="feature-s6 wow animate__animated animate__fadeInUp"
                      data-wow-duration="1.5s"
                      data-wow-delay={`${(idx + 1) * 1}s`}
                    >
                      <div className="icon">
                        <img src={box.icon} alt={box.title} />
                      </div>
                      <div className="content">
                        <h4>{box.title}</h4>
                        <p>{box.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      <AllServices />
      <Partners />
      <CallToAction />
      <Counter />
      <Testimonial />
      <Cookies />
    </>
  );
};

export default SubServicesStructure;