import React from 'react';
import './Main.css';
import { IoRocketSharp } from 'react-icons/io5';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi'
import CodeBlock from '../../../components/CodeBlock';

function Main() {
    return (
        <div className='landMain'>
            <div className='description'>
                <h1>Why use <span className='highlight'>Queekk</span> ?</h1>
                <p>
                    <span className='highlight'>QUEEKK</span> is your gateway to real-time, lightning-fast interactions. Experience a future where instant communication meets seamless collaboration. Whether it's live chat, gaming, or collaborative work, our platform ensures you stay connected in real time. Join us and unlock the power of rapid, responsive communication. Welcome to the future of interaction with <span className="highlight">QUEEKK</span>.
                </p>
            </div>

            <div className='benefits'>
                <div className='benHead'>
                    <h1>Benefits of using our server</h1>
                </div>
                <div className='benMain'>
                    <div className='ben'>
                        <div className='benIcon'>
                            <IoRocketSharp />
                        </div>
                        <h3>Performance</h3>
                        <p>
                            In most cases, the connection will be established with WebSocket, providing a low-overhead communication channel between the server and the client.
                        </p>
                    </div>
                    <div className='ben'>
                        <div className='benIcon'>
                            <AiOutlineSafetyCertificate />
                        </div>
                        <h3>Reliable</h3>
                        <p>
                            Rest assured! In case the WebSocket connection is not possible, it will fall back to HTTP long-polling. And if the connection is lost, the client will automatically try to reconnect.
                        </p>
                    </div>
                    <div className='ben'>
                        <div className='benIcon'>
                            <BiNetworkChart  />
                        </div>
                        <h3>Scalable</h3>
                        <p>
                            Scale to multiple servers and send events to all connected clients with ease.
                        </p>
                    </div>
                </div>
            </div>

            <div className='samples'>
                <div className='sampHead'>
                    <h1>Basic example</h1>
                </div>
                <div className='sampMain'>
                    <CodeBlock>
                        <p>
                            {"<"}<span class="tag-name">head</span>{" >"}
                        </p>
                        <p className='tab'>
                            {"<"}<span class="tag-name">link</span> <span class="tag-attribute">rel</span>=<span class="string">"stylesheet" </span> 
                            <span class="tag-attribute">href</span>=<span class="string">"{process.env.REACT_APP_SERVER}/assistant.css"</span>
                            <span class="tag-punctuation">{" />"}</span>
                        </p>
                        <p className='tab'>
                            {"<"}<span class="tag-name">script</span> <span class="tag-attribute">async </span> 
                            <span class="tag-attribute">src</span>=<span class="string">"{process.env.REACT_APP_SERVER}/assistant/7329723"</span>
                            <span class="tag-punctuation">{" >"}</span>
                            {"<"}<span class="tag-name">/script</span>{">"}
                        </p>
                        <p>
                            {"<"}<span class="tag-name">/head</span>{">"}
                        </p>
                        <br />
                        <p>
                            {"<"}<span class="tag-name">body</span>{">"}
                        </p>
                        <p className='tab'>
                            {"<"}<span class="tag-name">div</span> <span class="tag-attribute">id</span>=<span class="string">"queekk-container"</span>{" ></"}<span class="tag-name">div</span>{" >"}
                        </p>
                        <p>
                            {"<"}<span class="tag-name">/body</span>{">"}
                        </p>
                    </CodeBlock>
                    <CodeBlock>
                        <p>
                            import <span class="keyword">{"{ useEffect }"}</span> from 
                            <span class="string">"React"</span>;
                        </p>
                        <br />
                        <p>
                            <span class="keyword">useEffect</span>(<span class="function">() {` => {`}</span>
                        </p>
                        <p class='tab'>
                            <span class="keyword">const</span> <span className='tag-attribute'>link</span> = document.createElement(<span class="string">"link"</span>);
                        </p>
                        <p class='tab'>
                            link.rel = <span class="string">"stylesheet"</span>;
                        </p>
                        <p class='tab'>
                            link.href = <span class="string">"{process.env.REACT_APP_SERVER}/assistant.css"</span>;
                        </p>
                        <p class='tab'>
                            document.head.appendChild(link);
                        </p>
                        <br />
                        <p class='tab'>
                            <span class="keyword">const</span> <span className='tag-attribute'>script</span> = document.createElement(<span class="string">"script"</span>);
                        </p>
                        <p class='tab'>
                            script.src = <span class="string">"{process.env.REACT_APP_SERVER}/assistant/7329723"</span>;
                        </p>
                        <p class='tab'>
                            script.async = <span class="keyword">true</span>;
                        </p>
                        <p class='tab'>
                            document.head.appendChild(script);
                        </p>
                        <p>
                            <span class="function">{"}"}</span>, []);
                        </p>
                        <br />
                        <p>
                            return {"<"}<span class="jsx-tag">div</span> <span class="jsx-attribute">id</span>=<span class="string">"queekk-container"</span> 
                            <span class="jsx-punctuation">{" />"}</span>
                        </p>
                    </CodeBlock>
                </div>
            </div>
        </div>
    )
}

export default Main