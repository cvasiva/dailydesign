/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import clutchLogo from "./Homeassets/assets/home/rating-logos/clutch-logo.svg";
import googleLogo from "./Homeassets/assets/home/rating-logos/google-logo.svg";
import trustPilot from "./Homeassets/assets/home/rating-logos/trustpilot.png";
import fiverrLogo from "./Homeassets/assets/home/rating-logos/fiverr-logo.png";
import herobg from "./Homeassets/assets/home/hero-image.png";
import rectangleImg from "./Homeassets/assets/home/rectangle.png";
import starImg from "./Homeassets/assets/home/star.png";
import indianFlag from "./Homeassets/assets/home/indian-flag.svg";

import "./HeroSection.css";
import { Button } from "reactstrap";

const dailyDesignRating = [
  {
    rating_comp: clutchLogo,
    rating: "4.9",
  },
  {
    rating_comp: googleLogo,
    rating: "5.0",
  },
  {
    rating_comp: trustPilot,
    rating: "4.9",
  },
  {
    rating_comp: fiverrLogo,
    rating: "4.9",
  },
];

const HeroSection = () => {
  const stars = Array(5).fill(null);
  return (
    <div className="dailydesign-hero-wrapper d-flex flex-column" style={{flexDirection:"column"}}>
      <img
        src={herobg}
        alt="Background Image"
        className="img-fluid"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <img
        src={rectangleImg}
        alt="Rectangle Image"
        width={104}
        height={217}
        className="diamond-image"
        style={{ position: "absolute" }}
      />
      <img
        src={starImg}
        alt="Star Image"
        width={140}
        height={224}
        className="star-image"
        style={{ position: "absolute" }}
      />

      <div className="container dailydesign-wrap">
        <div className="main-texts-wrap">
          <h1 className="heading">
            We’re <br /> Crafting Digital Dreams
          </h1>
          <div className="indian-flag-wrapper d-flex align-items-center">
            <img
              src={indianFlag}
              alt="India Flag Logo"
              width={24}
              height={20}
            />
            <h3 className="sub-heading ms-2">#From India’s Talents</h3>
            <img
              src={indianFlag}
              alt="India Flag Logo"
              width={24}
              height={20}
              className="ms-2"
            />
          </div>
        </div>

        <div className="rating-list-wrapper d-flex justify-content-around">
          {dailyDesignRating.map((item, index) => (
            <div
              key={index}
              className="rating-main-wrapper d-flex flex-column align-items-center"
            >
              <div className="rating-logo-wrap">
                <img
                  src={item.rating_comp}
                  alt="Rating Logo"
                  className="img-fluid"
                />
              </div>
              <div className="rating-count-wrap text-center">
                <p className="rating-count text-white">{item.rating}</p>
                <div className="stars-wrapper">
                  {stars.map((_, index) => (
                    <FaStar className="star-color" key={index} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mob-cta-header mt-4 text-center">
          <a
            href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn btn-primary d-flex align-items-center justify-content-center">
              Talk with Team
              <FaArrowRight className="text-white ms-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
