import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const TL_DEFAULT = { ease: "power2.out", duration: 1 };

const animateSlide = (index: number) => {
  const tl = gsap.timeline({
    defaults: TL_DEFAULT,
  });

  const base = `.hero-s3__slide[data-index="${index}"]`;

  tl.from(`${base} .hero-s3__thumb img`, { opacity: 0.8, y: -40 })
    .from(`${base} .content-sh`, { opacity: 1, y: 40 }, ">-.2")
    .from(`${base} .content-h`, { opacity: 1, y: 40 }, ">-.4")
    .from(`${base} .content-d`, { opacity: 1, y: 40 }, ">-.4")
    .from(`${base} .btn-group`, { opacity: 1 }, ">-.4");
};

const HeroSection: React.FC = () => {
  const slides = [
    {
      subheading: "Cloud Guider",
      heading: "Your AWS Consulting Partner to Elevate Your Business",
      description:
        "Maximize efficiency with our expert managed cloud services. As a trusted AWS partner, we handle your cloud needs so you can focus on innovation and growth.",
    },
    {
      subheading: "Seamless Migration",
      heading: "Migrate to AWS Without Downtime or Data Loss",
      description:
        "Our cloud experts ensure a smooth transition with zero disruptions, scalable architecture, and enhanced security for your applications.",
    },
    {
      subheading: "24/7 Cloud Support",
      heading: "Empowering Your Business with Proactive Monitoring",
      description:
        "Stay ahead with continuous monitoring, predictive insights, and reliable round-the-clock technical support to keep your systems running efficiently.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    animateSlide(current);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section className="hero-s3">
        <div className="container">
          {slides.map((slide, index) => (
            <div
              key={index}
              data-index={index}
              className={`hero-s3__slide ${index === current ? "active" : "inactive"}`}
              style={{ display: index === current ? "block" : "none" }}
            >
              <div className="row">
                <div className="col-xxl-7 col-xl-6 col-lg-6 hero-s3__content">
                  <h2 className="content-sh">{slide.subheading}</h2>
                  <h1 className="content-h">{slide.heading}</h1>
                  <p className="content-d">{slide.description}</p>
                  <div className="btn-group">
                    <a href="about.html" className="btn btn-s3">
                      About Us
                    </a>
                    <a href="contact.html" className="btn btn-s3">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
                  <div className="img">
                    <img src="assets/images/hero-img/3.webp" alt="Cloud Guider Hero" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shape">
          <img src="assets/images/backgrounds/hero-3-shape.png" alt="Decorative Shape" />
        </div>

        <div className="slider-controls">
          <button className="btn-prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="btn-next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </section>

      <style>{`
        .slider-controls {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
        }

        .btn-prev,
        .btn-next {
          background: #8797aa;
          border: none;
          color: white;
          font-size: 36px;
          cursor: pointer;
          padding: 12px 18px;
          border-radius: 50%;
          transition: 0.3s;
        }

        .btn-prev:hover,
        .btn-next:hover {
          background: #005bb5;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .hero-s3 {
            padding: 60px 0;
          }

          .content-h {
            font-size: 32px;
          }

          .content-sh {
            font-size: 18px;
          }

          .content-d {
            font-size: 15px;
          }

          .btn-s3 {
            padding: 8px 18px;
            font-size: 14px;
          }

          .slider-controls {
            bottom: 25px;
            gap: 10px;
          }

          .btn-prev,
          .btn-next {
            font-size: 30px;
            padding: 10px 16px;
          }
        }

        @media (max-width: 576px) {
          .content-h {
            font-size: 26px;
          }

          .content-sh {
            font-size: 16px;
          }

          .content-d {
            font-size: 14px;
          }

          .btn-group {
            margin-bottom: 40px; /* Added spacing between buttons and slider controls */
          }

          .slider-controls {
            bottom: 20px;
          }

          .btn-prev,
          .btn-next {
            font-size: 26px;
            padding: 8px 14px;
          }

          .shape img {
            width: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
