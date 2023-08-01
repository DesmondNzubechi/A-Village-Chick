import React from "react";
import AboutImg from '../../assets/images/session.avif';
import { Link } from "react-router-dom";
import { Motivation } from "./Motivation";
import { Reviews } from "../../Components/Reviews/Review";
import { EditAbout } from "./EditAbout";
import { useEffect } from "react";
import { db, storage } from "../../Components/Config/Firebase";
import { addDoc, collection, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


//CHAT WITH ME SECTION
const ChatWithMe = () => {

    
/*
    return(
        <div className="flex  bg-slate-50 items-center justify-center text-center py-[100px] px-[40px] ">
        <div className="flex font-poppins flex-col gap-[40px]">
           <h1 className="font-bold capitalize text-[30px] ">Get in touch </h1> 
           <p className="max-w-[600px] text-[20px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           <div>
           <a href="" className="bg-slate-900 p-3 text-[20px] text-slate-50  text-center ">Contact Us</a>
           </div>
        </div>
    </div>
    )
    */
}


export const About = () => {

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
        <>
       <div className="bg-slate-100  m-0 pt-[150px] md:pt-[250px] pb-[100px] gap-[50px] items-center px-[40px] flex flex-col md:flex-row justify-center rounded">
        <div>
        <img src={!aboutCt?.aboutImg? AboutImg : aboutCt?.aboutImg } alt="" />
        </div>
        <div className="max-w-[800px] flex flex-col gap-2">
            <h1 className="uppercase font-poppins text-slate-900 text-[30px]  ">{ !aboutCt?.aboutHeader?  'How my journey began' : aboutCt?.aboutHeader }</h1>
            <p className="font-poppins  text-slate-800 text-[15px]  ">{ !aboutCt?.aboutText?  'Lorem ipsum dolor sit amet. Qui ratione velit et officia blanditiis et voluptatem vitae sit sunt enim. Ad recusandae voluptas qui blanditiis sunt sed quas similique sed molestias expedita ut galisum possimus et voluptatum deserunt aut nulla perferendis. Rem adipisci corporis est dolorem dolor qui illo mollitia id rerum rerum et dicta nulla aut excepturi magnam nam provident architect Cum porro dolore qui tempore exercitationem aut autem recusandae eos dolorem facilis et quia exercitationem ut perspiciatis numquam. Non necessitatibus rerum qui nulla deserunt quo totam aliquam est nesciunt dolorum et nemo enim ut nihil cumque. Non ipsam magni id fuga ipsam in optio impedit et necessitatibus iure. Qui Quis quisquam qui architecto culpa qui tempora quae.' : aboutCt?.aboutText }</p>
<Link to={`/${aboutCt?.aboutBtnLink}`} className="bg-slate-900 p-2 my-[20px] w-fit rounded-[2px] shadow-2xl font-semibold capitalize text-white hover:bg-slate-700 text-[20px] ">{!aboutCt?.aboutBtn? 'Contact Us' : aboutCt?.aboutBtn}</Link>
        </div>
        </div>
        <Reviews/>
        <Motivation/>
        <ChatWithMe/>
        </>
    )
}