import React from 'react';
import './orgList.css';

function OrgList() {
    return (
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
                            placeholder='Organisation 1'
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
                            placeholder='Organisation@gmail.com'
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
                            placeholder='+177-234-7896'
                            disabled
                        />
                        <button>Change</button>
                    </div>
                </div>
                <div className="orgInfoCtrl">
                    <label htmlFor="">Support Info:</label>
                    <div className="orgInpChg optionSlt">
                        <input
                            type="text"
                            placeholder='organisation1SupportInfo.com'
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
                            placeholder='https://organisation1.com'
                            disabled
                        />
                        <button>Change</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrgList