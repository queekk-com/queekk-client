import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Nav from "../../../components/Nav";
import "./Documentation.css";
import { useEffect, useState } from "react";

const Documentation = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [prev, setPrev] = useState({ label: "", path: "" });
  const [next, setNext] = useState({ label: "", path: "" });
  const [formattedLoc, setFormattedLoc] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const sections = [
    "Introduction",
    "Getting Started",
    "Integration",
    "Usage",
    "Customization",
    "Troubleshooting",
    "FAQs",
  ];

  useEffect(() => {
    let formattedLocation = location.replace(/\/documentation\/*/, "");
    if (formattedLocation.slice(-1) === "/") {
      formattedLocation = formattedLocation.slice(0, -1);
    }
    console.log(formattedLocation);
    setFormattedLoc(formattedLocation);
    if (formattedLocation === "introduction" || formattedLocation === "") {
      setPrev({ label: "Introduction", path: "" });
      setNext({ label: "Getting Started", path: "getting-started" });
    }
    if (formattedLocation === "getting-started") {
      setPrev({ label: "Introduction", path: "introduction" });
      setNext({ label: "Integration", path: "integration" });
    }
    if (formattedLocation === "integration") {
      setPrev({ label: "Getting Started", path: "getting-started" });
      setNext({ label: "Usage", path: "usage" });
    }
    if (formattedLocation === "usage") {
      setPrev({ label: "Integration", path: "integration" });
      setNext({ label: "Customization", path: "customization" });
    }
    if (formattedLocation === "customization") {
      setPrev({ label: "Usage", path: "usage" });
      setNext({ label: "Troubleshooting", path: "troubleshooting" });
    }
    if (formattedLocation === "troubleshooting") {
      setPrev({ label: "Customization", path: "customization" });
      setNext({ label: "FAQs", path: "faqs" });
    }
    if (formattedLocation === "faqs") {
      setPrev({ label: "Troubleshooting", path: "troubleshooting" });
      setNext({ label: "FAQs", path: "faqs" });
    }
  }, [location]);

  return (
    <div className="documentation">
      <div className="documentation__nav">
        <div
          className="documentation__nav__container"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div
            className={`documentation__nav__container__links ${
              showMenu ? "active" : ""
            }`}
          >
            {sections.map((section, index) => {
              return (
                <NavLink
                  key={index}
                  to={`/documentation/${section
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  end
                >
                  {section}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="documentation__nav__container__title">
          <small>
            <Link
              to={"/documentation"}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              documentation
            </Link>{" "}
            /{" "}
            <span style={{ color: "var(--accentColor)" }}>
              {formattedLoc === "" || formattedLoc === "/documentation"
                ? "introduction"
                : formattedLoc.charAt(0).toUpperCase() +
                  formattedLoc.slice(1).replace("-", " ")}
            </span>
          </small>
        </div>
      </div>
      <Outlet />
      <div className="documentation__footer">
        <div className="documentation__footer__nav">
          {
            <button
              className="documentation__footer__nav__prev"
              onClick={() => navigate(`/documentation/${prev.path}`)}
              disabled={
                prev.path === "" ||
                (prev.path === "introduction" &&
                  (formattedLoc === "introduction" || formattedLoc === ""))
              }
            >
              {prev.label}
            </button>
          }
          {
            <button
              className="documentation__footer__nav__next"
              onClick={() => navigate(`/documentation/${next.path}`)}
              disabled={next.label === "FAQs"}
            >
              {next.label}
            </button>
          }
        </div>
        <small>Queekk © 2024. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Documentation;
