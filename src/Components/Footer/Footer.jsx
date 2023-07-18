import React from "react";
import {AiOutlineInstagram} from 'react-icons/ai';


export const Footer = () => {
    return(
        <div className="bg-slate-50 md:items-center py-[50px] flex justify-between md:flex-row flex-col gap-[40px] px-[40px] ">
            <div className="flex flex-col gap-3">
                <p className="font-bold text-[25px] md:text-[30px] ">ALMAR BY JESSICA DEMO</p>
                <h1 className="text-slate-800 font-semibold text-[20px] ">You belong here. ♡</h1>
            </div>
            <div className="flex md:flex-col  flex-row gap-[50px]">
                <div className="flex flex-col gap-[20px] ">
                <p>You</p>
                <p>About</p>
                <p>Get Started</p>
                </div>
                <div className="flex flex-row gap-5">
                <AiOutlineInstagram/>
                <AiOutlineInstagram/>
                <AiOutlineInstagram/>
                </div>
            </div>
        </div>
    )
}