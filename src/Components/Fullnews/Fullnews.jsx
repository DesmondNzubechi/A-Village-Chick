import React from "react";
import { Context } from "../Context/Context";
import { useContext } from "react";
import {BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";
import { BlogContent } from "../../Pages/Blog/post";
 
export const FullNewsDetail = () => {
const {fullNews, readMoreClicked} = useContext(Context);
  console.log(fullNews)
    return(
        <div className="py-[200px] grid gap-[50px]  md:grid-cols-3 font-poppins px-[40px] ">
            <div className="md:col-span-2">
                 <div className="flex flex-col gap-5 ">

                 <div className="flex max-w-[600px] items-center gap-5">
                <h1 className="uppercase font-bold text-[20px] md:text-[50px] ">{fullNews.headline}</h1>
                -
                <p className="text-[20px] md:text-[25px] ">{fullNews.date}</p>
                </div>
                            <div>
                            <img src={fullNews.postImg} alt="" />
                            </div>
                            <p className="text-[15px] md:text-[20px] ">{fullNews.fullContent}</p>

                        </div>
</div>
<div className="flex flex-col gap-[40px]">
    <h1 className="uppercase font-bold text-[30px] md:text-[50px] ">more news</h1>
{BlogContent.map((news) => {
          
          return <div key={news.headline} className="flex w-full  items-start  rounded shadow-2xl px-[20px] py-5  gap-4">
          <div className="">
          <img className=" max-w-[100px]   rounded " src={news.postImg} alt="" />
          </div>
          <div className="flex flex-col  max-w-[400px] ">
          <h1 className="font-bold text-[10px] md:max-w-[300px] capitalize ">{news.headline}</h1>
          <p>{news.date}</p>
          <Link to={`/News/${fullNews.headline}`} onClick={readMoreClicked(news)} className="text-yellow-500 text-[13px] font-bold my-1">Read More...</Link>
          </div>
          </div>
        }) }
</div>
            </div>
      
    )
}