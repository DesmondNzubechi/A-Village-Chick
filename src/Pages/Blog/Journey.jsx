import React from "react";

export const BlogJourney = () => {
    return(
        <div className="flex  bg-sky-900 items-center justify-center text-center py-[100px] px-[40px] mt-[20px]">
            <div className="flex font-poppins flex-col gap-[40px]">
               <h1 className="font-bold capitalize text-[30px] ">Start your journey</h1> 
               <p className="max-w-[600px] text-[20px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <div>
               <a href="" className="bg-slate-900 p-3 text-[20px] text-slate-50  text-center ">Get Started</a>
               </div>
            </div>
        </div>
    )
}