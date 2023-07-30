import React from "react";
import heroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";
import {AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';


export const EditHome = () => {
    return(
        <div className="flex justify-center px-[50px]">
            <div>
            <div>

 <div>
              <div  
        style={{ backgroundImage: `url(${heroImg})` }}
      className={`min-h-[30vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full  bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-semibold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] mb-[30px] md:text-[50px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood.</h1>
        <Link to='/blog' className="capitalize my-[50px] text-[20px] bg-slate-900  text-slate-50 rounded hover:bg-slate-800 p-2 ">read news...</Link>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>
      </div>
        </div>
        <div>
        <div className="p-[40px] md:pl-[100px] flex justify-center font-poppins">
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea placeholder="Write up..." className="border h-full outline-0 p-2   rounded" name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="flex  flex-col gap-2">
                    <div>
                        <label className="text-slate-700 text-[20px] " htmlFor="">Background Image</label>
                        <input  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[15px]  rounded" type="file" />
                    </div>
                    <div>
                        <input placeholder="Button Name"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
               <input placeholder="Button Link"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    </div>
            
                        <button className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update</button>
                    </div>
                </form>
        </div>
        </div>
        </div>
        <div style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 93%, 0% 0%)' }}>
              <div  
        style={{ backgroundImage: `url(${heroImg})` }}
      className={`min-h-[100vh] relative after:left-0 text-center after:right-0 after:absolute after:top-0 after:h-full justify-center bg-center flex items-cente=r after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative flex flex-col gap-5 z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-bold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] md:text-[50px] ">Try a session for free and see if it’s right for you.</h1>
        <p className="text-slate-100 text-[20px]">There’s no commitment, pressure, or obligation.</p>
        <div>
        <Link to='/get started' className="capitalize mt-[100px] my-[30px] text-[20px] bg-slate-900  text-slate-50 rounded-[1px] px-[30px] hover:bg-slate-800 w-fit p-2 ">Learn more...</Link>
        </div>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>
        </div>
      </div>
      <div>
        <div className="p-[40px] md:pl-[100px] flex justify-center font-poppins">
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea placeholder="Write up..." className="border h-full outline-0 p-2   rounded" name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="flex  flex-col gap-2">
                    <div>
                        <label className="text-slate-700 text-[20px] " htmlFor="">Background Image</label>
                        <input  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[15px]  rounded" type="file" />
                    </div>
                    <input placeholder="Paragraph Text"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    <div>
                        <input placeholder="Button Name"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
               <input placeholder="Button Link"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    </div>
            
                        <button className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update Info</button>
                    </div>
                </form>
        </div>
        </div>
        <div className="bg-slate-900 text-slate-50 md:items-center py-[50px] flex justify-between md:flex-row flex-col gap-[40px] px-[40px] ">
            <div className="flex flex-col gap-3">
                <p className="font-bold text-[25px] md:text-[30px] ">show you a kinder <br /><input type="text" placeholder="Start Edit..." className="bg-slate-100 boder-0 text-[20px] min-h-[10vh] p-1 rounded outline-0  " /></p>
                <h1 className="text-slate-200 font-semibold text-[20px] ">You belong here. ♡  <br /><input type="text" placeholder="Start Editing..." className="bg-slate-100 boder-0 text-[20px] min-h-[10vh] p-1 rounded outline-0  " /></h1>
            </div>
            <div className="flex md:flex-col  flex-row gap-[50px]">
                <div className="flex flex-col gap-[5px] ">
                <p>You <input type="text" placeholder="edit.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /> <input type="text" placeholder="link.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /></p>
                <p>About<input type="text" placeholder="edit.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /> <input type="text" placeholder="link.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /></p>
                <p>Get Started <input type="text" placeholder="edit.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /><input type="text" placeholder="link.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /></p>
                </div>
                <div className="flex items-center flex-col gap-1">
                <div className="flex flex-row gap-5">
                    <a href="http://"><AiOutlineInstagram/></a>
                    <a href="http://"> <BsFacebook/></a>
                    <a href="http://"> <AiFillTwitterCircle/></a>
                </div>
                <input type="text" placeholder="Instagram Link" className="bg-slate-100 boder-0 p-1 rounded outline-0  " />
                <input type="text" placeholder="Facebook Link" className="bg-slate-100 boder-0 p-1 rounded outline-0  " />
                <input type="text" placeholder="Twitter Link" className="bg-slate-100 boder-0 p-1 rounded outline-0  " />
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}