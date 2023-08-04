import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";
import {PulseLoader} from 'react-spinners';

export const SignUp = () => {
    const { account, SignUpNewUser, setAccount, spin, setSpin, errorMessage, signUpInputs, signedInUser, setSignUpInput} = useContext(Context);
    return(
        account.signup && !signedInUser &&
        <span onClick={(e) => {
            if (e.target.tagName === 'SPAN') {
                setAccount({
                    login: false,
                    signup: false,
                    account:false
                })
            }
        }} className="py-[100px] flex-row z-[70] bg-Tp h-full fixed flex justify-center items-center top-0 w-full px-[40px] ">
            { spin &&  <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><PulseLoader color="#36d7b7"
           size={50}
            /></div> }
          <form action=""  className="flex flex-col items-center justify-center  bg-white font-poppins rounded p-[50px] relative gap-5">
                
                    <h1 className="text-center text-[20px] font-semibold ">Create Account!</h1>
                    <p className="text-[15px] my-[-15px] text-red-500 uppercase">{errorMessage}</p>
                    <p onClick={() => {
                    setAccount({
                        login: false,
                        signup: false,
                        account: false,
                    })
                  }} className="absolute right-[5px] p top-[3px] bg-slate-900 px-[15px] py-[5px] hover:bg-red-500 cursor-pointer rounded-full text-white font-bold text-[20px] ">x</p>
                    <div className="flex justify-center w-full md:flex-row gap-2 flex-col">
                   <input 
                   onChange={(e) => {
                    setSignUpInput({
                      ...signUpInputs,
                      firstname: e.target.value,
                    })
                   }} 
                   value={signUpInputs.firstname}
                    type="text" placeholder="Firstname" className="outline-0 w-full text-[20px] font-[300]  bg-transparent border p-2 rounded "  name="" id="" />
                   <input 
                   onChange={(e) => {
                    setSignUpInput({
                      ...signUpInputs,
                      lastname: e.target.value,
                    })
                   }}
                   value={signUpInputs.lastname} 
                   type="text" placeholder="Lastname" className="outline-0 w-full   text-[20px] font-[300]  bg-transparent border p-2 rounded "  name="" id="" />
                   <input onChange={(e) => {
                      setSignUpInput({
                        ...signUpInputs,
                        username: e.target.value,
                      })
                     }} value={signUpInputs.username} type="text" placeholder="Username" className="outline-0 w-full   text-[20px] font-[300]  bg-transparent border p-2 rounded "  name="" id="" />
                    </div>

                    <input
                     onChange={(e) => {
                      setSignUpInput({
                      ...signUpInputs,
                        email: e.target.value,
                      })
                     }}
                     value={signUpInputs.email}
                      className="outline-0 font-[300] border bg-transparent w-full  text-[20px] p-2 rounded " type="email" placeholder="email address" name="email" id="" />
                  <input onChange={(e) => {
                      setSignUpInput({
                        ...signUpInputs,
                        password: e.target.value,
                      })
                     }} className="outline-0 w-full font-[300]  bg-transparent border text-[20px] p-2 rounded " placeholder="Pasword" type="password" name="" id="" />
                  <button type="button" onClick={() => SignUpNewUser()}  className="bg-slate-900 hover:bg-slate-600 text-slate-50 text-[20px] p-2 w-full rounded ">Signup</button>
                  <p className="text-center">Already have an account? <Link className="font-bold underline" onClick={() => {
                    setAccount({
                        login: true,
                        signup: false,
                        account: false
                    })
                  }}>Log in</Link></p>
                </form>
             
               
        </span>
    )
}