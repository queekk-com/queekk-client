import React from 'react'
import orgInfo from "../data/organizations-data"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AllOrganizations = () => {
    const orgData = useSelector(state => state.organizations);

    const navigate = useNavigate();
    const handlePath = () => {
        navigate('/dashboard/organisations/create/new')
    }

  return (
    <div className="orgMain">
        <div className="orgContent">
            <div className={orgInfo.length >= 12 ? "orgOrganisation length" : "orgOrganisation"}>
                {
                    orgData.map((org) => (
                        <Link to={org._id} key={org._id} className="disOrg">
                            <h3>{org.name}</h3>
                            <small>{org.domain}</small>
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