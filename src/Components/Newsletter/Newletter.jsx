import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { db } from "../Config/Firebase";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Newsletter = () => {
  const [spinC, setSpinC] = useState(false);
  const currentDate = new Date();
  const options = {
      year: 'numeric',
      month: 'long', // 'short' for abbreviated name, 'long' for full name
      day: 'numeric',
      weekday: 'long', // 'short' for abbreviated name, 'long' for full name
    };
    const fullDate = currentDate.toLocaleString(undefined, options);
  const [subEmail, setSubEmail] = useState('');
  const reviewStorage = collection(db, 'subscribers');
  const NewsLetter =  async () => {
      if (subEmail === '') {
          const noti = () => toast('Please Provide The Email That You Wish To Sign Up With');
        noti();
          return;
      }
      setSpinC(true);
      try {
          await addDoc(reviewStorage, {
           date : fullDate,
           email: subEmail,
          });
          const noti = () => toast('You Have Successfully Signed Up For Our Newsletter');
        noti();
        setSpinC(false);
      } catch (error) {
         alert(error)
      }

  }

    return(
       <div className="flex bg-slate-800  items-center justify-center px-[30px] py-[100px]">
         {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> } 
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
                    <input type="email" onChange={(e) => setSubEmail(e.target.value)} className="bg-slate-100 w-full p-3 outline-0 rounded-[1px] " placeholder="Email Address" name="" id="" />

                    <button onClick={NewsLetter} type="button" className="bg-slate-900  py-[15px] rounded px-[25px] text-slate-50 ">Sign up</button>
               
                </div>
               
            </div>
            </div>
       
    )
}