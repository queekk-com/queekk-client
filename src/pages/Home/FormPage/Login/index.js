import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import formLogo from '../../../../assets/svgs/logo.svg';
import '../form.css';
import { toast } from "react-toastify";
import { setUserData } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Queekk | Log in";
    btnRef.current.disabled = loading || !email || !password;
  }, [loading, email, password])

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
    <div className='logIn form'>
      <div className="formLogo" onClick={() => navigate("/")}>
        <h1>QUEEKK</h1>
        <img src={formLogo} alt="" />
      </div>
      <form onSubmit={formHandler} className='logCredentials'>
        <div className="frmValue">
          <div className="frmCtrl">
            <label>Email</label>
            <input
              autoFocus
              required
              placeholder="queekk@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)} 
              type="email" />
          </div>
          <div className="frmCtrl">
            <label>Password</label>
            <input
              required
              value={password}
              placeholder="********"
              onChange={e => setPassword(e.target.value)} 
              type="password" />
          </div>
        </div>
        <div className="frmBtn">
          <button type="submit" ref={btnRef}>Log in</button>
        </div>
        <div className="frmAlready">
          <span>Don't have an account yet ? <Link to={"/signup"}>click here to sign up</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Login