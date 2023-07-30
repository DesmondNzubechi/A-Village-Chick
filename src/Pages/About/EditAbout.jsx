import React from "react";




export const EditAbout = () => {
    return(
        <div className="p-[40px] md:pl-[100px] flex justify-center font-poppins">
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea placeholder="Full about us" className="border h-full outline-0 p-2   rounded" name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="flex  flex-col gap-2">
                        <div>
                        <label className="text-slate-700 text-[20px] " htmlFor="">About Header</label>
                        <input type="text" placeholder="HOW MY JOURNEY BEGAN" className="border outline-0 p-2 text-[25px] font-bold  w-full rounded"/>
                        </div>
                    <div>
                        <label className="text-slate-700 text-[20px] " htmlFor="">About Image</label>
                        <input  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[15px]  rounded" type="file" />
                    </div>
                    <div>
                        <textarea placeholder="Motivation"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[25px]  rounded" type="text" />
                    </div>
            
                        <button className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update</button>
                    </div>
                </form>
        </div>
    )
}