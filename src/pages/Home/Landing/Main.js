import React from 'react';
import './Main.css';
import samp1 from '../../../assets/images/landImg/example1.png';
import samp2 from '../../../assets/images/landImg/example2.png';
import { IoRocketSharp } from 'react-icons/io5';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi'

function Main() {
    return (
        <div className='landMain'>
            <div className="description">
                <h1>Why use <span className="highlight">Queekk</span> ?</h1>
                <p>
                    <span className="highlight">QUEEKK</span> is your gateway to real-time, lightning-fast interactions. Experience a future where instant communication meets seamless collaboration. Whether it's live chat, gaming, or collaborative work, our platform ensures you stay connected in real time. Join us and unlock the power of rapid, responsive communication. Welcome to the future of interaction with <span className="highlight">QUEEKK</span>.
                </p>
            </div>

            <div className="benefits">
                <div className="benHead">
                    <h1>Benefits of using our server</h1>
                </div>
                <div className="benMain">
                    <div className="ben">
                        <div className="benIcon">
                            <IoRocketSharp />
                        </div>
                        <h3>Performance</h3>
                        <p>
                            In most cases, the connection will be established with WebSocket, providing a low-overhead communication channel between the server and the client.
                        </p>
                    </div>
                    <div className="ben">
                        <div className="benIcon">
                            <AiOutlineSafetyCertificate />
                        </div>
                        <h3>Reliable</h3>
                        <p>
                            Rest assured! In case the WebSocket connection is not possible, it will fall back to HTTP long-polling. And if the connection is lost, the client will automatically try to reconnect.
                        </p>
                    </div>
                    <div className="ben">
                        <div className="benIcon">
                            <BiNetworkChart  />
                        </div>
                        <h3>Scalable</h3>
                        <p>
                            Scale to multiple servers and send events to all connected clients with ease.
                        </p>
                    </div>
                </div>
            </div>

            <div className="samples">
                <div className="sampHead">
                    <h1>Basic example</h1>
                </div>
                <div className="sampMain">
                    <div className="samps">
                        <img src={samp1} alt="" />
                    </div>
                    <div className="samps">
                        <img src={samp2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main