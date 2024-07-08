import { useState } from "react";
// import Benefit from "../components/Benefit";
import "../components/Root.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";
// import logopakcge1 from "../Images/pagepackege/logopakcge1.png";
// import logopakcge2 from "../Images/pagepackege/logopakcge2.png";
// import logopakcge3 from "../Images/pagepackege/logopakcge3.png";
// import logopakcge4 from "../Images/pagepackege/logopakcge4.png";
import Rootpage1 from "../Root/Rootpage1";
import Rootpage2 from "../Root/Rootpage2";
import Rootpage3 from "../Root/Rootpage3";
const items = [
  {
    src: "/layer-2.svg",
    altText: "Start-up",
    caption: "Design Essentials",
    list1: "Logo with 3 variations",
    list2: "Business cards (Front & Back)",
    list3: "Company letterhead",
    list4: "Bill book design",
    list5: "Digital thumbnails",
    key: 1,
  },
  {
    src: "/group.svg",
    altText: "Social Media",
    caption: "Graphic Design",
    list1: "30 Days Design service /Month",
    list2: "20 Graphic Design Post",
    list3: "10 Videos - Mp4, GIF",
    list4: "Digital Thumbnails, Logo",
    list5: "Content Writing for Post",
    list6: "Revisions Accepted",
    list7: "Brand Guidance",
    key: 2,
  },
  {
    src: "/group1.svg",
    altText: "Festival",
    caption: "Wishes Design",
    list1: "50 Festival Creative Designs",
    list2: "10 Festival GIF",
    list3: "Customised Names & Photos",
    list4: "Customised Content Writing",
    list5: "Monthly Newsletters",
    key: 3,
  },
];
const items1 = [
  {
    src: "/layer-2.svg",
    altText: "Figma Design &",
    caption: "Prototype",
    list1: "Figma website design",
    list2: "Animations & prototype",
    list3: "Premium Stock images",
    list4: "Premium Stock GIF",
    list5: "SEO Content Writing",
    list6: "Revisions Accepted",
    key: 1,
  },
  {
    src: "/group.svg",
    altText: "Design + <Dev.> +",
    caption: "Domain + Hosting",
    list1: "Design + Development",
    list2: "Edit your site on your own",
    list3: "Premium images (upto 100 images)",
    list4: "Premium videos (upto 20 videos)",
    list5: "Revisions Accepted",
    list6: "1 Year Maintainance",
    key: 2,
  },
  {
    src: "/group1.svg",
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

const Root = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const slides = items.map((item) => {
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
                  <div className="layer-content">
                    <img className="group-icon2" alt="" src={item.src} />
                  </div>
                </div>
              </div>

              {/* <div className="frame-wrapper5">
                <div className="title-group">
                  <div className="title3">
                    <p className="festival">
                      {item.altText} {item.caption}
                    </p>
                  </div>
                  <div className="group-wrapper">
                    <img className="group-icon2" alt="" src={item.src} />
                  </div>
                </div>
              </div> */}
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
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
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
  const slides1 = items1.map((item) => {
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
                  <div className="layer-content">
                    <img className="group-icon2" alt="" src={item.src} />
                  </div>
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

  const [document1, setDocument1] = useState(true);
  const [document2, setDocument2] = useState(false);
  const [document3, setDocument3] = useState(false);
  const handleDocument1 = () => {
    setDocument1(true);
    setDocument2(false);
    setDocument3(false);
  };
  const handleDocument2 = () => {
    setDocument1(false);
    setDocument2(true);
    setDocument3(false);
  };
  const handleDocument3 = () => {
    setDocument1(false);
    setDocument2(false);
    setDocument3(true);
  };

  return (
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
          <div className="py-5 d-flex justify-content-center w-100">
            <div
              className="ul_portfilo_vie_navbar11  shadow top-0 w-100"
              style={{ zIndex: 3 }}
            >
              <div className="websit_font" onClick={handleDocument1}>
                <div className={document1 ? "link_webactive" : "link_web1"}>
                  {" "}
                  Graphic Design
                </div>
              </div>
              <div className="websit_font1" onClick={handleDocument2}>
                <div className={document2 ? "link_webactive" : "link_web1"}>
                  Website Development Service
                </div>
              </div>
              <div className="websit_font1" onClick={handleDocument3}>
                <div className={document3 ? "link_webactive" : "link_web1"}>
                  APP / SAAS Development Service
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {document1 && (
              <>
                <Rootpage1 />
              </>
            )}
            {document2 && (
              <>
                <Rootpage2 />
              </>
            )}
            {document3 && (
              <>
                <Rootpage3 />
              </>
            )}
            <div
              style={{ width: "100%", height: "100%" }}
              className="dflexnone"
            >
              {document1 && (
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  {slides}

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
              )}
              {document2 && (
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  {slides1}

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
              )}
              {document3 && (
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
