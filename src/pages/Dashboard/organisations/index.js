import React from 'react';
import './organisation.css';
import logoImg from '../../../assets/svgs/logo.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Organisations() {
    const navigate = useNavigate();

    const handlePath = () => {
        navigate('/dashboard/organisation/orgForm')
    }

    return (
        <div className='organisation'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>Organisation</h3>
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