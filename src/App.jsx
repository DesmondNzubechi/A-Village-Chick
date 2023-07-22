 import './App.css'
import { LandingPage } from './Pages/landingPage/LandingPage'
import { Blog } from './Pages/Blog/Blog'
import { Footer } from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { DesktopHeader } from './Components/Header/DesktopHeader'
import { MobileHeader } from './Components/Header/MobileHeader'
import { About } from './Pages/About/About'
import { ContactUs } from './Pages/Contact/Contact'
import { FullNewsDetail } from './Components/Fullnews/Fullnews'
import { useContext } from 'react'
import { Context } from './Components/Context/Context'
import { GetStarted } from './Components/Get started/GetStarted'
import { Subscribe } from './Components/Subscribe/Subscribe'
import { ScrollToTop } from './Components/ScrollTop/Scrolltop'

function App() {
  const {subscriptionDetails, fullNews} = useContext(Context);
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <DesktopHeader/> 
    <MobileHeader/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/get started' element={<GetStarted/>} />
      <Route path={`/News/${fullNews.headline}`} element={<FullNewsDetail/>} />
      <Route path={`/subscribe/${subscriptionDetails.getStartedHeading}`} element={<Subscribe/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
