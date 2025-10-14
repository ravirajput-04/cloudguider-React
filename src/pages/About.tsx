import AllServices from "../components/AllServices"
import CallToAction from "../components/CallToAction"
import Cookies from "../components/Cookies"
import Counter from "../components/Counter"
import Partners from "../components/Partners"
import Specialities from "../components/Specialities"
import Testimonial from "../components/Testimonial"

function About() {
  return (
    <>
      {/* about us area start */}
      <section className="about-container">
        <div className="about-wrapper">
          <h1 className="about-title">About Us</h1>
          <div className="about-content">
            {/* Left content */}
            <div className="about-text-wrapper">
              <p className="about-text">
                Cloud Guider is a premier cloud and DevOps consulting partner dedicated to helping organizations of all
                sizes unlock the full potential of cloud computing.
                Our team of certified cloud architects, DevOps engineers, software developers, and IT security specialists
                works collaboratively to deliver highly secure, scalable, and reliable infrastructures.
                We provide end-to-end services that cover cloud migration, architecture design, Kubernetes integration,
                DevOps automation, continuous deployment, IT security, and custom software development tailored to your
                business needs.
              </p>
              <p className="about-text">
                Our mission is to simplify digital transformation by providing strategic and technical guidance that
                optimizes performance, reduces costs, and ensures operational efficiency.
                We focus on building resilient infrastructures, implementing automation, monitoring, and DevOps best
                practices, so organizations can accelerate innovation while maintaining stability and security.
                With Cloud Guider, businesses can focus on their core objectives while we manage the complexities of their
                cloud and IT environments.
              </p>
              <p className="about-text">
                We value collaboration, innovation, and customer-centricity. By staying ahead of cloud technologies, DevOps
                methodologies, and emerging trends, Cloud Guider empowers organizations to scale seamlessly, improve
                agility, and gain a competitive advantage.
                Our vision is to be the trusted partner for businesses worldwide, delivering transformative solutions that
                foster growth, efficiency, and operational excellence in the digital era.
              </p>
              {/* Buttons */}
              <div className="about-buttons">
                <a href="services.html" className="about-btn">Our Services</a>
                <a href="contact.html" className="about-btn">Contact Us</a>
              </div>
            </div>
            {/* Right images */}
            <div className="about-image-wrapper">
              <div className="about-image-left">
                <img src="assets/images/thumbs/about4-t1.png" alt="Cloud Image 1" />
                <img src="assets/images/thumbs/about4-t3.png" alt="Cloud Image 2" />
              </div>
              <div className="about-image-right">
                <img src="assets/images/thumbs/about4-t2.png" alt="Cloud Image 3" />
                <div className="about-experience-box">
                  <h4>5 +</h4>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="about-shape">
                <img src="assets/images/backgrounds/about-4-shape.png" alt="Background Shape" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us area end */}


      {/* mission area start */}
      <section className="mission-container">
        <div className="mission-wrapper">
          <h1 className="mission-title">Our Mission &amp; Vision</h1>
          <div className="mission-section">
            <h2 className="mission-heading">Our Mission</h2>
            <p className="mission-text">
              At Cloud Guider, our mission is to empower organizations of all sizes to harness the full potential of cloud
              and DevOps technologies.
              We strive to deliver highly secure, scalable, and reliable infrastructures that enable faster release cycles,
              seamless operations, and operational excellence.
            </p>
            <p className="mission-text">
              By providing end-to-end cloud solutions, including architecture design, cloud migration, Kubernetes services,
              DevOps automation, and IT security,
              we ensure that our clients can focus on innovation and growth while we manage the complexities of their cloud
              environment.
              Our team of certified experts works closely with clients to understand their business goals and provide
              tailored strategies that optimize performance, reduce costs, and improve resilience.
            </p>
            <p className="mission-text">
              We are committed to fostering a culture of innovation, collaboration, and continuous improvement, ensuring
              that our clients always have access to the latest cloud technologies, best practices, and industry standards.
              Through our mission, we aim to simplify the adoption of cloud and DevOps, making digital transformation
              accessible, efficient, and secure for every organization.
            </p>
          </div>
          <div className="mission-section">
            <h2 className="mission-heading">Our Vision</h2>
            <p className="mission-text">
              Our vision is to be the trusted partner for businesses worldwide in navigating the cloud landscape.
              We aspire to drive technological transformation that integrates innovation, agility, and operational
              excellence for our clients.
            </p>
            <p className="mission-text">
              We envision a future where organizations, regardless of size or industry, can leverage cloud and DevOps to
              achieve unparalleled efficiency, scalability, and security.
              By simplifying cloud adoption, modernizing infrastructures, and implementing best-in-class DevOps practices,
              we aim to help companies unlock their true potential and accelerate their digital journey.
            </p>
            <p className="mission-text">
              Through our vision, Cloud Guider is committed to enabling organizations to focus on their core business
              objectives while we ensure seamless cloud operations, continuous innovation, and reliable support.
              We see a world where technology empowers businesses to scale rapidly, reduce risks, and embrace a future
              defined by growth, resilience, and competitive advantage.
            </p>
          </div>
        </div>
      </section>
      {/* mission area end */}


      {/* features slider start */}
      <section className="features-slider s-padding">
        <div className="container">
          <div className="row">
            <div className="s-title-wrap">
              {/* <span class="s-sub-title">Great Journey for IT Solutions</span> */}
              <h2 className="s-title">Our Solutions</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-s1 wow animate__animated animate__fadeInUp" data-wow-duration="1.5s">
                <div className="icon">
                  <img src="assets\images\cloud-guider\tab\Tally.png" alt="img" />
                </div>
                <div className="content">
                  <h4><a href="services.html">Tally on Cloud</a></h4>
                  <p>
                    Using tally on Cloud can be <strong>connected to your finance from anywhere,</strong> anytime. Works
                    seamlessly over the
                    internet in a distributed manner across multiple business locations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-s1 wow animate__animated animate__fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                <div className="icon">
                  <img src="assets\images\cloud-guider\tab\Hemi-remote.png" alt="img" />
                </div>
                <div className="content">
                  <h4><a href="services.html">Hemi Remote</a></h4>
                  <p>
                    <strong>Client Less Remote Desktop Gateway,</strong> It allows Admin to take control of a remote
                    computer via a modern web browser &amp; The server runs on most Linux distributions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-s1 wow animate__animated animate__fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">
                <div className="icon">
                  <img src="assets\images\cloud-guider\tab\Managed-cloud.png" alt="img" />
                </div>
                <div className="content">
                  <h4><a href="services.html">Managed Cloud Desktop (VDI)</a></h4>
                  <p>
                    <strong>Cloud Desktop</strong> allows for multiple users to essentially share one operating
                    system to run multiple desktops with Full Uptime &amp; without managing on-premises servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features slider end */}


      <Specialities />

      <AllServices />

      <Partners />

      <CallToAction />

      <Counter />

      <Testimonial />

      <Cookies />
    </>
  )
}

export default About