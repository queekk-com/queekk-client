import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Error from './pages/Error';
import LandingPage from './pages/Home/Landing';
import Signup from './pages/Home/FormPage/Signup';
import Login from './pages/Home/FormPage/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
