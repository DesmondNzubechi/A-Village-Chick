import React from "react";
import heroImg from '../../assets/images/session.avif';
import { Link } from "react-router-dom";

export const Motivation = () => {
    return(
        <div className="bg-white p-[40px]" style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)' }}>
              <div  
        style={{ backgroundImage: `url(${heroImg})` }}
      className={` relative after:left-0  rounded text-center after:right-0 after:absolute after:top-0 after:h-full justify-center bg-center flex items-cente=r after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative flex flex-col gap-5 z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-poppins font-bold capitalize  text-slate-50 text-[30px] md:text-[50px] ">Motivation comes from within — and I’m here to help you activate it.</h1>
        </div>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>

      </div>
       
    )
}