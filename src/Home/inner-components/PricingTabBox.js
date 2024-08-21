/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { Button } from "reactstrap";
import checkCircle from "../Homeassets/assets/home/pricing/check-circle-bullet.png";
import checkCircleBlack from "../Homeassets/assets/home/pricing/check-circle-black.png";

function PricingTabBox({ pricingContent }) {
  return (
    <div className="pricing-box-wrapper">
      {pricingContent.map((pricingItem, index) => (
        <div
          key={index}
          className={`pricing-box-item ${
            pricingItem?.isGold ? "specialOne" : ""
          }`}
        >
          <div className="pricing-box-inner-item">
            <div className="pricing-inner-box-wrapper">
              <img
                src={pricingItem.image}
                alt={`${pricingItem.title} Image`}
                width={90}
                height={90}
                style={{ objectFit: "cover" }}
              />
              <h2 className="pricing-name">{pricingItem.title}</h2>
              <div className="pricing-capsule">
                <span className="text">{pricingItem.offer}</span>
                <IoMdInformationCircle className="pricing-icon" />
              </div>
              <Button className="pricing-button">Enquire Now</Button>
              <ul className="pricing-offers-list-wrapper">
                {pricingItem.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing-offers-list-items">
                    <img
                      src={pricingItem?.isGold ? checkCircleBlack : checkCircle}
                      alt="Check Circle Icon"
                      width={20}
                      height={20}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PricingTabBox;
