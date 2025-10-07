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
                <div className="login-left"></div>
                <div className="login-right">
                    <form action="submit">
                        <input type="text" placeholder="Enter Username" />
                        <input type="text" placeholder="Enter Password" />

                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Login;