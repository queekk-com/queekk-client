import React from 'react'
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import msgs from "../data/messages-data"

const AllMessages = () => {
  return (
    <div className="msgContent">
        <div className="newMessages">
            <div className="newMsgHead">
                <h3>New messages({msgs.length})</h3>
                <div className="msgEdit">
                    <span>Edit</span>
                    <FaEdit className='editMsg'/>
                    <div className="editInfoMsg editNewInfo">
                        <span>Mark all as read</span>
                    </div>
                </div>
            </div>
            <div className={msgs.length > 8 ? "newMsg length" : "newMsg"}>
                {
                    msgs.map((msg) => (
                        <Link to='viewMessage' key={msg.id} className="notMsg">
                            <div className="msgSender">
                                <h3>{msg.customerEmail}</h3>
                                <p>{msg.time}</p>
                            </div>
                            <div className="msgMsg">
                                <p>{msg.customerMsg}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        <div className="viewMessages">
            <div className="viewMsgHead">
                <h3>Viewed</h3>
                <div className="msgEdit">
                    <span>Edit</span>
                    <FaEdit className='editMsg'/>
                    <div className="editInfoMsg">
                        <span>Select</span>
                        <span>Clear</span>
                    </div>
                </div>
            </div>
            <div className={msgs.length > 8 ? "viewMsg length" : "viewMsg"}>
                {
                    msgs.map((msg) => (
                        <Link to='viewMessage' key={msg.id} className="notMsg">
                            <div className="msgSender msgVwd">
                                <h3>{msg.customerEmail}</h3>
                                <p>{msg.time}</p>
                            </div>
                            <div className="msgMsg">
                                <p>{msg.customerMsg}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AllMessages