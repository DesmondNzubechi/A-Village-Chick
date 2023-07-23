import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";


export const Login = () => {
    const {account, setAccount,} = useContext(Context)
    return(
        account.login &&
        <div className="py-[100px] z-[70] bg-Tp h-full fixed flex justify-center items-center top-0 w-full px-[40px] ">
            <div className="bg-white font-poppins rounded p-[50px] ">
                <div className="flex flex-col gap-5">
                    <h1 className="text-center text-[20px] font-semibold ">Welcome back!</h1>
                    <input className="outline-0  border font-[300] text-[20px] p-2 rounded " type="text" placeholder="email address" name="email" id="" />
                  <input className="outline-0  border font-[300]  text-[20px] p-2 rounded " type="password" placeholder="password" name="" id="" />
                  <button className="bg-slate-900 hover:bg-slate-600 text-slate-50 text-[20px] p-2 rounded ">Login</button>
                  <p>Don't have an account yet? <Link className="font-bold underline" onClick={() => {
                    setAccount({
                        login: false,
                        signup: true,
                    })
                  }}>Sign Up</Link></p>
                </div>
             
               
            </div>
        </div>
    )
}