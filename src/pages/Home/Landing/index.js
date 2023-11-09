import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
import Header from './Header';
import Main from './Main';
import "./LandingPage.css"
import { useEffect } from 'react';

function LandingPage() {

    // useEffect(() => {
    //     const link = document.createElement('link');
    //     link.rel = 'stylesheet';
    //     link.href = "http://localhost/assistant.css";
    //     document.head.appendChild(link);

    //     const script = document.createElement('script');
    //     script.src = "http://localhost/assistant/7329723";
    //     script.async = true;
    //     document.head.appendChild(script)
    // }, []);

    return (
        <div className='landing-page'>
            {/* <div id='queekk-container' /> */}
            <Nav />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default LandingPage