import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./Documentation.css";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiBookOpen, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Documentation = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [prev, setPrev] = useState({ label: "", path: "" });
  const [next, setNext] = useState({ label: "", path: "" });
  const [formattedLoc, setFormattedLoc] = useState("");

  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    window.scrollTo(0, 0);
    // Hide mobile menu on route change
    setShowMobileMenu(false);

    let formattedLocation = location.replace(/\/documentation\/*/, "");
    if (formattedLocation.slice(-1) === "/") {
      formattedLocation = formattedLocation.slice(0, -1);
    }
    
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
      setNext({ label: "FAQs", path: "" });
    }
  }, [location]);

  const getCurrentTitle = () => {
    if (formattedLoc === "" || formattedLoc === "/documentation") return "Introduction";
    return formattedLoc.charAt(0).toUpperCase() + formattedLoc.slice(1).replace("-", " ");
  };

  const NavLinks = () => (
    <>
      {sections.map((section, index) => (
        <NavLink
          key={index}
          to={`/documentation/${section.toLowerCase().replace(" ", "-")}`}
          className={({ isActive }) => 
            `doc-nav-item ${isActive || (section === "Introduction" && (location === "/documentation" || location === "/documentation/")) ? "active" : ""}`
          }
          end={section === "Introduction"}
        >
          {section}
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="documentation-wrapper">
      {/* Mobile Header */}
      <div className="doc-mobile-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--accentColor)' }}>
          <FiBookOpen />
          <span>Documentation</span>
        </div>
        <button 
          className="doc-mobile-menu-btn"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FiX /> : <FiMenu />}
          <span>Menu</span>
        </button>

        {showMobileMenu && (
          <div className="doc-mobile-dropdown">
            <NavLinks />
          </div>
        )}
      </div>

      {/* Sidebar (Desktop) */}
      <aside className="doc-sidebar">
        <div className="doc-sidebar-header">
          <FiBookOpen />
          <span>Documentation</span>
        </div>
        <nav className="doc-nav-list">
          <NavLinks />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="doc-content-area">
        {/* Breadcrumb / Title Context */}
        <div className="document-title-context" style={{ marginBottom: '1rem', color: '#666', fontSize: '0.9rem' }}>
          Documentation / <span style={{ color: 'var(--accentColor)' }}>{getCurrentTitle()}</span>
        </div>

        <Outlet />

        {/* Footer Navigation */}
        <div className="documentation__footer">
          <div className="documentation__footer__nav">
            <button
              className="documentation__footer__nav__prev"
              onClick={() => navigate(`/documentation/${prev.path}`)}
              disabled={
                prev.path === "" ||
                (prev.path === "introduction" &&
                  (formattedLoc === "introduction" || formattedLoc === ""))
              }
            >
              <FiChevronLeft />
              <div style={{ textAlign: 'left' }}>
                <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Previous</span>
                {prev.label}
              </div>
            </button>

            <button
              className="documentation__footer__nav__next"
              onClick={() => navigate(`/documentation/${next.path}`)}
              disabled={next.path === "" && next.label === "FAQs"}
            >
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Next</span>
                {next.label}
              </div>
              <FiChevronRight />
            </button>
          </div>
          <small>Queekk © 2024. All rights reserved.</small>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
