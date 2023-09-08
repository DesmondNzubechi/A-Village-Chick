import React from "react";
import { useEffect } from "react";
import contactImg from '../../assets/images/session.avif';
import { Link } from "react-router-dom";
import { db, storage } from "../../Components/Config/Firebase";
import { addDoc, collection, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { Context } from "../../Components/Context/Context";
import { useContext } from "react";
import { doc } from "firebase/firestore";
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
import { toast } from "react-toastify";




export const EditContact = () => {

    const [spinC, setSpinC] = useState(false);
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
    
    
  const currentDate = new Date();
  const options = {
      year: 'numeric',
      month: 'long', // 'short' for abbreviated name, 'long' for full name
      day: 'numeric',
      weekday: 'long', // 'short' for abbreviated name, 'long' for full name
    };
    const fullDate = currentDate.toLocaleString(undefined, options);
  
      const updatecontact = async (contactId) => {
    
        setSpinC(true);
          const newsRef = doc(db, 'contact', contactId);
          try {
              await updateDoc(newsRef, {
              contactHeader: contactDatas[0].contactHeader,
              contactText: contactDatas[0].contactText,
              emailAddress: contactDatas[0].emailAddress,
              emailLabel: contactDatas[0].emailLabel,
              phoneLabel : contactDatas[0].phoneLabel,
              phoneNo: contactDatas[0].phoneNo,
              date: fullDate,
               })
             const noti = () => toast('Successfully Update');
             noti();
            setSpinC(false)
          } catch (error) {
              console.log(error);
            alert(error);
          }
      }
    
      const contactCt = contactDatas[0];
  


    return(
        <div className="p-5 flex justify-center px-[40px] font-poppins">
            <div>
            {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
            <div className="   font-poppins">
            <div className="flex md:flex-row md:items-center flex-col gap-[40px] justify-around pb-[10px] pt-[5px]  ">
                <div>
                            <h1 className="text-[30px] font-bold my-[20px] ">krj {!contactCt?.contactHeader ? 'Get in touch with us' : contactCt?.contactHeader}</h1>
                            
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
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea onChange={(e) => {
                            setcontactDatas([ {
                                ...contactDatas[0],
                                contactText: e.target.value
                            }])
                        }} value={contactCt?.contactText} placeholder="If you have any questions or comments, please contact us via email or phone." className="border h-full outline-0 p-2  w-full rounded" name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="flex  flex-col gap-2">
                    <input onChange={(e) => {
                            setcontactDatas([ {
                                ...contactDatas[0],
                                contactHeader: e.target.value
                            }])
                        }} value={contactCt?.contactHeader} type="text" placeholder="Get in touch" className="border outline-0 p-2 text-[25px] font-bold  w-full rounded"/>
                        <input  onChange={(e) => {
                            setcontactDatas([ {
                                ...contactDatas[0],
                                phoneLabel: e.target.value
                            }])
                        }} value={contactCt?.phoneLabel}  placeholder="Phone" className="border outline-0 p-2  w-full text-[25px] font-bold rounded" type="text" />
                        <input onChange={(e) => {
                            setcontactDatas([ {
                                ...contactDatas[0],
                                phoneNo: e.target.value
                            }])
                        }} value={contactCt?.phoneNo}  placeholder="+2347560293862" className="border outline-0 p-2  w-full rounded" type="number" name="" id="" />
                        <input onChange={(e) => {
                            setcontactDatas([ {
                                ...contactDatas[0],
                                emailLabel: e.target.value
                            }])
                        }} value={contactCt?.emailLabel} placeholder="Email" className="border outline-0 p-2  w-full text-[25px] font-bold rounded" type="text"  />
                        <input onChange={(e) => {
                            setcontactDatas([ {
                                ...contactDatas[0],
                                emailAddress: e.target.value
                            }])
                        }} value={contactCt?.emailAddress} placeholder="Someone@gmail.com" className="border outline-0 p-2  w-full rounded" type="email" name="" id="" />
                        <button onClick={() => updatecontact(contactDatas[0].id)} type="button" className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update</button>
                    </div>
                </form>
                </div>
        </div>
    )
}