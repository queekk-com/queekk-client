import React from 'react';
import logoImg from '../../../assets/svgs/logo.svg';
import { Link } from 'react-router-dom';
import { AiFillCopy } from 'react-icons/ai';
import './overView.css';
import msgs from '../messages/data/messages-data';
import orgInfo from '../organisations/data/organizations-data';
import tokenData from '../generateToken/data/token-data';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';

function OverView({ handleSideMenu }) {
    const appData = useSelector(state => state)
    return (
        <div className='overview'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>Overview</h3>
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
            <div className="overviewContent">
                <div className="overOrgNdTkn">
                    <div className="overViewOrg">
                        <div className="overOrgHead">
                            <h3>Organizations</h3>
                        </div>
                        <div className={appData.organizations.length > 5 ? "overOrg length" : "overOrg"}>
                            {
                                appData.organizations.map((org) => (
                                    <Link key={org._id} to={`organizations/${org._id}`} className="disOrg orgView">
                                        <h3>{org.name}</h3>
                                        <p>{org.domain}</p>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className={appData.organizations.length > 5 ? "seeMore active" : "seeMore"}>
                            <Link to='/dashboard/organisations'>...see more</Link>
                        </div>
                    </div>
                    <div className="overViewTkn">
                        <div className="overTknHead">
                            <h3>Tokens</h3>
                        </div>
                        <div className={appData.tokens.length > 4 ? "overTkn length" : "overTkn"}>
                            {
                                appData.tokens.map((tkn) => (
                                    <Link key={tkn._id} to={`tokens/${tkn._id}`} className="genTkns tknView">
                                        <h3>{tkn.token}</h3>
                                        <div className="tknIcon">
                                            <AiFillCopy />
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className={appData.tokens.length > 4 ? "seeMore active" : "seeMore"}>
                            <Link to='/dashboard/tokens'>...see more</Link>
                        </div>
                    </div>
                </div>
                <div className="overMessages">
                    <div className="overMsgHead">
                        <h3>New messages ({appData.messages.length})</h3>
                    </div>
                    <div className={appData.messages.length > 8 ? "overMsg length" : "overMsg"}>
                        {
                            appData.messages.map((msg) => (
                                <Link key={msg._id} to={`messages/${msg._id}`} className="notMsg">
                                    <div className="msgSender">
                                        <h3>{msg.customerEmail}</h3>
                                        <p>{msg.time}</p>
                                    </div>
                                    <div className="msgMsg">
                                        <p>{msg.customerMsg}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className={appData.messages.length > 8 ? "seeMore active" : "seeMore"}>
                        <Link to='/dashboard/messages'>...see more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView