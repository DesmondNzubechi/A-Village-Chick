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






export const Admindashboard = () => {
  const {displaying, setDisplaying} = useContext(Context);
const [logoutB, setLogoutB] = useState(false);
    const [sideLinks, setSideLinks] = useState({
        nextIc: true,
        prevIc: false
    });
     const [sideLinkState, setSideLinkState] = useState('hidden');

    return(
        <div className=" z-[100] bg-white  min-h-[100vh] overflow-x-hidden fixed overflow-y-auto w-full left-0 right-0 top-0 pb-[100px] pt-[70px] bottom-0 "
        >
          <div className="flex flex-row items-center justify-center">
          <div className="absolute  flex justify-between top-0 w-full right-0 left-0 pr-5 pt-5 pl-2 bg-transparent z-[150]">
            <div className="flex gap-2 items-center" >
          {/*  <img className="max-w-[50px]" src={logo} alt="" />*/}
          <div >
            {sideLinks.prevIc && <HiXMark  onClick={() => {
                setSideLinkState('hidden');
                setSideLinks({
                    nextIc: true,
                    prevIc: false
                })
            }} className={`bg-slate-50  p-1 rounded-[2px] text-[30px] md:text-[40px]`}/>}

             {sideLinks.nextIc && <AiOutlineMenu onClick={() => {
                setSideLinkState('flex');
                setSideLinks({nextIc:false, prevIc:true,  })
            }} className={`bg-slate-50  p-1 rounded-[2px] text-[30px] md:text-[40px]`}/>}
            </div>
            <h1 className="text-slate-900 md:flex hidden uppercase text-[30px] font-bold">Blogging</h1>
           
            </div>
           <div className="flex flex-row gap-1">
            <button onClick={() => setDisplaying(<UserProfile/>)} className="flex items-center text-slate-50 gap-2 md:text-[20px] bg-green-500 text-[15px]  p-2 h-fit rounded ">Profile <FaUserCircle/></button>
            <button className="flex items-center text-slate-50 gap-2 md:text-[20px] bg-yellow-500 text-[15px]  p-2 h-fit rounded ">Logout <AiOutlineLogout/></button>
           </div>
          </div>


             <div className="bg-white z-[100] shadow-2xl rounded-[15px]  bottom-0 p-1 md:p-5 fixed top-[70px] left-0 h-[100%]">
             <div>
                <ul className="flex flex-col px-[5px] pt-[100px] gap-[30px]">
                    <li ><Link onClick={() => setDisplaying(<DashboardView/>)}  className="flex-row   flex items-center gap-x-2  "> <AiFillDashboard className="text-slate-600 text-[17px] md:text-[30px] " />  <span className={`text-[15px] md:text-[20px]  ${sideLinkState}  text-slate-700 font-poppins font-semibold   `}>Dashboard</span> </Link></li>
                    <li><Link onClick={() => setDisplaying(<PostNews/>)} className="flex-row flex items-center gap-x-2  "><BsNewspaper className="text-slate-600 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-700 font-poppins font-semibold   `}>Post News</span> </Link></li>
                    <li><Link onClick={() => {
                        setDisplaying(<AllNews/>);
                        }} className="flex-row flex items-center gap-x-2  "><FaNewspaper className="text-slate-600 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-700 font-poppins font-semibold   `}>All News</span> </Link></li>
                    
                    <li><Link onClick={() => setDisplaying(<AddReview/>)}  className="flex-row flex items-center gap-x-2  "><MdReviews className="text-slate-600 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-700 font-poppins font-semibold   `}>Reviews</span>  </Link></li>
                    <li><Link onClick={() => setDisplaying(<AddQuotes/>)}  className="flex-row flex items-center gap-x-2  "><BsFillChatQuoteFill className="text-slate-600 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-700 font-poppins font-semibold   `}>Quotes</span>  </Link></li>
                    <li><Link onClick={() => setDisplaying(<Users/>)}  className="flex-row flex items-center gap-x-2  "><FaUsers className="text-slate-600 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-700 font-poppins font-semibold   `}>Users</span> </Link></li>
                    <li><Link onClick={() => setDisplaying(<UserProfile/>)} className="flex-row flex items-center gap-x-2  "><FaUserCircle className="text-slate-600 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-700 font-poppins font-semibold   `}>Profile</span> </Link></li>
                </ul>
            </div>
            </div>
            
            <div className="py-[10px] relative flex justify-center  ml-[30px] ">
              <div>
              {displaying}
              </div>
            </div>
            </div>
        </div>
    )
}