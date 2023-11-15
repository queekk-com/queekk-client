import React from 'react';
import logoImg from '../../../assets/svgs/logo.svg';
import './message.css';
import { FaEdit } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';

function Messages() {
    const msgs = [
        {
            id: 1,
            customerEmail: 'user1@example.com',
            time: '09:30am',
            customerMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis leo vel enim aliquam, nec cursus justo auctor.'
        },
        {
            id: 2,
            customerEmail: 'user2@example.com',
            time: '10:15am',
            customerMsg: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ac lorem vestibulum.'
        },
        {
            id: 3,
            customerEmail: 'user3@example.com',
            time: '11:00am',
            customerMsg: 'Fusce quis justo et ipsum ullamcorper tincidunt a sed turpis. Vivamus hendrerit velit eu luctus pellentesque.'
        },
        {
            id: 4,
            customerEmail: 'user4@example.com',
            time: '11:45am',
            customerMsg: 'Integer eu arcu ac neque fringilla fermentum. Donec maximus, quam id hendrerit vestibulum, arcu mi tempor nisi.'
        },
        {
            id: 5,
            customerEmail: 'user5@example.com',
            time: '12:30pm',
            customerMsg: 'Cras vitae ligula vehicula, viverra purus vel, convallis tortor. Nam vel neque lobortis, pulvinar eros non, tincidunt nunc.'
        },
        {
            id: 6,
            customerEmail: 'user6@example.com',
            time: '13:15pm',
            customerMsg: 'Aliquam id augue vitae quam volutpat tristique. Proin commodo mi non augue vulputate tincidunt.'
        },
        {
            id: 7,
            customerEmail: 'user7@example.com',
            time: '14:00pm',
            customerMsg: 'Maecenas euismod lacus vel lectus efficitur, nec posuere arcu viverra. Fusce scelerisque, lorem sed suscipit.'
        },
        {
            id: 8,
            customerEmail: 'user8@example.com',
            time: '14:45pm',
            customerMsg: 'Aenean vel odio eu nulla interdum fermentum. Morbi tincidunt elit sit amet felis tempus, sed bibendum turpis.'
        },
        {
            id: 9,
            customerEmail: 'user9@example.com',
            time: '15:30pm',
            customerMsg: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer id ultricies felis.'
        },
        {
            id: 10,
            customerEmail: 'user10@example.com',
            time: '16:15pm',
            customerMsg: 'Duis auctor nunc vel nisi lobortis eleifend. Suspendisse potenti. Proin eleifend eros sed sapien feugiat tempus.'
        }
    ]

    return (
        <div className='message'>
            <div className="dashNav">
                <div className="dashTitle">
                    <h3>Messages</h3>
                </div>
                <div className="dashLogo">
                    <h3>QUEEKK</h3>
                    <div className="logo__container">
                        <img src={logoImg} alt="" />
                    </div>
                </div>
            </div>
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
            <div className="msgOutlet">
                <Outlet />
            </div>
        </div>
    )
}

export default Messages