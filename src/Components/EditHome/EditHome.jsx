import React, { useEffect } from "react";
import { db, storage } from "../Config/Firebase";
import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore";
import { useState } from "react";
import heroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";
import {AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import ReactQuill from "react-quill";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { Context } from "../Context/Context";
import { useContext } from "react";
import 'react-quill/dist/quill.snow.css';
import { doc } from "firebase/firestore";
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const EditHome = () => {
     const [spinC, setSpinC] = useState(false);
  const [fileType, setFileType] = useState('image');
  const [homeDatas, setHomeDatas] = useState([]);
  //const [contents, setContents] = useState('');
  console.log(homeDatas)
//IMAGE INFO
const {displaying, setDisplaying, editNews, setEditNews} = useContext(Context);
const [imgInfo, setImgInfo] = useState({
  heroBg: [],
  overviewBg: [],
  heroImgName: '',
 overviewImgName: '',
})

const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long', // 'short' for abbreviated name, 'long' for full name
        day: 'numeric',
        weekday: 'long', // 'short' for abbreviated name, 'long' for full name
      };
      const fullDate = currentDate.toLocaleString(undefined, options);

  ///NEWS CONTENTS
  const [newsContents, setNewsContents] = useState({
    newsImg: [],
    newsVideo: [],
    newsHeadline: editNews.newsHeadline,
    newsOverview: '',
    fullNews: ''
  })


  const UpdateHeroBg = async () => {
    if (imgInfo.heroImgName === '') {
        const noti = () => toast('Please select background image to be uploaded');
        noti();
     return;
    }
     const folderRef = ref(storage,  'newsImg')
     try {
       const imgRef = ref(folderRef, imgInfo.imgName)
     const imgUpload =  await uploadBytes(imgRef, imgInfo.imgFile);
     const url = await getDownloadURL(imgUpload.ref);
    
       setHomeDatas({...homeDatas, heroBg:  url});
       const noti = () => toast('Background Image Successfully Updated');
      noti();
 
     } catch (error) {
       const noti = () => toast(error);
       noti()
     }
 
   }


   
  const UpdateoverViewBg = async () => {
    if (imgInfo.overviewImgName === '') {
        const noti = () => toast('Please select background image to be uploaded');
        noti();
     return;
    }
     const folderRef = ref(storage,  'newsImg')
     try {
       const imgRef = ref(folderRef, imgInfo.imgName)
     const imgUpload =  await uploadBytes(imgRef, imgInfo.imgFile);
     const url = await getDownloadURL(imgUpload.ref);
    
       setHomeDatas({...homeDatas, overviewBg:  url});
       const noti = () => toast('Background Image Successfully Updated');
      noti();
 
     } catch (error) {
       const noti = () => toast(error);
       noti()
     }
 
   }

   const homeRef = collection(db, 'homepage');
useEffect(() => {

    const getHome = async () => {
        try {
            const homeContent = await getDocs(homeRef)
            const homeData = homeContent.docs.map((doc) => ({ ...doc.data(), id: doc.id, createTime: fullDate }));
            setHomeDatas(homeData);
        } catch (error) {
            console.log(error)
        }
    }
    getHome();
  localStorage.setItem('newsContents', JSON.stringify(newsContents));
}, [newsContents])


  const updateNews = async (newsId) => {

    if (editNews.newsImg?.length === 0 ) {
      const shouldProceed = window.confirm("newsImg is empty. Do you want to proceed with the execution of the function?");
      if (!shouldProceed) {
        return; // Function will stop if user clicks 'No'
      }
    }

    if ( editNews.newsVideo?.length === 0) {
      const shouldProceed = window.confirm("newsImg is empty. Do you want to proceed with the execution of the function?");
      if (!shouldProceed) {
        return; // Function will stop if user clicks 'No'
      }
    }
    setSpinC(true);
      const newsRef = doc(db, 'news', newsId);
      try {
        if (fileType === 'video') {
          await updateDoc(newsRef, {
            newsVideo: editNews.newsVideo,
            newsHeadline: editNews.newsHeadline,
            newsOverview: editNews.newsOverview,
            fullNews:  editNews.fullNews,
            date: fullDate,
            createTime: new Date().getTime(),
           })
        } else {
          await updateDoc(newsRef, {
            newsImg: editNews.newsImg,
            newsHeadline: editNews.newsHeadline,
            newsOverview: editNews.newsOverview,
            fullNews:  editNews.fullNews,
            date: fullDate,
            createTime: new Date().getTime(),
           })
        }
         const noti = () => toast('News Successfully Update');
         noti();
        setSpinC(false)
      } catch (error) {
          console.log(error);
          const noti = () => toast(error);
        noti();
      }
  }


    return(
        <div className="flex justify-center px-[50px]">
            <div>
            <div>

 <div>
              <div  
        style={{ backgroundImage: `url(${heroImg})` }}
      className={`min-h-[30vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full  bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-semibold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] mb-[30px] md:text-[50px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood.</h1>
        <Link to='/blog' className="capitalize my-[50px] text-[20px] bg-slate-900  text-slate-50 rounded hover:bg-slate-800 p-2 ">read news...</Link>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>
      </div>
        </div>
        <div>
        <div className="p-[40px] md:pl-[100px] flex justify-center font-poppins">
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea  value={homeDatas[0]?.heroText} placeholder="Write up..." className="border h-full outline-0 p-2   rounded" name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="flex  flex-col gap-2">
                    <div>
                        <label className="text-slate-700 text-[20px] " htmlFor="">Background Image</label>
                        <input onChange={(e) => {
                      setImgInfo({
                        ...imgInfo,
                        heroBg: e.target.files[0],
                        heroImgName: e.target.files[0].name,
                      });
                    }} accept="image/*"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[15px]  rounded" type="file" />
                     <button onClick={UpdateHeroBg} type="button" className="w-fit capitalize hover:bg-slate-900 hover:text-slate-50  p-1 rounded bg-green-500 ">upload image</button>
                    </div>
                    <div>
                        <input placeholder="Button Name"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
               <input placeholder="Button Link"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    </div>
            
                        <button className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update</button>
                    </div>
                </form>
        </div>
        </div>
        </div>
        <div style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 93%, 0% 0%)' }}>
              <div  
        style={{ backgroundImage: `url(${heroImg})` }}
      className={`min-h-[100vh] relative after:left-0 text-center after:right-0 after:absolute after:top-0 after:h-full justify-center bg-center flex items-cente=r after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative flex flex-col gap-5 z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-bold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] md:text-[50px] ">Try a session for free and see if it’s right for you.</h1>
        <p className="text-slate-100 text-[20px]">There’s no commitment, pressure, or obligation.</p>
        <div>
        <Link to='/get started' className="capitalize mt-[100px] my-[30px] text-[20px] bg-slate-900  text-slate-50 rounded-[1px] px-[30px] hover:bg-slate-800 w-fit p-2 ">Learn more...</Link>
        </div>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>
        </div>
      </div>
      <div>
        <div className="p-[40px] md:pl-[100px] flex justify-center font-poppins">
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea placeholder="Write up..." className="border h-full outline-0 p-2   rounded" name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="flex  flex-col gap-2">
                    <div>
                        <label className="text-slate-700 text-[20px] " htmlFor="">Background Image</label>
                        <input onChange={(e) => {
                      setImgInfo({
                        ...imgInfo,
                        overviewBg: e.target.files[0],
                        overviewImgName: e.target.files[0].name,
                      });
                    }}  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[15px]  rounded" type="file" />
                     <button onClick={ UpdateoverViewBg} type="button" className="w-fit capitalize hover:bg-slate-900 hover:text-slate-50  p-1 rounded bg-green-500 ">upload image</button>
                    </div>
                    <input placeholder="Paragraph Text"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    <div>
                        <input placeholder="Button Name"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
               <input placeholder="Button Link"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    </div>
            
                        <button className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update Info</button>
                    </div>
                </form>
        </div>
        </div>
        <div className="bg-slate-900 text-slate-50 md:items-center py-[50px] flex justify-between md:flex-row flex-col gap-[40px] px-[40px] ">
            <div className="flex flex-col gap-3">
                <p className="font-bold text-[25px] md:text-[30px] ">show you a kinder <br /><input type="text" placeholder="Start Edit..." className="bg-slate-100 boder-0 text-[20px] min-h-[10vh] p-1 rounded outline-0  " /></p>
                <h1 className="text-slate-200 font-semibold text-[20px] ">You belong here. ♡  <br /><input type="text" placeholder="Start Editing..." className="bg-slate-100 boder-0 text-[20px] min-h-[10vh] p-1 rounded outline-0  " /></h1>
            </div>
            <div className="flex md:flex-col  flex-row gap-[50px]">
                <div className="flex flex-col gap-[5px] ">
                <p>You <input type="text" placeholder="edit.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /> <input type="text" placeholder="link.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /></p>
                <p>About<input type="text" placeholder="edit.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /> <input type="text" placeholder="link.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /></p>
                <p>Get Started <input type="text" placeholder="edit.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /><input type="text" placeholder="link.." className="bg-slate-100 boder-0 p-1 w-[70px] rounded outline-0  " /></p>
                </div>
                <div className="flex items-center flex-col gap-1">
                <div className="flex flex-row gap-5">
                    <a href="http://"><AiOutlineInstagram/></a>
                    <a href="http://"> <BsFacebook/></a>
                    <a href="http://"> <AiFillTwitterCircle/></a>
                </div>
                <input type="text" placeholder="Instagram Link" className="bg-slate-100 boder-0 p-1 rounded outline-0  " />
                <input type="text" placeholder="Facebook Link" className="bg-slate-100 boder-0 p-1 rounded outline-0  " />
                <input type="text" placeholder="Twitter Link" className="bg-slate-100 boder-0 p-1 rounded outline-0  " />
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}