import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import { useEffect } from "react";
import { db } from "../Config/Firebase";
import { addDoc, collection, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { useState } from "react";

export const Footer = () => {
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
  
const footerData = homeDatas[0]; 
    return(
        <div className="bg-slate-900 text-slate-50 md:items-center py-[50px] flex justify-between md:flex-row flex-col gap-[40px] px-[40px] ">
            <div className="flex flex-col gap-3">
                <p className="font-bold text-[25px] md:text-[30px] ">{!footerData?.footerHeader ? "show you a kinder" : footerData?.footerHeader }</p>
                <h1 className="text-slate-200 font-semibold text-[20px] "> {!footerData?.footerParagraph ? "You belong here. ♡ " : footerData?.footerParagraph }</h1>
            </div>
            <div className="flex md:flex-col  flex-row gap-[50px]">
                <div className="flex flex-col gap-[20px] ">
                    <Link to={`${footerData?.footerNav1Link}`}>{footerData?.footerNav1}</Link>
                    <Link to={`${footerData?.footerNav2Link}`}>{footerData?.footerNav2}</Link>
                    <Link to={`${footerData?.footerNav3Link}`}>{footerData?.footerNav3}</Link>
                </div>
                <div className="flex flex-row gap-5">
                    <a href={`${footerData?.social1}`}><AiOutlineInstagram/> </a>
                    <a href={`${footerData?.social2}`}> <BsFacebook/></a>
                    <a href={`${footerData?.social3}`}> <AiFillTwitterCircle/></a>
                </div>
            </div>
        </div>
    )
}