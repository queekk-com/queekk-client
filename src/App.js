import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Error from './pages/Error';
import LandingPage from './pages/Home/Landing';
import Signup from './pages/Home/FormPage/Signup';
import Login from './pages/Home/FormPage/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
