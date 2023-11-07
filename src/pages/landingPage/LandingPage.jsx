import React from 'react'
import NavBar from '../../components/navbarAndFooter/navbar/NavBar';
import Header from '../../components/landingPageContent/Header';
import Main from '../../components/landingPageContent/Main';
import Footer from '../../components/navbarAndFooter/footer/Footer';

function LandingPage() {
    return (
        <div>
            <NavBar />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default LandingPage