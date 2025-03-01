import React from "react";
import { useParallax } from "react-scroll-parallax";

const Contact = ({ data: { label, heading, description, button } }) => {
  const { ref } = useParallax({
    easing: "easeIn",
    translateX: [-50, 0],
  });
  return (
    <div className="ai-contact">
      <div
        ref={ref}
        className="ai-contact-zebra-img"
        style={{
          backgroundImage: `url(${"/assets/arrow-sample.svg"})`,
        }}
      ></div>
      <div className="ai-contact-box">
        <div className="container flex-center flex-column">
          <div className="ai-contact-box-width">
            <div className="ai-contact-label">{label}</div>
            <div className="ai-contact-title">{heading} </div>
            <div className="ai-contact-text">{description}</div>
            <div className="ai-contact-button">
              <button onClick={button?.onClick} className="ai-button">
                {button?.label}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
