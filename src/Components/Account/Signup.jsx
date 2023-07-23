import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";


export const SignUp = () => {
    const { account, setAccount,} = useContext(Context);
    return(
        account.signup &&
        <div className="py-[100px] z-[70] bg-Tp h-full fixed flex justify-center items-center top-0 w-full px-[40px] ">
            <div className="bg-white font-poppins rounded p-[50px] ">
                <div className="flex flex-col gap-5">
                    <h1 className="text-center text-[20px] font-semibold ">Create Account!</h1>
                    <div className="flex md:flex-row gap-2 flex-col">
                   <input type="text"placeholder="Firstname" className="outline-0  text-[20px] font-[300]  bg-transparent border p-2 rounded "  name="" id="" />
                   <input type="text" placeholder="Lastname" className="outline-0  text-[20px] font-[300]  bg-transparent border p-2 rounded "  name="" id="" />
                    </div>
                    <input className="outline-0 font-[300] border bg-transparent  text-[20px] p-2 rounded " type="email" placeholder="email address" name="email" id="" />
                  <input className="outline-0 font-[300]  bg-transparent border text-[20px] p-2 rounded " placeholder="Pasword" type="password" name="" id="" />
                  <button  className="bg-slate-900 hover:bg-slate-600 text-slate-50 text-[20px] p-2 rounded ">Signup</button>
                  <p className="text-center">Already have an account? <Link className="font-bold underline" onClick={() => {
                    setAccount({
                        login: true,
                        signup: false,
                    })
                  }}>Log in</Link></p>
                </div>
             
               
            </div>
        </div>
    )
}