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
import { MainBlog } from './Components/MainBlog/MainBlog'
import { Subscribe } from './Components/Subscribe/Subscribe'
import { ScrollToTop } from './Components/ScrollTop/Scrolltop'
import { SignUp } from './Components/Account/Signup'
import { Login } from './Components/Account/Login'
import { PostNews } from './Components/PostNews/PostNews'
import { AddReview } from './Components/Reviews/AddReview'
import {UserProfile} from './Components/Account/Profile'
import { Admindashboard } from './Components/Dashboard/Admin'
import { ToastContainer } from 'react-toastify'

function App() {
  const {subscriptionDetails, article, /*fullNews*/} = useContext(Context);
  return (
    <>
    <BrowserRouter>
    <DesktopHeader/> 
    <MobileHeader/>
    <SignUp/>
    <Login/>
    <UserProfile/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
     {/* <Route path='/blog' element={<Blog/>} />*/}
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/blog' element={<MainBlog/>} />
      <Route path='/post-news' element={<PostNews/>} />
      <Route path={`/News/${article?.headline}`} element={<FullNewsDetail/>} />
      <Route path='/dashboard' element={<Admindashboard/>} />
      <Route path={`/blog/${subscriptionDetails.newsHeadline}`} element={<Subscribe/>} />
    </Routes>
    <Footer/>
    <ToastContainer
    className='relative z-[1000]'
    autoClose={2000}
    />
    </BrowserRouter>
   
    </>
  )
}

export default App
