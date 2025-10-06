import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/logo_main.png';
function Home(){
return(
    <>
    <header>
        <div className="header-left">
          <div className="logo"><img src={Logo} alt="" height={50} width={50}/></div>
          <h1>Gradious Affiliation management</h1>
        </div>
        <div className="header-right">
          <Link to="/"><button className="nav-link">Home</button></Link>
          <Link to="/about"><button className="nav-link">About</button></Link>
          <Link to="/contact"><button className="nav-link">Contact Us</button></Link>
          <Link to="/login"><button className="nav-link">Login</button></Link>
        </div>
      </header>
      <Outlet />
      <footer>
            <p>&copy; 2025 Gradious Affiliation Management System. All rights reserved.</p>
    </footer>
    </>
)
}
export default Home;