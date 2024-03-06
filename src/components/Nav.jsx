import { useState } from "react";
import "./Nav.css";
import logoImg from "../assets/svgs/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Nav = () => {
  //handling sidebar
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();

  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  // Opening the doc in media screen
  const [openDoc, setOpenDoc] = useState(false);
  const docDisplay = () => {
    setOpenDoc(!openDoc);
  }

  return (
    <nav>
      <div className="navLinks">
        <div className="navLogo" onClick={() => navigate("/")}>
          <h3>QUEEKK</h3>
          <div className="logo__container">
            <img src={logoImg} alt="" />
          </div>
        </div>

        <div
          onClick={handleSideBar}
          className={openSideBar ? "sideCont active" : "sideCont"}
        ></div>

        <ul className={openSideBar ? "navUl active" : "navUl"}>
          <div onClick={handleSideBar} className="closeBar">
            <span>X</span>
          </div>
          <li className="doc">
            <div className="document" onClick={docDisplay}>
              <span>Docs</span>
              <AiOutlineCaretDown />
            </div>
            <div className={openDoc ? "doc-links active" : "doc-links"}>
              <div onClick={() => {
                if (window.innerWidth <= 575) {
                  handleSideBar();
                  setOpenDoc(!openDoc);
                }
                else {
                  docDisplay()
                }
              }
              }
                className="doc-list">
                <NavLink to="/documentation/introduction">
                  <span>Introduction</span>
                </NavLink>
              </div>
              <div onClick={() => {
                if (window.innerWidth <= 575) {
                  handleSideBar();
                  setOpenDoc(!openDoc);
                }
                else {
                  docDisplay()
                }
              }
              } className="doc-list">
                <NavLink to="/documentation/getting-started">
                  <span>Getting Started</span>
                </NavLink>
              </div>
              <div onClick={() => {
                if (window.innerWidth <= 575) {
                  handleSideBar();
                  setOpenDoc(!openDoc);
                }
                else {
                  docDisplay()
                }
              }
              } className="doc-list">
                <NavLink to="/documentation/integration">
                  <span>Integration</span>
                </NavLink>
              </div>
              <div onClick={() => {
                if (window.innerWidth <= 575) {
                  handleSideBar();
                  setOpenDoc(!openDoc);
                }
                else {
                  docDisplay()
                }
              }
              } className="doc-list">
                <NavLink to="/documentation/usage">
                  <span>Usage</span>
                </NavLink>
              </div>
              <div onClick={() => {
                if (window.innerWidth <= 575) {
                  handleSideBar();
                  setOpenDoc(!openDoc);
                }
                else {
                  docDisplay()
                }
              }
              } className="doc-list">
                <NavLink to="/documentation/customization">
                  <span>Customization</span>
                </NavLink>
              </div>
              <div onClick={() => {
                if (window.innerWidth <= 575) {
                  handleSideBar();
                  setOpenDoc(!openDoc);
                }
                else {
                  docDisplay()
                }
              }
              } className="doc-list">
                <NavLink to="/documentation/troubleshooting">
                  <span>Troubleshooting</span>
                </NavLink>
              </div>
              <div onClick={() => {
                if (window.innerWidth <= 575) {
                  handleSideBar();
                  setOpenDoc(!openDoc);
                }
                else {
                  docDisplay()
                }
              }
              } className="doc-list">
                <NavLink to="/documentation/faqs">
                  <span>Faqs</span>
                </NavLink>
              </div>
            </div>
          </li>
          {/* <li>
            <NavLink to="/server-api">
              <span>Server Api</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/client-api">
              <span>Client Api</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing">
              <span>Pricing</span>
            </NavLink>
          </li> */}
          <div className="logOrSign side">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </ul>
      </div>
      <div className="logAndSearch">
        <div
          onClick={handleSearch}
          className={openSearch ? "searchCont active" : "searchCont"}
        ></div>
        <form
          action=""
          className={openSearch ? "searchBtn active" : "searchBtn"}
        >
          <input type="search" id="" placeholder="Search" />
          <span className="searchTxt">No recent searches</span>
        </form>
        <div className="logOrSign">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
        <div onClick={handleSearch} className="searchIcon">
          <span>search</span>
          <BiSearchAlt />
        </div>
        <div onClick={handleSideBar} className="burger">
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
