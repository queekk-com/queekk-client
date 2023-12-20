import React, { useContext, useState } from 'react';
import './settings.css';
import logoImg from '../../../assets/svgs/logo.svg';
import { ThemeContext } from '../../../App';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';

function Settings({ openMenu, handleSideMenu }) {
    const { toggleTheme, themeDecor } = useContext(ThemeContext);
    const appData = useSelector(state => state);
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='settings'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>{appData.user.firstname} {appData.user.lastname}</h3>
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
                                <input 
                                    autoComplete='off'
                                    type="email"
                                    name='email'
                                    placeholder={appData.user.email}
                                    value={email}
                                    onChange={e => setEmail(e.target.vaue)}
                                 />
                            </div>
                            <div className="setCtrl">
                                <label htmlFor="">First name</label>
                                <input 
                                    autoComplete='off'
                                    type="text" 
                                    name='firstname'
                                    placeholder={appData.user.firstname}
                                    value={firstname}
                                    onChange={e => setFirstname(e.target.vaue)}
                                />
                            </div>
                            <div className="setCtrl">
                                <label htmlFor="">Last name</label>
                                <input 
                                    autoComplete='off'
                                    type="text" 
                                    name="lastname"
                                    placeholder={appData.user.lastname}
                                    value={lastname}
                                    onChange={e => setLastname(e.target.vaue)}
                                />
                            </div>
                            <div className="setCtrl">
                                <label htmlFor="">Password</label>
                                <input 
                                    autoComplete='off'
                                    type="password" 
                                    name='password'
                                    placeholder='**********'
                                    value={password}
                                    onChange={e => setPassword(e.target.vaue)}
                                />
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