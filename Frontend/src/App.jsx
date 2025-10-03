import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Logo from './assets/Logo.jpg';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Contact from './components/Contact.jsx';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
      <header>
        <div className="header-left">
          <div className="logo"><img src={Logo} alt="" height={50} width={50}/></div>
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