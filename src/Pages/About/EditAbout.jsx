import React from "react";
import { useEffect } from "react";
import AboutImg from '../../assets/images/session.avif';
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
import 'react-toastify/dist/ReactToastify.css';


export const EditAbout = () => {
   
    const [spinC, setSpinC] = useState(false);
    const [aboutDatas, setaboutDatas] = useState([]);
    //const [contents, setContents] = useState('');
    console.log(aboutDatas)
  //IMAGE INFO
  const {displaying, setDisplaying, editNews, setEditNews} = useContext(Context);
  const [imgInfo, setImgInfo] = useState({
    aboutImg: [],
    motivationBg: [],
    aboutImgName: '',
   motivationImgName: '',
  })
 
    
    const UpdateAboutImg = async () => {
      if (imgInfo.aboutImgName === '') {
          const noti = () => toast('Please select image to be uploaded');
          noti();
       return;
      }
       const folderRef = ref(storage,  'newsImg')
       try {
         const imgRef = ref(folderRef, imgInfo.aboutImgName)
       const imgUpload =  await uploadBytes(imgRef, imgInfo.aboutImg);
       const url = await getDownloadURL(imgUpload.ref);
         setaboutDatas([{...aboutDatas[0], aboutImg:  url}]);
         const noti = () => toast('About us Image Successfully Updated');
        noti();
   
       } catch (error) {
         const noti = () => toast(error);
         noti()
       }
   
     }
  
    const UpdateMotivationBg = async () => {
      if (imgInfo.motivationImgName === '') {
          const noti = () => toast('Please select background image to be uploaded');
          noti();
       return;
      }
       const folderRef = ref(storage,  'newsImg')
       try {
         const imgRef = ref(folderRef, imgInfo.motivationImgName)
       const imgUpload =  await uploadBytes(imgRef, imgInfo.motivationBg);
       const url = await getDownloadURL(imgUpload.ref);
      
         setaboutDatas([{...aboutDatas[0], motivationBg:  url}]);
         const noti = () => toast('Background Image Successfully Updated');
        noti();

       } catch (error) {
         const noti = () => toast(error);
         noti()
       }
   
     }
  
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
  
  
const currentDate = new Date();
const options = {
    year: 'numeric',
    month: 'long', // 'short' for abbreviated name, 'long' for full name
    day: 'numeric',
    weekday: 'long', // 'short' for abbreviated name, 'long' for full name
  };
  const fullDate = currentDate.toLocaleString(undefined, options);

    const updateabout = async (aboutId) => {
  
      setSpinC(true);
        const newsRef = doc(db, 'about', aboutId);
        try {
            await updateDoc(newsRef, {
            aboutImg: aboutDatas[0].aboutImg,
            aboutText: aboutDatas[0].aboutText,
            aboutBtn: aboutDatas[0].aboutBtn,
            aboutBtnLink: aboutDatas[0].aboutBtnLink,
            motivationBg : aboutDatas[0].motivationBg,
            motivation: aboutDatas[0].motivation,
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
  
    const aboutCt = aboutDatas[0];

    

    return(
        <div className="p-[40px] md:pl-[100px] flex justify-center font-poppins">
             {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
            <div>
            <div className="bg-slate-100  m-0 pt-[20px]  pb-[20px] gap-[50px] items-center px-[40px] flex flex-col md:flex-row justify-center rounded">
        <div>
            <img src={!aboutCt?.aboutImg? AboutImg : aboutCt?.aboutImg } alt="" />
        </div>
        <div className="max-w-[800px] flex flex-col gap-2">
            <h1 className="uppercase font-poppins text-slate-900 text-[30px]  ">{ !aboutCt?.aboutHeader?  'How my journey began' : aboutCt?.aboutHeader }</h1>
            <p className="font-poppins  text-slate-800 text-[15px]  ">{ !aboutCt?.aboutText?  'Lorem ipsum dolor sit amet. Qui ratione velit et officia blanditiis et voluptatem vitae sit sunt enim. Ad recusandae voluptas qui blanditiis sunt sed quas similique sed molestias expedita ut galisum possimus et voluptatum deserunt aut nulla perferendis. Rem adipisci corporis est dolorem dolor qui illo mollitia id rerum rerum et dicta nulla aut excepturi magnam nam provident architect Cum porro dolore qui tempore exercitationem aut autem recusandae eos dolorem facilis et quia exercitationem ut perspiciatis numquam. Non necessitatibus rerum qui nulla deserunt quo totam aliquam est nesciunt dolorum et nemo enim ut nihil cumque. Non ipsam magni id fuga ipsam in optio impedit et necessitatibus iure. Qui Quis quisquam qui architecto culpa qui tempora quae.' : aboutCt?.aboutText }</p>
<Link to={`/${aboutCt?.aboutBtnLink}`} className="bg-slate-900 p-2 my-[20px] w-fit rounded-[2px] shadow-2xl font-semibold capitalize text-white hover:bg-slate-700 text-[20px] ">{!aboutCt?.aboutBtn? 'Contact Us' : aboutCt?.aboutBtn}</Link>
        </div>
        </div>
                <form className="grid grid-col-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <textarea onChange={(e) => {
                            setaboutDatas([ {
                                ...aboutDatas[0],
                                aboutText: e.target.value
                            }])
                        }} value={aboutCt?.aboutText} placeholder="Full about us" className="border h-full outline-0 p-4   rounded" name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="flex  flex-col gap-2">
                        <div>
                        <label className="text-slate-700 text-[20px] " htmlFor="">About Header</label>
                        <input onChange={(e) => {
                            setaboutDatas([ {
                                ...aboutDatas[0],
                                aboutHeader: e.target.value
                            }])
                        }} value={aboutCt?.aboutHeader} type="text" placeholder="HOW MY JOURNEY BEGAN" className="border outline-0 p-2 text-[25px] font-bold  w-full rounded"/>
                        </div>
                    <div>
                        <label className="text-slate-700 text-[15px] " htmlFor="">About Image</label>
                        <input onChange={(e) => {
                      setImgInfo({
                        ...imgInfo,
                        aboutImg: e.target.files[0],
                        aboutImgName: e.target.files[0].name,
                      });
                    }} accept="image/*"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[15px]  rounded" type="file" />
                        <button onClick={UpdateAboutImg}  type="button" className="w-fit capitalize hover:bg-slate-900 text-[15px] hover:text-slate-50  p-1 rounded bg-green-500 ">upload image</button>
                    </div>
                    <div>
                    <label className="text-slate-700 text-[15px] " htmlFor="">Button</label>
                        <input onChange={(e) => {
                            setaboutDatas([ {
                                ...aboutDatas[0],
                                aboutBtn: e.target.value
                            }])
                        }} value={aboutCt?.aboutBtn} placeholder="Button Name"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
               <input onChange={(e) => {
                            setaboutDatas([ {
                                ...aboutDatas[0],
                                aboutBtnLink: e.target.value
                            }])
                        }}  value={aboutCt?.aboutBtnLink} placeholder="Button Link"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[20px]  rounded" type="text" />
                    </div>
            
                        <button onClick={() => updateabout(aboutDatas[0].id)} type="button" className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update Info</button>
                    </div>
                </form>
                <div>
                    </div>
                  <div className="grid items-center grid-cols-1 md:grid-cols-2">
                  <div className="bg-white p-[40px]" style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)' }}>
              <div  
        style={{ backgroundImage: `url(${!aboutCt?.motivationBg ? AboutImg : aboutCt.motivationBg})` }}
      className={` relative after:left-0  rounded text-center after:right-0 after:absolute after:top-0 after:h-full justify-center bg-center flex items-cente=r after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative flex flex-col gap-5 z-[1] py-[50px] max-w-[900px]">
        <h1 className="font-poppins font-bold capitalize  text-slate-50 text-[30px] md:text-[50px] ">{!aboutCt?.motivation ? 'Motivation comes from within — and I’m here to help you activate it.' : aboutCt?.motivation  }</h1>
        </div>
        </div>

      </div>
       

                  <div className="flex  flex-col gap-2"> 
                  <textarea onChange={(e) => {
                            setaboutDatas([ {
                                ...aboutDatas[0],
                                motivation: e.target.value
                            }])
                        }} value={aboutCt?.motivation} placeholder="Motivation"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[25px]  rounded" type="text" />
                  <div>
                        <label  className="text-slate-700 text-[20px] " htmlFor="">Background Image</label>
                        <input  onChange={(e) => {
                      setImgInfo({
                        ...imgInfo,
                        motivationBg: e.target.files[0],
                        motivationImgName: e.target.files[0].name,
                      });
                    }} accept="image/*"  className="border file:bg-transparent file:border-0 outline-0 p-2  w-full text-[15px]  rounded" type="file" />
                        <button onClick={UpdateMotivationBg}  type="button" className="w-fit capitalize hover:bg-slate-900 hover:text-slate-50  p-1 rounded bg-green-500 ">upload image</button> </div>
                        <button onClick={() => updateabout(aboutCt.id)}   type="button" className="bg-slate-900 hover:bg-slate-700 p-2 rounded text-slate-50 text-[20px] ">Update Info</button>
                  </div>
                  </div>
                 
                </div>
        </div>
    )
}