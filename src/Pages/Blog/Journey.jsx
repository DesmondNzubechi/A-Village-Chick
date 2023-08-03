import React from "react";
import { Link } from "react-router-dom";
import heroImg from '../../assets/images/session.avif';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/Config/Firebase";
import { useState, useEffect } from "react";

export const BlogJourney = () => {

    const [homeDatas, setHomeDatas] = useState([]);
    const homeRef = collection(db, 'homepage');
  
  
    useEffect(() => {
        const getHome = async () => {
            try {
                const homeContent = await getDocs(homeRef)
                const homeData = homeContent.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
                setHomeDatas(homeData);
            } catch (error) {
                console.log(error)
            }
        }
        getHome();
    }, [])
    
  const bookingData = homeDatas[0]; 

    return(
        <div className="flex  bg-slate-800 items-center justify-center text-center py-[100px] px-[40px] mt-[20px]">
            <div className="flex font-poppins flex-col gap-[40px]">
               <h1 className="font-bold capitalize text-[30px] ">{!bookingData?.overViewText1? 'Try a session for free and see if it’s right for you.' : bookingData?.overViewText1}</h1>  
               <p className="max-w-[600px] text-[20px] ">{!bookingData?.overViewText2? 'There’s no commitment, pressure, or obligation.' : bookingData?.overViewText2}</p>
               <div>
               <Link to={`/${bookingData?.overViewBtnLink}`} className="capitalize mt-[100px] my-[30px] text-[20px] bg-slate-900  text-slate-50 rounded-[1px] px-[30px] hover:bg-slate-800 w-fit p-2 ">{bookingData?.overViewBtn}...</Link>
               </div>
            </div>
        </div>
    )
}