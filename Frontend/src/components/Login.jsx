import { Link } from 'react-router-dom';
import Logo from '../assets/logo_main.png';
import Footer from './Footer.jsx';
import { useState } from 'react';
function Login() {
    const [state1,setState1]=useState("active");
    const [state2,setState2]=useState("");
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
                <div className="login-box">
                    <div className="login-wrapper">
                        <div className="login-left">
                            <div className="login-left-content">
                                <div className="login-logo">🎓</div>
                                <h1>University Affiliation Management System</h1>
                                <p>Streamline your affiliation process with our comprehensive digital platform</p>

                                <ul className="features-list">
                                    <li>Secure and encrypted login</li>
                                    <li>Real-time application tracking</li>
                                    <li>Multi-role support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="login-right">
                            <div className="login-header">
                                <h2>Welcome Back</h2>
                                <p>Login to access your account</p>
                            </div>

                            <div id="alertBox" className="alert"></div>

                            <div className="login-tabs">
                                <button className={`tab-btn ${state1}`} onClick={()=>{setState1("active");setState2("")}}>Institution</button>
                                <button className={`tab-btn ${state2}`} onClick={()=>{setState1("");setState2("active")}}>Administrator</button>
                            </div>
                            <div id="institution-tab" className={`tab-content ${state1}`}>
                                <form onsubmit="handleLogin(event, 'institution')">
                                    <div className="form-group">
                                        <label>Email Address / Institution ID</label>
                                        <div className="input-wrapper">
                                            <input type="text" name="username" placeholder="Enter your email or institution ID eg: user@gmail.com" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <div className="input-wrapper">
                                            <input type="password" id="institution-password" placeholder="Enter your password ****" required />
                                            <span className="password-toggle" onclick="togglePassword('institution-password')">👁️</span>
                                        </div>
                                    </div>
                                    <div className="form-options">
                                        <label className="remember-me">
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </label>
                                        <div className="forgot-password">
                                            <a href="#" onclick="showForgotPassword(); return false;">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-login">Login to Dashboard</button>
                                </form>


                                <div className="signup-link">
                                    Don't have an account? <a href="" onclick="showSignup(); return false;">Register as Institution</a>
                                </div>

                                <div className="info-box">
                                    <h4>Institution Login Access:</h4>
                                    <ul>
                                        <li>View and track affiliation applications</li>
                                        <li>Upload required documents</li>
                                        <li>Manage institution profile</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="admin-tab" className={`tab-content ${state2}`}>
                                <form onsubmit="handleLogin(event, 'admin')">
                                    <div className="form-group">
                                        <label>Admin Username</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">👤</span>
                                            <input type="text" name="username" placeholder="Enter admin username" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">🔒</span>
                                            <input type="password" id="admin-password" placeholder="Enter your password" required />
                                            <span className="password-toggle" onclick="togglePassword('admin-password')">👁️</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Role</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">🎭</span>
                                            <select name="role" required>
                                                <option value="">Select your role</option>
                                                <option value="super-admin">Super Administrator</option>
                                                <option value="university-admin">University Administrator</option>
                                                <option value="reviewer">Review Committee Member</option>
                                                <option value="auditor">Auditor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-options">
                                        <label className="remember-me">
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </label>
                                        <div className="forgot-password">
                                            <a href="#" onclick="showForgotPassword(); return false;">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-login">Login to Admin Panel</button>
                                </form>

                                <div className="signup-link">
                                    Need assistance? <a href="#" onclick="showSupport(); return false;">Contact Support</a>
                                </div>

                                <div className="info-box">
                                    <h4>Administrator Access Levels:</h4>
                                    <ul>
                                        <li>Super Admin: Full system control</li>
                                        <li>University Admin: Manage affiliations</li>
                                        <li>Reviewer: Review applications</li>
                                        <li>Auditor: Compliance monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Login;