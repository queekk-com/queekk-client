import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
import Header from './Header';
import Main from './Main';
import './LandingPage.css'
import { useEffect } from "react";

function LandingPage() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        // link.href = `${process.env.REACT_APP_SERVER}/assistant.css`;
        link.href = `https://4fb8-102-91-5-90.ngrok-free.app/assistant.css`;
        document.head.appendChild(link);

        const script = document.createElement("script");
        // script.src = `${process.env.REACT_APP_SERVER}/assistant/q-0ad7b1bd9679720ec53d60be30ec4e3ec91adcc1`;
        script.src = `https://4fb8-102-91-5-90.ngrok-free.app/assistant/q-0ad7b1bd9679720ec53d60be30ec4e3ec91adcc1`;
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(script);
        }
    }, []);

    return (
        <div className='landing-page'>
            <Nav />
            <Header />
            <Main />
            <Footer />
            <div id="queekk-container" />
        </div>
    )
}

export default LandingPage