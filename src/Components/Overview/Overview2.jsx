import React from "react";
import HeroImg from '../../assets/images/heroImg.avif';


export const Overview2 = () => {


    return(
        <div className="  py-[50px] min-h-[100vh] ">
<div className="flex flex-col md:flex-row-reverse justify-around items-center gap-5">
<div data-aos='fade-up' data-aos-duration='1000' className="  flex flex-col gap-5 ">
        <img src={HeroImg} alt="" className="rounded" srcset="" />
       </div>
  <div data-aos='fade-up' data-aos-duration='1000' className="flex-start flex flex-col gap-4">
    <h1 className="text-slate-900  md:text-[45px] leading-[45px] md:leading-[50px] text-[40px] capitalize  font-myfont">Improve your relationship with others</h1>
    <div className="text-slate-300 font-fonty max-w-[700px] flex flex-col gap-2 ">
    <p className="md:text-[20px] text-slate-800 text-[18px] ">Be your best self, alone and with others, and cultivate deep and lasting friendships and relationships. </p>
  </div>
  <button className="text-start bg-slate-900 text-slate-50 text-[30px] rounded-[1px] hover:bg-slate-800 w-fit p-3">Learn more</button>
  </div>
</div>
        </div>
    )
}