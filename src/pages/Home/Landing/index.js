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
        link.href = `${process.env.REACT_APP_SERVER}/assistant.css`;
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = `${process.env.REACT_APP_SERVER}/assistant/${process.env.REACT_APP_QUEEKK_KEY}`;
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