import React from "react";
import heroImg from '../../assets/images/session.avif';
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";
import { useState, useEffect } from "react";

//'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'
//polygon(100% 0%, 100% 90%, 0% 100%, 0% 0%)
export const BookingSection = () => {

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
        <div style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 93%, 0% 0%)' }}>
              <div  
        style={{ backgroundImage: `url(${!bookingData?.overviewBg? heroImg:  bookingData.overviewBg})`}}
      className={`min-h-[100vh] relative after:left-0 text-center after:right-0 after:absolute after:top-0 after:h-full justify-center bg-center flex items-cente=r after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative flex flex-col gap-5 z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-bold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] md:text-[50px] ">{!bookingData?.overViewText1? 'Try a session for free and see if it’s right for you.' : bookingData?.overViewText1}</h1>
        <p className="text-slate-100 text-[20px]">{!bookingData?.overViewText2? 'There’s no commitment, pressure, or obligation.' : bookingData?.overViewText2}</p>
        <div>
        <Link to={`/${bookingData?.overViewBtnLink}`} className="capitalize mt-[100px] my-[30px] text-[20px] bg-slate-900  text-slate-50 rounded-[1px] px-[30px] hover:bg-slate-800 w-fit p-2 ">{bookingData?.overViewBtn}</Link>
        </div>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>

      </div>
        </div>
    )
}