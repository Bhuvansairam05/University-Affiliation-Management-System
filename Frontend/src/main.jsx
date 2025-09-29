import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Contact from './components/Contact.jsx';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/'  element={<App/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
