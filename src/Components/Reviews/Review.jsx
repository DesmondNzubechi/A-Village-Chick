import React, { useEffect, useState } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr';
import { db } from "../Config/Firebase";
import { getDoc, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useContext } from "react";
import { Context } from "../Context/Context";

/*const Review = [
    {
        name: 'Somebody',
        message: 'Ea quae temporibus qui harum ducimus non nostrum nobis 33 tenetur nihil. Et quisquam optio ea enim exercitationem et expedita tenetur? Est galisum internos ut reprehenderit unde non consectetur possimus et'
    },
    {
        name: 'Somebody',
        message: 'Jessica Demo is sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'
    },
    {
        name: 'Jessica Demo',
        message: 'ut illo labore qui quia obcaecati. Et quae facilis ut soluta magni sit aspernatur voluptates et animi corporis eos exercitationem possimus et asperiores ipsam nam quis repudiandae.'
    },
    {
        name: 'Someone',
        message: 'In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song\'s text, etc., our text generator will provide the random extraction of terms and steps to'

    },
]*/

export const Reviews = () => {
   
   const [Review, setReview] = useState([]);
   useEffect(() => {
    const reviewStorage = collection(db, 'reviews');
    const getReviews = async () => {
      try {
        const reviewData = await getDocs(reviewStorage);
        const allReview = reviewData.docs.map((doc) => ({...doc.data()}))
        setReview(allReview);
       
      } catch (error) {
       
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
    return(
        <div className="px-[40px] flex justify-center font-poppins py-[100px]">
            <div>
            <h1 className="font-bold text-center text-[20px] capitalize md:text-[30px] ">What people say about us</h1>
   <div className="flex justify-center items-center gap-[20px] ">
    <GrPrevious onClick={prevReview} className="hover:bg-slate-500  text-white border p-2 rounded text-[50px] "/>
    <div className="text-center flex flex-col gap-[30px] ">
    <div>
        <p className="font-[600] my-[10px] text-[17px] md:text-[20px] ">~ {Reviewed?.name} </p>
        <p className="max-w-[700px] text-[12px] md:text-[18px]">" { Reviewed?.message } "</p>
    </div>
    </div>
    <GrNext onClick={nextReview} className=" text-white hover:bg-slate-500 border p-2 rounded text-[50px] "/>
   </div>
   </div>
        </div>
    )
}