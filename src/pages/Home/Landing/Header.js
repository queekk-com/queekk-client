import headLogo from '../../../assets/svgs/logo.svg';
import './Head.css';
import Globe from './components/Globe';

function Header() {

  return (
    <div className='landHead'>
      <div className='logo__container'>
        <img src={headLogo} alt="" />
      </div>
      <h1>Experience the Future of <br/> Real-Time Interaction</h1>
      <p>
        Discover <span className="highlight">QUEEKK</span>, where real-time communication and lightning-fast responses come together to redefine the way you connect and collaborate.
      </p>
      <div className="headBtn">
        <button>Get started</button>
        <button>Documentation</button>
      </div>
      {/* GLOBE WAS COMMENTED DUE TO PERFORMANCE ISSUES */}
      {/* <Globe /> */}
    </div>
  )
}

export default Header