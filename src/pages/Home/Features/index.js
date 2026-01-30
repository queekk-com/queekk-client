import React from "react";
import "./Features.css";
import {
  FiMessageSquare,
  FiCpu,
  FiShield,
  FiCode,
  FiBarChart2,
  FiUsers,
  FiGlobe,
  FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";

const Features = () => {
  const features = [
    {
      icon: <FiMessageSquare />,
      title: "Real-time Messaging",
      description:
        "Instant message delivery with typing indicators, read receipts, and online presence.",
    },
    {
      icon: <FiCpu />,
      title: "AI Automation",
      description:
        "Automate responses and route conversations intelligently with our advanced AI engine.",
    },
    {
      icon: <FiShield />,
      title: "Enterprise Security",
      description:
        "End-to-end encryption, SOC2 compliance, and granular permission controls.",
    },
    {
      icon: <FiCode />,
      title: "Developer First",
      description:
        "Powerful SDKs and APIs that let you build exactly what you need in minutes.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Deep Analytics",
      description:
        "Gain insights into support performance, response times, and customer satisfaction.",
    },
    {
      icon: <FiUsers />,
      title: "Team Collaboration",
      description:
        "Internal notes, mentions, and shared inboxes to keep your team in sync.",
    },
    {
      icon: <FiGlobe />,
      title: "Multi-language",
      description:
        "Automatically translate conversations to support customers globally.",
    },
    {
      icon: <FiZap />,
      title: "Lightning Fast",
      description:
        "Optimized for speed with global edge network ensuring low latency everywhere.",
    },
  ];

  return (
    <>
      <div className="features-page">
        <div className="features-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Features built for scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to build world-class support experiences.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;
