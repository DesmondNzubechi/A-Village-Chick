import React from "react";
import {BsNewspaper} from 'react-icons/bs';
import {MdPictureAsPdf} from 'react-icons/md';
import bgImg from '../../assets/images/session.avif';
import {FaUsers} from 'react-icons/fa';
import { Users } from "../Dashboard/Users/Users";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Context";
export const DashboardView = () => {
  const {allUser, fetchedNews} = useContext(Context);
    return( 
        <div className="flex overflow-x-hidden flex-col gap-[50px]">
            {/*<div>
                <div  
        style={{ backgroundImage: `url(${bgImg})` }}
      className={`min-h-[30vh] relative after:left-0 my-[20px] after:rounded-[5px] rounded-[5px] after:right-0 after:absolute after:top-0 after:h-full bg-center flex justify-center items-center after:w-full after:bg-Tp pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className=" text-center py-[50px] ">
        <h1 className="font-bold text-slate-50 relative z-[2] uppercase text-[20px] ">admin dashboard</h1>
<p className="text-slate-200 font-fonty relative z-[2] text-[17px] ">Welcome to admin dashboard</p>
        </div>

      </div>
    </div>*/}
             <div className="grid grid-cols-1 md:grid-cols-3 py-[50px] items-center md:flex-row justify-center gap-5">
                <div className="text-center bg-gray-50 shadow  px-[50px] rounded py-[10px] flex flex-col items-center">
                    <FaUsers className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Total Users</h1>
                  <p className="text-[20px] font-semibold ">{allUser.length}</p>
                </div>

                <div className="text-center bg-gray-50  px-[50px] rounded  py-[10px] flex flex-col items-center">
                    <BsNewspaper className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Total News</h1>
                  <p className="text-[20px] font-semibold ">{fetchedNews.length}</p>
                </div>

                <div className="text-center bg-gray-50  px-[50px] rounded  py-[10px] flex flex-col items-center">
                    <MdPictureAsPdf className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Available Book</h1>
                  <p className="text-[20px] font-semibold ">1</p>
                </div>

                <div className="text-center bg-gray-50  px-[50px] rounded py-[10px] flex flex-col items-center">
                    <FaUsers className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Total Users</h1>
                  <p className="text-[20px] font-semibold ">{allUser.length}</p>
                </div>

                <div className="text-center bg-gray-50  px-[50px] rounded  py-[10px] flex flex-col items-center">
                    <BsNewspaper className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Total News</h1>
                  <p className="text-[20px] font-semibold ">{fetchedNews.length}</p>
                </div>

                <div className="text-center bg-gray-50  px-[50px] rounded  py-[10px] flex flex-col items-center">
                    <MdPictureAsPdf className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Available Book</h1>
                  <p className="text-[20px] font-semibold ">1</p>
                </div>
             </div>
            
{/*
             <div className="flex flex-row font-poppins justify-center items-center">
              <div className="flex flex-col p-3 shadow-xl gap-3">
               <div className="max-w-[300px]"><img src={bgImg} alt="" className="rounded" /></div>
               <p>Friday, July 28, 2023</p>
               <div>
               <h1 className="text-start max-w-[300px] font-semibold uppercase w-full">Men will always be men no matter what happens</h1>
               </div>
               <div className="flex flex-row gap-5 justify-start ">
                <Link className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-slate-700 bg-gray-100 ">Edit </Link>
                <Link className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-green-500 bg-green-100 ">View</Link>
                <Link className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-red-500 bg-red-100 ">Delete</Link>
               </div>
  </div>
             </div>
  */}
        </div>
    )
}