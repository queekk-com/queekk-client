import React from 'react';
import formLogo from '../../../../assets/svgs/logo.svg';
import '../form.css';
import  { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='signUp form'>
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
                        <label>Password (8 characters minimum)</label>
                        <input type="password" />
                    </div>
                    <div className="frmCtrl">
                        <label>Password Confirmation</label>
                        <input type="password" />
                    </div>
                </div>
                <div className="terms">
                    <div className="frmTerm">
                        <input type="checkbox" />
                        <span>I agree to the <Link>Terms of Service</Link>, <Link>General Terms and Conditions</Link> and <Link>Privacy Policy</Link>.</span>
                    </div>
                    <div className="frmTerm">
                        <input type="checkbox" />
                        <span>Notify me about new features and special offers.</span>
                    </div>
                </div>
                <div className="frmBtn">
                    <button>Sign up</button>
                </div>
                <div className="frmAlready">
                    <span>Already have an account ? <Link>click here to Log-in</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Signup