import { Link, Outlet } from 'react-router-dom';
import { Home } from './components/Home';
import './App.css'
function App() {
  return (
    <>
      <header>
        <h1>University Affiliation management</h1>
        <div className="right">
          <Link to={Home}><button className="nav-option">Home</button></Link>
          <Link to={About}><button className="nav-option">About</button></Link>
          <Link to={Contact}><button className="nav-option">Contact Us</button></Link>
          <Link to={Login}><button>Login</button></Link>
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