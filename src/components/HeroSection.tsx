function HeroSection() {
  return (
    <>
      {/* hero start */}
      <section className="hero-s3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-6 col-lg-6 hero-s3__content">
              <h2 className="content-sh">Cloud Guider</h2>
              <h1 className="content-h">Your AWS Consulting Partner to Elevate Your Business</h1>
              <p className="content-d">
                Maximize efficiency with our expert managed cloud services. As a trusted AWS partner, we handle your cloud needs so you can focus on innovation and growth.
              </p>
              <div className="btn-group">
                <a href="services.html" className="btn btn-s3">Learn More</a>
                {/*  */}
                <div className="video-popup" id="videoPopup1">
                  <div className="video-popup-inner">
                    <button className="cls-btn">
                      <i className="fa-solid fa-xmark" />
                    </button>
                    {/* add youtube video id for the value attribute */}
                    <input type="text" defaultValue="5Y6iQz3vuM8" />
                  </div>
                  {/*  */}
                </div>
                <button className="play-btn-sm v-play-btn" data-video-id="videoPopup1">
                  <i className="fa-solid fa-play" />
                </button>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
              <div className="img">
                <img src="assets/images/hero-img/3.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape">
          <img src="assets/images/backgrounds/hero-3-shape.png" alt="" />
        </div>
      </section>
      {/* hero end */}


    </>
  )
}

export default HeroSection