import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './viewMsg.css';

function ViewMsg() {
  return (
    <div className="msgOutlet">
      <div className='viewUserMsg'>
        <Link to='/dashboard/messages' className="backMsg">
          <FaArrowLeftLong />
        </Link>
        <div className="viewMsgInfo">
          <div className="viewHeadTime">
            <h3>user1@gmail.com</h3>
            <p>16,October 2023. 10:25am</p>
          </div>
          <div className="viewMainMsg">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quis doloremque dolore possimus architecto voluptatibus mollitia, illo, aperiam dolores aspernatur culpa nemo quibusdam voluptate amet animi! Repudiandae culpa in eos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewMsg