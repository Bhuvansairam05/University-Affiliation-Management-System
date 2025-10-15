import { Link } from 'react-router-dom';
import Logo from '../assets/logo_main.png';
import Footer from './Footer.jsx';
function Login() {
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
                <div class="login-wrapper">
                    <div class="login-left">
                        <div class="login-left-content">
                            <div class="logo">🎓</div>
                            <h1>University Affiliation Management System</h1>
                            <p>Streamline your affiliation process with our comprehensive digital platform</p>

                            <ul class="features-list">
                                <li>Secure and encrypted login</li>
                                <li>Real-time application tracking</li>
                                <li>24/7 system access</li>
                                <li>Multi-role support</li>
                                <li>Automated notifications</li>
                            </ul>
                        </div>
                    </div>

                    <div class="login-right">
                        <div class="login-header">
                            <h2>Welcome Back</h2>
                            <p>Login to access your account</p>
                        </div>

                        <div id="alertBox" class="alert"></div>

                        <div class="login-tabs">
                            <button class="tab-btn active" onclick="switchTab('institution')">Institution</button>
                            <button class="tab-btn" onclick="switchTab('admin')">Administrator</button>
                        </div>
                        <div id="institution-tab" class="tab-content active">
                            <form onsubmit="handleLogin(event, 'institution')">
                                <div class="form-group">
                                    <label>Email Address / Institution ID</label>
                                    <div class="input-wrapper">
                                        <span class="input-icon">📧</span>
                                        <input type="text" name="username" placeholder="Enter your email or institution ID" required/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <div class="input-wrapper">
                                        <span class="input-icon">🔒</span>
                                        <input type="password" id="institution-password" placeholder="Enter your password" required/>
                                            <span class="password-toggle" onclick="togglePassword('institution-password')">👁️</span>
                                    </div>
                                </div>
                                <div class="form-options">
                                    <label class="remember-me">
                                        <input type="checkbox"/>
                                            <span>Remember me</span>
                                    </label>
                                    <div class="forgot-password">
                                        <a href="#" onclick="showForgotPassword(); return false;">Forgot Password?</a>
                                    </div>
                                </div>
                                <button type="submit" class="btn-login">Login to Dashboard</button>
                            </form>

                            <div class="divider">OR</div>

                            <div class="social-login">
                                <button class="social-btn" onclick="socialLogin('google')">
                                    <span>🔍</span> Google
                                </button>
                                <button class="social-btn" onclick="socialLogin('microsoft')">
                                    <span>🪟</span> Microsoft
                                </button>
                            </div>

                            <div class="signup-link">
                                Don't have an account? <a href="#" onclick="showSignup(); return false;">Register as Institution</a>
                            </div>

                            <div class="info-box">
                                <h4>Institution Login Access:</h4>
                                <ul>
                                    <li>View and track affiliation applications</li>
                                    <li>Upload required documents</li>
                                    <li>Manage institution profile</li>
                                    <li>Receive notifications and updates</li>
                                </ul>
                            </div>
                        </div>
                        <div id="admin-tab" class="tab-content">
                            <form onsubmit="handleLogin(event, 'admin')">
                                <div class="form-group">
                                    <label>Admin Username</label>
                                    <div class="input-wrapper">
                                        <span class="input-icon">👤</span>
                                        <input type="text" name="username" placeholder="Enter admin username" required/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <div class="input-wrapper">
                                        <span class="input-icon">🔒</span>
                                        <input type="password" id="admin-password" placeholder="Enter your password" required/>
                                            <span class="password-toggle" onclick="togglePassword('admin-password')">👁️</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Role</label>
                                    <div class="input-wrapper">
                                        <span class="input-icon">🎭</span>
                                        <select name="role" required>
                                            <option value="">Select your role</option>
                                            <option value="super-admin">Super Administrator</option>
                                            <option value="university-admin">University Administrator</option>
                                            <option value="reviewer">Review Committee Member</option>
                                            <option value="auditor">Auditor</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-options">
                                    <label class="remember-me">
                                        <input type="checkbox"/>
                                            <span>Remember me</span>
                                    </label>
                                    <div class="forgot-password">
                                        <a href="#" onclick="showForgotPassword(); return false;">Forgot Password?</a>
                                    </div>
                                </div>
                                <button type="submit" class="btn-login">Login to Admin Panel</button>
                            </form>

                            <div class="signup-link">
                                Need assistance? <a href="#" onclick="showSupport(); return false;">Contact Support</a>
                            </div>

                            <div class="info-box">
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
            </main>
            <Footer />
        </>
    )
}
export default Login;