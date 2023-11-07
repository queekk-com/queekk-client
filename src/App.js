import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Error from './pages/Error';
import LandingPage from './pages/landingPage/LandingPage';
import SignUp from './pages/formPage/components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="*" element={<Error />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
