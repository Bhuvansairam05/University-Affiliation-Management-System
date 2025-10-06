import { Link } from "react-router-dom";
function HomeContent() {
    return (
        <>
            <div id="home" class="page active">
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

                <section class="features">
                    <div class="container">
                        <h2 class="section-title">Key Features</h2>
                        <p class="section-subtitle">Everything you need to manage university affiliations efficiently</p>
                        <div class="features-grid">
                            <div class="feature-card">
                                <h3>Application Management</h3>
                                <p>Submit, track, and manage affiliation applications with automated workflows and real-time status updates</p>
                            </div>
                            <div class="feature-card">
                                <h3>Compliance Tracking</h3>
                                <p>Monitor accreditation standards, generate compliance reports, and ensure all requirements are met</p>
                            </div>
                            <div class="feature-card">
                                <h3>Document Management</h3>
                                <p>Securely store and organize institutional documents, certificates, and accreditation materials</p>
                            </div>
                            <div class="feature-card">
                                <h3>Multi-Role Access</h3>
                                <p>Role-based access for universities, colleges, administrators, and review committees</p>
                            </div>
                            <div class="feature-card">
                                <h3>Automated Notifications</h3>
                                <p>Receive alerts for application updates, renewal deadlines, and important announcements</p>
                            </div>
                            <div class="feature-card">
                                <h3>Analytics Dashboard</h3>
                                <p>Visualize affiliation data, track institutional performance, and generate detailed reports</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="stats">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <h3>500+</h3>
                        <p>Affiliated Institutions</p>
                    </div>
                    <div class="stat-item">
                        <h3>98%</h3>
                        <p>Approval Rate</p>
                    </div>
                    <div class="stat-item">
                        <h3>24/7</h3>
                        <p>System Availability</p>
                    </div>
                    <div class="stat-item">
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