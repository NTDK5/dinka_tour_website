import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaMapMarker,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_row">
          <div className="footer_logo">
            <img src={logo} alt="logo" />
            <div className="email_input_container">
              <input
                className="email_input"
                placeholder="Enter your email"
                required
              />
              <button className="email_subscribe_button">Subscribe</button>
            </div>
          </div>
          <div className="footer_contact">
            <h3> Contact</h3>
            <p>
              <FaMapMarker /> Addis Ababa, Ethiopia
            </p>
            <p>
              <FaEnvelope /> info@dinkatourethiopia.com
            </p>
            <p>
              <FaPhone />
              251911558344
            </p>
          </div>
          <div className="footer_links">
            <h3>Links</h3>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Destinations</Link>
            <Link to={"/"}>Tours</Link>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/"}>Gallery</Link>
          </div>
          <div className="footer_links">
            <h3>Tours</h3>
            <Link to={"/"}>Omo valley</Link>
            <Link to={"/"}>Harar</Link>
            <Link to={"/"}>Bale MOuntains</Link>
            <Link to={"/"}>Arbaminch</Link>
            <Link to={"/"}>Lalibela</Link>
            <Link to={"/"}>Gallery</Link>
          </div>
        </div>
        <div className="footer_bottom">
          <p>© Copyright 2021, All Rights Reserved</p>
          <div className="socials">
            <FaFacebook />
            <FaInstagram />
            <FaTelegram />
            <FaTiktok />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
