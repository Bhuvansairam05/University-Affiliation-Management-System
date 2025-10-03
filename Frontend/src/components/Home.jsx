import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
function Home(){
return(
    <>
    <header>
        <div className="header-left">
          <div className="logo"><img src={Logo} alt="" height={50} width={50}/></div>
          <h1>Gradious Affiliation management</h1>
        </div>
        <div className="header-right">
          <Link to="/"><button className="nav-option">Home</button></Link>
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
export default Home;