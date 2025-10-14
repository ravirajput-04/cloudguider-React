import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <>
      {/* contact section start */}
      <section className="contact-banner-s3">
        <div className="container">
          <div className="row">
            <div className="content text-center">
              <h2>Ready To Get Our Professional IT Services?</h2>
              <div className="btn-group">
                <Link to="/resource-hiring" className="btn btn-s3 wt">
                  Resource Hiring
                </Link>
                <Link to="/contact" className="btn btn-s3">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section end */}
    </>
  );
}

export default CallToAction;
