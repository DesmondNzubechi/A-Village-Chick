import React from "react";
import { useEffect } from "react";
import { db, storage } from "../../Components/Config/Firebase";
import { addDoc, collection, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { useState } from "react";

export const ContactUs = () => {
   
    const [contactDatas, setcontactDatas] = useState([]);

    const contactRef = collection(db, 'contact');
    useEffect(() => {
    
        const getcontact = async () => {
            try {
                const contactContent = await getDocs(contactRef)
                const contactData = contactContent.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setcontactDatas(contactData);
            } catch (error) {
                console.log(error)
            }
        }
        getcontact();
    }, [])
    const contactCt = contactDatas[0];
    return(
        <div className="   font-poppins">
            <div className="flex md:flex-row md:items-center flex-col gap-[40px] justify-around px-[40px] pb-[100px] pt-[150px] md:pt-[200px]  ">
                <div>
                    <h1 className="text-[30px] font-bold my-[20px] ">{!contactCt?.contactHeader ? 'Get in touch with us' : contactCt?.contactHeader }</h1>
                    <p className="max-w-[800px] md:text-[20px] ">{!contactCt?.contactText ? ' If you have any questions or comments, please contact us via email or phone. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  : contactCt?.contactText } </p>
                </div>
                <div className="fle flex-col gap-2">
                    <span>
                        <h1 className="text-[25px] font-semibold ">{!contactCt?.phoneLabel ? ' Phone'  : contactCt?.phoneLabel } </h1>
                    <a className="text-slate-700" href={`tel:${contactCt?.phoneNo}`}>{!contactCt?.phoneNo ? ' +2347560293862'  : contactCt?.phoneNo }</a>
                    </span>
                   <span>
                    <h1 className="text-[25px]  font-semibold  ">{!contactCt?.emailLabel ? ' email'  : contactCt?.emailLabel } </h1>
                     <a className="text-slate-700" href={`mailto:${contactCt?.emailAddress}`}>{!contactCt?.emailAddress ? ' someone@gmail.com'  : contactCt?.emailAddress } </a>
                   </span>
                </div>
            </div>
        </div>
    )
}