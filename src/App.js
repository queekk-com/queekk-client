import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
