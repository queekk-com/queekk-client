import React from "react";
import { Link } from "react-router-dom";
import formLogo from '../../../../assets/svgs/logo.svg';
import '../form.css';

const Login = () => {
  return (
    <div className='logIn form'>
      <div className="formLogo">
        <h1>QUEEKK</h1>
        <img src={formLogo} alt="" />
      </div>
      <form action="" className='logCredentials'>
        <div className="frmValue">
          <div className="frmCtrl">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="frmCtrl">
            <label>Password</label>
            <input type="password" />
          </div>
        </div>
        <div className="frmBtn">
          <button>Log in</button>
        </div>
        <div className="frmAlready">
          <span>Don't have an account yet ? <Link>click here to sign up</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Login