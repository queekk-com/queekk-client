import React, { useState } from "react";
import "./Nav.css";
import logoImg from "../assets/svgs/logo.svg";
import { NavLink, useNavigate, Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiBookOpen,
  FiPlayCircle,
  FiLayers,
  FiCommand,
  FiSettings,
  FiTool,
  FiHelpCircle,
} from "react-icons/fi";

const Nav = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openDoc, setOpenDoc] = useState(false);
  const navigate = useNavigate();

  const handleSideBar = () => setOpenSideBar(!openSideBar);
  const toggleDoc = () => setOpenDoc(!openDoc);

  return (
    <nav>
      {/* Logo Section */}
      <div className="navLogo" onClick={() => navigate("/")}>
        <div className="logo__container">
          <img src={logoImg} alt="Queekk Logo" />
        </div>
        <h3>
          Queekk<span>.</span>
        </h3>
      </div>

      {/* Navigation Links */}
      <ul className={openSideBar ? "navUl active" : "navUl"}>
        <div onClick={handleSideBar} className="closeBar">
          <FiX />
        </div>

        {/* Docs Dropdown */}
        <li
          className="doc"
          onMouseEnter={() => setOpenDoc(true)}
          onMouseLeave={() => setOpenDoc(false)}
        >
          <div className="document" onClick={toggleDoc}>
            <span>Documentation</span>
            <FiChevronDown
              style={{
                transform: openDoc ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </div>

          <div className={openDoc ? "doc-links active" : "doc-links"}>
            <div className="doc-list" onClick={() => setOpenSideBar(false)}>
              <NavLink to="/documentation/introduction">
                <FiBookOpen className="doc-icon" />
                <span>Introduction</span>
              </NavLink>
            </div>
            <div className="doc-list" onClick={() => setOpenSideBar(false)}>
              <NavLink to="/documentation/getting-started">
                <FiPlayCircle className="doc-icon" />
                <span>Getting Started</span>
              </NavLink>
            </div>
            <div className="doc-list" onClick={() => setOpenSideBar(false)}>
              <NavLink to="/documentation/integration">
                <FiLayers className="doc-icon" />
                <span>Integration</span>
              </NavLink>
            </div>
            <div className="doc-list" onClick={() => setOpenSideBar(false)}>
              <NavLink to="/documentation/usage">
                <FiCommand className="doc-icon" />
                <span>Usage</span>
              </NavLink>
            </div>
            <div className="doc-list" onClick={() => setOpenSideBar(false)}>
              <NavLink to="/documentation/customization">
                <FiSettings className="doc-icon" />
                <span>Customization</span>
              </NavLink>
            </div>
            <div className="doc-list" onClick={() => setOpenSideBar(false)}>
              <NavLink to="/documentation/troubleshooting">
                <FiTool className="doc-icon" />
                <span>Troubleshooting</span>
              </NavLink>
            </div>
            <div className="doc-list" onClick={() => setOpenSideBar(false)}>
              <NavLink to="/documentation/faqs">
                <FiHelpCircle className="doc-icon" />
                <span>FAQs</span>
              </NavLink>
            </div>
          </div>
        </li>

        <li>
          <NavLink to="/features" onClick={() => setOpenSideBar(false)}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={() => setOpenSideBar(false)}>
            Pricing
          </NavLink>
        </li>

        {/* Mobile Only Actions */}
        <div className="logOrSign side">
          <Link
            to="/login"
            className="btn-login"
            onClick={() => setOpenSideBar(false)}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="btn-signup"
            onClick={() => setOpenSideBar(false)}
          >
            Get Started
          </Link>
        </div>
      </ul>

      {/* Desktop Right Side Actions */}
      <div className="logAndSearch">
        <div className="logOrSign">
          <Link to="/login" className="btn-login">
            Log in
          </Link>
          <Link to="/signup" className="btn-signup">
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu Trigger */}
      <div onClick={handleSideBar} className="side">
        <FiMenu />
      </div>
    </nav>
  );
};

export default Nav;
