import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ClientsSlider from "./inner-components/ClientsSlider";

const SectionTwo = () => {
  return (
    <section className="section-two-wrapper" style={styles.sectionWrapper}>
      <div className="testimonial-clients-wrapper" style={styles.container}>
        <div className="main-header" style={styles.mainHeader}>
          <h2 style={styles.heading}>
            We Delivered our <br /> Promises,{" "}
            <span style={styles.gradientText}>
              <span style={styles.nextForYou}>Next For You?</span>
            </span>
          </h2>
          <a
            href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <button style={styles.button}>
              Talk with Team
              <FaArrowRight style={styles.icon} />
            </button>
          </a>
        </div>

        {/* <div className="testimonial-wrapper" style={styles.testimonialWrapper}>
          <Testimonials />
        </div> */}

        <div className="main-header-2" style={styles.mainHeader2}>
          <h2 style={styles.heading}>
            10+ Years of{" "}
            <span style={styles.gradientText}>
              <span style={styles.experience}>Experience</span>
            </span>{" "}
            with Big Brands
          </h2>
        </div>

        <div className="clients-slider" style={styles.clientsSlider}>
          <ClientsSlider />
        </div>
      </div>
    </section>
  );
};

const styles = {
  sectionWrapper: {
    padding: "50px 0",
  },
  container: {
    margin: "0 auto",
    padding: "0 20px",
  },
  mainHeader: {
    textAlign: "center",
    marginBottom: "50px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
  },
  gradientText: {
    background: "linear-gradient(90deg, #f093fb 0%, #f5576c 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  nextForYou: {
    fontSize: "2.5rem",
  },
  link: {
    display: "inline-block",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  icon: {
    marginLeft: "10px",
  },
  testimonialWrapper: {
    marginBottom: "50px",
  },
  mainHeader2: {
    textAlign: "center",
    marginBottom: "50px",
  },
  experience: {
    fontSize: "2.5rem",
  },
  clientsSlider: {
    marginBottom: "50px",
  },
};

export default SectionTwo;
