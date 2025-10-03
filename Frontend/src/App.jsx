import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Contact from './components/Contact.jsx';
import HomeContent from './components/HomeContent.jsx';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}>
        <Route index element={<HomeContent/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
      
    </>
  )
}
export default App;