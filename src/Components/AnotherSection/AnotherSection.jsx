import React from "react";
import logo1 from '../../assets/images/Logo1.png';
import logo2 from '../../assets/images/Logo2.png';
import logo3 from '../../assets/images/Logo3.png';
import logo4 from '../../assets/images/Logo4.png';

export const AnotherSection = () => {
    const logos = [logo1, logo2, logo3, logo4]

    return(
        <div style={{ clipPath: 'polygon(100% 15%, 100% 100%, 0% 100%, 0% 0%)' }}>
       <div className="grid md:grid-cols-4 py-[50px] grid-cols-2 bg-slate-400">
        {
            logos.map(img => {
                return <img src={img} alt="" />
            })
        }
       </div>
        </div>
    )
}