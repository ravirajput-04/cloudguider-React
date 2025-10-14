import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <>

      {/* contact form start */}
      <section className="contact-form-area s-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-info">
                <span className="s-sub-title">Contact With Us</span>
                <h2 className="s-title">Feel Free to Get in Touch</h2>
                <div className="c-info-box-wrap">
                  <a href="tel:+8989829182" className="c-info-box">
                    <div className="icon">
                      <img src="assets/images/feature-icons/phone.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Phone Number</span>
                      <h4>+91 8989829182</h4>
                    </div>
                  </a>
                  <a href="mailto:connect@cloudguider.com" className="c-info-box">
                    <div className="icon">
                      <img src="assets/images/feature-icons/evelope.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Email</span>
                      <h4>connect@cloudguider.com</h4>
                    </div>
                  </a>
                  <a href="https://maps.app.goo.gl/VR923mYx9mFniBb79" className="c-info-box">
                    <div className="icon">
                      <img src="assets/images/feature-icons/pin.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Location</span>
                      <h4>
                        103, City Center, Mahatma Gandhi Rd, Indore, Madhya Pradesh 452003</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-s1">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form end */}
      {/* map section start */}
      <section className="map-section">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.150779749808!2d75.87261971634285!3d22.72115291718832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1ea9572f9d%3A0x766a1be151c093fd!2sCloud%20Guider%20%7C%20Cloud%20Managed%20Services%20Indore%20%7C%20Cloud%20Indore%20%7C%20AWS%20Partner%20Indore!5e0!3m2!1sen!2sin!4v1759490284763!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      {/* map section end */}
    </>
  )
}

export default Contact