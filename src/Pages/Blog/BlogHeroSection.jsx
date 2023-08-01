import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/Config/Firebase";
import { useState, useEffect } from "react";

export const BlogHeroSection = () => {
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
  const blogCt = blogDatas[0];
    return(
           <div> 
              <div  className={` lg:min-h-[50vh] min-h-[40vh] relative   bg-center flex items-start gap-[30px] pt-[130px] py-[50px] px-[40px]  flex-col  bg-cover z-[1]  `}>
                <p className=" text-[30px] ">{!blogCt?.title ? ' Blog ' : blogCt?.title }</p>
                <h1 className="font-poppins text-[30px] md:text-[40px] font-bold ">{!blogCt?.headline ? ' Cultivate & Motivate ' : blogCt?.headline } </h1>
                <p className="font-poppins text-[20px] max-w-[900px] ">{!blogCt?.descrip ? ' Learnings, teachings and tips & tricks for anyone to reference during difficult times, stressful workdays and moments when manifesting your true self' : blogCt?.descrip } </p>
              </div>
           </div>
    )
}