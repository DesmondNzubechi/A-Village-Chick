import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";


export const SignUp = () => {
    const { account, setAccount,} = useContext(Context);
    return(
        account.signup &&
        <span onClick={(e) => {
            if (e.target.tagName === 'SPAN') {
                setAccount({
                    login: false,
                    signup: false
                })
            }
        }} className="py-[100px] flex-row z-[70] bg-Tp h-full fixed flex justify-center items-center top-0 w-full px-[40px] ">
          
                <form action=""  className="flex flex-col items-center bg-white font-poppins rounded p-[40px] relative gap-5">
                    <h1 className="text-center text-[20px] font-semibold ">Create Account!</h1>
                    <p onClick={() => {
                    setAccount({
                        login: false,
                        signup: false,
                    })
                  }} className="absolute right-[5px] p top-[3px] bg-slate-900 px-[15px] py-[5px] hover:bg-red-500 cursor-pointer rounded-full text-white font-bold text-[20px] ">x</p>
                    <div className="flex md:flex-row gap-2 flex-col">
                   <input type="text" placeholder="Firstname" className="outline-0 w-full text-[20px] font-[300]  bg-transparent border p-2 rounded "  name="" id="" />
                   <input type="text" placeholder="Lastname" className="outline-0 w-full   text-[20px] font-[300]  bg-transparent border p-2 rounded "  name="" id="" />
                    </div>
                    <input className="outline-0 font-[300] border bg-transparent  text-[20px] p-2 rounded " type="email" placeholder="email address" name="email" id="" />
                  <input className="outline-0 w-full font-[300]  bg-transparent border text-[20px] p-2 rounded " placeholder="Pasword" type="password" name="" id="" />
                  <button  className="bg-slate-900 hover:bg-slate-600 text-slate-50 text-[20px] p-2 w-full rounded ">Signup</button>
                  <p className="text-center">Already have an account? <Link className="font-bold underline" onClick={() => {
                    setAccount({
                        login: true,
                        signup: false,
                    })
                  }}>Log in</Link></p>
                </form>
             
               
        </span>
    )
}