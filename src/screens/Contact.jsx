import React from "react";
import contactImage from "../assets/contactImage.jpg";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
import ShuffleText from "react-shuffle-text";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="about_hero_container">
        <img src={contactImage} alt="" />
        <div className="about_overlay"></div>
        <div className="about_hero_text">
          <h1>
            <ShuffleText content="Contact Us" />
          </h1>
          <p data-aos="fade-up" data-aos-delay="2000" data-aos-duration="600">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>
      </div>
      <div className="contact_content">
        <div className="contact_text">
          <div className="contact_title">
            <h1>GET IN TOUCH</h1>
            <p>
              Are you ready to embark on a once-in-a-lifetime journey through
              the Omo Valley? Contact us today to book your tour and let us
              create an unforgettable experience for you. Join Dinka tour
              Ethiopia and discover the magic of Ethiopia’s Omo Valley like
              never before.
            </p>
          </div>
          <div className="contact_info">
            <p>
              <FaMapMarker /> Addis Ababa, Ethiopia
            </p>
            <p>
              <FaEnvelope />
              contact@dinkatourethiopia.com
            </p>
            <p>
              <FaPhone />
              +251911558344
            </p>
          </div>
        </div>
        <div className="contact_form">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            required
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            required
          />

          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
          ></textarea>

          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
