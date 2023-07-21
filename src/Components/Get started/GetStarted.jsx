import React from "react";
import backgroundImage from '../../assets/images/session.avif'
import { Link } from "react-router-dom";

export const GetStarted = () => {
    return(
       <Link to='/Get-started'>
        <div  
        style={{ backgroundImage: `url(${heroImg})` }}
      className={`min-h-[100vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full  bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-semibold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] md:text-[50px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood.</h1>
        <button className="capitalize my-[30px] text-[20px] bg-slate-900  text-slate-50 rounded hover:bg-slate-800 p-2 ">Chat with me</button>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>

      </div>
       </Link>
    )
}