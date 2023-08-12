import React from "react";
import HeroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";


export const Overview1 = () => {
  const {Subscribe, fetchedNews } = useContext(Context);

  const theOverView = fetchedNews[0];
    return(
        <Link key={theOverView?.id} to={`/blog/${theOverView?.newsHeadline}`} onClick={() => Subscribe(theOverView)}  className=" items-center my-[100px] flex-row flex py-[50px]  ">
<div className="flex flex-col md:flex-row justify-around items-center gap-y-[40px] gap-x-[70px]">
<div data-aos='fade-up' data-aos-duration='1000' className="  flex flex-col gap-5 ">
<h1 className="text-slate-900 capitalize md:hidden md:text-[30px] leading-[45px] md:leading-[50px] text-[25px] font-bold  font-poppins">{theOverView?.newsHeadline}</h1>
        <img src={theOverView?.newsImg} alt="" className="rounded md:max-w-[500px]" srcSet="" />
       </div>
  <div data-aos='fade-up' data-aos-duration='1000' className="flex-start flex flex-col gap-4">
    <h1 className="text-slate-900 max-w-[800px] hidden md:flex md:text-[25px] leading-[45px] md:leading-[50px] font-bold text-[25px] font-poppins capitalize  ">{theOverView?.newsHeadline}</h1>
    <div className="text-slate-300 font-fonty max-w-[800px] flex flex-col gap-2 ">
    <p className="md:text-[17px] text-slate-800 text-[12px] font-poppins  ">{!theOverView?.newsOverview ? 'Be your best self, alone and with others, and cultivate deep and lasting friendships and relationships.' : theOverView?.newsOverview } </p>
  </div>
  <Link to={`/blog/${theOverView?.newsHeadline}`} className="text-start bg-slate-900 text-slate-50 text-[18px] rounded-[1px] hover:bg-slate-800 w-fit p-2">Read more...</Link>
  </div>
</div>
        </Link>
    )
}