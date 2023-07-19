import React, { useState } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr';


const Review = [
    {
        name: 'Somebody',
        message: 'Jessica Demo is sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'
    },
    {
        name: 'Somebody',
        message: 'Jessica Demo is sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'
    },
    {
        name: 'Jessica Demo',
        message: 'Jessica Demo is sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'
    },
    {
        name: 'Someone',
        message: 'Jessica Demo is sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'

    },
]

export const Reviews = () => {

    const [currentReview, setCurrentReview] = useState(0);
    
    let ReviewLength = Review.length;
    let Reviewed = Review[currentReview];
    const nextReview =() => {
        if (currentReview + 1 < ReviewLength) {
           setCurrentReview(currentReview + 1)
        } else {
         setCurrentReview(0);
        }
     };
     const prevReview = () => {
         if (currentReview > 0) {
             setCurrentReview(currentReview - 1);
         } else {
             setCurrentReview(ReviewLength - 1);
         }
     }

    return(
        <div className="px-[40px] flex justify-center font-poppins py-[100px]">
            <div>
            <h1 className="font-bold text-center text-[25px] capitalize md:text-[30px] ">What people say about us</h1>
   <div className="flex justify-center items-center gap-[20px] ">
    <GrPrevious onClick={prevReview} className="hover:bg-slate-500  text-white border p-2 rounded text-[50px] "/>
    <div className="text-center flex flex-col gap-[30px] ">
    <div>
        <p className="font-[600] my-[10px] text-[17px] md:text-[20px] ">~ {Reviewed.name} </p>
        <p className="max-w-[700px] text-[14px] md:text-[18px]">" { Reviewed.message } "</p>
    </div>
    </div>
    <GrNext onClick={nextReview} className=" text-white hover:bg-slate-500 border p-2 rounded text-[50px] "/>
   </div>
   </div>
        </div>
    )
}