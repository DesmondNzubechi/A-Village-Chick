import React, { useEffect, useState } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr';
import { db } from "../../Config/Firebase";
import { getDoc, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useContext } from "react";
import { Context } from "../../Context/Context";


export const AdminReview = () => {
   
   const [Review, setReview] = useState([]);
   useEffect(() => {
    const reviewStorage = collection(db, 'reviews');
    const getReviews = async () => {
      try {
        const reviewData = await getDocs(reviewStorage);
        const allReview = reviewData.docs.map((doc) => ({...doc.data()}))
        setReview(allReview);
       
      } catch (error) {
        alert(error)
      }
    } 
    getReviews()
 }, [Review])
    const [currentReview, setCurrentReview] = useState(0);
    console.log(Review
        )
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
       Reviewed?.name && <div className="px-[40px] flex justify-center font-poppins py-[100px]">
            <div>
            <h1 className="font-bold text-center text-[20px] capitalize md:text-[30px] ">What people say about us</h1>
   <div className="flex justify-center items-center gap-[20px] ">
    <GrPrevious onClick={prevReview} className="hover:bg-slate-500  text-white border p-2 rounded text-[50px] "/>
    <div className="text-center flex flex-col gap-[30px] ">
    <div className="mt-5">
        <p className="max-w-[700px] text-[12px] md:text-[18px]">" { Reviewed?.message } "</p>

        <p className="font-[600] my-[10px] text-[17px] md:text-[20px] ">~ {Reviewed?.name} </p>
        <p className="text-[12px] my-2 italic">Review added on {Reviewed.date}</p>
        <button className="bg-red-300 p-1 hover:bg-red-500 rounded text-slate-900">Delete Review</button>
    </div>
    </div>
    <GrNext onClick={nextReview} className=" text-white hover:bg-slate-500 border p-2 rounded text-[50px] "/>
   </div>
   </div>
        </div>
    )
}