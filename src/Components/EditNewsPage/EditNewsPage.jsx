import React from "react";

export const EditNewsPage = () => {
    return(
           <div> 
              <div  className={` lg:min-h-[50vh] min-h-[40vh] relative   bg-center flex items-start gap-[30px] pt-[130px] py-[50px] px-[40px]  flex-col  bg-cover z-[1]  `}>
                <p className=" text-[30px] ">Blog  <input placeholder="New page title"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" /></p>
                <h1 className="font-poppins text-[30px] md:text-[40px] font-bold ">Cultivate & Motivate
                <input placeholder="News page headline"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" /></h1>
                
                <p className="font-poppins text-[20px] max-w-[900px] ">Learnings, teachings and tips & tricks for anyone to reference during difficult times, stressful workdays and moments when manifesting your true self.
                <textarea placeholder="Write up..." className="border h-full outline-0 p-2 w-full  rounded" name="" id="" cols="30" rows="10">
                        </textarea></p>
              </div>
           </div>
    )
}