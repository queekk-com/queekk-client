import React from 'react';
import headLogo from '../images/logoImg/chatAi.png';
import './style/head.css';

function Header() {
  return (
    <div className='landHead'>
      <img src={headLogo} alt="" />
      <h1>Experience the Future of <br/> Real-Time Interaction</h1>
      <p>
        Discover <span className="highlight">QUEEKK</span>, where real-time communication and lightning-fast responses come together to redefine the way you connect and collaborate.
      </p>
      <div className="headBtn">
        <button>Get started</button>
        <button>Documentation</button>
      </div>
    </div>
  )
}

export default Header