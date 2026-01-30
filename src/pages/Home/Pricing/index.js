import React from "react";
import "./Pricing.css";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      description: "Perfect for side projects and small startups.",
      features: [
        "Up to 1,000 MAUs",
        "Basic Analytics",
        "Community Support",
        "1 Team Member",
        "Standard Integrations",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/mo",
      description: "For growing teams that need more power.",
      features: [
        "Up to 10,000 MAUs",
        "Advanced Analytics",
        "Priority Support",
        "5 Team Members",
        "Custom Branding",
        "API Access",
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs.",
      features: [
        "Unlimited MAUs",
        "Custom Contracts",
        "Dedicated Success Manager",
        "SSO & Audit Logs",
        "On-premise Deployment",
        "SLA Guarantee",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <>
      <div className="pricing-page">
        <div className="pricing-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the plan that's right for you. No hidden fees.
          </motion.p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlight && (
                <div className="popular-tag">Most Popular</div>
              )}
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p>{plan.description}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FiCheck className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`plan-cta ${
                  plan.highlight ? "primary" : "secondary"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
