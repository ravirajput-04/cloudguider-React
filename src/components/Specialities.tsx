import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// TypeScript type for feature items
interface FeatureItem {
  id: number;
  title: string;
  description: string;
  thumb: string;
  icon: string;
}

// Feature data
const features: FeatureItem[] = [
  {
    id: 1,
    title: "Cloud Consulting",
    description: "Define infallible and tailored cloud strategies with the help of our Cloud certified professionals.",
    thumb: "assets/images/cloud-guider/specialities/cloud-consulting-image.png",
    icon: "assets/images/cloud-guider/specialities/cloud-consulting-icon.png",
  },
  {
    id: 2,
    title: "Cloud Migration",
    description: "Migrate all your on-premises hosted applications into Cloud, ensuring seamless cloud migration.",
    thumb: "assets/images/cloud-guider/specialities/cloud-migration-image.png",
    icon: "assets/images/cloud-guider/specialities/cloud-migration-icon.png",
  },
  {
    id: 3,
    title: "Cloud Deployment",
    description: "With years of experience in deploying many apps on the cloud, we solve a wide range of problems.",
    thumb: "assets/images/cloud-guider/specialities/cloud-deployment-image.png",
    icon: "assets/images/cloud-guider/specialities/cloud-deployment-icon.png",
  },
  {
    id: 4,
    title: "Cost Optimization",
    description: "We ensure cloud solutions are implemented efficiently and not over budget for you.",
    thumb: "assets/images/cloud-guider/specialities/cost-optimization-image.png",
    icon: "assets/images/cloud-guider/specialities/cost-optimization-icon.png",
  },
  {
    id: 5,
    title: "DevOps",
    description: "Speed up and automate your organizational processes with the DevOps approach.",
    thumb: "assets/images/cloud-guider/specialities/devops-image.png",
    icon: "assets/images/cloud-guider/specialities/devops-icon.png",
  },
  {
    id: 6,
    title: "Managed Service",
    description: "Our managed services help you operate your Cloud infrastructure more efficiently and securely.",
    thumb: "assets/images/cloud-guider/specialities/managed-services-image.png",
    icon: "assets/images/cloud-guider/specialities/managed-services-icon.png",
  },
];

const Specialities: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400, // XL screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows on mobile
        },
      },
      {
        breakpoint: 415, // Mobile devices
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows on mobile
        },
      },
      {
        breakpoint: 390, // Mobile devices
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <>
      <section className="features-slider-s3 s-padding">
        <div className="container">
          <div className="s-title-wrap">
            <h2 className="s-title text-center">Our Specialities</h2>
          </div>
          <Slider {...settings} className="feature-s3-inner">
            {features.map((feature) => (
              <div key={feature.id} className="p-2">
                <div className="feature-s5 text-center bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="thumb mb-3">
                    <img
                      src={feature.thumb}
                      alt={feature.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="content p-4">
                    <div className="icon mb-2">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="mx-auto w-12 h-12"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Specialities;
