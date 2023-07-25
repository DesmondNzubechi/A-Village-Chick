import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";


export const Login = () => {
    const {account, setAccount, spin, setSpin, signedInUser , loginInputs, setLoginInputs, SignIn} = useContext(Context)
    return(
        account.login && !signedInUser &&
        <span onClick={(e) => {
            if (e.target.tagName === 'SPAN') {
                setAccount({
                    login: false,
                    signup: false
                })
            }
        }} className="py-[100px] z-[70] bg-Tp h-full fixed flex justify-center items-center top-0 w-full px-[40px] ">
                  <form action=""  className="flex flex-col items-center justify-center  bg-white font-poppins rounded p-[50px] relative gap-5">
                  <p onClick={() => {
                    setAccount({
                        login: false,
                        signup: false,
                        account: false,
                    })
                  }} className="absolute right-[20px] p top-1 bg-slate-900 px-[15px] py-[5px] hover:bg-red-500 cursor-pointer rounded-full text-white font-bold text-[20px] ">x</p>
                    <h1 className="text-center text-[20px] font-semibold ">Welcome back!</h1>
                    <input  onChange={(e) => {
                      const val = e.target.value;
                      setLoginInputs({
                        ...loginInputs,
                        email: val,
                      })
                    }}
                     value={loginInputs.email} 
                     className="outline-0  w-full border font-[300] text-[20px] p-2 rounded " type="email" placeholder="email address" name="email" id="" />
                  <input 
                  onChange={(e) => {
                    setLoginInputs({...loginInputs, password:e.target.value})
                  }}
                  value={loginInputs.password} 
                   className="outline-0 w-full border font-[300]  text-[20px] p-2 rounded " type="password" placeholder="password" name="" id="" />
                  <button type="button" onClick={() => SignIn()} className="bg-slate-900 hover:bg-slate-600 text-slate-50 text-[20px] w-full p-2 rounded ">Login</button>
                  <p>Don't have an account yet? <Link className="font-bold underline" onClick={() => {
                    setAccount({
                        login: false,
                        signup: true,
                        account: false,
                    })
                  }}>Sign Up</Link></p>
                </form>
        </span>
    )
}