import * as React from "react";

export interface ServiceItem {
  title: string;
  description: string | React.JSX.Element;
  image: string;
  alt: string;
  link: string;
  reverse?: boolean;
}

interface MainServicesProps {
  title: string;
  introText: string | React.JSX.Element;
  services: ServiceItem[];
}

const MainServices: React.FC<MainServicesProps> = ({ title, introText, services }) => {
  return (
    <section className="service-container py-5">
      {/* ===== Full-width Intro Section ===== */}
      <div className="w-100 bg-light py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <h1 className="service-title mb-4 text-center">{title}</h1>
              <div className="service-intro-text fs-5 text-muted">
                {introText}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <div className="container cloud-services-container py-5">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.link}
          className="text-decoration-none text-reset"
        >
          <div className="row align-items-center cloud-services-row mb-5">
            {service.reverse ? (
              <>
                {/* Text first */}
                <div className="col-md-7 cloud-services-content">
                  <h4>{service.title}</h4>
                  {typeof service.description === "string" ? (
                    <p>{service.description}</p>
                  ) : (
                    service.description
                  )}
                </div>
                <div className="col-md-5 cloud-services-image">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image first */}
                <div className="col-md-5 cloud-services-image">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-md-7 cloud-services-content">
                  <h4>{service.title}</h4>
                  {typeof service.description === "string" ? (
                    <p>{service.description}</p>
                  ) : (
                    service.description
                  )}
                </div>
              </>
            )}
          </div>
        </a>
      ))}
    </div>
    </section>
  );
};

export default MainServices;
