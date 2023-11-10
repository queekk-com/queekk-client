import { useState } from "react";
import "./Nav.css";
import logoImg from '../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Nav = () => {
    //handling sidebar
    const [openSideBar, setOpenSideBar] = useState(false);

    const handleSideBar = () => {
        setOpenSideBar(!openSideBar);
    };

    const [openSearch, setOpenSearch] = useState(false);

    const handleSearch = () => {
        setOpenSearch(!openSearch)
    };

    return (
        <nav>
            <div className="navLinks">
                <div className="navLogo">
                    <h3>QUEEKK</h3>
                    <div className="logo__container">
                        <img src={logoImg} alt="" />
                    </div>
                </div>

                <div onClick={handleSideBar} className={openSideBar ? "sideCont active" : "sideCont"}></div>
                
                <ul className={openSideBar ? "navUl active" : "navUl"}>
                    <div onClick={handleSideBar} className="closeBar">
                        <span>X</span>
                    </div>
                    <li>
                        <NavLink>
                            <span>Docs</span>
                            <AiOutlineCaretDown />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <span>Server Api</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <span>Client Api</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <span>Pricing</span>
                        </NavLink>
                    </li>
                    <div className="logOrSign side">
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </ul>
            </div>
            <div className="logAndSearch">
                <div onClick={handleSearch} className={openSearch ? "searchCont active" : "searchCont"}>
                    <form action="" className="searchBtn">
                        <input type="search" id="" placeholder="Search" />
                        <span className="searchTxt">No recent searches</span>
                    </form>
                </div>
                <div className="logOrSign">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
                <div onClick={handleSearch} className="searchIcon">
                    <span>search</span>
                    <BiSearchAlt />
                </div>
                <div onClick={handleSideBar} className='burger'>
                    <GiHamburgerMenu />
                </div>
            </div>
        </nav>
    )
}

export default Nav