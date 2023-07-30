import React from "react";
import {AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

export const Footer = () => {
    return(
        <div className="bg-slate-900 text-slate-50 md:items-center py-[50px] flex justify-between md:flex-row flex-col gap-[40px] px-[40px] ">
            <div className="flex flex-col gap-3">
                <p className="font-bold text-[25px] md:text-[30px] ">show you a kinder</p>
                <h1 className="text-slate-200 font-semibold text-[20px] ">You belong here. ♡</h1>
            </div>
            <div className="flex md:flex-col  flex-row gap-[50px]">
                <div className="flex flex-col gap-[20px] ">
                <p>You</p>
                <p>About</p>
                <p>Get Started</p>
                </div>
                <div className="flex flex-row gap-5">
                    <a href="http://"><AiOutlineInstagram/></a>
                    <a href="http://"> <BsFacebook/></a>
                    <a href="http://"> <AiFillTwitterCircle/></a>
                </div>
            </div>
        </div>
    )
}