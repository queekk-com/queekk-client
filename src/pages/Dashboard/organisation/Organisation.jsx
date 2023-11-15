import React from 'react';
import './organisation.css';
import logoImg from '../../../assets/svgs/logo.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Organisation() {
    const orgInfo = [

    ];

    for (let i = 1; i <= 16; i++) {
        orgInfo.push({
            id: i,
            orgName: `Organization ${i}`,
            supportInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra libero ac.',
            domains: `https://www.example${i}.com`,
        });
    }
    const navigate = useNavigate();

    const handlePath = () => {
        navigate('/dashboard/organisation/orgForm')
    }

    return (
        <div className='organisation'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>Organisation</h3>
                </div>
                <div className="dashLogo">
                    <h3>QUEEKK</h3>
                    <div className="logo__container">
                        <img src={logoImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="orgMain">
                <div className="orgContent">
                    <div className={orgInfo.length >= 12 ? "orgOrganisation length" : "orgOrganisation"}>
                        {
                            orgInfo.map((org) => (
                                <Link to='organisationId' key={org.id} className="disOrg">
                                    <h3>{org.orgName}</h3>
                                    <Link>{org.domains}</Link>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="createOrg">
                        <button onClick={handlePath}>Create Organisation</button>
                    </div>
                </div>
            </div>
            <div className="orgOutlet">
                <Outlet />
            </div>
        </div>
    )
}

export default Organisation