import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { db } from "../Config/Firebase";
import { addDoc, collection, getDoc } from "firebase/firestore";
import { AdminReview } from "../Dashboard/Review/ReviewForAdmin";
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const AddReview = () => {
    const [spinC, setSpinC] = useState(false);
    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long', // 'short' for abbreviated name, 'long' for full name
        day: 'numeric',
        weekday: 'long', // 'short' for abbreviated name, 'long' for full name
      };
      const fullDate = currentDate.toLocaleString(undefined, options);
    const [reviewData, setReviewData] = useState({
        reviewName: '',
        reviewContent: '',
    })
    const reviewStorage = collection(db, 'reviews');
    const uploadingReview =  async () => {
        if (reviewData.name === '' || reviewData.reviewContent === '') {
            const noti = () => toast('Please fill in the provided inputs field');
          noti();
            return;
        }
        setSpinC(true);
        try {
            await addDoc(reviewStorage, {
             date : fullDate,
             message: reviewData.reviewContent,
             name: reviewData.reviewName,
            });
            setReviewData({reviewContent: '', reviewName: ''})
            const noti = () => toast('Quote Successfully uploaded');
          noti();
          setSpinC(false);
        } catch (error) {
            const noti = () => toast(error);
          noti();
        }

    }

    return(
        <div className="py-[20px] px-[40px]  font-poppins flex justify-center items-center pt-[20px] ">  
         {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> } 
        <div>  

            <AdminReview/>  
        <div>
            <h1 className="text-center mb-[40px] font-bold uppercase">Upload Reviews below</h1>
            <div className="flex flex-col gap-5">
                <input value={reviewData.reviewName} onChange={(e) => setReviewData({...reviewData, reviewName: e.target.value})} type="text"  placeholder="Input You nname" className="border capitalize shadow w-full outline-0 rounded p-2 " />
               <div>
               <textarea value={reviewData.reviewContent} onChange={(e) => setReviewData({...reviewData, reviewContent: e.target.value})} placeholder="Add your review here" className="min-h-[40vh] p-4 outline-0 border w-full shadow rounded " name="" id="" cols="30" rows="10"></textarea>
               <button onClick={uploadingReview} className="bg-slate-900 shadow py-2 px-5 rounded text-slate-50 text-[20px] hover:bg-slate-700 ">Add review</button>
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



