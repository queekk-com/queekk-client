import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import formLogo from '../../../../assets/svgs/logo.svg';
import '../form.css';
import { toast } from "react-toastify";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Queekk | Log in";
  }, []);

  const formHandler = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required");
    if (!password) return toast.error("Password is required");
    
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_SERVER}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      setLoading(false);
      const data = await response.json();
      if (data.status !== "success") {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      localStorage.setItem('token', data.data.token);
      navigate('/dashboard');
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
          <h2>Welcome back</h2>
          <p>Please enter your details to sign in.</p>
        </div>

        <form onSubmit={formHandler} className='auth-form'>
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <FiMail className="input-icon" />
              <input
                className="form-input"
                autoFocus
                required
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                type="email" 
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
                value={password}
                placeholder="••••••••"
                onChange={e => setPassword(e.target.value)} 
                type="password" 
              />
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <Link to="#" className="forgot-password">Forgot password?</Link>
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading || !email || !password}
          >
            {loading ? <div className="spinner"></div> : (
              <>
                Sign in <FiArrowRight />
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Login;
