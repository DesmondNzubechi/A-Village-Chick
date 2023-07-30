import React from "react";




export const EditContact = () => {
    return(
        <div className="p-5 font-poppins">
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea placeholder="If you have any questions or comments, please contact us via email or phone." className="border h-full outline-0 p-2  w-full rounded" name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="flex  flex-col gap-2">
                    <input type="text" placeholder="Get in touch" className="border outline-0 p-2 text-[25px] font-bold  w-full rounded"/>
                        <input placeholder="Phone" className="border outline-0 p-2  w-full text-[25px] font-bold rounded" type="text" />
                        <input placeholder="+2347560293862" className="border outline-0 p-2  w-full rounded" type="number" name="" id="" />
                        <input placeholder="Email" className="border outline-0 p-2  w-full text-[25px] font-bold rounded" type="text"  />
                        <input placeholder="Someone@gmail.com" className="border outline-0 p-2  w-full rounded" type="email" name="" id="" />
                        <button className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update</button>
                    </div>
                </form>
        </div>
    )
}