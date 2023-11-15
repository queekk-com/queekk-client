import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Error from './pages/Error';
import LandingPage from './pages/Home/Landing';
import Signup from './pages/Home/FormPage/Signup';
import Login from './pages/Home/FormPage/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DisplayDashboard from './pages/Dashboard/mainPage';
import Organisation from './pages/Dashboard/organisation/Organisation';
import Tokens from './pages/Dashboard/generateToken/Tokens';
import Settings from './pages/Dashboard/settings/Settings';
import OverView from './pages/Dashboard/dashboardOverview/OverView';
import Messages from './pages/Dashboard/messages/Messages';
import useLocalStorage from "use-local-storage";
import { createContext } from 'react';
import OrgForm from './components/organisationComponent/OrgForm';
import OrgList from './components/organisationComponent/OrgList';
import ViewMsg from './components/messageComponent/ViewMsg';

export const ThemeContext = createContext(null);

function App() {
  // website theme functionality
  const [themeDecor, setThemeDecor] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    const newTheme = themeDecor === 'light' ? 'dark' : 'light';
    setThemeDecor(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ themeDecor, toggleTheme }}>
      <div className="App" data-theme={themeDecor}>
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
            <Route path='dashboard' element={<DisplayDashboard />}>
              <Route path='updates' element={<OverView />} />
              <Route path='organisation' element={<Organisation />}>
                <Route path='orgForm' element={<OrgForm />} />
                <Route path='organisationId' element={<OrgList />} />
              </Route>
              <Route path='tokens' element={<Tokens />} />
              <Route path='messages' element={<Messages />}>
                <Route path='viewMessage' element={<ViewMsg />} />
              </Route>
              <Route path='settings' element={<Settings />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
