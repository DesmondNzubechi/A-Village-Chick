import React from "react";
import HeroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";


export const Overview2 = () => {
  const {Subscribe, fetchedNews } = useContext(Context);

  const theOverView = fetchedNews[1];

    return(
        <Link key={theOverView?.id} to={`/blog/${theOverView?.newsHeadline}`} onClick={() => Subscribe(theOverView)} className="  py-[50px] min-h-[100vh] ">
<div className="flex flex-col font-poppins md:flex-row-reverse justify-around items-center gap-x-[70px]">
<div data-aos='fade-up' data-aos-duration='1000' className="  flex flex-col gap-5 ">
        <img src={!theOverView?.newsImg ? HeroImg : theOverView?.newsImg } alt="" className="rounded md:max-w-[500px]" srcSet="" />
       </div>
  <div data-aos='fade-up' data-aos-duration='1000' className="flex-start flex flex-col gap-4">
    <h1 className="text-slate-900 capitalize md:text-[30px] leading-[45px] md:leading-[50px] text-[25px] font-bold  font-poppins">{theOverView?.newsHeadline}</h1>
    <div className="text-slate-300 font-fonty max-w-[700px] flex flex-col gap-2 ">
    <p className="md:text-[20px] font-poppins text-slate-800 text-[13px] ">{!theOverView?.newsOverview ? 'Be your best self, alone and with others, and cultivate deep and lasting friendships and relationships.' : theOverView?.newsOverview } </p>
  </div>
  <Link to={`/blog/${theOverView?.newsHeadline}`} className="text-start bg-slate-900 text-slate-50 text-[12px] rounded-[1px] hover:bg-slate-800 w-fit p-3">Read more...</Link>
  </div>
</div>
        </Link>
    )
}