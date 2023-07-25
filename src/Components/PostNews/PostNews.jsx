import React from "react";


export const PostNews = () => {
    return(
        <div className="py-[100px] pt-[160px] px-[40px] font-poppins justify-center flex flex-row ">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 md:flex-row  ">
                <div className="flex flex-col gap-0 ">
                    <label className="uppercase font-[600] text-[20px] " htmlFor="headline">news headline :</label>
                    <input type="text" className="p-4 capitalize text-[20px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
                </div>
                <div className="flex flex-col gap-0 ">
                    <label className="uppercase font-[600] text-[20px] " htmlFor="headline">news image/video :</label>
                    <input type="file" className="p-4 file:bg-transparent file:border-0 capitalize text-[20px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
                </div>
                <div className="flex flex-col gap-0 ">
                    <label className="uppercase font-[600] text-[20px] " htmlFor="headline">Date :</label>
                    <input type="date" className="p-4 capitalize text-[20px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
                </div>
              </div>
              <div className="flex gap-0 flex-col">
                <label className="uppercase font-[600] text-[20px] "  htmlFor="full content">Full content</label>
                <textarea className="min-h-[40vh] p-4 outline-0 border w-full shadow rounded " name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div>
                <button className="bg-slate-900 shadow py-2 px-5 rounded text-slate-50 text-[20px] hover:bg-slate-700 ">Post News</button>
              </div>
            </div>
        </div>
    )
}