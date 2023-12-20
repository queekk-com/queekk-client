import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Error from './pages/Error';
import LandingPage from './pages/Home/Landing';
import Signup from './pages/Home/FormPage/Signup';
import Login from './pages/Home/FormPage/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DisplayDashboard from './pages/Dashboard/mainPage';
import Tokens from './pages/Dashboard/generateToken/Tokens';
import Settings from './pages/Dashboard/settings/Settings';
import OverView from './pages/Dashboard/dashboardOverview/OverView';
import Messages from './pages/Dashboard/messages';
import useLocalStorage from "use-local-storage";
import { createContext } from 'react';
import OrgForm from './components/organisationComponent/OrgForm';
import OrgList from './components/organisationComponent/OrgList';
import ViewMsg from './pages/Dashboard/messages/viewMessage/ViewMsg';
import AllMessages from './pages/Dashboard/messages/allMessages/AllMessages';
import Organisations from './pages/Dashboard/organisations';
import AllOrganizations from './pages/Dashboard/organisations/allOrganizations/AllOrganizations';

export const ThemeContext = createContext(null);

function App() {
  // website theme functionality
  const [themeDecor, setThemeDecor] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    const newTheme = themeDecor === 'light' ? 'dark' : 'light';
    setThemeDecor(newTheme);
  };

    //handling the menu bar
    const [openMenu, setOpenMenu] = useState(false);

    const handleSideMenu = () => {
      setOpenMenu(!openMenu);
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
            <Route path='dashboard' element={<DisplayDashboard openMenu={openMenu} handleSideMenu={handleSideMenu} />}>
              <Route index element={<OverView openMenu={openMenu} handleSideMenu={handleSideMenu}/>} />
              <Route path='organizations' element={<Organisations openMenu={openMenu} handleSideMenu={handleSideMenu} />}>
                <Route index element={<AllOrganizations />} />
                <Route path='create/new' element={<OrgForm />} />
                <Route path=':id' element={<OrgList />} />
              </Route>
              <Route path='tokens' element={<Tokens openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='messages' element={<Messages openMenu={openMenu} handleSideMenu={handleSideMenu} />}>
                <Route index element={<AllMessages />} />
                <Route path=':id' element={<ViewMsg />} />
              </Route>
              <Route path='settings' element={<Settings openMenu={openMenu} handleSideMenu={handleSideMenu}/>} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
