import React from 'react';
import './organisation.css';
import logoImg from '../../../assets/svgs/logo.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

function Organisations({ handleSideMenu }) {
    const navigate = useNavigate();

    const handlePath = () => {
        navigate('/dashboard/organisation/orgForm')
    }

    return (
        <div className='organisation'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>Organization</h3>
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

export default Organisations