import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import msgs from "../data/messages-data"
import { useSelector } from 'react-redux';

const AllMessages = () => {
    const messageData = useSelector(state => state.messages);
    const [ msgOpt1, setMsgOpt1 ] = useState(false);
    const handleMsgOpt1 = () => {
        setMsgOpt1(!msgOpt1);
    };

    const [ msgOpt2, setMsgOpt2 ] = useState(false);
    const handleMsgOpt2 = () => {
        setMsgOpt2(!msgOpt2);
    };

    return (
        <div className="msgContent">
            <div className="newMessages">
                <div className="newMsgHead">
                    <h3>Unread messages ({messageData.filter(msg => !msg.read).length})</h3>
                    <div className="msgEdit">
                        <div onClick={handleMsgOpt1} className="msgEditMain">
                            <span>Edit</span>
                            <FaEdit className='editMsg' />
                        </div>
                        <div className={msgOpt1 ? "editInfoMsg editNewInfo active" : "editNewInfo editInfoMsg"}>
                            <span>Mark all as read</span>
                        </div>
                    </div>
                </div>
                <div className={msgs.length > 8 ? "newMsg length" : "newMsg"}>
                    {
                        messageData.filter(msg => !msg.read)
                        .map((msg) => (
                            <Link to={msg._id} key={msg._id} className="notMsg">
                                <div className="msgSender">
                                    <h3>{msg.sender}</h3>
                                    <p>{msg.createdAt}</p>
                                </div>
                                <div className="msgMsg">
                                    <p>{msg.message}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="viewMessages">
                <div className="viewMsgHead">
                    <h3>Read messages</h3>
                    <div className="msgEdit">
                        <div onClick={handleMsgOpt2} className="msgEditMain">
                            <span>Edit</span>
                            <FaEdit className='editMsg' />
                        </div>
                        <div className={msgOpt2 ? "editInfoMsg edit2 active" : "editInfoMsg edit2"}>
                            <span>Select</span>
                            <span>Clear</span>
                        </div>
                    </div>
                </div>
                <div className={messageData.filter(msg => msg.read).length > 8 ? "viewMsg length" : "viewMsg"}>
                    {
                        messageData.filter(msg => msg.read)
                        .map((msg) => (
                            <Link to={msg._id} key={msg._id} className="notMsg">
                                <div className="msgSender msgVwd">
                                    <h3>{msg.sender}</h3>
                                    <p>{msg.createdAt}</p>
                                </div>
                                <div className="msgMsg">
                                    <p>{msg.message}</p>
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