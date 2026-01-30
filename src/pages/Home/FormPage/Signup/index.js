import { useEffect, useState } from 'react';
import formLogo from '../../../../assets/svgs/logo.svg';
import '../form.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

function Signup() {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Queekk | Sign up";
    }, []);

    const formHandler = async (e) => {
        e.preventDefault();
        if (!email) return toast.error("Email is required");
        if (!firstname) return toast.error("Firstname is required");
        if (!lastname) return toast.error("Lastname is required");
        if (!password) return toast.error("Password is required");
        if (password.length < 8) return toast.error("Password must be at least 8 characters long");
        if (password !== passwordConfirmation) return toast.error("Password and password confirmation do not match");
        if (!terms) return toast.error("You must agree to the terms and conditions");

        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_SERVER}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email, 
                    firstname,
                    lastname,
                    password, 
                    passwordConfirmation 
                })
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
        <div className='form-page'>
            <motion.div 
                className="auth-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="auth-header">
                    <div className="auth-logo" onClick={() => navigate("/")}>
                        <img src={formLogo} alt="Queekk Logo" />
                        <h1>Queekk<span>.</span></h1>
                    </div>
                    <h2>Create an account</h2>
                    <p>Start your 14-day free trial today.</p>
                </div>

                <form onSubmit={formHandler} className='auth-form' autoComplete="off">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>First Name</label>
                            <div className="input-wrapper">
                                <FiUser className="input-icon" />
                                <input 
                                    className="form-input"
                                    required
                                    autoFocus
                                    placeholder='John'
                                    name='firstname'
                                    value={firstname}
                                    onChange={e => setFirstname(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <div className="input-wrapper">
                                <FiUser className="input-icon" />
                                <input 
                                    className="form-input"
                                    required
                                    placeholder='Doe'
                                    name='lastname'
                                    value={lastname}
                                    onChange={e => setLastname(e.target.value)} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <div className="input-wrapper">
                            <FiMail className="input-icon" />
                            <input 
                                className="form-input"
                                required
                                placeholder='john@example.com'
                                name='email'
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-wrapper">
                            <FiLock className="input-icon" />
                            <input 
                                className="form-input"
                                required
                                placeholder='••••••••'
                                name='password'
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <div className="input-wrapper">
                            <FiLock className="input-icon" />
                            <input 
                                className="form-input"
                                required
                                placeholder='••••••••'
                                name='passwordConfirmation'
                                type="password"
                                value={passwordConfirmation}
                                onChange={e => setPasswordConfirmation(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-options">
                        <label className="checkbox-wrapper">
                            <input 
                                type="checkbox" 
                                checked={terms}
                                onChange={e => setTerms(e.target.checked)}
                            />
                            <span className="checkmark"></span>
                            <span>I agree to the <Link to="/terms" style={{color: 'var(--accentColor)', textDecoration: 'none'}}>Terms</Link> and <Link to="/privacy" style={{color: 'var(--accentColor)', textDecoration: 'none'}}>Privacy Policy</Link></span>
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={loading || !terms || !email || !password || !passwordConfirmation}
                    >
                        {loading ? <div className="spinner"></div> : (
                            <>
                                Create account <FiArrowRight />
                            </>
                        )}
                    </button>
                </form>

                <div className="auth-footer">
                    Already have an account? <Link to="/login">Sign in</Link>
                </div>
            </motion.div>
        </div>
    );
}

export default Signup;
