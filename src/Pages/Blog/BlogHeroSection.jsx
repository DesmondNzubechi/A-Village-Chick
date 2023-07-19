import React from "react";

export const BlogHeroSection = () => {
    return(
           <div>
              <div  className={` lg:min-h-[70vh] min-h-[50vh] relative   bg-center flex items-start gap-[50px]  py-[100px] px-[40px]  flex-col  bg-cover z-[1]  `}>
                <p className=" text-[30px] ">Blog</p>
                <h1 className="font-poppins text-[30px] md:text-[40px] font-bold ">Cultivate & Motivate</h1>
                <p className="font-poppins text-[20px] max-w-[900px] ">Learnings, teachings and tips & tricks for anyone to reference during difficult times, stressful workdays and moments when manifesting your true self.</p>
              </div>
           </div>
    )
}