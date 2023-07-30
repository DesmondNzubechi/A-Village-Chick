import React from "react";
import heroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";


export const EditHome = () => {
    return(
        <div>
            <div className="px-[40px] relative flex justify-center">

 <div >
              <div  
        style={{ backgroundImage: `url(${heroImg})` }}
      className={` relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full  bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative z-[1] py-[50px] max-w-[900px]">
        <textarea placeholder="write here..."  className="font-semibold placeholder:text-slate-200 capitalize min-h-[50vh] w-full md:leading-[60px] leading-[45px] text-slate-50 bg-transparent border border-slate-500 p-1 outline-0 text-[30px] mb-[30px] md:text-[50px]  ">Homeownership often comes with a sense of pride and belonging to a neighborhood.</textarea>
        <div className="flex flex-row gap-1">
        <input type="text" value='Read more..'  className="capitalize my-[20px] text-[15px] bg-slate-900  text-slate-50 outline-0 rounded max-w-[150px] hover:bg-slate-800 p-2 "/>
<input type="text" placeholder="Link e.g about " className="capitalize my-[20px] text-[15px] bg-slate-50 max-w-[150px] text-slate-900 rounded outline-0 p-2 " />
        </div>
<div className="my-3">
                        <label className="text-slate-50 font-bold  text-[20px] " htmlFor="">About Image</label>
                        <input  className="border bg-slate-50 file:bg-transparent file:border-0 outline-0 p-2  w-full text-[15px]  rounded" type="file" />
                    </div>
        </div>
      </div>
        </div>
        </div>
        </div>
    )
}