import { useNavigate } from "react-router-dom";
import headLogo from "../../../assets/svgs/logo.svg";
import "./Head.css";
// import Globe from "./components/Globe";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="land__Head">
      <div className="logo__container">
        <img src={headLogo} alt="" />
      </div>
      <h1>
        Quicker Support, Happier Customers,
        <br />
        Faster Growth
      </h1>
      <p>
        In today's competitive landscape, every second counts. With{" "}
        <span className="highlight">Queekk</span>, your support becomes
        lightning-fast, delighting customers and fueling your business growth.
      </p>
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
