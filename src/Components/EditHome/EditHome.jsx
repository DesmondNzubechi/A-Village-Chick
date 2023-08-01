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
       const imgRef = ref(folderRef, imgInfo.heroImgName)
     const imgUpload =  await uploadBytes(imgRef, imgInfo.heroBg);
     const url = await getDownloadURL(imgUpload.ref);
    
       setHomeDatas([{...homeDatas[0], heroBg:  url}]);
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
       const imgRef = ref(folderRef, imgInfo.overviewImgName)
     const imgUpload =  await uploadBytes(imgRef, imgInfo.overviewBg);
     const url = await getDownloadURL(imgUpload.ref);
    
       setHomeDatas([{...homeDatas[0], overviewBg:  url}]);
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
}, [])

  const updateHome = async (homeId) => {

    setSpinC(true);
      const newsRef = doc(db, 'homepage', homeId);
      try {
          await updateDoc(newsRef, {
          heroBg: homeDatas[0].heroBg,
          heroText: homeDatas[0].heroText,
          heroBtn: homeDatas[0].heroBtn,
          heroBtnLink: homeDatas[0].heroBtnLink,
          overViewText1 : homeDatas[0].overViewText1,
          overViewText2: homeDatas[0].overViewText2,
          overviewBg: homeDatas[0].overviewBg,
          overViewBtn: homeDatas[0].overViewBtn,
          overViewBtnLink: homeDatas[0].overViewBtnLink,
          footerHeader: homeDatas[0].footerHeader,
          footerParagraph: homeDatas[0].footerParagraph,
          footerNav1: homeDatas[0].footerNav1,
          footerNav2: homeDatas[0].footerNav2,
          footerNav3: homeDatas[0].footerNav3,
          footerNav1Link:  homeDatas[0].footerNav1Link,
          footerNav2Link:  homeDatas[0].footerNav2Link,
          footerNav3Link:  homeDatas[0].footerNav3Link,
          social1 : homeDatas[0].social1,
          social2 : homeDatas[0].social2,
          social3 : homeDatas[0].social3,
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


    return(
        <div className="flex justify-center px-[50px]">
             {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
            {homeDatas.map(data => {
                return  <div>
            <div>
            <div>

 <div>
              <div  
        style={{ backgroundImage: `url(${!data?.heroBg? heroImg:  data.heroBg})`}}
      className={`min-h-[30vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full  bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative z-[1] py-[50px] max-w-[900px]">
    <h1 className="font-semibold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] mb-[30px] md:text-[50px] ">{!data?.heroText ? 'Homeownership often comes with a sense of pride and belonging to a neighborhood.' : data?.heroText}</h1>
       
        <Link to={`/${data?.heroBtnLink}`} className="capitalize my-[50px] text-[20px] bg-slate-900  text-slate-50 rounded hover:bg-slate-800 p-2 ">{!data?.heroBtn ? 'read news...' : data?.heroBtn}</Link>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>
      </div>
        </div>
        <div>
        <div className="p-[40px] md:pl-[100px] flex justify-center font-poppins">
                <div className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                heroText: e.target.value
                            }])
                        }} value={data?.heroText} placeholder="Write up..." className="border h-full outline-0 p-2   rounded" name="" id="" cols="30" rows="10">
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
                        <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                heroBtn: e.target.value
                            }])
                        }} value={data?.heroBtn} placeholder="Button Name"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
               <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                heroBtnLink: e.target.value
                            }])
                        }}  value={data?.heroBtnLink} placeholder="Button Link"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    </div>
            
                        <button type="button" onClick={() => updateHome(data.id)} className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update Info</button>
                    </div>
                </div>
        </div>
        </div>
        </div>
        <div>
              <div  
       style={{ backgroundImage: `url(${!data?.overviewBg? heroImg:  data.overviewBg})`}}
      className={`min-h-[30vh] relative after:left-0 text-center after:right-0 after:absolute after:top-0 after:h-full justify-center bg-center flex items-cente=r after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative flex flex-col gap-5 z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-bold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[30px] md:text-[50px] ">{!data?.overViewText1? 'Try a session for free and see if it’s right for you.' : data?.overViewText1}</h1>

         <p className="text-slate-100 text-[20px]">{!data?.overViewText2? 'There’s no commitment, pressure, or obligation.' : data?.overViewText2}</p>
        <div>
        <Link to={`/${data?.overViewBtnLink}`} className="capitalize mt-[100px] my-[30px] text-[20px] bg-slate-900  text-slate-50 rounded-[1px] px-[30px] hover:bg-slate-800 w-fit p-2 ">{data?.overViewBtn}</Link>
        </div>
{/*<p className="text-slate-200 font-fonty text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood. You have the opportunity to engage with your neighbors, participate in local activities, and contribute to the overall well-being of the community.</p>*/}
        </div>
        </div>
      </div>
      <div>
        <div className="p-[40px] md:pl-[100px] flex justify-center font-poppins">
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                overViewText1: e.target.value
                            }])
                        }}
                     value={data.overViewText1}  placeholder="Write up..." className="border h-full outline-0 p-2   rounded" name="" id="" cols="30" rows="10">
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
                     <button type='button' onClick={ UpdateoverViewBg}  className="w-fit capitalize hover:bg-slate-900 hover:text-slate-50  p-1 rounded bg-green-500 ">upload image</button>
                    </div>
                    <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                               overViewText2: e.target.value
                            }])
                        }} value={data.overViewText2} placeholder="Paragraph Text"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    <div>
                        <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                overViewBtn: e.target.value
                            }])
                        }} value={data.overViewBtn} placeholder="Button Name"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
               <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                               overViewBtnLink: e.target.value
                            }])
                        }} value={data.overViewBtnLink} placeholder="Button Link"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    </div>
            
                        <button type="button" onClick={() => updateHome(data.id)} className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update Info</button>
                    </div>
                </form>
        </div>
        </div>
        <div className="bg-slate-900 text-slate-50 flex flex-col  py-[50px] flex  gap-[40px] px-[40px] ">
        <div className=" text-slate-50 md:items-center  flex justify-between md:flex-row flex-col gap-[40px]  ">
            
            <div className="flex flex-col gap-3">
                <p className="font-bold text-[25px] md:text-[30px] ">{!data?.footerHeader ? "show you a kinder" : data?.footerHeader }<br />
                
                <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                footerHeader: e.target.value
                            }])
                        }} value={data.footerHeader} type="text" placeholder="Start Edit..." className="bg-slate-100 boder-0 text-slate-700 text-[20px] min-h-[10vh] p-1 rounded outline-0  " /></p>
                <h1 className="text-slate-200 font-semibold text-[20px] ">
                {!data?.footerParagraph ? "You belong here. ♡ " : data?.footerParagraph }<br /> <br /><input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                footerParagraph: e.target.value
                            }])
                        }} value={data.footerParagraph} type="text" placeholder="Start Editing..." className="bg-slate-100 boder-0 text-slate-700 text-[20px] min-h-[10vh] p-1 rounded outline-0  " /></h1>
            </div>
            <div className="flex md:flex-col  flex-row gap-[50px]">
                <div className="flex flex-col gap-[5px] ">
                <p>  {!data?.footerNav1 ? "Home " : data?.footerNav1 } <input type="text" onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                               footerNav1: e.target.value
                            }])
                        }} value={data?.footerNav1} placeholder="edit.." className="bg-slate-100 boder-0 text-slate-700 p-1 w-[70px] rounded outline-0  " /> <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                footerNav1Link: e.target.value
                            }])
                        }}  value={data?.footerNav1Link} type="text" placeholder="link.." className="bg-slate-100 boder-0 p-1 text-slate-700 w-[70px] rounded outline-0  " /></p>
                <p> {!data?.footerNav2 ? "About " : data?.footerNav2 }<input  value={data?.footerNav2} onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                footerNav2: e.target.value
                            }])
                        }} type="text" placeholder="edit.." className="bg-slate-100 boder-0 text-slate-700 p-1 w-[70px] rounded outline-0  " /> <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                               footerNav2Link: e.target.value
                            }])
                        }} value={data?.footerNav2Link} type="text" placeholder="link.." className="bg-slate-100 text-slate-700 boder-0 p-1 w-[70px] rounded outline-0  " /></p>
                <p>  {!data?.footerNav3 ? "Get Started " : data?.footerNav3 } <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                footerNav3: e.target.value
                            }])
                        }} value={data?.footerNav3} type="text" placeholder="edit.." className="bg-slate-100 boder-0 text-slate-700 p-1 w-[70px] rounded outline-0  " /><input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                               footerNav3Link: e.target.value
                            }])
                        }} value={data?.footerNav3Link} type="text" placeholder="link.." className="bg-slate-100 boder-0 text-slate-700 p-1 w-[70px] rounded outline-0  " /></p>
                </div>
                <div className="flex items-center flex-col gap-1">
                <div className="flex flex-row gap-5">
                    <a href={`${data?.social1}`}><AiOutlineInstagram/> </a>
                    <a href={`${data?.social2}`}> <BsFacebook/></a>
                    <a href={`${data?.social3}`}> <AiFillTwitterCircle/></a>
                </div>
                <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                social1: e.target.value
                            }])
                        }} type="text" value={data?.social1} placeholder="Instagram Link" className="bg-slate-100 text-slate-700 boder-0 p-1 rounded outline-0  " />
                <input onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                social2: e.target.value
                            }])
                        }} type="text" value={data?.social2} placeholder="Facebook Link" className="bg-slate-100 boder-0 text-slate-700 p-1 rounded outline-0  " />
                <input type="text" onChange={(e) => {
                            setHomeDatas([ {
                                ...homeDatas[0],
                                social3: e.target.value
                            }])
                        }} value={data?.social3} placeholder="Twitter Link" className="bg-slate-100 boder-0 p-1 text-slate-700 rounded outline-0  " />
                </div>
                
            </div>
            </div>
            <button type="button" onClick={() => updateHome(data.id)} className="bg-slate-50 hover:bg-slate-200 p-2 self-block rounded text-slate-900 text-[20px] ">Update Info</button>
        </div>
        
        </div>
      
        </div>
         })}
        </div>
    )
}