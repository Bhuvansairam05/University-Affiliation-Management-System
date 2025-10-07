import { Link } from "react-router-dom";
function HomeContent() {
    return (
        <>
            <div id="home" className="page active">
                <section className="hero">
                    <div className="container">
                        <h1>Gradious Affiliation Management System</h1>
                        <p>Streamline your institutional partnerships and accreditation processes with our comprehensive platform</p>
                        <div className="cta-buttons">
                            <Link to='/login'><button className="btn btn-primary">Get Started</button></Link>
                            <Link to='/about'><button className="btn btn-secondary">Learn More</button></Link>
                        </div>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <h2 className="section-title">Key Features</h2>
                        <p className="section-subtitle">Everything you need to manage university affiliations efficiently</p>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">📋</div>
                                <h3>Application Management</h3>
                                <p>Submit, track, and manage affiliation applications with automated workflows and real-time status updates</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h3>Compliance Tracking</h3>
                                <p>Monitor accreditation standards, generate compliance reports, and ensure all requirements are met</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📄</div>
                                <h3>Document Management</h3>
                                <p>Securely store and organize institutional documents, certificates, and accreditation materials</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">👥</div>
                                <h3>Multi-Role Access</h3>
                                <p>Role-based access for universities, colleges, administrators, and review committees</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🔔</div>
                                <h3>Automated Notifications</h3>
                                <p>Receive alerts for application updates, renewal deadlines, and important announcements</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="stats">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>Affiliated Institutions</p>
                            </div>
                            <div className="stat-item">
                                <h3>98%</h3>
                                <p>Approval Rate</p>
                            </div>
                            <div className="stat-item">
                                <h3>24/7</h3>
                                <p>System Availability</p>
                            </div>
                            <div className="stat-item">
                                <h3>15 Days</h3>
                                <p>Average Processing Time</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default HomeContent;