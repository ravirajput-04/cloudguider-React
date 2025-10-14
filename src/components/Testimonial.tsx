import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialItem {
  desc: string;
  thumb: string;
  name: string;
  designation: string;
  rating: number; // 1-5
}

const testimonials: TestimonialItem[] = [
  {
    desc: "Our experience with Cloud Guider has been exceptional. Their management of our cloud infrastructure, including DevOps, has been conducted with the utmost professionalism and attention to detail. We have encountered no errors or issues, and their team's expertise has ensured smooth operations throughout",
    thumb: "assets/images/cloud-guider/testimonial/1.png",
    name: "Danny Haberer",
    designation: "Comfisoft Aalsmeer Netherlands",
    rating: 5,
  },
  {
    desc: "We couldn't be more satisfied with the managed services provided by Cloud Guider. Their team has taken care of our cloud infrastructure and DevOps requirements with utmost professionalism and proficiency. Not only have they managed everything without error, but they've also gone above and beyond to optimize our processes, resulting in increased efficiency and reliability.",
    thumb: "assets/images/cloud-guider/testimonial/3.png",
    name: "Justimiano Alves",
    designation: "JL Recharge, Great Boston USA",
    rating: 5,
  },
  {
    desc: "Cloud Guider demonstrated exceptional proficiency in navigating HIPAA compliance requirements for our major healthcare application in the cloud. Their in-depth understanding of both healthcare regulations and cloud technologies allowed them to deploy solutions tailored to our specific needs. With their expertise, we were able to ensure the security and confidentiality of patient data while leveraging the benefits of cloud infrastructure.",
    thumb: "assets/images/cloud-guider/testimonial/2.png",
    name: "Dr HK Pandey",
    designation: "BSC, Arizona USA",
    rating: 5,
  },
  {
    desc: "Cloud Guider expertly integrated complex banking systems into our cloud, maintaining stringent compliance standards. Their adept deployment solutions upheld security and scalability while streamlining DevOps for efficient development cycles. Their meticulous attention to compliance ensured regulatory adherence without sacrificing performance. Their unwavering support significantly boosted operational efficiency, sustaining a robust banking application.",
    thumb: "assets/images/cloud-guider/testimonial/5.png",
    name: "Himanshu Vyas",
    designation: "Vyaparify, Mumbai India",
    rating: 5,
  },
  {
    desc: "Choosing Cloud Guider for our managed services was one of the best decisions we made. Their expertise in managing our cloud application infrastructure and DevOps processes is unmatched. They handle everything with precision and attention to detail, ensuring that we experience no disruptions or errors. Their proactive approach and commitment to excellence have made them invaluable partners for our business.",
    thumb: "assets/images/cloud-guider/testimonial/2.png",
    name: "RD Bhatnagar",
    designation: "Welovecaring, Jaipur India",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* testimonial section start*/}
      <section className="testimonial-area-s1 s-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="testimonial-area-s1__content">
                <div className="cont-h">
                  <span className="s-sub-title">Testimonial</span>
                  <h2 className="s-title">Some Awesome Words By Our Customers</h2>
                </div>

                <Slider className="testimonial-s1" {...settings}>
                  {testimonials.map((tes, index) => (
                    <div className="single-tes-s1" key={index}>
                      <p className="desc">
                        <span>
                          <img
                            src="assets/images/feature-icons/tes-quote-left.png"
                            alt=""
                          />
                        </span>
                        {tes.desc}
                        <span>
                          <img
                            src="assets/images/feature-icons/tes-quote-right.png"
                            alt=""
                          />
                        </span>
                      </p>
                      <div className="auth-info">
                        <div className="thumb">
                          <img src={tes.thumb} alt={tes.name} />
                        </div>
                        <div className="details">
                          <p className="name">{tes.name}</p>
                          <span className="designation">{tes.designation}</span>
                          <div className="rating">
                            {Array.from({ length: tes.rating }).map((_, i) => (
                              <i key={i} className="fa-solid fa-star" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="testimonial-area-s1__thumb">
                <img
                  src="assets/images/thumbs/testimonial-area-thumb.webp"
                  alt=""
                  className="animate__zoomIn wow animate__animated"
                  data-wow-duration="2s"
                  data-wow-delay=".5s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial section end*/}
    </>
  );
};

export default Testimonial;
