/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import "./CTA.css";
import { FaChevronDown } from "react-icons/fa";
import porsondd from "../Images/porsondd.png"
const CTA = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const title = [
    {
      id: 1,
      title:
        "1. What makes Daily Design different from other leading UI UX design agencies?",
      description:
        "At Daily design, we've carved a unique niche in the UI UX domain, setting ourselves apart with a combination of creativity, client-centric approach, and strategic insight. Our reputation is built on consistently delivering standout UI UX, branding, product design, and web design that not only looks great but also drives brand growth. For every project we undertake, a dedicated team leader ensures that our solutions are tailored and resonate with the target audience. Our in-house experts bring their diverse skills to the table, guaranteeing designs that captivate and foster lasting relationships. Dive deeper into our offerings and discover the Daily design difference.",
    },
    {
      id: 2,
      title: "2. How does UX Design process works?",
      description:
        "Our UX journey starts with understanding your project and its goals. Here's a brief overview:  Discovery & Research: We dive deep to understand your brand, end-users, and project objectives, using techniques like interviews, surveys, and market analysis. Competitive Analysis: We review your industry landscape, identifying trends and seeing where you stand amongst competitors. Solution Crafting: Our creative team sketches ideas, mapping out user flows and journeys. Design & Collaboration: This is where UI, UX, Product Design, and Branding come together. We design sitemaps, wireframes, prototypes, and collaborate with you for feedback. Finalizing & Transition: Once the design is approved, we can move towards Web Design and, if needed, transition the design to our development team for a seamless handoff. Our commitment? A tailored approach, with tools and software that ensure smooth collaboration and a design that resonates with your brand and users.",
    },
    {
      id: 3,
      title: "3. How much does a design project at your agency cost?",
      description:
        "Every design project is unique, and so is its pricing! Instead of one-size-fits-all packages, we custom-craft pricing plans based on each project's distinct needs, ranging from UI/UX, Branding, Product Design to Web design. Design Monks can help your startup by providing expert UX/UI design, branding, and digital strategy to ensure your product stands out in the market. Your project's cost hinges on several factors, like its scope, duration, specific requirements, and the expertise involved. Unlike other agencies that focus on hourly rates, we factor in the project's holistic demands, including the dedicated team's expertise. Prices usually fall between ₹800 and ₹10,000, though it's always best to reach out for an exact quote. Got questions or ready to dive in? Drop us an email or give us a call! We also offer a detailed project proposal after understanding your needs. Whether you're a budding startup or a seasoned enterprise, our flexible pricing adjusts to match your goals. 🚀",
    },
    {
      id: 4,
      title: "4. How can Daily Design support my startup?",
      description:
        "At Daily Design, we don't just offer services; we build partnerships. Especially with startups! Why? Because we believe in the fresh, disruptive ideas young entrepreneurs bring to the table. Here's how we're committed to making your dream a reality: Specialized Expertise: We're a powerhouse in UI/UX, Branding, Product Design, and Web Design. This means your startup won't just fit in; it will stand out and resonate with its audience. Tailored Solutions: Every startup is unique, and so are our design solutions. We ensure they're aligned with your brand's voice and vision. Trust & Security: Your idea is your biggest asset. We guarantee confidentiality, ensuring your intellectual property remains just that – yours. Unlimited Revisions: We're not satisfied until you are. We offer unlimited revisions until your vision matches the outcome. No compromises. Transparent Pricing with a Free Quote: Before we embark on our creative journey, we'll provide a free quote. And for startups that truly captivate us, we're always open to budget-friendly packages. Your Success is Our Pride: We've been privileged to help many startups transition from nascent ideas to industry leaders. And we're eager to be part of your success story! Dream big, and let Daily Design handle the rest. Got more questions or ideas to share? We're just an email away!",
    },
    {
      id: 5,
      title:
        "5. Can you help us redesign our app, website, or enterprise/B2B software?",
      description:
        "Of course! At Daily design, we specialize in breathing new life into digital products. Whether you're looking to rejuvenate a website, app, or B2B software, we've got the expertise to make it shine. Our core services encompass UI/UX, Branding, Product Design, and Web Design. Redesigning isn't just about a fresh coat of paint; it's about enhancing user experience, functionality, and aligning with brand identity. This involves in-depth user research, prototyping, wireframing, and iterative testing to ensure the end product meets and exceeds expectations. And while revamping existing digital assets can sometimes be as intensive as creating them from scratch, we're adept at navigating these complexities efficiently. Design Design is dedicated to delivering designs that not only look good but work seamlessly. Reach out to us, and let's start your digital transformation journey together.",
    },
    {
      id: 6,
      title: "6. How soon can I expect my designs from Daily Design?",
      description:
        "Expect your designs in 2 to 4 business days, depending on the complexity. Simple tasks, like graphic designs, can be ready within a day, while intricate ones like full-page web designs might take up to 3 days. At Daily design, we prioritize quality and custom-fit all designs to your needs, avoiding generic templates. Remember, great design takes time, but we always aim for speedy deliveries without compromising quality. We're here to make sure your UI UX, Branding, Product Design, and Web design needs are met with excellence!",
    },
    {
      id: 7,
      title: "7. What if the design isn't quite right for me?",
      description:
        "At Daily Design, we believe in getting it just right. That's why we proudly offer unlimited revisions on our UI/UX, branding, product, and web design services. If the initial draft isn't exactly what you had in mind, don't fret! We're here to tweak, refine, and revise until it's absolutely perfect for you. Your satisfaction is paramount, and we won't stop until we achieve design nirvana together! 🎨✨",
    },
    // {
    //   id: 8,
    //   title: "What if the design isn't quite right for me?",
    //   description:
    //     "We offer revision rounds to ensure the final design meets your expectations. Your feedback is crucial to our process.",
    // },
    // {
    //   id: 9,
    //   title:
    //     "I've heard Design Monks are design wizards. But do you also work with WordPress, create eCommerce sites, and develop apps?",
    //   description:
    //     "Yes, in addition to design, we offer development services for WordPress, eCommerce sites, and mobile apps to provide a comprehensive solution.",
    // },
  ];

  const [toggle, setToggle] = useState({});

  useEffect(() => {
    if (!toggle) {
      var val = {};
      title.map((v) => (val[v.id] = false));
      setToggle(!val);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const handledropdown = (item) => {
    setToggle({ ...toggle, [item.id]: !toggle[item.id] });
  };

  return (
    toggle && (
      <section className="c-t-a">
        <div className="section5">
          <div className="divprimary-cta-deco-wrap8">
            <div className="divprimary-cta-deco-line8" />
          </div>
          <div className="divprimary-cta-deco-wrap9">
            <div className="divprimary-cta-deco-line9" />
          </div>
          <div className="divprimary-cta-gradient4" />
          <div className="eee9d27c1241a14134c1f4-primary8">
            <div className="my-name-is-aravind-your-desig-parent3">
              <div className="my-name-is-container14">
                <span className="my-name-is-container15">
                  <p className="my-name-is8">I'm Aravind CT,</p>
                  <p className="your-design-manager-will-ans8">
                    <span className="your8">{`Your  `}</span>
                    <b className="design-manager8">Design Manager</b>
                    <span className="will-answer-all8">
                      {" "}
                      will answer all your questions.
                    </span>
                  </p>
                </span>
              </div>
              <a
                href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask questions via WhatsApp"
                style={{ textDecoration: "none" }}
              >
                <button className="ask-button">
                  <div className="ask-questions-text">Ask Questions</div>
                  <img
                    className="whatsapp-icon"
                    alt="WhatsApp Icon"
                    src="/svg-2@2x.png"
                  />
                </button>
              </a>
              <img
                className="container-icon9"
                alt="container"
                src="/container-1@2x.png"
              />
            </div>
          </div>
          <div className="eee9d27c1241a14134c1f4-primary9">
            <img
              className="image-icon15"
              alt="container"
              src="/image-6@2x.png"
            />
            <div className="hero-content">
              <div className="hero-inner-container-parent">
                <div className="hero-inner-container">
                  <div className="container-frame">
                    <img
                      className="container-icon10"
                      alt="container"
                      src={porsondd}
                    />
                  </div>
                  <div className="my-name-is-container16">
                    <p className="my-name-is9">I'm Aravind CT,</p>
                    <p className="your-design-manager-will-ans9">
                      <span className="your9">{`Your  `}</span>
                      <b className="design-manager9">Design Manager</b>
                      <span className="will-answer-all9">
                        {" "}
                        will answer all your questions.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="ask-button-container">
                    <a
                      href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ask questions via WhatsApp"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="link19">
                        <div className="ask-questions10">Ask Questions</div>
                        <div className="ask-button-icon-container">
                          <img
                            className="svg-icon15"
                            alt="container"
                            src="/svg-3@2x.png"
                          />
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img className="image-icon16" alt="logo" src="/image-7@2x.png" />
          </div>
        </div>
        <div className="faq-title">
          <h1 className="heading-2">Frequently asked question</h1>
          <div className="faq-container">
            <div className="faq-list">
              {title.map((item, index) => (
                <div key={index} className="background4 p-4">
                  <div className="faq-question-last">
                    <div className="what-makes-design">{item.title}</div>
                    <div className="faq-icon-last-container">
                      <div
                        className="symbol15"
                        onClick={() => handledropdown(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <FaChevronDown />
                      </div>
                    </div>
                  </div>
                  {toggle[item.id] && (
                    <div className="at-design-monks-container">
                      <p className="at-design-monks">{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default CTA;
