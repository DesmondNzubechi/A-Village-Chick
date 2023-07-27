import React from "react";
import { getStarted } from "../Get started/GetStarted";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

export const MoreNews = () => {
    const {Subscribe} = useContext(Context);
    return(
        <div className="flex flex-col gap-[40px]">
    <h1 className="uppercase font-bold text-[30px] md:text-[50px] ">more news</h1>
{getStarted.map((news) => {
          
          return <div key={news.headline} className="flex w-full  items-start  rounded shadow-2xl px-[20px] py-5  gap-4">
          <div className="">
          <img className=" max-w-[100px]   rounded " src={news.postImg} alt="" />
          </div>
          <div className="flex flex-col  max-w-[400px] ">
          <h1 className="font-bold text-[10px] md:max-w-[300px] capitalize ">{news.headline}</h1>
          <p>{news.date}</p>
          <Link to={`/subscribe/${news.headline}`} onClick={Subscribe(news)} className="text-yellow-500 text-[13px] font-bold my-1">Read More...</Link>
          </div>
          </div>
        }) }
</div>
    )
}