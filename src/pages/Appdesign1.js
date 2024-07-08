/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import ContactInnerContainer from "../components/ContactInnerContainer";
import Navbar from "../components/Navbar";
import Rootpage3 from "../Root/Rootpage3";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";
const items2 = [
  {
    src: "logopakcge1",
    altText: "Figma Design &",
    caption: "Prototype",
    list1: "Business research & analysis",
    list2: "User research Case study",
    list3: "High-end Figma design",
    list4: "Customised icons + graphics",
    list5: "Customised cards, UI",
    list6: "Revision until satisfied",
    list7: "1 Year design updates",
    list8: "Unique Style Designs",
    key: 1,
  },
  {
    src: "logopakcge1",
    altText: "App Design",
    caption: "+ <Development>",
    list1: "Business research & analysis",
    list2: "User research Case study",
    list3: "High-end Figma design",
    list4: "Customised icons + graphics",
    list5: "Android & IOS App",
    list6: "React native, React Js, Next Js Tech",
    list7: "1 Year maintenance",
    list8: "Revision until satisfied",
    key: 2,
  },
  {
    src: "logopakcge4.png",
    altText: "Coded Website",
    caption: "Design + <Dev.>",
    list1: "Full website development",
    list2: "Full Figma design",
    list3: "Futuristic animations",
    list4: "React, React native Technology",
    list5: "Next JS > Technology",
    list6: "Full Source code",
    key: 3,
  },
];
const Appdesign1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items2.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items2.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const slides2 = items2.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="package-highlight11">
          <div className="service-card1">
            <div className="vector-parent">
              <img className="vector-icon" alt="" src="/vector-7467.svg" />
              <div className="title-and-body2" />
              <div className="title-wrapper">
                <div className="title">
                  <b className="title2">
                    <p className="start-up">{item.altText} </p>
                    <p className="design-essentials text-nowrap">
                      {item.caption}
                    </p>
                  </b>
                  {/* <div className="layer-content">
                    <img className="group-icon2" alt="" src={item.src} />
                  </div> */}
                </div>
              </div>
              <div className="benefits1">
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="benefit-child4" />
                  <div className="services-off12">{item.list1}</div>
                </div>
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="benefit-child4" />
                  <div className="services-off12">{item.list2}</div>
                </div>
                <div className="benefit8">
                  <img className="check-icon13" alt="" src="/check.svg" />
                  <div className="benefit-child5" />
                  <div className="services-off13">{item.list3}</div>
                </div>
                <div className="benefit9">
                  <img className="check-icon14" alt="" src="/check.svg" />
                  <div className="benefit-child6" />
                  <div className="services-off14">{item.list4}</div>
                </div>
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="benefit-child4" />
                  <div className="services-off12">{item.list5}</div>
                </div>
                {item.key === 2 ? (
                  <>
                    <div className="benefit7">
                      <img className="check-icon12" alt="" src="/check.svg" />
                      <div className="benefit-child4" />
                      <div className="services-off12">{item.list6}</div>
                    </div>
                    <div className="benefit7">
                      <img className="check-icon12" alt="" src="/check.svg" />
                      <div className="benefit-child4" />
                      <div className="services-off12">{item.list7}</div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="enquire-now-container">
              <b className="enquire-now2">Get Offer</b>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {[...Array(3)].map((_, index) => (
            <div
              onClick={() => handleClick(index)}
              style={{
                width: "25px",
                height: "25px",
                padding: "5px",
                margin: "5px",
                cursor: "pointer",
                backgroundColor: activeIndex === index ? "#222B2C" : "#222B2C",
                fontSize: activeIndex === index ? "18px" : "14px",
                color: activeIndex === index ? "#FFFFFF" : "#747474",
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </CarouselItem>
    );
  });
  return (
    <>
      <Navbar />
      <div className="package">
        <div className="frame-parent10">
          <div className="our-creative-packages-have-sup-wrapper">
            <div className="our-creative-packages-container">
              <span className="our-creative-packages-container1">
                <p className="our-creative-packages">
                  <b>Our Creative Packages</b>
                </p>
                <p className="have-supported-700">
                  Have Supported 700+ Corporates
                </p>
              </span>
            </div>
          </div>
          <div className="frame-parent11">
            <div className="">
              <Rootpage3 />
            </div>
          </div>
          <div style={{ width: "100%", height: "100%" }} className="dflexnone">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              {slides2}

              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </div>
        </div>
      </div>
      <section className="contact-inner-container-parent">
        <ContactInnerContainer />
      </section>
    </>
  );
};
export default Appdesign1;
