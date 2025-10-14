import { Link } from 'react-router-dom';
import Logo from '../assets/logo_main.png';
import Footer from './Footer.jsx';
function Contact() {
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
                <section className="hero">
                    <div className="hero-content">
                        <h1>Contact Us</h1>
                        <p>We're here to help! Get in touch with our team for any queries or support</p>
                    </div>
                </section>

                <section className='contact-section'>
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-form-wrapper">
                                <h3>Send us a Message</h3>
                                <div id="alertBox" className="alert"></div>
                                <form id="contactForm">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Full Name <span className="required">*</span></label>
                                            <div className="input-wrapper">
                                                <input type="text" name="fullName" placeholder="Enter your full name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address <span className="required">*</span></label>
                                            <div className="input-wrapper">
                                                <input type="email" name="email" placeholder="your.email@example.com" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <div className="input-wrapper">
                                                <input type="tel" name="phone" placeholder="+1 (555) 123-4567"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Institution/Organization</label>
                                            <div className="input-wrapper">
                                                <input type="text" name="institution" placeholder="Your institution name"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Subject <span className="required">*</span></label>
                                        <div className="input-wrapper">
                                            <select name="subject" required>
                                                <option value="">Select a subject</option>
                                                <option value="affiliation">Affiliation Inquiry</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="general">General Information</option>
                                                <option value="complaint">Complaint/Feedback</option>
                                                <option value="partnership">Partnership Opportunity</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Message <span className="required">*</span></label>
                                        <div className="input-wrapper">
                                            <textarea name="message" placeholder="Type your message here..." required></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn-submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Contact;