import React, { useState } from "react";
import "./Main.css";
import { motion } from "framer-motion";
import {
  FiZap,
  FiShield,
  FiGlobe,
  FiCheck,
  FiLayout,
  FiCpu,
} from "react-icons/fi";

const Main = () => {
  const [activeTab, setActiveTab] = useState("html");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="land__Main">
      {/* Trusted By Section */}
      <motion.div
        className="trusted-by"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p>Trusted by innovative teams</p>
        <div className="logo-marquee">
          <span>ACME CORP</span>
          <span>TECHFLOW</span>
          <span>NEXUS</span>
          <span>VELOCITY</span>
          <span>QUANTUM</span>
        </div>
      </motion.div>

      {/* Bento Grid Benefits */}
      <div className="bento-grid">
        <motion.div
          className="bento-item large"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bento-icon">
            <FiZap />
          </div>
          <div>
            <h3>Lightning Fast Performance</h3>
            <p>
              Optimized for speed. Queekk ensures your data is delivered in
              milliseconds, not seconds. Experience the difference of true
              real-time processing.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bento-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bento-icon">
            <FiShield />
          </div>
          <div>
            <h3>Bank-Grade Security</h3>
            <p>
              Your data is encrypted at rest and in transit. We prioritize
              security so you can focus on growth.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bento-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bento-icon">
            <FiGlobe />
          </div>
          <div>
            <h3>Global Edge Network</h3>
            <p>
              Deploy globally in seconds. Our edge network ensures low latency
              for users everywhere.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bento-item large"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bento-icon">
            <FiLayout />
          </div>
          <div>
            <h3>Intuitive Dashboard</h3>
            <p>
              Visualize your data with our beautiful, customizable dashboard.
              Track metrics, monitor health, and get insights at a glance.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Feature Spotlight */}
      <div className="feature-spotlight">
        <motion.div
          className="feature-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2>Developer First API</h2>
          <p>
            Built by developers, for developers. Our API is intuitive,
            well-documented, and easy to integrate into any stack.
          </p>
          <ul className="feature-list">
            <li>
              <FiCheck className="check-icon" /> RESTful and GraphQL endpoints
            </li>
            <li>
              <FiCheck className="check-icon" /> Comprehensive SDKs for all
              major languages
            </li>
            <li>
              <FiCheck className="check-icon" /> Real-time webhooks
            </li>
            <li>
              <FiCheck className="check-icon" /> 99.99% Uptime SLA
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="code-window"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="window-header">
            <div className="window-controls">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="window-tabs">
              <button
                className={`tab-btn ${activeTab === "html" ? "active" : ""}`}
                onClick={() => setActiveTab("html")}
              >
                index.html
              </button>
              <button
                className={`tab-btn ${activeTab === "react" ? "active" : ""}`}
                onClick={() => setActiveTab("react")}
              >
                App.js
              </button>
            </div>
          </div>
          <div className="code-content">
            {activeTab === "html" ? (
              <>
                <span className="keyword">&lt;!DOCTYPE html&gt;</span>
                <br />
                <span className="keyword">&lt;html</span>{" "}
                <span className="variable">lang</span>=
                <span className="string">"en"</span>
                <span className="keyword">&gt;</span>
                <br />
                <span className="keyword">&lt;head&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="keyword">&lt;meta</span>{" "}
                <span className="variable">charset</span>=
                <span className="string">"UTF-8"</span>
                <span className="keyword">&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="keyword">&lt;meta</span>{" "}
                <span className="variable">name</span>=
                <span className="string">"viewport"</span>{" "}
                <span className="variable">content</span>=
                <span className="string">
                  "width=device-width, initial-scale=1.0"
                </span>
                <span className="keyword">&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="keyword">&lt;title&gt;</span>Queekk
                <span className="keyword">&lt;/title&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="keyword">&lt;link</span>{" "}
                <span className="variable">rel</span>=
                <span className="string">"stylesheet"</span>{" "}
                <span className="variable">href</span>=
                <span className="string">
                  "https://queekk-service.vercel.app/assistant.css"
                </span>{" "}
                /<span className="keyword">&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="keyword">&lt;script</span>{" "}
                <span className="variable">async</span>{" "}
                <span className="variable">src</span>=
                <span className="string">
                  "https://queekk-service.vercel.app/assistant/q-xxxxxxxxx"
                </span>{" "}
                <span className="keyword">&gt;&lt;/script&gt;</span>
                <br />
                <span className="keyword">&lt;/head&gt;</span>
                <br />
                <span className="keyword">&lt;body&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="keyword">&lt;div</span>{" "}
                <span className="variable">id</span>=
                <span className="string">"queekk-container"</span>
                <span className="keyword">&gt;&lt;/div&gt;</span>
                <br />
                <span className="keyword">&lt;/body&gt;</span>
                <br />
                <span className="keyword">&lt;/html&gt;</span>
              </>
            ) : (
              <>
                <span className="keyword">import</span> {"{"}{" "}
                <span className="variable">useEffect</span> {"}"}{" "}
                <span className="keyword">from</span>{" "}
                <span className="string">"react"</span>;
                <br />
                <br />
                <span className="function">useEffect</span>((){" "}
                <span className="keyword">=&gt;</span> {"{"}
                <br />
                &nbsp;&nbsp;
                <span className="keyword">const</span>{" "}
                <span className="variable">link</span> ={" "}
                <span className="variable">document</span>.
                <span className="function">createElement</span>(
                <span className="string">"link"</span>);
                <br />
                &nbsp;&nbsp;
                <span className="variable">link</span>.
                <span className="variable">rel</span> ={" "}
                <span className="string">"stylesheet"</span>;
                <br />
                &nbsp;&nbsp;
                <span className="variable">link</span>.
                <span className="variable">href</span> ={" "}
                <span className="string">
                  "https://queekk-service.vercel.app/assistant.css"
                </span>
                ;
                <br />
                &nbsp;&nbsp;
                <span className="variable">document</span>.
                <span className="variable">head</span>.
                <span className="function">appendChild</span>(
                <span className="variable">link</span>);
                <br />
                <br />
                &nbsp;&nbsp;
                <span className="keyword">const</span>{" "}
                <span className="variable">script</span> ={" "}
                <span className="variable">document</span>.
                <span className="function">createElement</span>(
                <span className="string">"script"</span>);
                <br />
                &nbsp;&nbsp;
                <span className="variable">script</span>.
                <span className="variable">src</span> ={" "}
                <span className="string">
                  "https://queekk-service.vercel.app/assistant/q-xxxxxxxxx"
                </span>
                ;
                <br />
                &nbsp;&nbsp;
                <span className="variable">script</span>.
                <span className="variable">async</span> ={" "}
                <span className="keyword">true</span>;
                <br />
                &nbsp;&nbsp;
                <span className="variable">document</span>.
                <span className="variable">head</span>.
                <span className="function">appendChild</span>(
                <span className="variable">script</span>);
                <br />
                {"}"}, []);
                <br />
                <br />
                <span className="keyword">return</span>{" "}
                <span className="keyword">&lt;div</span>{" "}
                <span className="variable">id</span>=
                <span className="string">"queekk-container"</span> /
                <span className="keyword">&gt;</span>;
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
