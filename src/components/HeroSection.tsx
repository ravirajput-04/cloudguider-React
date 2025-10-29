import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const TL_DEFAULT = { ease: "power2.out", duration: 1 };

const HeroSection: React.FC = () => {
  const slides = [
    {
      subheading: "Cloud Guider",
      heading: "Your AWS Consulting Partner to Elevate Your Business",
      description:
        "Maximize efficiency with our expert managed cloud services. As a trusted AWS partner, we handle your cloud needs so you can focus on innovation and growth.",
      image: "assets/images/cloud-guider/hero-images/cloud-guider.png",
    },
    {
      subheading: "Seamless Migration",
      heading: "Migrate to AWS Without Downtime or Data Loss",
      description:
        "Our cloud experts ensure a smooth transition with zero disruptions, scalable architecture, and enhanced security for your applications.",
      image: "assets/images/cloud-guider/hero-images/seamless-migration.png",
    },
    {
      subheading: "24/7 Cloud Support",
      heading: "Empowering Your Business with Proactive Monitoring",
      description:
        "Stay ahead with continuous monitoring, predictive insights, and reliable round-the-clock technical support to keep your systems running efficiently.",
      image: "assets/images/cloud-guider/hero-images/cloud-support.png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const didMount = useRef(false);
  const tlRef = useRef<GSAPTimeline | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animateSlide = (index: number) => {
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const base = `.hero-s3__slide[data-index="${index}"]`;
    const tl = gsap.timeline({ defaults: TL_DEFAULT });

    gsap.set(`${base} .hero-s3__thumb img`, { opacity: 0.8, y: -40 });
    gsap.set(`${base} .content-sh`, { opacity: 0, y: 40 });
    gsap.set(`${base} .content-h`, { opacity: 0, y: 40 });
    gsap.set(`${base} .content-d`, { opacity: 0, y: 40 });
    gsap.set(`${base} .btn-group`, { opacity: 0, y: 20 });

    tl.to(`${base} .hero-s3__thumb img`, { opacity: 1, y: 0 })
      .to(`${base} .content-sh`, { opacity: 1, y: 0 }, ">-.2")
      .to(`${base} .content-h`, { opacity: 1, y: 0 }, ">-.3")
      .to(`${base} .content-d`, { opacity: 1, y: 0 }, ">-.3")
      .to(`${base} .btn-group`, { opacity: 1, y: 0 }, ">-.3");

    tlRef.current = tl;
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
  };

  useLayoutEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      requestAnimationFrame(() => animateSlide(current));
      resetAutoSlide();
      return;
    }
    requestAnimationFrame(() => animateSlide(current));
  }, [current]);

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlide();
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
                    <Link to="/about" className="btn btn-s3">
                      About Us
                    </Link>
                    <Link to="/contact" className="btn btn-s3">
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
                  <div className="img">
                    <img src={slide.image} alt={slide.subheading} />
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
        .btn-prev, .btn-next {
          background: #8797aa;
          border: none;
          color: white;
          font-size: 36px;
          cursor: pointer;
          padding: 12px 18px;
          border-radius: 50%;
          transition: 0.3s;
        }
        .btn-prev:hover, .btn-next:hover {
          background: #005bb5;
        }
        @media (max-width: 992px) {
          .hero-s3 { padding: 60px 0; }
          .content-h { font-size: 32px; }
          .content-sh { font-size: 18px; }
          .content-d { font-size: 15px; }
          .btn-s3 { padding: 8px 18px; font-size: 14px; }
          .slider-controls { bottom: 25px; gap: 10px; }
          .btn-prev, .btn-next { font-size: 30px; padding: 10px 16px; }
        }
        @media (max-width: 576px) {
          .content-h { font-size: 26px; }
          .content-sh { font-size: 16px; }
          .content-d { font-size: 14px; }
          .btn-group { margin-bottom: 40px; }
          .slider-controls { bottom: 20px; }
          .btn-prev, .btn-next { font-size: 26px; padding: 8px 14px; }
          .shape img { width: 250px; }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
