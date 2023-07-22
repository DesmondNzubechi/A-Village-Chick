import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import AboutImg from '../../assets/images/session.avif';
import { Link } from "react-router-dom";

export const Subscribe = () => {
   const {subscriptionDetails} = useContext(Context);
   console.log(subscriptionDetails)
    return(
        <div>
            {/*
                subscriptionDetails.map(subbing => {
                    return(*/
                        <div className="bg-slate-100  m-0 pt-[150px] md:pt-[250px] pb-[100px] gap-[50px] items-center px-[40px] flex flex-col md:flex-row justify-center rounded">
<div>
            <img src={subscriptionDetails.getStartedPic} alt="" />
        </div>
        <div className="max-w-[800px] flex flex-col gap-2">
            <h1 className="uppercase font-poppins text-slate-900 text-[30px]  ">{subscriptionDetails.getStartedHeading}</h1>
            <p className="font-poppins  text-slate-800 text-[15px]  ">{subscriptionDetails.getStartedAmount}</p>
            <p>{subscriptionDetails.getStartedFullDescription}</p>
<Link to='' className="bg-slate-900 p-2 my-[20px] w-fit rounded-[2px] shadow-2xl font-semibold capitalize text-white hover:bg-slate-700 text-[20px] ">Subscribe</Link>
        </div>
         </div>
                   /* )
                })*/
            }
        </div>
    )
}