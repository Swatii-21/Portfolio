import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:swati200btcse23@igdtuw.ac.in" data-cursor="disable">
                 swati200btcse23@igdtuw.ac.in
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917042100252" data-cursor="enable">
                +91 7042100252
              </a>
            </p>
          </div>
          <div className="contact-box">
            {/* <h4>Social</h4>
            <a
              href="https://github.com/Swatii-21"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href=" https://www.linkedin.com/in/swati-singh-6031a4292/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href=" https://x.com/Swati_2104?t=5YRIxLbRN4zMsTu6parktg&s=09 "
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              //href="https://www.instagram.com"
              //target="_blank"
              //data-cursor="disable"
              //className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a> */}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span> Swati  Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
