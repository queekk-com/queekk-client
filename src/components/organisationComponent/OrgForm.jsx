import React, { useEffect, useRef, useState } from 'react';
import './orgForm.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateOrganizationData } from '../../redux/actions';

function OrgForm() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        orgName: '',
        orgEmail: '',
        orgContact: '',
        orgAddress: '',
        orgManualTxt: '',
        orgDomain: ''
    });
    const [format, setFormat] = useState('');
    const [ errs, setErrs ] = useState({});
    const navigate = useNavigate();
    const logoRef = useRef(null);
    const infoRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm(formData, setErrs)) {
            console.log(errs);
            return;
        }

        const entryData = new FormData();

        entryData.append('name', formData.orgName);
        entryData.append('email', formData.orgEmail);
        entryData.append('contact', formData.orgContact);
        entryData.append('address', formData.orgAddress);
        entryData.append('infoText', formData.orgManualTxt);
        entryData.append('domain', formData.orgDomain);
        entryData.append('logo', logoRef.current?.files?.[0]);
        entryData.append('infoFile', infoRef.current?.files?.[0]);

        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER}/new/organization`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: entryData
            });

            const data = await res.json();

            if (data.status !== "success") {
                toast.error(data.message);
                return;
            }

            toast.success(data.message);
            dispatch(updateOrganizationData(data.data));
            navigate('/dashboard/organisations');
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setErrs(errs => {
            if (formData.orgName) delete errs.orgName;
            if (formData.orgEmail) delete errs.orgEmail;
            if (formData.orgContact) delete errs.orgContact;
            if (formData.orgAddress) delete errs.orgAddress;
            if (formData.orgManualTxt) delete errs.orgManualTxt;
            if (formData.orgPDF) delete errs.orgPDF;
            if (formData.orgDomain) delete errs.orgDomain;
            return errs;
        });
    }, [formData, errs]);

    return (
        <div className="orgOutlet">
            <div className='orgForm'>
                <form onSubmit={handleSubmit} action="" className="formOrganisation">
                    <div className="createOrgForm">
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Organization Logo:</label>
                            <input 
                                type="file"
                                accept='.jpg, .jpeg, .png'
                                name='orgLogo'
                                ref={logoRef}
                            />
                            {errs.orgLogo && <p className='err-Msg'>{errs.orgLogo}</p>}
                        </div>
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Organization Name:</label>
                            <input 
                                autoFocus
                                type="text"
                                placeholder='Enter your organization name'
                                value={formData.orgName}
                                onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                                name='orgName'
                            />
                            {errs.orgName && <p className='err-Msg'>{errs.orgName}</p>}
                        </div>
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Support E-mail:</label>
                            <input 
                                type="email"
                                placeholder='Enter your organization e-mail'
                                value={formData.orgEmail}
                                onChange={(e) => setFormData({...formData, orgEmail: e.target.value})}
                                name='orgEmail'
                            />
                            {errs.orgEmail && <p className='err-Msg'>{errs.orgEmail}</p>}
                        </div>
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Contact Info:</label>
                            <input 
                                type="number" 
                                placeholder='Enter your organization phone number'
                                value={formData.orgContact}
                                onChange={(e) => setFormData({...formData, orgContact: e.target.value})}
                                name='orgContact'
                            />
                            {errs.orgContact && <p className='err-Msg'>{errs.orgContact}</p>}
                        </div>
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Organization Address:</label>
                            <textarea 
                                placeholder='Enter your organization address'
                                value={formData.orgAddress}
                                onChange={(e) => setFormData({...formData, orgAddress: e.target.value})}
                                name='orgAddress'
                                maxLength={500}
                            />
                            {errs.orgAddress && <p className='err-Msg'>{errs.orgAddress}</p>}
                        </div>
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Support Info Format:</label>
                            <select 
                                value={format}
                                onChange={(e) => setFormat(e.target.value)}
                                name='orgFormat'
                            >
                                <option value="">Select format</option>
                                <option value="manual">Manual</option>
                                <option value="file">File</option>
                            </select>
                        </div>
                        {
                            format === "manual" ? (
                                <div className="orgFrmCtrl">
                                    <label htmlFor="">Support Info (Manual entry):</label>
                                    <textarea 
                                        placeholder='Enter your organization support text'
                                        value={formData.orgManualTxt}
                                        onChange={(e) => setFormData({...formData, orgManualTxt: e.target.value})}
                                        name='orgManualTxt'
                                        maxLength={4000}
                                        minLength={150}
                                    />
                                    {errs.orgManualTxt && <p className='err-Msg'>{errs.orgManualTxt}</p>}
                                </div>
                            ) : format === "file" ? (
                                <div className="orgFrmCtrl">
                                    <label htmlFor="">Support Info (PDF or any readable file format):</label>
                                    <input 
                                        type="file"
                                        accept='.pdf, .doc, .docx, .txt'
                                        name='orgPDF'
                                        ref={infoRef}
                                    />
                                    {errs.orgPDF && <p className='err-Msg'>{errs.orgPDF}</p>}
                                </div>
                            ) : <></>
                        }
                        <div className="orgFrmCtrl">
                            <label htmlFor="">Organisation Domain</label>
                            <input 
                                type="url"
                                placeholder='Enter your organization domain (e.g. https://www.example.com)'
                                value={formData.orgDomain}
                                onChange={(e) => setFormData({...formData, orgDomain: e.target.value})}
                                name='orgDomain'
                            />
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


// validate form input
const validateForm = (formData, setErrs) => {
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

    if (!formData.orgAddress.trim()) {
        newErrs.orgAddress = 'Please provide an address';
    }

    if (!formData.orgManualTxt && !formData.orgPDF) {
        newErrs.orgManualTxt = 'Please provide support information';
    } 
    else if (formData.orgManualTxt && (!formData.orgManualTxt.trim() || formData.orgManualTxt.length < 150)) {
        newErrs.orgManualTxt = 'Support information must be more than 150 characters';
    }
    else if (formData.orgPDF && !formData.orgPDF) {
        newErrs.orgPDF = 'Invalid PDF format';
    }

    // www is optional, http or https is allowed
    const urlPattern = /(\b(https?):\/\/)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;

    if (!formData.orgDomain.trim()) {
        newErrs.orgDomain = 'Please provide an organization Domain';
    } 
    else if (!urlPattern.test(formData.orgDomain.trim())) {
        newErrs.orgDomain = 'Invalid URL format';
    }

    setErrs(newErrs);
    return Object.keys(newErrs).length === 0;
}