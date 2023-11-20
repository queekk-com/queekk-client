import { useEffect, useRef, useState } from 'react';
import formLogo from '../../../../assets/svgs/logo.svg';
import '../form.css';
import  { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [terms, setTerms] = useState(false);
    const [notify, setNotify] = useState(true);
    const [loading, setLoading] = useState(false);
    const btnRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Queekk | Sign up";
        btnRef.current.disabled = loading || !terms || !email || !password || !passwordConfirmation;
    }, [loading, terms, email, password, passwordConfirmation]);

    const formHandler = async (e) => {
        e.preventDefault();
        if (!email) return toast.error("Email is required");
        if (!password) return toast.error("Password is required");
        if (password.length < 8) return toast.error("Password must be at least 8 characters long");
        if (password !== passwordConfirmation) return toast.error("Password and password confirmation do not match");
        if (!terms) return toast.error("You must agree to the terms and conditions");
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_SERVER}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, passwordConfirmation })
            });
            setLoading(false);
            const data = await response.json();
            if (data.status !== "success") {
                toast.error(data.message);
                return;
            }
            toast.success(data.data.message); 
            navigate('/login'); 
        } catch (error) {
            setLoading(false);
            if (error.message === "Failed to fetch") toast.error("Please check your internet connection");
            else toast.error("An error occured");
        }
    }
    
    return (
        <div className='signUp form'>
            <div className="formLogo" onClick={() => navigate("/")}>
                <h1>QUEEKK</h1>
                <img src={formLogo} alt="" />
            </div>
            <form onSubmit={formHandler} className='logCredentials' autoComplete="off">
                <div className="frmValue">
                    <div className="frmCtrl">
                        <label>Email</label>
                        <input 
                            required
                            autoFocus
                            placeholder='support@queekk.com'
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="frmCtrl">
                        <label>Password (8 characters minimum)</label>
                        <input 
                            required
                            placeholder='********'
                            type="password"
                            autoComplete='new-password'
                            value={password}
                            minLength={8}
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="frmCtrl">
                        <label>Password Confirmation</label>
                        <input 
                            required
                            placeholder='********'
                            type="password"
                            value={passwordConfirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)} />
                    </div>
                </div>
                <div className="terms">
                    <div className="frmTerm">
                        <input
                            required
                            checked={terms}
                            onChange={e => setTerms(e.target.checked)} 
                            type="checkbox"  />
                        <span>I agree to the <Link>Terms of Service</Link>, <Link>General Terms and Conditions</Link> and <Link>Privacy Policy</Link>.</span>
                    </div>
                    <div className="frmTerm">
                        <input
                            checked={notify}
                            onChange={e => setNotify(e.target.checked)} 
                            type="checkbox" />
                        <span>Notify me about new features and special offers.</span>
                    </div>
                </div>
                <div className="frmBtn">
                    <button type='submit' ref={btnRef}>Sign up</button>
                </div>
                <div className="frmAlready">
                    <span>Already have an account ? <Link to={"/login"}>click here to login</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Signup