import React from "react";
import { Link } from "react-router-dom"; // Import from react-router-dom
import dailyDesignLogoFooter from "./Homeassets/assets/footer/dailydesign-footer.svg"; // Adjust path based on your project structure
// import { Sora, Manrope } from "next/font/google"; // Keep fonts as is if you're using Google Fonts
import { FaDribbble, FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

// const sora = Sora({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-sora",
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-manrope",
// });

const servicesLink = [
  { label: "Web UI UX Design", path: "/", category: "development" },
  { label: "Web Development", path: "/", category: "development" },
  { label: "CMS Websites", path: "/", category: "development" },
  { label: "React, NextJs", path: "/", category: "development" },
  { label: "Website uplift", path: "/", category: "development" },
  { label: "SM Creatives", path: "/", category: "creatives" },
  { label: "Video Creation", path: "/", category: "creatives" },
  { label: "Pitch Deck", path: "/", category: "creatives" },
  { label: "Print Branding", path: "/", category: "creatives" },
  { label: "UI UX Design", path: "/", category: "designs" },
  { label: "Customised App Design", path: "/", category: "designs" },
  { label: "App Uplift Service", path: "/", category: "designs" },
];

const socialLink = [
  { icon: <FaDribbble className="text-white text-xl" />, path: "/" },
  { icon: <FaBehance className="text-white text-xl" />, path: "/" },
  { icon: <FaFacebookF className="text-white text-xl" />, path: "/" },
  { icon: <RiTwitterXLine className="text-white text-xl" />, path: "/" },
  { icon: <FaInstagram className="text-white text-xl" />, path: "/" },
  { icon: <FaLinkedinIn className="text-white text-xl" />, path: "/" },
];

const Footer = () => {
  return (
    <footer className="dailydesign__main_footer">
      <div className="container">
        <div className="top-footer-part">
          {/* Footer logo */}
          <div className="footer-logo">
            <Link to="/">
              <img
                src={dailyDesignLogoFooter}
                alt="dailydesign-logo-footer"
                width={216}
                height={36}
                className="footer-logo-image"
              />
            </Link>
            <p className={` sub-text mob-footer-sub-text`}>
              CRAFTING DIGITAL DREAMS
            </p>
          </div>

          {/* Social media links */}
          <div className="social-links-wrapper">
            {socialLink.map((item, index) => (
              <div className="social-icon-list" key={index}>
                <Link to={item.path}>
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="middle-footer-part">
          {/* Footer subtitle */}
          <div className="footer-logo-sub-text">
            <p className={` sub-text`}>
              CRAFTING DIGITAL DREAMS
            </p>
          </div>
          {/* Footer main links */}
          <div className="footer-main-links-wrapper">
            {["development", "creatives", "designs"].map((category) => (
              <ul className="services-list" key={category}>
                {servicesLink
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <li
                      className={`service-item-list`}
                      key={index}
                    >
                      <Link to={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="bottom-footer-part">
          <p className={` copyright-text`}>
            All Rights Reserved Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
