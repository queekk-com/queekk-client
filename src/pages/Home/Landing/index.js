import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
import Header from './Header';
import Main from './Main';
import './LandingPage.css'

function LandingPage() {

    return (
        <div className='landing-page'>
            <Nav />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default LandingPage