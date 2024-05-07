import { useNavigate } from "react-router-dom";
import headLogo from "../../../assets/svgs/logo.svg";
import "./Head.css";
import { motion } from "framer-motion";
// import Globe from "./components/Globe";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="land__Head">
      <motion.div
        initial={{ rotateY: -100, opacity: 0 }}
        transition={{ delay: .6, duration: 1, type: 'tween' }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="logo__container">
        <img src={headLogo} alt="" />
      </motion.div>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        transition={{ delay: .6, duration: 1, type: 'tween' }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Quicker Support, Happier Customers,
        <br />
        Faster Growth
      </motion.h1>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        transition={{ delay: .6, duration: 1, type: 'tween' }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        In today's competitive landscape, every second counts. With{" "}
        <span className="highlight">Queekk</span>, your support becomes
        lightning-fast, delighting customers and fueling your business growth.
      </motion.p>
      <div className="headBtn">
        <button onClick={() => navigate("/signup")}>Get started</button>
        <button onClick={() => navigate("/documentation")}>
          Documentation
        </button>
      </div>
      {/* GLOBE WAS COMMENTED DUE TO PERFORMANCE ISSUES */}
      {/* <Globe /> */}
    </div>
  );
}

export default Header;
