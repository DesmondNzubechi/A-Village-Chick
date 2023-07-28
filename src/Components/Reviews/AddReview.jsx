import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { db } from "../Config/Firebase";
import { addDoc, collection } from "firebase/firestore";

export const AddReview = () => {
    return(
        <div className="py-[20px] px-[40px]  font-poppins flex justify-center items-center pt-[20px] ">   
        <div>     
        <div>
            <h1 className="text-center mb-[40px] font-bold uppercase">Add Review</h1>
            <div className="flex flex-col gap-5">
                <input type="text"  placeholder="Input You nname" className="border capitalize shadow w-full outline-0 rounded p-2 " />
               <div>
               <textarea placeholder="Add your review here" className="min-h-[40vh] p-4 outline-0 border w-full shadow rounded " name="" id="" cols="30" rows="10"></textarea>
               <button className="bg-slate-900 shadow py-2 px-5 rounded text-slate-50 text-[20px] hover:bg-slate-700 ">Add review</button>
                </div> 
            </div>
            <div className="flex my-[30px] flex-col gap-4">
        {/*  <ReactQuill
          className="max-w-[500px]"
            value={contents}
            onChange={contentChange}
    />*/}
    
    </div>
            </div>
        </div>
      
        </div>
    )
}



