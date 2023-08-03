import React from "react";
import HeroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";


export const Overview1 = () => {
  const {Subscribe, fetchedNews } = useContext(Context);

  const theOverView = fetchedNews[0];
    return(
        <Link key={theOverView?.id} to={`/blog/${theOverView?.headline}`} onClick={() => Subscribe(theOverView)}  className=" items-center flex-row flex py-[50px] min-h-[100vh] ">
<div className="flex flex-col md:flex-row justify-around items-center gap-5">
<div data-aos='fade-up' data-aos-duration='1000' className="  flex flex-col gap-5 ">
<h1 className="text-slate-900 capitalize md:hidden md:text-[45px] leading-[45px] md:leading-[50px] text-[40px]   font-poppins">{theOverView?.newsHeadline}</h1>
        <img src={theOverView?.newsImg} alt="" className="rounded" srcSet="" />
       </div>
  <div data-aos='fade-up' data-aos-duration='1000' className="flex-start flex flex-col gap-4">
    <h1 className="text-slate-900 max-w-[600px] hidden md:flex md:text-[45px] leading-[45px] md:leading-[50px] text-[40px] capitalize  font-poppins">{theOverView?.newsHeadline}</h1>
    <div className="text-slate-300 font-fonty max-w-[700px] flex flex-col gap-2 ">
    <p className="md:text-[20px] text-slate-800 text-[18px] font-poppins  ">{!theOverView?.newsOverview ? 'Be your best self, alone and with others, and cultivate deep and lasting friendships and relationships.' : theOverView?.newsOverview } </p>
  </div>
  <Link to={`/blog/${theOverView?.newsHeadline}`} className="text-start bg-slate-900 text-slate-50 text-[30px] rounded-[1px] hover:bg-slate-800 w-fit p-3">Read more...</Link>
  </div>
</div>
        </Link>
    )
}