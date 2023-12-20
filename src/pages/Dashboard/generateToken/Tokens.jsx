import { useState } from 'react';
import logoImg from '../../../assets/svgs/logo.svg';
import './token.css';
import { AiFillCopy } from 'react-icons/ai';
import tokenData from './data/token-data';
import { GiHamburgerMenu } from 'react-icons/gi';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateTokenData } from '../../../redux/actions';

function Tokens({ handleSideMenu }) {
    const appData = useSelector(state => state);
    const dispatch = useDispatch();
    const [apiKey, setApiKey] = useState('');
    const [org, setOrg] = useState('');
    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            toast.success(`Copied: ${text}`);
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!org || !apiKey) return;
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER}/new/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    apiKey,
                    organization: org
                })
            });
            const data = await res.json();
            if (data.status !== "success") {
                return toast.error(data.message);
            }
            dispatch(updateTokenData(data.data));
            toast.success(data.message);
            setApiKey('');
            setOrg('');
        } catch (error) {
            console.log(error);
        }
    }

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
                <form action="" className="genToken" onSubmit={handleSubmit}>
                    <div className="tknCtrl">
                        <label htmlFor="">Organization Name:</label>
                        <select 
                            required
                            value={org} 
                            onChange={(e) => setOrg(e.target.value)}>
                            <option value="">Select Organization</option>
                            {
                                appData.organizations.map((org) => (
                                    <option key={org._id} value={org._id}>{org.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="tknCtrl">
                        <label htmlFor="">OpenAI API Key:</label>
                        <input 
                            required
                            type="text" 
                            placeholder='sk-xxxxxxxxxx' 
                            value={apiKey}
                            disabled={!Boolean(org)}
                            onChange={(e) => setApiKey(e.target.value)} />
                    </div>
                    <div className="tknBtn">
                        <button
                            disabled={!Boolean(org)}
                        >Generate Token</button>
                    </div>
                </form>
                {
                    appData.tokens.length ? (
                        <div className="displayTkn">
                            {
                                appData.tokens.map((tkn) => (
                                    <div key={tkn._id} className="genTkns">
                                        <h3>{tkn.token}</h3>
                                        <div className="tknIcon" onClick={() => handleCopyText(tkn.token)}>
                                            <AiFillCopy />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : <></>
                }
            </div>
        </div>
    )
}

export default Tokens