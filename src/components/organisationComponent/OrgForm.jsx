import React, { useState } from 'react';
import './orgForm.css';
import { useNavigate } from 'react-router-dom';

function OrgForm() {
    //validating and getting form data
    const [formData, setFormData] = useState(
        {
            orgName: '',
            orgEmail: '',
            orgContact: '',
            orgManualTxt: '',
            orgUrl: '',
            orgPDF: '',
            orgDomain: ''
        }
    );

    const navigate = useNavigate();

    const [ errs, setErrs ] = useState({});

    const validateForm = () => {
        const newErrs = {}

        if(!formData.orgName.trim()) {
            newErrs.orgName = 'Please provide a valid organisation name';
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!formData.orgEmail.trim()) {
            newErrs.orgEmail = 'Please provide an email address';
        }
        else if(!emailPattern.test(formData.orgEmail.trim())) {
            newErrs.orgEmail = 'Invalid email address'
        }

        if (!formData.orgContact.trim()) {
            newErrs.orgContact = 'Please provide a contact number';
        }
    
        if (!formData.orgManualTxt.trim()) {
            newErrs.orgManualTxt = 'Please provide manual text above 150 words about your organisation';
        }

        const urlPattern = !/^https?:\/\/\S+\.\S+$/;
        if (!formData.orgUrl.trim()) {
            newErrs.orgUrl = 'Please provide an organization URL';
        } 
        else if (urlPattern.test(formData.orgUrl.trim())) {
            newErrs.orgUrl = 'Invalid URL format';
        }

        if (!formData.orgPDF) {
            newErrs.orgPDF = 'Invalid PDF format';
        }

        if (!formData.orgDomain.trim()) {
            newErrs.orgDomain = 'Please provide an organization Domain';
        } 
        else if (urlPattern.test(formData.orgDomain.trim())) {
            newErrs.orgDomain = 'Invalid URL format';
        }

        setErrs(newErrs);
        return Object.keys(newErrs).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            navigate('/dashboard/organisations')
        }
    }

    return (
        <div className="orgOutlet">
            <div className='orgForm'>
                <form onSubmit={handleSubmit} action="" className="formOrganisation">
                    <div className="createOrgForm">
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Organization name:</label>
                            <input type="text" />
                            {errs.orgName && <p className='err-Msg'>{errs.orgName}</p>}
                        </div>
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Organization Email</label>
                            <input type="email" />
                            {errs.orgEmail && <p className='err-Msg'>{errs.orgEmail}</p>}
                        </div>
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Contact info:</label>
                            <input type="number" />
                            {errs.orgContact && <p className='err-Msg'>{errs.orgContact}</p>}
                        </div>
                        <div className="sptFrmCtrl">
                            <div className="orgFrmSptInfo">
                                <div className="sptSngl">
                                    <div className="sptCtrl">
                                        <label htmlFor="">Support Info (Manual test):</label>
                                        <textarea name="" id=""></textarea>
                                        {errs.orgManualTxt && <p className='err-Msg'>{errs.orgManualTxt}</p>}
                                    </div>
                                </div>
                                <div className="sptDvd">
                                    <div className="sptCtrl">
                                        <label htmlFor="">Support Info (providing URL):</label>
                                        <input type="url" />
                                        {errs.orgUrl && <p className='err-Msg'>{errs.orgUrl}</p>}
                                    </div>
                                    <div className="sptCtrl">
                                        <label htmlFor="">Support Info (PDF or any readable file format):</label>
                                        <input type="file" />
                                        {errs.orgPDF && <p className='err-Msg'>{errs.orgPDF}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Organisation Domain</label>
                            <input type="url" />
                            {errs.orgDomain && <p className='err-Msg'>{errs.orgDomain}</p>}
                        </div>
                    </div>
                    <div className="submitOrgInfoBtn">
                        <button>Create Organisation</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrgForm