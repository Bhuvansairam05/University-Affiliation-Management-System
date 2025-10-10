import { Link } from 'react-router-dom';
import Logo from '../assets/logo_main.png';
import Footer from './Footer.jsx';
function About() {
    return (
        <>
            <header>
                <div className="header-left">
                    <div className="logo"><img src={Logo} alt="" height={50} width={50} /></div>
                    <h1>GAMS</h1>
                </div>
                <div className="header-right">
                    <Link to="/"><button className="nav-link">Home</button></Link>
                    <Link to="/about"><button className="nav-link">About</button></Link>
                    <Link to="/contact"><button className="nav-link">Contact Us</button></Link>
                    <Link to="/login"><button className="nav-link">Login</button></Link>
                </div>
            </header>
            <main>
                <div id='about'>
                    <section className="hero">
                        <div className="container">
                            <h1>About Us</h1>
                            <p>Converting Educational partnerships into Technology</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
export default About;