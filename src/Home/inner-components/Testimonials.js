/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Import images directly from local path
import abrahamWork1 from "../Homeassets/assets/home/testimonials/works-images/abrham_works.png";
import abrahamWork2 from "../Homeassets/assets/home/testimonials/works-images/abrham_works_2.png";
import nareshWork from "../Homeassets/assets/home/testimonials/works-images/naresh_works.png";
import fiverrLogo from "../Homeassets/assets/home/testimonials/company-logo/fiverr_logo.png";
import feedbackerOne from "../Homeassets/assets/home/testimonials/feedbacker-images/Image_1.png";
import feedbackerTwo from "../Homeassets/assets/home/testimonials/feedbacker-images/Image_2.png";
import feedbackerThree from "../Homeassets/assets/home/testimonials/feedbacker-images/Image_3.png";
import feedbackerFour from "../Homeassets/assets/home/testimonials/feedbacker-images/Image_4.png";



const testimonials = [
  {
    name: "Sivanesh",
    position: "Founder and CEO at Kofipass",
    companyLogo: fiverrLogo,
    feedback: "When my colleague recommended Aravind for my app design, I didn't know what to expect. But from the moment we started, his expertise and warm professionalism stood out. He made the entire design phase incredibly easy. The same feel as my colleague also felt with Aravind. Now I feel like if I could find a developer also like him I’d be blessed with my idea and team. Once again Thank you, Aravind!",
    workImage: abrahamWork2,
    feedbackerImage: feedbackerFour,
    postedDate: "June 30, 2024",
    path: "/",
  },
  {
    name: "Chandana",
    position: "Founder & CEO at Findcollab Pvt. Ltd.",
    companyLogo: fiverrLogo,
    feedback: "I randomly found Aravind in a WhatsApp group and wasn't sure what to expect. But once we started working on my app, I realized he was incredible. He took my concept and inspirations and guided me through the entire design and development process with kindness and expertise. I'm so happy to have found the perfect team to realize my vision. Thank you, Aravind and team, for your incredible work. Best of luck in your careers.",
    workImage: abrahamWork2,
    feedbackerImage: feedbackerTwo,
    postedDate: "May 15, 2024",
    path: "/",
  },
  // ...other testimonials
];

const prev = <IoArrowBackCircleOutline className="text-primary" />;
const next = <IoArrowForwardCircleOutline className="text-primary" />;

const responsiveOptions = {
  margin: 21,
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  navText: [prev, next],
  responsive: {
    0: { items: 1, nav: false, dots: true },
    768: { items: 2, nav: false, dots: true },
    1280: { items: 3 },
    1920: { items: 3 },
  },
};

const Testimonials = () => {
  return (
    <div className="dailydesign-testimonial py-5">
      <div className="container">
        <OwlCarousel className="owl-theme" {...responsiveOptions}>
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-box-item card shadow-sm p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.feedbackerImage}
                      alt={`Feedbacker ${item.name}`}
                      className="rounded-circle me-3"
                      width={43}
                      height={43}
                    />
                    <div>
                      <h5 className="card-title mb-1">{item.name}</h5>
                      <p className="card-subtitle text-muted">{item.position}</p>
                    </div>
                  </div>
                  <img
                    src={item.companyLogo}
                    alt="Company Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <p
                  className="card-text mb-3"
                  dangerouslySetInnerHTML={{ __html: item.feedback.replace(/\n/g, "<br/>") }}
                />
                <img
                  src={item.workImage}
                  alt={`Work by ${item.name}`}
                  className="img-fluid mb-3"
                  style={{ width: "100%", height: "208px", objectFit: "cover" }}
                />
                <div className="d-flex justify-content-between align-items-center">
                  <a href={item.path} className="btn btn-outline-primary">
                    View Project <RiArrowRightUpLine />
                  </a>
                  <small className="text-muted">{item.postedDate}</small>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
