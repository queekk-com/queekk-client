import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { GiToken } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { BiMessageDetail, BiLogOut } from 'react-icons/bi';
import { IoSettings } from 'react-icons/io5';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMessageData, setOrganizationData, setTokenData, setUserData } from '../../../redux/actions';

function DisplayDashboard ({ openMenu, handleSideMenu }) {
    const data = useSelector(state => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login', {
                replace: true
            });
        } else {
            fetch(`${process.env.REACT_APP_SERVER}/data`, {
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                }
            }).then(res => res.json()).then(data => {
                if (data.status !== "success") {
                    navigate('/login', {
                        replace: true
                    });
                }
                dispatch(setUserData(data.data.user));
                dispatch(setTokenData(data.data.tokens));
                dispatch(setOrganizationData(data.data.organizations));
                dispatch(setMessageData(data.data.messages));
                setShowContent(true);
            }).catch(err => {
                navigate('/login', {
                    replace: true
                });
            })
        }
    }, [dispatch, navigate])
    return (
        <>
            {
                showContent &&
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
                            <NavLink onClick={handleSideMenu} to='organizations'>
                                <div className="sideIcon">
                                    <BsBuildingFillAdd />
                                </div>
                                <span>Organizations</span>
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
                                <h3>{data.user.firstname} {data.user.lastname}</h3>
                            </div>
                            <div className="acctSettings">
                                <NavLink onClick={handleSideMenu} to='settings'>
                                    <div className="acctIcon">
                                        <IoSettings />
                                    </div>
                                    <span>Settings</span>
                                </NavLink>
                                <NavLink onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.clear();
                                    navigate('/login', {
                                        replace: true
                                    });
                                }} to='/login'>
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
            }
        </>
    )
}

export default DisplayDashboard;