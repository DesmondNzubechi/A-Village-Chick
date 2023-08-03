import React from "react";


export const Newsletter = () => {
    return(
       <div className="flex bg-slate-800  items-center justify-center px-[30px] py-[100px]">
            <div className="    gap-[30px]  rounded-[40px]   items-start ">
               <div className="my-[40px] ">
               <h1 className=" md:text-center  uppercase text-center  md:self-center text-[25px]  md:text-[50px] text-[#fff] font-[700]  ">
                Newsletter Sign-up
                </h1>
                <p className="text-center my-[10px] text-slate-900 font-semibold text-[20px] ">Sign up with your email address to receive news and updates.</p>
                </div> 
              <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4 grid-cols-1'>
              { /*  <input type="text" className="bg-slate-100 w-full outline-0 p-3 rounded-[1px] " placeholder="First Name" name="" id="" />
                 <input type="text" className="bg-slate-100  w-fulloutline-0 p-3 rounded-[1px] " placeholder="Last Name" name="" id="" />
                   */}
                    <input type="text" className="bg-slate-100 w-full p-3 outline-0 rounded-[1px] " placeholder="Email Address" name="" id="" />

                    <button className="bg-slate-900  py-[15px] rounded px-[25px] text-slate-50 ">Sign up</button>
               
                </div>
               
            </div>
            </div>
       
    )
}