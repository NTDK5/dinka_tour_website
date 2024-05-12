import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Header = ({ isHome }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarStyle = {
    fontFamily: "Astonpoliz",
    position: "sticky",
    top: 0,
    width: "100%",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // To push the menu items to the right
    zIndex: 10000,
    backgroundColor: isHome
      ? scrollPosition > window.innerHeight
        ? "white"
        : "transparent"
      : "white",
    transition: "background-color 0.3s ease",
  };
  const hamburger_menu = {
    color: isHome
      ? scrollPosition > window.innerHeight
        ? "black"
        : "white"
      : "black",
  };

  const navbarLinkStyle = {
    color: isHome
      ? scrollPosition > window.innerHeight
        ? "black"
        : "white"
      : "black",
  };

  const toggleMobileMenu = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (linkRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener to detect clicks outside the menu
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav style={navbarStyle}>
        <div className="nav" ref={menuRef}>
          <Link to={"/"}>
            <img src={logo} alt="" height={30} className="logo" />
          </Link>
          {/* Hamburger menu icon */}
          <div
            className="hamburger_menu"
            style={hamburger_menu}
            onClick={(event) => toggleMobileMenu(event)}
          >
            {isMobileMenuOpen ? <FaWindowClose /> : <FaBars />}
          </div>

          {/* Menu items */}
          <div
            ref={linkRef}
            className={`${isMobileMenuOpen ? "open" : "nav_link "}`}
          >
            <NavLink
              to={"/"}
              style={isMobileMenuOpen ? {} : navbarLinkStyle}
              activeClassName="active"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              style={isMobileMenuOpen ? {} : navbarLinkStyle}
              activeClassName="active"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to={"/destinations"}
              style={isMobileMenuOpen ? {} : navbarLinkStyle}
              activeClassName="active"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destination
            </NavLink>
            <NavLink
              to={"/tours"}
              style={isMobileMenuOpen ? {} : navbarLinkStyle}
              activeClassName="active"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tour
            </NavLink>
            <NavLink
              to={"/contact"}
              style={isMobileMenuOpen ? {} : navbarLinkStyle}
              activeClassName="active"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
