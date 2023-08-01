import React from "react";
import { useEffect } from "react";
import blogImg from '../../assets/images/session.avif';
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



export const EditNewsPage = () => {
  const [spinC, setSpinC] = useState(false);
  const [blogDatas, setblogDatas] = useState([]);

  const blogRef = collection(db, 'blog');
  useEffect(() => {
  
      const getblog = async () => {
          try {
              const blogContent = await getDocs(blogRef)
              const blogData = blogContent.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
              setblogDatas(blogData);
          } catch (error) {
              console.log(error)
          }
      }
      getblog();
  }, [])
  
  
const currentDate = new Date();
const options = {
    year: 'numeric',
    month: 'long', // 'short' for abbreviated name, 'long' for full name
    day: 'numeric',
    weekday: 'long', // 'short' for abbreviated name, 'long' for full name
  };
  const fullDate = currentDate.toLocaleString(undefined, options);

    const updateblog = async (blogId) => {
  
      setSpinC(true);
        const newsRef = doc(db, 'blog', blogId);
        try {
            await updateDoc(newsRef, {
            headline: blogDatas[0].headline,
            title: blogDatas[0].title,
            descrip: blogDatas[0].descrip,
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
  
    const blogCt = blogDatas[0];



    return(
           <div> 
              {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
              <div  className={` lg:min-h-[20vh] min-h-[20vh] relative   bg-center flex items-start gap-[30px] pt-[30px] py-[50px] px-[40px]  flex-col  bg-cover z-[1]  `}>
                <p className=" text-[30px] "> {!blogCt?.title ? ' Bloger ' : blogCt?.title } <input onChange={(e) => {
                            setblogDatas([ {
                                ...blogDatas[0],
                                title: e.target.value
                            }])
                        }}  value={blogCt?.title} placeholder="New page title"  className="border file:bg-transparent file:border-0 outline-0 p-2 text-slate-500 w-full text-[20px]  rounded" type="text" /></p>
                <h1 className="font-poppins text-[30px] md:text-[40px] font-bold "> {!blogCt?.headline ? ' Cultivate & Motivate ' : blogCt?.headline } 
                <input onChange={(e) => {
                            setblogDatas([ {
                                ...blogDatas[0],
                                headline: e.target.value
                            }])
                        }} value={blogCt?.headline} placeholder="News page headline"  className="border text-slate-500 file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" /></h1>
                
                <p className="font-poppins text-[20px] max-w-[900px] "> {!blogCt?.descrip ? ' Learnings, teachings and tips & tricks for anyone to reference during difficult times, stressful workdays and moments when manifesting your true self' : blogCt?.descrip } 
                <textarea onChange={(e) => {
                            setblogDatas([ {
                                ...blogDatas[0],
                                descrip: e.target.value
                            }])
                        }} value={blogCt?.descrip} placeholder="Write up..." className="border h-full outline-0 text-slate-500 p-2 w-full  rounded" name="" id="" cols="30" rows="10">
                        </textarea></p>
                        <button type="button" onClick={() => updateblog(blogCt.id)} className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update Info</button>
              </div>
           </div>
    )
}