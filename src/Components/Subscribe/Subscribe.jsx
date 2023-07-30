import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import AboutImg from "../../assets/images/session.avif";
import { Link } from "react-router-dom";
// Import MoreNews and getStarted components if they are defined
// import { MoreNews } from "../MoreNews/MoreNews";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DOMPurify from "dompurify";

export const Subscribe = () => {
  const { subscriptionDetails, fetchedNews, Subscribe } = useContext(Context);
  console.log(subscriptionDetails);
  const sanitizedHTML = DOMPurify.sanitize(subscriptionDetails.fullNews);
  const plainTextContent = new DOMParser().parseFromString(sanitizedHTML, 'text/html').body.textContent;

  return (
    <div className="grid pt-[120px] overflow-x-hidden px-[20px] items-start md:pt-[250px] pb-[100px] grid-cols-1 md:grid-cols-2 gap-[100px] lg:grid-cols-3">
      {/* Render the subscriptionDetails data */}
      <div className="bg-white lg:col-span-2 m-0  gap-[50px] items-start  flex flex-col justify-center rounded">
      <h1 className="uppercase font-poppins text-slate-900 text-[30px]  ">{subscriptionDetails.newsHeadline}</h1>
        <div>
        {subscriptionDetails?.newsVideo && <video  controls>
    <source  src={subscriptionDetails.newsVideo} type="video/mp4" />
                        </video>}
                 
                
                  {subscriptionDetails?.newsImg  &&  <img src={subscriptionDetails.newsImg} alt=""  />}
          {/*<img src={subscriptionDetails.newsImg} alt="" />*/}
        </div>
        <div className="max-w-[800px] flex flex-col gap-2">
          <h1 className="uppercase font-poppins text-slate-900 text-[30px]  ">{subscriptionDetails.headline}</h1>
          <p className="font-poppins  text-slate-800 text-[15px]  ">{subscriptionDetails.date}</p>
         { /*<ReactQuill value={subscriptionDetails.fullNews} readOnly={true} theme="snow" />*/}
         <p dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></p>
       
          {/*<Link to='' className="bg-slate-900 p-2 my-[20px] w-fit rounded-[2px] shadow-2xl font-semibold capitalize text-white hover:bg-slate-700 text-[20px] ">Subscribe</Link>*/}
        </div>
      </div>

      {/* Render the MoreNews section */}
      <div>
        <div className="flex flex-col gap-[20px]">
          <h1 className="uppercase font-bold text-[20px] md:text-[20px] ">more news</h1>
          {/* Render the getStarted news items */}
          {/* Check if getStarted is defined and map through it */}
          {fetchedNews &&
            fetchedNews
            .slice(0, 3)
            .map((news) => {
              return (
                <div key={news.newshHeadline} className="flex w-full  flex-col   items-start  rounded  px-[10px] py-2  gap-2">
                  <div className=" ">
                    
                  {news?.newsVideo && <video className="   md:max-w-[250px]  rounded-[2px] " controls>
    <source  src={news.newsVideo} type="video/mp4" />
                        </video>}
                 
                
                  {news?.newsImg  &&  <img src={news.newsImg} alt="" className="   md:max-w-[250px]  rounded-[2px] " />}
                   {/* <img className="   md:max-w-[150px]  rounded-[2px] " src={news.newsImg} alt="" />*/}
                  </div>
                  <div className="flex flex-col max-w-[250px]   ">
                    <p className="text-[13px] text-start text-slate-700">{news.newsHeadline}</p>
                   {/* <h1 className="font-bold text-[10px] md:max-w-[300px] capitalize ">{news.headline}</h1>*/}
                   {/* <p>{news.date}</p>}
                    {/* Wrap Subscribe function call inside an arrow function */}
                  <Link to={`/blog/${news.headline}`} onClick={() => Subscribe(news)} className="text-slate-50 bg-slate-900 rounded-[3px] hover:bg-slate-500 w-fit p-1  text-[10px] font-bold my-1">
                      Read More...
              </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
