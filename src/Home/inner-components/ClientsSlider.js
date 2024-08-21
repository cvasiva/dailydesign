import React from "react";
import oracleIcon from "../Homeassets/assets/home/clients-logos/oracle.png";
import hdfcergoIcon from "../Homeassets/assets/home/clients-logos/hdfcergo.png";
import indiGridIcon from "../Homeassets/assets/home/clients-logos/indi-grid.png";
import kyndrylIcon from "../Homeassets/assets/home/clients-logos/kyndryl.png";
import swiggyIcon from "../Homeassets/assets/home/clients-logos/swiggy.png";
import tataIcon from "../Homeassets/assets/home/clients-logos/tata.png";
import zomatoIcon from "../Homeassets/assets/home/clients-logos/zomato.png";

const ClientsLogos = [
  {
    logo: oracleIcon,
    alt: "Oracle",
    year: "2019",
    width: 161,
    height: 67,
  },
  {
    logo: hdfcergoIcon,
    alt: "HDF Cergo",
    year: "2022",
    width: 79,
    height: 61,
  },
  {
    logo: indiGridIcon,
    alt: "IndiGrid",
    year: "2021",
    width: 209,
    height: 57,
  },
  {
    logo: kyndrylIcon,
    alt: "Kyndryl",
    year: "2022",
    width: 168,
    height: 51,
  },
  {
    logo: swiggyIcon,
    alt: "Swiggy",
    year: "2021",
    width: 198,
    height: 60,
  },
  {
    logo: tataIcon,
    alt: "Tata",
    year: "2019",
    width: 138,
    height: 65,
  },
  {
    logo: zomatoIcon,
    alt: "Zomato",
    year: "2020",
    width: 188,
    height: 52,
  },
];

const ClientsSlider = () => {
  return (
    <div className="client-slider-main-wrapper">
      <div className="client-slider-inner-wrapper">
        {ClientsLogos.map((client, index) => (
          <div key={index} className="clientSliderItem">
            <p className="worked-year">{client.year}</p>
            <img
              src={client.logo}
              style={{ marginTop: 30 }}
              width={client.width}
              height={client.height}
              alt={client.alt}
            />
          </div>
        ))}
        {ClientsLogos.map((client, index) => (
          <div key={index} className="clientSliderItem">
            <p className="worked-year">{client.year}</p>
            <img
              src={client.logo}
              style={{ marginTop: 30 }}
              width={client.width}
              height={client.height}
              alt={client.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSlider;
