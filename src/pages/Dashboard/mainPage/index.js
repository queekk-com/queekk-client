import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { GiToken } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { BiMessageDetail, BiLogOut } from 'react-icons/bi';
import { IoSettings } from 'react-icons/io5';
import './style.css';

function DisplayDashboard ({ openMenu, handleSideMenu }) {
    return (
        <div className="displayBoard">
            <div onClick={handleSideMenu} className={openMenu ? "sideMenuCont active" : "sideMenuCont"}></div>
            <div className={openMenu ? 'sideMenu active' : 'sideMenu'}>
                <div className="mainMenu">
                    <NavLink onClick={handleSideMenu} to={""} end>
                        <div className="sideIcon">
                            <AiOutlineDashboard />
                        </div>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink onClick={handleSideMenu} to='organisations'>
                        <div className="sideIcon">
                            <BsBuildingFillAdd />
                        </div>
                        <span>Organisations</span>
                    </NavLink>
                    <NavLink onClick={handleSideMenu} to='tokens'>
                        <div className="sideIcon">
                            <GiToken />
                        </div>
                        <span>Tokens</span>
                    </NavLink>
                    <NavLink onClick={handleSideMenu} to='messages'>
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
                        <NavLink onClick={handleSideMenu} to='settings'>
                            <div className="acctIcon">
                                <IoSettings />
                            </div>
                            <span>Settings</span>
                        </NavLink>
                        <NavLink onClick={handleSideMenu} to='/login'>
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