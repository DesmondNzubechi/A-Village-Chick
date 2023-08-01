import React from "react";
import heroImg from '../../assets/images/session.avif';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { db, storage } from "../../Components/Config/Firebase";
import { addDoc, collection, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { useState } from "react";



export const Motivation = () => {
  const [aboutDatas, setaboutDatas] = useState([]);

    const aboutRef = collection(db, 'about');
    useEffect(() => {
    
        const getabout = async () => {
            try {
                const aboutContent = await getDocs(aboutRef)
                const aboutData = aboutContent.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setaboutDatas(aboutData);
            } catch (error) {
                console.log(error)
            }
        }
        getabout();
    }, [])

  const aboutCt = aboutDatas[0];

    return( 
        <div className="bg-white p-[40px]" style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)' }}>
              <div  
        style={{ backgroundImage: `url(${!aboutCt?.motivationBg ? heroImg : aboutCt.motivationBg})` }}
        className={` relative after:left-0  rounded text-center after:right-0 after:absolute after:top-0 after:h-full justify-center bg-center flex items-cente=r after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
          <div data-aos='zoom-in-up' className="relative flex flex-col gap-5 z-[1] py-[50px] max-w-[900px]">
          <h1 className="font-poppins font-bold capitalize  text-slate-50 text-[30px] md:text-[50px] ">{!aboutCt?.motivation ? 'Motivation comes from within — and I’m here to help you activate it.' : aboutCt?.motivation  }</h1>
        </div>
        </div>

      </div>
       
    )
}