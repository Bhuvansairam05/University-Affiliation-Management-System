import { Link } from 'react-router-dom';
import Logo from '../assets/logo_main.png';
import Footer from './Footer.jsx';
import University from '../assets/University.jpg'
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
                                    <img src={University} alt="" height={200} width={200} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="mission-vision-section">
                        <div class="container">
                            <div class="section-header">
                                <h2>Our Mission & Vision</h2>
                                <p>Guiding principles that drive our commitment to excellence in education</p>
                            </div>
                            <div class="mission-vision-grid">
                                <div class="mv-card">
                                    <div class="mv-icon">🎯</div>
                                    <h3>Our Mission</h3>
                                    <p>To empower educational institutions with cutting-edge technology that simplifies affiliation management, ensures compliance with accreditation standards, and fosters stronger partnerships between universities and colleges. We strive to eliminate bureaucratic barriers and create a transparent, efficient ecosystem that benefits students, institutions, and the broader education community.</p>
                                </div>
                                <div class="mv-card">
                                    <div class="mv-icon">🔭</div>
                                    <h3>Our Vision</h3>
                                    <p>To become the leading platform for educational affiliation management globally, setting new standards for efficiency, transparency, and quality in higher education administration. We envision a future where every institution has equal access to quality affiliation processes, enabling them to focus on what matters most - providing excellent education to students.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="features-section">
                        <div class="container">
                            <div class="section-header">
                                <h2>What Makes Us Different</h2>
                                <p>Comprehensive solutions for modern affiliation management</p>
                            </div>
                            <div class="features-grid">
                                <div class="feature-item">
                                    <div class="feature-number">1</div>
                                    <h4>Digital Application Process</h4>
                                    <p>Complete online submission system with document upload, real-time tracking, and automated workflow management from application to approval.</p>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-number">2</div>
                                    <h4>Compliance Monitoring</h4>
                                    <p>Automated compliance tracking with customizable checklists, regular audits, and instant notifications for renewal deadlines and requirement updates.</p>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-number">3</div>
                                    <h4>Multi-Level Access Control</h4>
                                    <p>Role-based permissions for institutions, administrators, review committees, and auditors with secure authentication and data protection.</p>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-number">5</div>
                                    <h4>Document Management</h4>
                                    <p>Secure cloud storage for certificates, reports, and institutional documents with version control, easy retrieval, and backup systems.</p>
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