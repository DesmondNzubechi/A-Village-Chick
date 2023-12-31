import React, { useEffect, useState } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr';
import { db } from "../../Config/Firebase";
import { getDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AdminReview = () => {
   
   const [Review, setReview] = useState([]);
   useEffect(() => {
    const reviewStorage = collection(db, 'reviews');
    const getReviews = async () => {
      try {
        const reviewData = await getDocs(reviewStorage);
        const allReview = reviewData.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setReview(allReview);
       
      } catch (error) {
    console.log(error);
      }
    } 
    getReviews()
 }, [])
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
     const deleteReview = async (id) => {
        const deleteConfirmation = confirm('Are you sure you want to delete this Quote, Kindly note that you can\'t undo this action after being processed')
    if(!deleteConfirmation) {
       return;
    }
    try {
        const quoteId = doc(db, 'reviews', id);
        await deleteDoc(quoteId);
        const noti = () => toast('Review Deleted successful');
        noti();
    } catch (error) {
        alert(error)
    }
    };

    return(
        <div className="px-[40px] flex justify-center font-poppins py-[100px]">
        {   !Reviewed?.id  && <div className="py-[40px] md:ml-[70px] text-center w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">< ClipLoader className="relative z-[600]" color="#36d7b7"
           size={70}
           width={10}
            /></div> }
            {
         Reviewed?.name &&   <div>
            <h1 className="font-bold text-center text-[20px] capitalize md:text-[30px] ">What people say about us</h1>
   <div className="flex justify-center items-center gap-[20px] ">
    <GrPrevious onClick={prevReview} className="hover:bg-slate-500  text-white border p-2 rounded text-[50px] "/>
    <div className="text-center flex flex-col gap-[30px] ">
    <div className="mt-5">
        <p className="max-w-[700px] text-[12px] md:text-[18px]">" { Reviewed?.message } "</p>

        <p className="font-[600] my-[10px] text-[17px] md:text-[20px] ">~ {Reviewed?.name} </p>
        <p className="text-[12px] my-2 italic">Review added on {Reviewed.date}</p>
        <button onClick={() => deleteReview(Reviewed.id)} className="bg-red-300 p-1 hover:bg-red-500 rounded text-slate-900">Delete Review</button>
    </div>
    </div>
    <GrNext onClick={nextReview} className=" text-white hover:bg-slate-500 border p-2 rounded text-[50px] "/>
   </div>
   </div>}
        </div>
    )
}