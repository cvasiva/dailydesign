import React from "react";
import BackgroundShadow2 from "../components/BackgroundShadow2";
import Navbar from "../components/Navbar";
import ContactInnerContainer from "../components/ContactInnerContainer";

const Services = () => {
  return (
    <>
      <section className="branding">
        <div className="frame-parent">
          <Navbar />
        </div>
      </section>
      <div className="masters d-flex justify-content-center my-5">
        <div className="services-were-masters-parent">
          <h1 className="services-were-container">
            <b>Services</b>
            <span className="span">{` - `}</span>
            <span>We’re Masters</span>
          </h1>
          <div className="serving-customized-needs-for-s-wrapper">
            <h6 className="serving-customized-needs">
              Serving customized needs for start-ups
            </h6>
          </div>
        </div>
      </div>
      <BackgroundShadow2 />
      <section className="contact-inner-container-parent">
        <ContactInnerContainer />
      </section>
    </>
  );
};

export default Services;
