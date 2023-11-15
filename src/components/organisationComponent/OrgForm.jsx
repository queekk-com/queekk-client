import React from 'react';
import './orgForm.css';

function OrgForm() {
    return (
        <div className='orgForm'>
            <form action="" className="formOrganisation">
                <div className="createOrgForm">
                    <div className="orgFrmCtrl">
                        <label htmlFor="">Organization name:</label>
                        <input type="text" />
                    </div>
                    <div className="orgFrmCtrl">
                        <label htmlFor="">Organization Email</label>
                        <input type="email" />
                    </div>
                    <div className="orgFrmCtrl">
                        <label htmlFor="">Contact info:</label>
                        <input type="number" />
                    </div>
                    <div className="sptFrmCtrl">
                        <div className="orgFrmSptInfo">
                            <div className="sptSngl">
                                <div className="sptCtrl">
                                    <label htmlFor="">Support Info (Manual test):</label>
                                    <textarea name="" id=""></textarea>
                                </div>
                            </div>
                            <div className="sptDvd">
                                <div className="sptCtrl">
                                    <label htmlFor="">Support Info (providing URL):</label>
                                    <input type="url" />
                                </div>
                                <div className="sptCtrl">
                                    <label htmlFor="">Support Info (PDF or any readable file format):</label>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="orgFrmCtrl">
                        <label htmlFor="">Organisation Domain</label>
                        <input type="url" />
                    </div>
                </div>
                <div className="submitOrgInfoBtn">
                    <button>Create Organisation</button>
                </div>
            </form>
        </div>
    )
}

export default OrgForm