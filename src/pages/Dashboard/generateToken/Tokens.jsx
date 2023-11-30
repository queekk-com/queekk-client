import React from 'react';
import logoImg from '../../../assets/svgs/logo.svg';
import './token.css';
import { AiFillCopy } from 'react-icons/ai';
import tokenData from './data/token-data';
import { GiHamburgerMenu } from 'react-icons/gi';

function Tokens({ handleSideMenu }) {
    return (
        <div className='tokens'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>Generate Token</h3>
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
            <div className="tokenMain">
                <form action="" className="genToken">
                    <div className="tknCtrl">
                        <label htmlFor="">Type in your OpenAi Api key:</label>
                        <input type="text" placeholder='sk-xxxxxxxxxx' />
                    </div>
                    <div className="tknBtn">
                        <button>Generate Token</button>
                    </div>
                </form>
                <div className="displayTkn">
                    {
                        tokenData.map((tkn) => (
                            <div key={tkn._id} className="genTkns">
                                <h3>{tkn.tokenNumber}</h3>
                                <div className="tknIcon">
                                    <AiFillCopy />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tokens