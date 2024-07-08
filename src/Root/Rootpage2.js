import React from "react";
import Benefit from "../components/Benefit";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import logopakcge3 from "../Images/pagepackege/logopakcge3.png";
import logopakcge4 from "../Images/pagepackege/logopakcge4.png";
import logopakcge1 from "../Images/pagepackege/logopakcge1.png";
const Rootpage2 = () => {
  return (
    <>
      <div className="dflexclock">
        <div className="package-highlight">
          <Card className="service-detail">
            <CardHeader className="border-0">
              <div className="title-wrapper">
                <div className="title">
                  <b className="title2">
                    <p className="start-up">Figma Design &</p>
                    <p className="design-essentials text-nowrap">Prototype</p>
                  </b>
                  <div className="layer-content">
                    <img
                      className="layer-2-icon"
                      alt="logopakcge1"
                      src={logopakcge1}
                    />
                  </div>
                </div>
              </div>
              <img
                className="highlight-title-child pt-1"
                alt=""
                src="/vector-7468.svg"
              />
            </CardHeader>
            <CardBody>
              <div className="benefits1">
                <div className="benefit7">
                  <div className="benefit-item1">
                    <img className="check-icon5" alt="" src="/check.svg" />
                    <div className="services-off5">Figma website design</div>
                  </div>
                </div>
                <div className="benefit7">
                  <div className="benefit-item1">
                    <img className="check-icon5" alt="" src="/check.svg" />
                    <div className="services-off5">Animations & prototype</div>
                  </div>
                </div>
                <div className="benefit7">
                  <div className="benefit-item1">
                    <img className="check-icon5" alt="" src="/check.svg" />
                    <div className="services-off5">Premium Stock images</div>
                  </div>
                </div>
                <div className="benefit7">
                  <div className="benefit-item1">
                    <img className="check-icon5" alt="" src="/check.svg" />
                    <div className="services-off5">Premium Stock GIF</div>
                  </div>
                </div>
                <div className="benefit7">
                  <div className="benefit-item1">
                    <img className="check-icon5" alt="" src="/check.svg" />
                    <div className="services-off5">SEO Content Writing</div>
                  </div>
                </div>
                <div className="benefit7">
                  <div className="benefit-item1">
                    <img className="check-icon5" alt="" src="/check.svg" />
                    <div className="services-off5">Revisions Accepted</div>
                  </div>
                </div>
              </div>
              <div
                className="benefit-content1 mt-5 pt-4"
                style={{ visibility: "hidden" }}
              >
                <div className="check-parent">
                  <img className="check-icon10" alt="" src="/check1.svg" />
                  <b className="services-off10">Brand Guidance</b>
                </div>
              </div>
            </CardBody>
            <CardFooter className="border-0">
              <div className="d-flex justify-content-center">
                <div className="enquire-now-wrapper">
                  <b className="enquire-now">Get Offer</b>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="service-detail">
            <CardHeader className="border-0">
              <div className="title-wrapper">
                <div className="title">
                  <b className="title2">
                    <p className="start-up">Design + {"<Dev.>"} +</p>
                    <p className="design-essentials text-nowrap">
                      Domain + Hosting
                    </p>
                  </b>
                  <div className="layer-content">
                    <img
                      className="layer-2-icon"
                      alt="logopakcge1"
                      src={logopakcge4}
                    />
                  </div>
                </div>
              </div>
              <img
                className="highlight-title-child"
                alt=""
                src="/vector-7468.svg"
              />
            </CardHeader>
            <CardBody>
              <Benefit
                check="/check1.svg"
                servicesOFF="Design + Development"
                check1="/check1.svg"
                servicesOFF1="Edit your site on your own"
                check2="/check1.svg"
                servicesOFF2="Premium images (upto 100 images)"
                check3="/check1.svg"
                servicesOFF3="Premium videos (upto 20 videos)"
                check4="/check1.svg"
                servicesOFF4="SEO content writing "
                propPadding="0px var(--padding-12xs) var(--padding-5xs-1) var(--padding-4xs)"
                propPadding1="var(--padding-4xs-9) var(--padding-4xs) var(--padding-4xs) 0px"
                propFontWeight="bold"
                propFontWeight1="bold"
                propFontWeight2="bold"
                propFontWeight3="bold"
                propPadding2="var(--padding-4xs-9) var(--padding-16xl) var(--padding-4xs) 0px"
                propDisplay="unset"
                propMinWidth="unset"
                propFlex="1"
                propFontWeight4="bold"
                check5="/check1.svg"
                servicesOFF5="Revisions Accepted"
              />
              <div
                className="benefit-content mt-5 pt-4"
                style={{ visibility: "hidden" }}
              >
                <div className="highlight-benefit">
                  <img className="check-icon9" alt="" src="/check1.svg" />
                  <b className="services-off9">1 Year Maintainance</b>
                </div>
              </div>
            </CardBody>
            <CardFooter className="border-0">
            <div className="d-flex justify-content-center">
                <div className="enquire-now-wrapper">
                  <b className="enquire-now">Get Offer</b>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="service-detail">
            <CardHeader className="border-0">
            <div className="title-wrapper">
                <div className="title">
                  <b className="title2">
                    <p className="start-up">Coded Website</p>
                    <p className="design-essentials text-nowrap">
                    Design + {"<Dev.>"}
                    </p>
                  </b>
                  <div className="layer-content">
                    <img
                      className="layer-2-icon"
                      alt="logopakcge1"
                      src={logopakcge3}
                    />
                  </div>
                </div>
              </div>
              <img
                className="highlight-title-child pt-1"
                alt=""
                src="/vector-7468.svg"
              />
            </CardHeader>
            <CardBody>
              <div className="benefits1">
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="services-off12">Full website development</div>
                </div>
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="services-off12">Full Figma design</div>
                </div>
                <div className="benefit8">
                  <img className="check-icon13" alt="" src="/check.svg" />
                  <div className="services-off13">{`Futuristic animations`}</div>
                </div>
                <div className="benefit9">
                  <img className="check-icon14" alt="" src="/check.svg" />
                  <div className="services-off14">
                    React, React native Technology
                  </div>
                </div>
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="services-off12">Next JS{">"} Technology</div>
                </div>
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="services-off12">Full Source code</div>
                </div>
              </div>
              <div
                className="benefit-content1 mt-5 pt-4"
                style={{ visibility: "hidden" }}
              >
                <div className="check-parent">
                  <img className="check-icon10" alt="" src="/check1.svg" />
                  <b className="services-off10">Brand Guidance</b>
                </div>
              </div>
            </CardBody>
            <CardFooter className="border-0">
              <div className="d-flex justify-content-center">
                <div className="enquire-now-wrapper">
                  <b className="enquire-now">Get Offer</b>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Rootpage2;
