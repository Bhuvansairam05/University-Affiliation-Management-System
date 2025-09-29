import { Link, Outlet } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <>
      <header>
        <h1>University Affiliation management</h1>
        <div className="right">
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