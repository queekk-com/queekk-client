import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { GiToken } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { BiMessageDetail, BiLogOut } from 'react-icons/bi';
import { IoSettings } from 'react-icons/io5';
import './style.css';

function DisplayDashboard () {
    return (
        <div className="displayBoard">
            <div className='sideMenu'>
                <div className="mainMenu">
                    <NavLink to='updates'>
                        <div className="sideIcon">
                            <AiOutlineDashboard />
                        </div>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to='organisation'>
                        <div className="sideIcon">
                            <BsBuildingFillAdd />
                        </div>
                        <span>Organisation</span>
                    </NavLink>
                    <NavLink to='tokens'>
                        <div className="sideIcon">
                            <GiToken />
                        </div>
                        <span>Tokens</span>
                    </NavLink>
                    <NavLink to='messages'>
                        <div className="sideIcon">
                            <BiMessageDetail />
                        </div>
                        <span>Messages</span>
                    </NavLink>
                </div>

                <div className="account">
                    <div className="acctHolder">
                        <FaUserCircle />
                        <h3>Queekk Benhexie</h3>
                    </div>
                    <div className="acctSettings">
                        <NavLink to='settings'>
                            <div className="acctIcon">
                                <IoSettings />
                            </div>
                            <span>Settings</span>
                        </NavLink>
                        <NavLink to='logout'>
                            <div className="acctIcon">
                                <BiLogOut />
                            </div>
                            <span>Log out</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default DisplayDashboard;