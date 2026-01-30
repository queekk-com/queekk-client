import React from "react";
import "./Head.css";
import headLogo from "../../../assets/svgs/logo.svg";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

const Header = () => {
  return (
    <header className="land__Head">
      {/* Background Elements */}
      <img src={headLogo} alt="" className="floating-logo" />
      <img src={headLogo} alt="" className="floating-logo" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pill-badge"
        >
          <span style={{ marginRight: "8px" }}>✨</span> New: AI-Powered
          Insights
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Instant Analytics for <br />
          <span className="highlight">Modern Teams</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stop guessing. Start knowing. Queekk provides real-time data
          visualization and actionable insights to help you scale faster than
          ever before.
        </motion.p>

        <motion.div
          className="headBtn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button>
            Get Started <FiArrowRight style={{ marginLeft: "8px" }} />
          </button>
          <button>
            <FiPlay style={{ marginRight: "8px" }} /> Watch Demo
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
