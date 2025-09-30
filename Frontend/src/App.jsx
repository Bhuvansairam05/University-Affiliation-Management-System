import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Logo from './assets/Logo.jpg';
function App() {
  return (
    <>
      <header>
        <div className="header-left">
          <img src={Logo} alt="Logo" height={80}/>
          <h1>Gradious Affiliation management</h1>
        </div>
        <div className="header-right">
          <Link to="/home"><button className="nav-option">Home</button></Link>
          <Link to="/about"><button className="nav-option">About</button></Link>
          <Link to="/contact"><button className="nav-option">Contact Us</button></Link>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </header>
      <Outlet />
      <footer>
        &copy; 2025 University Affiliation Management
      </footer>
    </>
  )
}
export default App;