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
        script.src = `${process.env.REACT_APP_SERVER}/assistant/q-62ddb92be70b94ce43a08dac78bf0f418ff58402`;
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