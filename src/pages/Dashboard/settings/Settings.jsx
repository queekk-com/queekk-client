import React, { useContext } from 'react';
import './settings.css';
import logoImg from '../../../assets/svgs/logo.svg';
import { ThemeContext } from '../../../App';
import { GiHamburgerMenu } from 'react-icons/gi';

function Settings({ openMenu, handleSideMenu }) {
    const { toggleTheme, themeDecor } = useContext(ThemeContext);

    return (
        <div className='settings'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>Queekk Benhexie</h3>
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

            <div className="settingsContent">
                <div className="setForm">
                    <div className="setInfo">
                        <h3>User Info</h3>
                    </div>
                    <form action="" className="editInfo">
                        <div className="setInp">
                            <div className="setCtrl">
                                <label htmlFor="">Email</label>
                                <input type="email" />
                            </div>
                            <div className="setCtrl">
                                <label htmlFor="">First name</label>
                                <input type="text" />
                            </div>
                            <div className="setCtrl">
                                <label htmlFor="">Last name</label>
                                <input type="text" />
                            </div>
                            <div className="setCtrl">
                                <label htmlFor="">Password</label>
                                <input type="password" />
                            </div>
                        </div>
                        <div className="setBtn">
                            <button>Save Changes</button>
                        </div>
                    </form>
                </div>
                <div className="setTheme">
                    <div className="setInfo">
                        <h3>Change Theme</h3>
                    </div>
                    <div className="cngTheme">
                        <span>{ themeDecor === 'light' ? 'Change to Dark mode' : 'Change to Light mode' }</span>
                        <button onClick={toggleTheme}>{ themeDecor === 'light' ? 'Dark mode' : 'Light mode' }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings