/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ballImg from './Homeassets/assets/home/ball.png';
import starImg from './Homeassets/assets/home/star.png';
import dailyDesignLogo from './Homeassets/assets/header/dailydesign_logo.svg';
import correctIcon from './Homeassets/assets/home/comparison-icon/correct.svg';
import wrongIcon from './Homeassets/assets/home/comparison-icon/wrong.svg';

const comparison_texts = [
  {
    label: 'Individual Design Manager',
  },
  {
    label: 'Award-Winning Designs',
  },
  {
    label: '24/7 Support',
  },
  {
    label: '100% Cost-Effective Pricing in Industry',
    bold: true,
  },
  {
    label: 'Personalized Attention',
  },
  {
    label: 'Proven High ROI Designs',
  },
  {
    label: 'In house Designers with 12+ Years of Experience',
  },
  {
    label: 'Full Stack Developers with 10+ Years of Experience',
  },
];

const SectionThree = () => {
  return (
    <section className="comparison-main-section">
      <img
        src={ballImg}
        alt="ball Image"
        width={102}
        height={198}
        className="ball-image"
      />

      <img
        src={starImg}
        alt="star Image"
        width={140}
        height={224}
        className="star-image"
      />

      <div className="container mob-comparison-main-header">
        <h2 className="heading">
          What makes Daily Design <br /> the{' '}
          <span className="gradient-text">
            <span>best for Business?</span>
          </span>
        </h2>
      </div>

      <div className="comparison-box">
        <div className="comparison-main-header">
          <h2 className="heading">
            What makes Daily Design <br /> the <span>best for Business?</span>
          </h2>
          <div className="logo">
            <img
              src={dailyDesignLogo}
            //   width={192}
            //   height={30}
            className='dailydesignlogo'
              alt="dailydesign-logo"
            />
          </div>
          <div className="others-works-header">
            <h3 className="comp-header">Others</h3>
          </div>
        </div>

        <div className="comparison-main-content-box">
          {comparison_texts.map((item, index) => (
            <div key={index} className="comparision-table-row">
              <p className={`texts ${item.bold ? 'font-bold' : ''}`}>
                {item.label}
              </p>
              <div className="logo">
                <img
                  src={correctIcon}
                  width={33}
                  height={33}
                  alt="correct-icon"
                />
              </div>
              <div className="others-works-content">
                <img
                  src={wrongIcon}
                  width={33}
                  height={33}
                  alt="wrong-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center pt-4">
        <p className="note-text">
          At Design Monks, we&apos;ve carved a unique niche in the UI UX domain,
          setting ourselves apart with a combination of creativity,
          client-centric approach, and strategic insight. Our reputation is
          built on consistently delivering standout UI UX, branding, product
          design, and web design that not only looks great but also drives brand
          growth.
        </p>
      </div>
    </section>
  );
};

export default SectionThree;
