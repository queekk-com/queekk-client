import "./Nav.css";
import logoImg from '../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <div className="navLinks">
            <div className="navLogo">
                <h3>QUEEKK</h3>
                <div className="logo__container">
                    <img src={logoImg} alt="" />
                </div>
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
                <input type="search" id="" placeholder="Search" />
            </form>
            <div className="logOrSign">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav