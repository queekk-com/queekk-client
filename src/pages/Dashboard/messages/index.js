import React from 'react';
import logoImg from '../../../assets/svgs/logo.svg';
import './message.css';
import { Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

function Messages({ handleSideMenu }) {
    return (
        <div className='message'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>Messages</h3>
                </div>
                <div onClick={handleSideMenu} className="dashBurger">
                    <GiHamburgerMenu />
                </div>
                <div className="dashLogo">
                    <h3>QUEEKK</h3>
                    <div className="logo__container">
                        <img src={logoImg} alt="" />
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Messages