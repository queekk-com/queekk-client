import React from 'react';
import './orgList.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function OrgList() {
    const location = useLocation().pathname;
    const orgData = useSelector(state => {
        return state.organizations.filter(org => org._id === location.split("/").pop())?.[0]
    })
    return (
        <div className="orgOutlet">
            <div className='orgList'>
                <div className="orgListHead">
                    <h3>Organisation Info</h3>
                </div>
                <div className="organisationInfo">
                    <div className="orgInfoCtrl">
                        <label htmlFor="">Organisation name:</label>
                        <div className="orgInpChg">
                            <input
                                type="text"
                                placeholder={orgData.name}
                                disabled
                            />
                            <button>Change</button>
                        </div>
                    </div>
                    <div className="orgInfoCtrl">
                        <label htmlFor="">Organisation Email:</label>
                        <div className="orgInpChg">
                            <input
                                type="email"
                                placeholder={orgData.email}
                                disabled
                            />
                            <button>Change</button>
                        </div>
                    </div>
                    <div className="orgInfoCtrl">
                        <label htmlFor="">Organisation Contact:</label>
                        <div className="orgInpChg">
                            <input
                                type="tel"
                                placeholder={String(orgData.contact)}
                                disabled
                            />
                            <button>Change</button>
                        </div>
                    </div>
                    <div className="orgInfoCtrl">
                        <label htmlFor="">Support Info:</label>
                        <div className="orgInpChg optionSlt">
                            <textarea
                                placeholder={orgData.info}
                                disabled
                            />
                            <button>Change</button>
                            <div className="inpChgOpt">
                                <span>File</span>
                                <span>Url</span>
                                <span>Text area</span>
                            </div>
                        </div>
                    </div>
                    <div className="orgInfoCtrl">
                        <label htmlFor="">Organisation Domain:</label>
                        <div className="orgInpChg">
                            <input
                                type="url"
                                placeholder={orgData.domain}
                                disabled
                            />
                            <button>Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrgList