import React, { useEffect } from "react";
import {FaUsers} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {FcAbout} from 'react-icons/fc';
import {AiFillMessage, AiFillDashboard} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';
import {HiXMark} from 'react-icons/hi2';
import {MdBedroomParent} from 'react-icons/md';
import {BsFillHouseAddFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {SiPowerpages} from 'react-icons/si'; 
import {GrNext, GrPrevious} from 'react-icons/gr';
import { useState } from "react";
import {FaUserCircle, FaNewspaper,FaWarehouse} from 'react-icons/fa';
import {AiOutlineLogout, AiOutlineMenu} from 'react-icons/ai';
import {BsNewspaper, BsFillChatQuoteFill} from 'react-icons/bs';
import {MdPictureAsPdf, MdReviews} from 'react-icons/md';
import { DashboardView } from "../Dasshboard view/Dashboardview";
import { PostNews } from "../PostNews/PostNews";
import { AddReview } from "../Reviews/AddReview";
import { AddQuotes } from "../Quote/AddQuotes";
import { Users } from "./Users/Users";
import { AllNews } from "./AllNews/Allnews";
import { EditNews } from "./EditNews/EditNews";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { AdminProfile } from "./AdminProfile/AdminProfile";
import { Pages } from "./pages/Pages";
import { EditAbout } from "../../Pages/About/EditAbout";
import { EditContact } from "../../Pages/Contact/EditContact";
import { EditHome } from "../EditHome/EditHome";
import { EditNewsPage } from "../EditNewsPage/EditNewsPage";
import {AiFillHome} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {FaUserFriends} from 'react-icons/fa';
import { Subscribers } from "./Subscribers/Subscribers";


export const Admindashboard = () => {
  const {displaying,  setDisplaying, logOut, setLogOut,  yeah, allUser, SignUserOut, signedInUser} = useContext(Context);
const [logoutB, setLogoutB] = useState(false);
    const [sideLinks, setSideLinks] = useState( {
        nextIc: true,
        prevIc: false
    });
    const [sideLinkState, setSideLinkState] = useState({
        text: 'text-[8px]',
        display: 'flex-col'
    });

const navi = useNavigate();

    return(
       signedInUser.email !==  yeah ? navi('/') :
        <div className=" z-[100] bg-white  min-h-[100vh] overflow-x-hidden fixed overflow-y-auto w-full left-0 right-0 top-0 pb-[100px] pt-[100px] bottom-0 "
        >
          <div className="flex flex-row items-center justify-center">
          <div className="fixed  flex justify-between top-0 w-full right-0 left-0 pr-5 pt-5 pl-2 bg-white shadow z-[150]">
            <div className="flex gap-2 items-center" >
          {/*  <img className="max-w-[50px]" src={logo} alt="" />*/}
          <div >
            {sideLinks.prevIc && <GrPrevious  onClick={() => {
                  setSideLinkState({text: 'text-[8px]', display: 'flex-col'});
                setSideLinks({
                    nextIc: true,
                    prevIc: false
                })
            }} className={`  p-1  hover:bg-slate-300 rounded-full bg-slate-100 text-[40px] md:text-[40px]`}/>}

             {sideLinks.nextIc && <GrNext onClick={() => {
                setSideLinkState({text: 'text-[20px]', display: 'flex-row'});
                setSideLinks({nextIc:false, prevIc:true,  })
            }} className={`  p-1 rounded-full hover:bg-slate-300 bg-slate-100 text-[40px] md:text-[40px]`}/>}
            </div>
            <h1 className="text-slate-900 md:flex font-poppins hidden uppercase text-[20px] font-bold">A Village Chick</h1>
           
            </div>
           
                <h1 className="capitalize font-poppins text-slate-500 self-center font-bold text-[12px] md:text-[15px]">dashboard</h1>
           
           <div className="flex flex-row gap-1">
            <button onClick={() => setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: false,
                        allNews: false,
                        users: false,
                        editHome: false,
                         editAbout: false,
                         editContact: false,
                        addReview: false,
                        addQuote: false,
                        adminPro: true,
                        editNewsPage: false,
                        pages: false,
                        subPage: false,
                        subPageColor: 'text-slate-500',
                        pagesColor: 'text-slate-500',
                        dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-green-500',})} className="flex items-center text-slate-700 gap-2 md:text-[15px]  text-[12px]  p-2 h-fit rounded ">Hi, Admin <FaUserCircle className={` ${displaying.adminProColor} text-[40px]`}/></button>
           {/* <button className="flex items-center text-slate-50 gap-2 md:text-[20px] bg-yellow-500 text-[15px]  p-2 h-fit rounded ">Logout <AiOutlineLogout/></button>*/}
           </div>
          </div>


             <div className="bg-white z-[100] shadow-2xl rounded-[15px]  bottom-0 p-1 md:p-5 fixed top-[70px] left-0 h-[100%]">
             <div>
                <ul className="flex flex-col px-[4px] pt-[20px] gap-[20px]">
                    <li ><Link onClick={() => setDisplaying({
                        dashboardView: true,
                        editNews: false,
                        postNews: false,
                        allNews: false,
                        users: false,
                        addReview: false,
                        addQuote: false,
                        adminPro: false,
                        editHome: false,
                         editAbout: false,
                         editContact: false,
                         editNewsPage: false,
                        pages: false,
                        subPage: false,
                        subPageColor: 'text-slate-500',
                        pagesColor: 'text-slate-500',
                        dashboardViewColor: 'text-green-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-slate-500',
                    })}  className={` ${sideLinkState.display} flex  items-center gap-x-2  `}> <AiFillDashboard className={` ${displaying.dashboardViewColor} text-[17px] md:text-[20px] `} />   <span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Dashboard</span> </Link></li>
                     <li><Link onClick={() => setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: false,
                        allNews: false,
                        users: false,
                        addReview: false,
                        addQuote: false,
                        adminPro: false,
                        editHome: false,
                        editNewsPage: false,
                         editAbout: false,
                         editContact: false,
                         subPage: true,
                         subPageColor: 'text-green-500',
                         pagesColor: 'text-slate-500',
                        dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-slate-500',
                         })} className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><FaUserFriends className={` ${displaying.subPageColor} text-[17px] md:text-[20px] `}/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Subscribers</span> </Link></li>
                    
                    <li><Link onClick={() => setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: true,
                        allNews: false,
                        users: false,
                        addReview: false,
                        addQuote: false,
                        adminPro: false,
                        editHome: false,
                         editAbout: false,
                         editContact: false,
                         editNewsPage: false,
                        pages: false,
                        subPage: false,
                        subPageColor: 'text-slate-500',
                        pagesColor: 'text-slate-500',
                        dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-green-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-slate-500',
                    })} className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><BsNewspaper className={` ${displaying.postNewsColor} text-[17px] md:text-[20px] `}/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Post News</span> </Link></li>
                    <li><Link onClick={() => setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: false,
                        allNews: false,
                        users: false,
                        addReview: false,
                        addQuote: false,
                        adminPro: false,
                        editHome: false,
                         editAbout: false,
                         editContact: false,
                         editNewsPage: false,
                        pages: true,
                        subPage: false,
                        subPageColor: 'text-slate-500',
                        pagesColor: 'text-green-500',
                        dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-slate-500',
                    })} className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><SiPowerpages className={` ${displaying.pagesColor} text-[17px] md:text-[20px] `}/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Pages</span> </Link></li>
                    <li><Link onClick={() => setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: false,
                        allNews: true,
                        users: false,
                        addReview: false,
                        addQuote: false,
                        adminPro: false,
                        editHome: false,
                         editAbout: false,
                         editContact: false,
                         editNewsPage: false,
                        pages: false,
                        subPage: false,
                        subPageColor: 'text-slate-500',
                        pagesColor: 'text-slate-500',
                        dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-green-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-slate-500',
                    })} className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><FaNewspaper className={` ${displaying.allNewsColor} text-[17px] md:text-[20px] `}/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>All News</span> </Link></li>
                    
                    <li><Link onClick={() => setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: false,
                        allNews: false,
                        users: false,
                        addReview: true,
                        addQuote: false,
                        adminPro: false,
                        editHome: false,
                         editAbout: false,
                         editContact: false,
                         editNewsPage: false,
                        pages: false,
                        subPage: false,
                        subPageColor: 'text-slate-500',
                        pagesColor: 'text-slate-500',
                        dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-green-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-slate-500',
                    })}  className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><MdReviews className={` ${displaying.addReviewColor} text-[17px] md:text-[20px] `}/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Reviews</span>  </Link></li>
                    <li><Link onClick={() => setDisplaying({
                         dashboardView: false,
                         editNews: false,
                         postNews: false,
                         allNews: false,
                         users: false,
                         addReview: false,
                         addQuote: true,
                         adminPro: false,
                         editHome: false,
                         editAbout: false,
                         editContact: false,
                         editNewsPage: false,
                         pages: false,
                         subPage: false,
                         subPageColor: 'text-slate-500',
                         pagesColor: 'text-slate-500',
                         dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-green-500',
                        adminProColor: 'text-slate-500',
                    })} className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><BsFillChatQuoteFill className={` ${displaying.addQuoteColor} text-[17px] md:text-[20px] `}/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Quotes</span>  </Link></li>

                    <li><Link onClick={() => setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: false,
                        allNews: false,
                        users: true,
                        addReview: false,
                        addQuote: false,
                        adminPro: false,
                        editHome: false,
                         editAbout: false,
                         editContact: false,
                         editNewsPage: false,
                        pages: false,
                        subPage: false,
                        subPageColor: 'text-slate-500',
                        pagesColor: 'text-slate-500',
                        dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-green-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-slate-500',
                         })} className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><FaUsers className={` ${displaying.usersColor} text-[17px] md:text-[20px] `}/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Users</span> </Link></li>
                    <li><Link onClick={() => setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: false,
                        allNews: false,
                        users: false,
                        addReview: false,
                        addQuote: false,
                        adminPro: true,
                        editHome: false,
                        editNewsPage: false,
                         editAbout: false,
                         editContact: false,
                         subPage: false,
                         subPageColor: 'text-slate-500',
                         pagesColor: 'text-slate-500',
                        dashboardViewColor: 'text-slate-500',
                        editNewsColor: 'text-slate-500',
                        postNewsColor: 'text-slate-500',
                        allNewsColor: 'text-slate-500',
                        usersColor: 'text-slate-500',
                        addReviewColor: 'text-slate-500',
                        addQuoteColor: 'text-slate-500',
                        adminProColor: 'text-green-500',
                         })} className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><FaUserCircle className={` ${displaying.adminProColor} text-[17px] md:text-[20px] `}/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Profile</span> </Link></li>
                    <li><Link onClick={() => setLogOut(true)}  className={` ${sideLinkState.display} flex  items-center gap-x-2  `}><AiOutlineLogout className="text-slate-600 text-[17px] md:text-[20px] "/><span className={` ${sideLinkState.text}    text-slate-700 font-poppins    `}>Logout</span> </Link></li>
                   
                </ul>
            </div>
            </div>
            
            <div className="py-[10px] relative flex justify-center  ml-[30px] ">
              <div>
              
              {  displaying.dashboardView && <DashboardView/>}
             {   displaying.editNews && <EditNews/>}
               { displaying.postNews && <PostNews/>}
               { displaying.allNews && <AllNews/>}
               {  displaying.users && <Users/>}
             {   displaying.addReview && <AddReview/>}
               { displaying.addQuote && <AddQuotes/>}
               { displaying.adminPro && <AdminProfile/>}
               { displaying.pages && <Pages/>}
               { displaying.editAbout && <EditAbout/>}
               { displaying.editContact && <EditContact/>}
               { displaying.editHome && <EditHome/>}
               {displaying.editNewsPage && <EditNewsPage/>}
               {displaying.subPage && <Subscribers/>}
              
              </div>
            </div>
            </div>
        </div>
    )
}