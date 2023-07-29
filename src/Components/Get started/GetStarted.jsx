import React, { useEffect, useState } from "react";
import backgroundImage from '../../assets/images/session.avif'
import imgS from '../../assets/images/heroImg.avif'
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";
import { data } from "autoprefixer";
import { BlogContent } from "../../Pages/Blog/post";


export const getStarted = [ 
  ...BlogContent,
  /*{
    getStartedPic: backgroundImage,
    getStartedHeading: ' selection of  that will transform',
    getStartedFullDescription: 'Welcome to HomeDecor , your one-stop shop for stylish furniture and home decor. We offer a carefully curated selection of high-quality products that will transform your house into a beautiful and inviting home. At HomeDecor, we understand the importance of creating a space that truly reflects your personal style.',
    getStartedAmount: '$90.97 every month',
  },
  {
    getStartedPic: imgS,
    getStartedHeading: 'curated selection of high-quality  will transform',
    getStartedFullDescription: 'Welcome to HomeDecor , your one-stop shop for stylish furniture and home decor. We offer a carefully curated selection of high-quality products that will transform your house into a beautiful and inviting home. At HomeDecor, we understand the importance of creating a space that truly reflects your personal style.',
    getStartedAmount: '$90.97 every month',
  },
  {
    getStartedPic: backgroundImage,
    getStartedHeading: 'curated  products that will transform',
    getStartedFullDescription: 'Welcome to HomeDecor , your one-stop shop for stylish furniture and home decor. We offer a carefully curated selection of high-quality products that will transform your house into a beautiful and inviting home. At HomeDecor, we understand the importance of creating a space that truly reflects your personal style.',
    getStartedAmount: '$90.97 every month',
  },*/
]

export const GetStarted = () => {
  const {Subscribe, fetchedNews } = useContext(Context);
  const allNews  = [ ...fetchedNews ];
  //const newsStorage = collection(db, 'news');
  /*useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await getDocs(newsStorage);
        setFetchedNews(newsData.docs.map((doc) => ({...doc.data(), id: doc.id})));
      } catch (error) {
        alert(error)
      }
    }
    getNews();
  }, [])*/

    return(
      
      <>
        <div  
        style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`min-h-[70vh] font-poppins relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full  bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className="relative z-[1] py-[50px] ">
        <h1 className="font-semibold capitalize md:leading-[60px] leading-[45px] text-slate-50 text-[20px] text-center md:text-[40px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood.</h1>
      
<p className="text-slate-200 text-center my-[50px]  text-[17px] ">Homeownership often comes with a sense of pride and belonging to a neighborhood.</p>
        </div>
      </div>
      <div>
      </div>
      <div className="py-[50px] p-[40px] ">
        <div className="text-center font-poppins flex-col gap-[60px] flex-col py-[50px]  ">
        <p className="capitalize ">Ready to begin?</p>
        <h1 className=" font-bold md:leading-[60px] leading-[50px] text-[40px] ">Choose a path that feels right for you</h1>
        </div>
       <div className="grid lg:grid-cols-3 gap-[50px] md:grid-cols-2 grid-cols-1 ">
        {
        allNews.map(get => {
          return (<div><Link key={get.getStartedHeading} to={`/blog/${get?.headline}`} onClick={() => Subscribe(get)} className="flex font-poppins items-start flex-col h-full gap-5">
           
            
            {news?.newsVideo && <video className="rounded  max-w-[400px] h-full " controls>
    <source  src={news.newsVideo} type="video/mp4" />
                        </video>}
                 
                
                  {news?.newsImg  &&  <img src={news.newsImg} alt="" className="rounded  max-w-[400px] h-full " />}
            <p className="text-center text-[15px] md:text-[17px] "> {get.date} </p>
            <h1 className="font-bold text-[15px] md:text-[17px] capitalize ">{get.headline}</h1>
            <p className=" text-[15px] md:text-[17px] ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
            <button className="text-[20px] font-poppins bg-slate-900 p-1 text-slate-50 rounded-[1px] hover:bg-slate-800">Readmore</button>
          </Link>
          </div>)
         })
        }
       </div>
      </div>
    </>
    )
}