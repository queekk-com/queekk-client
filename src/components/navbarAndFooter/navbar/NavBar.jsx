import React from 'react';
import logoImg from '../../images/logoImg/chatAi.png';
import { NavLink } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import '../styles/nav.css';

function NavBar() {
    return (
        <nav>
            <div className="navLinks">
                <div className="navLogo">
                    <h3>QUEEKK</h3>
                    <img src={logoImg} alt="" />
                </div>
                <ul className="navUl">
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
                </ul>
            </div>
            <div className="logAndSearch">
                <form action="" className="searchBtn">
                    <input type="search" id="" />
                </form>
                <div className="logOrSign">
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar