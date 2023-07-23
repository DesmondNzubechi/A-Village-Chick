import React from "react";
import HeroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";

export const Overview1 = () => {


    return(
        <div  className=" items-center flex-row flex py-[50px] min-h-[100vh] ">
<div className="flex flex-col md:flex-row justify-around items-center gap-5">
<div data-aos='fade-up' data-aos-duration='1000' className="  flex flex-col gap-5 ">
<h1 className="text-slate-900 capitalize md:hidden md:text-[45px] leading-[45px] md:leading-[50px] text-[40px]   font-poppins">Invest in your relationship with yourself</h1>
        <img src={HeroImg} alt="" className="rounded" srcSet="" />
       </div>
  <div data-aos='fade-up' data-aos-duration='1000' className="flex-start flex flex-col gap-4">
    <h1 className="text-slate-900 hidden md:flex md:text-[45px] leading-[45px] md:leading-[50px] text-[40px] capitalize  font-poppins">Invest in your relationship with yourself</h1>
    <div className="text-slate-300 font-fonty max-w-[700px] flex flex-col gap-2 ">
    <p className="md:text-[20px] text-slate-800 text-[18px] font-poppins  ">We all have a tendency to put others first, but in doing so, we can sometimes neglect our relationship with ourselves. Let me be your advocate and show you a kinder, gentler way to treat the most important person in your life.</p>
  </div>
  <Link to='/get started' className="text-start bg-slate-900 text-slate-50 text-[30px] rounded-[1px] hover:bg-slate-800 w-fit p-3">Learn more</Link>
  </div>
</div>
        </div>
    )
}