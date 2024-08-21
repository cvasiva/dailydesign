/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import pricingBg from "./Homeassets/assets/home/pricing/pricing_bg.png";
// import { motion } from "framer-motion";
// import { Tabs } from "/inner-components/pricing/PricingTab";
// import PricingTabBox from "/inner-components/pricing/PricingTabBox";
import startupEss from "./Homeassets/assets/home/pricing/website/startup_essent.png";
import festiveWishes from "./Homeassets/assets/home/pricing/website/festival_wishes.png";
import graphicDesign from "./Homeassets/assets/home/pricing/website/graphicDesign.png";
import figma from "./Homeassets/assets/home/pricing/web-dev/figma.png";
import figmaBlack from "./Homeassets/assets/home/pricing/apps/figma-black.png";
import app from "./Homeassets/assets/home/pricing/apps/app.png";
import wix from "./Homeassets/assets/home/pricing/web-dev/wix.png";
import code from "./Homeassets/assets/home/pricing/web-dev/code.png";
import PricingTabBox from "./inner-components/PricingTabBox";
import { Tabs } from "./inner-components/PricingTab";

const graphicContent = [
  {
    image: startupEss,
    title: "Start-up Essentials",
    offer: "You save $24.00 a year",
    features: [
      "Business cards (Front & Back)",
      "Logo with 3 variations",
      "Company letterhead",
      "Digital thumbnails",
      "Bill book design",
    ],
  },
  {
    isGold: true,
    image: graphicDesign,
    title: "SM Graphic Design",
    offer: "You save $24.00 a year",
    features: [
      "30 Days Design service /Month",
      "20 Graphic Design Post",
      "10 Videos - Mp4, GIF",
      "Digital Thumbnails, Logo",
      "Content Writing for Post",
      "Revisions Accepted",
      "Brand Guidance",
    ],
  },
  {
    image: festiveWishes,
    title: "Festival Wishes",
    offer: "You save $24.00 a year",
    features: [
      "50 Festival Creative Designs",
      "Customized Names & Photos",
      "Customized Content Writing",
      "Monthly Newsletters",
      "10 Festival GIF",
    ],
  },
];

const webDevContent = [
  {
    image: figma,
    title: "Figma Design & Prototype ",
    offer: "You save $24.00 a year",
    features: [
      "Figma website design",
      "Animations & prototype",
      "Premium Stock images",
      "Premium Stock GIF",
      "SEO Content Writing",
      "Revisions Accepted",
    ],
  },
  {
    isGold: true,
    image: wix,
    title: "Design + Development",
    offer: "You save $24.00 a year",
    features: [
      "Design + Development",
      "Edit your site on your own",
      "SEO content writing ",
      "Revisions accepted",
      "1 Year Maintenance",
      "Premium images (upto 100 images)",
      "Premium videos (upto 20 videos)",
    ],
  },
  {
    image: code,
    title: "Coded Website Design + <Dev.>",
    offer: "You save $24.00 a year",
    features: [
      "Full website development",
      "Full Figma design ",
      "React, React native Technology",
      "Next JS> Technology",
      "Futuristic animations",
      "Full Source code",
    ],
  },
];

const apps = [
  {
    isGold: true,
    image: figmaBlack,
    title: "Figma Design & Prototype",
    offer: "You save $24.00 a year",
    features: [
      "Business research &  analysis",
      "User research Case study",
      "High-end Figma design ",
      "Customized icons + graphics",
      "Customized cards, UI ",
      "Revision until satisfied",
      "1 Year design updates",
      "Unique Style Designs",
    ],
  },
  {
    image: app,
    title: "App Design + <Development>",
    offer: "You save $24.00 a year",
    features: [
      "Business research &  analysis",
      "User research Case study",
      "High-end Figma design",
      "Customized icons + graphics",
      "1 Year maintenance",
      "Revision until satisfied",
    ],
  },
];

let tabs = [
  {
    value: "graphic-design",
    title: "Graphic Design",
    content: <PricingTabBox pricingContent={graphicContent} />,
  },
  {
    value: "web-dev-service",
    title: "Website Development Service",
    content: <PricingTabBox pricingContent={webDevContent} />,
  },
  {
    value: "app-service",
    title: "APP / SAAS Development Service",
    content: <PricingTabBox pricingContent={apps} />,
  },
];

const SectionPricing = () => {
  return (
    <section className="pricing-wrapper">
      <img
        src={pricingBg}
        alt="pricing Image"
        width="100%"
        className="bg-images-pricing"
      />
      <div className="container pricing-title-wrapper">
        <h2 className="title">Our Creative Packages</h2>
        <p className="subtitle">Have Supported 700+ Corporates</p>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
};

export default SectionPricing;
