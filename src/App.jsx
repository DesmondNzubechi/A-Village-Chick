 import './App.css'
import { HeroSection } from './Components/HeroSection/HeroSection'
import { LandingPage } from './Pages/landingPage/LandingPage'
import { Blog } from './Pages/Blog/Blog'
import { Footer } from './Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { DesktopHeader } from './Components/Header/DesktopHeader'
import { MobileHeader } from './Components/Header/MobileHeader'
import { About } from './Pages/About/About'
function App() {
  return (
    <>
    <BrowserRouter>
    <DesktopHeader/>
    <MobileHeader/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
