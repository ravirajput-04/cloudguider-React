import AllServices from "../components/AllServices";
import CallToAction from "../components/CallToAction";
import Counter from "../components/Counter";
import HeroSection from "../components/HeroSection";
import Partners from "../components/Partners";
import Specialities from "../components/Specialities";
import Testimonial from "../components/Testimonial";
function Home() {
  return (

    <div id="home-3">
      <HeroSection />
      {/* About Start */}

      <section className="about-s4">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="about-s4__content">
                {/* content */}
                <span className="s-sub-title">Discover Our Company</span>
                <h2 className="s-title">
                  Generate Competitive Advantage from Cloud with Cloud Guider
                </h2>
                <p className="desc">
                  We help Small, Medium &amp; Large Organizations to achieve their Goals in Development and Operations in
                  minimal time without compromising the industry standards. We support them to architect, implement and
                  manage their Infrastructure. Also, we provide other DevOps services.
                </p>
                <p className="desc">
                  <strong>Key Principles:</strong> Create Highly Secure, Scalable, Reliable, Available Infrastructure with
                  faster release channels. We believe that DevOps is harnessing integration, interaction, and innovation.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-s4__thumb">
                <div className="p-left">
                  <img src="assets/images/thumbs/about4-t1.png" alt="" className="img1" />
                  <img src="assets/images/thumbs/about4-t3.png" alt="" className="img2" />
                </div>
                <div className="p-right">
                  <img src="assets/images/thumbs/about4-t2.png" alt="" />
                </div>
                <div className="shape">
                  <img src="assets/images/backgrounds/about-4-shape.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}
      <Specialities />
      <AllServices />
      <Partners />
      <CallToAction />
      <Counter />
      <Testimonial />
    </div>

  );
}

export default Home;