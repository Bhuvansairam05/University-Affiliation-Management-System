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
                            <p>Converting Educational partnerships through Technology</p>
                        </div>
                    </section>
                    <section className='intro-section'>
                        <div className="container">
                            <div class="intro-grid">
                                <div class="intro-text">
                                    <h2>Who We Are</h2>
                                    <p>The University Affiliation Management System (UAMS) is a comprehensive digital platform designed to revolutionize how universities manage their affiliation processes with colleges and educational institutions across the region.</p>
                                    <p>We bridge the gap between universities and affiliated colleges, providing a seamless, transparent, and efficient system that ensures quality education standards while simplifying administrative processes.</p>
                                    <p>Our platform serves as a central hub for affiliation applications, compliance monitoring, document management, and institutional partnerships, making the entire affiliation ecosystem more accessible and manageable for all stakeholders.</p>
                                </div>
                                <div class="intro-image">
                                    {/* <span>🏛️</span> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
export default About;