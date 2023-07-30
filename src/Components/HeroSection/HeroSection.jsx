import React from "react";
import heroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";

//'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'
//polygon(100% 0%, 100% 90%, 0% 100%, 0% 0%)
export const HeroSection = () => {
    return(
        <div style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 93%, 0% 0%)' }}>
              <div  
        style={{ backgroundImage: `url(${heroImg})` }}
      className={`min-h-[100vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full  bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-semibold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] mb-[30px] md:text-[50px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood.</h1>
        <Link to='/blog' className="capitalize my-[50px] text-[20px] bg-slate-900  text-slate-50 rounded hover:bg-slate-800 p-2 ">read news...</Link>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>

      </div>
        </div>
    )
}