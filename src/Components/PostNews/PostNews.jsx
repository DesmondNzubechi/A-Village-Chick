import React, { useEffect } from "react";
import { db, storage } from "../Config/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import ReactQuill from "react-quill";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { serverTimestamp, Timestamp } from "firebase/firestore";
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const PostNews = () => {
  const [spinC, setSpinC] = useState(false);
  //const [contents, setContents] = useState('');
//IMAGE INFO
const [imgInfo, setImgInfo] = useState({
  imgFile: [],
  imgName: '',
})
const [fileType, setFileType] = useState('image');
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
    newsHeadline: '',
    newsOverview: '',
    fullNews: ''
  })
  console.log(newsContents)

  const uploadNewsImg = async () => {
    if (imgInfo.imgName === '') {
      if (fileType === 'image') {
        const noti = () => toast('Please select image to be uploaded');
        noti();
      } else {
        const noti = () => toast('Please select Video to be uploaded');
        noti();
      }
     return;
    }
    const folderRef = ref(storage,  'newsImg')
    try {
      const imgRef = ref(folderRef, imgInfo.imgName)
    const imgUpload =  await uploadBytes(imgRef, imgInfo.imgFile);
    const url = await getDownloadURL(imgUpload.ref);
    if (fileType === 'video') {
      setNewsContents({...newsContents, newsVideo: [...newsContents.newsVideo, url]});
      const noti = () => toast('Video Successfully Uploaded');
      noti();
    } else {
      setNewsContents({...newsContents, newsImg: [...newsContents.newsImg, url]});
      const noti = () => toast('Image Successfully Uploaded');
     noti();
    }

    } catch (error) {
      const noti = () => toast(error);
      noti()
    }

  }
useEffect(() => {
  localStorage.setItem('newsContents', JSON.stringify(newsContents));
}, [newsContents])


  const postNews = async () => {
      if (newsContents.newsImg.length === 0 && newsContents.newsVideo.length === 0 || newsContents.fullNews === '' || newsContents.newsHeadline === '' || newsContents.newsOverview === '') {
        const noti = () => toast('Please fill the provided input field');
        noti();
        return;
      }
    if (newsContents.newsImg.length === 0 && newsContents.newsVideo.length === 0) {
      const shouldProceed = window.confirm("You have not uploaded Image or Video, Do you want to proceed");
      if (!shouldProceed) {
        return; // Function will stop if user clicks 'No'
      }
    }
    setSpinC(true)
      const newsRef = collection(db, 'news');
      try {
        if (fileType === 'video') {
          await addDoc(newsRef, {
            newsVideo: newsContents.newsVideo,
            newsHeadline: newsContents.newsHeadline,
            newsOverview: newsContents.newsOverview,
            fullNews:  newsContents.fullNews,
            date: fullDate,
            createTime: new Date().getTime(),
           })
        } else {
          await addDoc(newsRef, {
            newsImg: newsContents.newsImg,
            newsHeadline: newsContents.newsHeadline,
            newsOverview: newsContents.newsOverview,
            fullNews:  newsContents.fullNews,
            date: fullDate,
            createTime: new Date().getTime(),
           })
        }
        setSpinC(false);
        const noti = () => toast('News Successfully Uploaded');
        noti();
      } catch (error) {
          console.log(error);
          alert(error)
      }
  }


    return(
        <div on className="py-[20px] shadow rounded-[30px] m-[20px] px-[40px] font-poppins justify-center bg-gray-50 overflow-x-hidden flex flex-row ">
           {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col gap-5 md:flex-row  ">
                <div className="flex flex-col gap-0 ">
                    <label className="capitalize font-[600] text-[13px] " htmlFor="headline">news headline :</label>
                    <input onChange={(e) => setNewsContents({...newsContents, newsHeadline: e.target.value })} type="text" className="p-4 bg-transparent capitalize text-[13px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
                </div>
                <div className="flex flex-col gap-0 ">
                    <label className="capitalize font-[600] text-[13px] " htmlFor="headline">News overview:</label>
                    <input onChange={(e) => setNewsContents({...newsContents, newsOverview: e.target.value })} type="text" className="p-4 bg-transparent capitalize text-[13px] outline-0 shadow rounded  w-full " name="headline" placeholder="News overview" id="" />
                </div>
                <div className="flex flex-col gap-0 ">
                   {/* <label className="capitalize font-[600] text-[17px] " htmlFor="headline">image/Video:</label>*/}
                    <select onChange={(e) => setFileType(e.target.value)} className="rounded outline-0 p-1" name="" id="">
                      <option value="image">News Image</option>
                      <option value="video">News Video</option>
                    </select>
                    <input onChange={(e) => {
                      setImgInfo({
                        imgFile: e.target.files[0],
                        imgName: e.target.files[0].name,
                      });
                    }} accept={`${fileType}/*`} type="file" className="p-4 file:bg-transparent file:border-0 capitalize text-[15px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
                    <button onClick={ uploadNewsImg} type="button" className="w-fit capitalize text-[12px] hover:bg-slate-900 hover:text-slate-50  p-1 rounded bg-green-500 ">upload image</button>
                </div>
              {/* <div className="flex flex-col gap-0 ">
                    <label className="capitalize font-[600] text-[17px] " htmlFor="headline">Date :</label>
                    <input type="date" className="p-4 capitalize text-[15px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
    </div>*/}
              </div>
              <div className="flex flex-col gap-0 ">
                    <label className="capitalize font-[600] text-[13px] " htmlFor="headline">news content :</label>
              <ReactQuill
       className="md:max-w-[700px] rounded-[30px] max-w-[500px] min-h-[30vh] lg:max-w-[1100px] "
        onChange={(e) => {
          setNewsContents({...newsContents, fullNews: e})
        }}
        placeholder="Full contents of the article"
        modules={{
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike', ], // Basic formatting button
              ['script'],
              [{ 'font': [] }],
              [{ 'align': [] }],
              [{ 'color': [] }, { 'background': [] }],    
              ['blockquote', 'code-block',   ],
              [{ 'size': ['small', false,  'large', 'huge'] }],  
              [{ header: 1 }, { header: 2 }], // Header formatting buttons
              [{ list: 'ordered' }, { list: 'bullet' }], // List buttons
             ['link',  'image', 'Formula',  'video'], // Link and media buttons
             ['uppercase', 'capitalize',  'lowercase'] ,
            ], 
            },
          }}
        />
        </div>
         <button onClick={() => postNews()} className="bg-slate-900 w-fit  mt-[100px] md:mt-[50px] shadow py-2 px-5 rounded text-slate-50 text-[13px] hover:bg-slate-700 ">Upload News</button>
     
             {/* <div className="flex gap-0 flex-col">
                <label className="uppercase font-[600] text-[15px] "  htmlFor="full content">Full content</label>
                <textarea className="min-h-[40vh] p-4 outline-0 border w-full shadow rounded " name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div>
                <button className="bg-slate-900 shadow py-2 px-5 rounded text-slate-50 text-[15px] hover:bg-slate-700 ">Post News</button>
    </div>*/}
            </div>
        </div>
    )
}