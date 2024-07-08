import React from "react";
import Benefit from "../components/Benefit";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
const Rootpage1 = () => {
  return (
    <>
      <div className="dflexclock" style={{ width: "100%" }}>
        <div className="d-flex justify-content-center w-100">
          <div className="package-highlight">
            <Card className="service-detail">
              <CardHeader className="border-0">
                <div className="title-wrapper">
                  <div className="title">
                    <b className="title2">
                      <p className="start-up">Start-up</p>
                      <p className="design-essentials text-nowrap">
                        Design Essentials
                      </p>
                    </b>
                    <div className="layer-content">
                      <img className="layer-2-icon" alt="" src="/layer-2.svg" />
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
                <Benefit
                  check="/check.svg"
                  servicesOFF="Logo with 3 Variations"
                  check1="/check.svg"
                  servicesOFF1={`Business Cards (Front & Back)`}
                  check2="/check.svg"
                  servicesOFF2="Company letterhead"
                  check3="/check.svg"
                  servicesOFF3="Digital Thumbnails"
                  check4="/check.svg"
                  servicesOFF4="Bill book design"
                  check5="/check.svg"
                  servicesOFF5="Digital thumbnails"
                />
                <div
                  className="benefit-content1 mt-5"
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
                <div className="highlight-title">
                  <div className="highlight-title-content">
                    <div className="title-parent">
                      <b className="title2">
                        <p className="social-media">Social Media</p>
                        <p className="graphic-design">Graphic Design</p>
                      </b>
                      <div className="highlight-title-icon">
                        <img className="group-icon1" alt="" src="/group.svg" />
                      </div>
                    </div>
                  </div>
                  <img
                    className="highlight-title-child"
                    alt=""
                    src="/vector-7468.svg"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <Benefit
                  check="/check1.svg"
                  servicesOFF="30 Days Design service /Month"
                  check1="/check1.svg"
                  servicesOFF1="20 Graphic Design Post"
                  check2="/check1.svg"
                  servicesOFF2="10 Videos - Mp4, GIF"
                  check3="/check1.svg"
                  servicesOFF3="Digital Thumbnails, Logo"
                  check4="/check1.svg"
                  servicesOFF4="Content Writing for Post"
                  servicesOFF5="Revisions Accepted"
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
                />
                <div className="benefit7 mt-5 ps-1">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="benefit-child4" />
                  <div className="services-off12">Brand Guidance</div>
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
                      <p className="start-up">Festival</p>
                      <p className="design-essentials text-nowrap">
                        Wishes Design
                      </p>
                    </b>
                    <div className="layer-content">
                      <img className="layer-2-icon" alt="" src="/group1.svg" />
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
                  <div className="benefit6">
                    <img className="check-icon11" alt="" src="/check.svg" />
                    <div className="benefit-child3" />
                    <div className="services-off11">
                      50 Festival Creative Designs
                    </div>
                  </div>
                  <div className="benefit7">
                    <img className="check-icon12" alt="" src="/check.svg" />
                    <div className="benefit-child4" />
                    <div className="services-off12">10 Festival GIF</div>
                  </div>
                  <div className="benefit8">
                    <img className="check-icon13" alt="" src="/check.svg" />
                    <div className="benefit-child5" />
                    <div className="services-off13">{`Customised Names & Photos`}</div>
                  </div>
                  <div className="benefit9">
                    <img className="check-icon14" alt="" src="/check.svg" />
                    <div className="benefit-child6" />
                    <div className="services-off14">
                      Content Writing for Design
                    </div>
                  </div>
                  <div className="benefit10">
                    <img className="check-icon15" alt="" src="/check.svg" />
                    <div className="benefit-child7" />
                    <div className="services-off15">Monthly Newsletters</div>
                  </div>
                </div>
                <div
                  className="benefit-content1 mt-5 pt-3"
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
      </div>
    </>
  );
};

export default Rootpage1;
