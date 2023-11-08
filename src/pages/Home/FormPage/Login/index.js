import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import formLogo from '../../../../assets/svgs/logo.svg';
import '../form.css';
import { toast } from "react-toastify";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const btnRef = useRef(null);

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
      const response = await fetch('http://localhost/auth/login', {
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
      localStorage.setItem('token', data.data.token);
      toast.success(data.message);
      window.location.href = "/dashboard";
    } catch (error) {
      setLoading(false);
      if (error.message === "Failed to fetch") console.log("Please check your internet connection");
      else console.log("An error occured");
    }
  }

  return (
    <div className='logIn form'>
      <div className="formLogo">
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
              value={email}
              onChange={e => setEmail(e.target.value)} 
              type="email" />
          </div>
          <div className="frmCtrl">
            <label>Password</label>
            <input
              required
              value={password}
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