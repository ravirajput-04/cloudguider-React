import React from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Utility functions
const selector = (parent: string, child: string) =>
  document.querySelector(`${parent} ${child}`);

const sectionExists = (
  selectorStr: string,
  callback: () => void
) => {
  if (document.querySelector(selectorStr)) callback();
};

// Footer animation
function footerStyle1() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-s1",
      start: "top top+=200",
      end: "bottom top",
      fastScrollEnd: false,
      markers: true,
      once: true,
    },
    defaults: {
      ease: "power2",
      duration: 0.8,
    },
  });

  tl.from(selector(".footer-s1", ".widget-1"), { opacity: 0, x: 30 })
    .from(selector(".footer-s1", ".widget-2"), { opacity: 0, x: 30 }, ">-.6")
    .from(selector(".footer-s1", ".widget-3"), { opacity: 0, x: 30 }, ">-.6")
    .from(selector(".footer-s1", ".widget-4"), { opacity: 0, x: 30 }, ">-.6");
}

sectionExists(".footer-s1", footerStyle1);

const Footer: React.FC = () => {
  return (
    <>
      {/* footer start  */}
      <footer className="footer-s1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-cta">
                <div className="p-left">
                  <span>For IT Company</span>
                  <h2>Join IT Solution Our Community</h2>
                </div>
                <div className="p-right">
                  <form action="#">
                    <div className="f-subs-form">
                      <input type="text" placeholder="Enter your email address" />
                      <button type="submit">Subscribe Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row f-main">
            <div className="col-xl-4 col-lg-6">
              <div className="f-widget widget-1">
                <div className="logo">
                  <NavLink to="/">
                    <img
                      src="assets/images/cloud-guider/fancy-box/logonew2.png"
                      style={{ height: 60 }}
                      alt="logo"
                    />
                  </NavLink>
                </div>
                <p className="desc">
                  Maximize business growth with our tailored managed cloud services. As a trusted AWS partner, we simplify
                  cloud migration, security, and optimization so you can focus on innovation.
                </p>
                <ul className="social-icons-s1">
                  <li>
                    <a href="https://www.facebook.com/QuomodoSoft" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/QuomodoSoft" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/QuomodoSoft" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/QuomodoSoft" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-6">
              <div className="f-widget widget-2">
                <h3 className="f-title">Quick Links</h3>
                <ul className="f-menu">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/cloud-services">Cloud Services</NavLink></li>
                  <li><NavLink to="/devops-and-sre">DevOps &amp; SRE</NavLink></li>
                  <li><NavLink to="/devsecops-and-security">DevSecOps &amp; Security</NavLink></li>
                  <li><NavLink to="/consulting-and-advisory">Consulting &amp; Advisory</NavLink></li>
                  <li><NavLink to="/data-and-ai-services">Data &amp; AI Services</NavLink></li>
                  <li><NavLink to="/resource-hiring">Resource Hiring</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="f-widget widget-2">
                <h3 className="f-title">Resource Hiring</h3>
                <ul className="f-menu">
                  <li><NavLink to="/hire-cloud-engineers">Hire Cloud Engineers</NavLink></li>
                  <li><NavLink to="/hire-devops-and-sre-engineers">Hire DevOps &amp; SRE Engineers</NavLink></li>
                  <li><NavLink to="/hire-devsecops-and-security-experts">Hire DevSecOps &amp; Security Experts</NavLink></li>
                  <li><NavLink to="/hire-cloud-architects">Hire Cloud Architects</NavLink></li>
                  <li><NavLink to="/hire-kubernetes-docker-experts">Hire Kubernetes / Docker Experts</NavLink></li>
                  <li><NavLink to="/hire-data-and-ai-engineers">Hire Data &amp; AI Engineers</NavLink></li>
                  <li><NavLink to="/hire-technical-consultants">Hire Technical Consultants</NavLink></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="widget-4">
                <h3 className="f-title">Contact Us</h3>
                <ul className="info-list">
                  <li>
                    <a href="tel:+918989829182"><i className="fa-solid fa-phone" />+91 8989829182</a>
                  </li>
                  <li>
                    <a href="mailto:connect@cloudguider.com"><i className="fa-solid fa-envelope" /><span>connect@cloudguider.com</span></a>
                  </li>
                  <li>
                    <a href="https://maps.app.goo.gl/VR923mYx9mFniBb79" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-location-dot" />103, City Center, Mahatma Gandhi Rd, Indore, Madhya Pradesh, (452003)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-cr">
          <div className="container">
            <div className="footer-cr-container">
              <div className="p-left">
                <p>2022 © All rights reserved by Cloud Guider</p>
              </div>
              <div className="p-right">
                <ul className="cr-menu">
                  <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                  <li><NavLink to="/terms-and-conditions">Terms &amp; Conditions</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};

export default Footer;
