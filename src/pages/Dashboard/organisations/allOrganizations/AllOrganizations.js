import React from 'react'
import orgInfo from "../data/organizations-data"
import { Link, useNavigate } from 'react-router-dom'

const AllOrganizations = () => {

    const navigate = useNavigate();
    const handlePath = () => {
        navigate('/dashboard/organisations/create/new')
    }

  return (
    <div className="orgMain">
        <div className="orgContent">
            <div className={orgInfo.length >= 12 ? "orgOrganisation length" : "orgOrganisation"}>
                {
                    orgInfo.map((org) => (
                        <Link to='organisationId' key={org.id} className="disOrg">
                            <h3>{org.orgName}</h3>
                            <small>{org.domains}</small>
                        </Link>
                    ))
                }
            </div>
            <div className="createOrg">
                <button onClick={handlePath}>Create Organisation</button>
            </div>
        </div>
    </div>
  )
}

export default AllOrganizations