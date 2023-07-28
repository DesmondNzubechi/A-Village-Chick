import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { EditNews } from "../EditNews/EditNews";
import { db } from "../../Config/Firebase";
export const AllNews = (props) => {
    const {fetchedNews, editNews, displaying, setDisplaying, setEditNews, Subscribe} = useContext(Context)
    console.log(editNews)

    const deleteNews = async (id) => {
    const deleteConfirmation = confirm('Are you sure you want to delete this news, Kindly note that you can\'t undo this action after being processed')
if(!deleteConfirmation) {
   return;
}
try {
    const newsIn = doc(db, 'news', id);
    await deleteDoc(newsIn);
    alert('suff')
} catch (error) {
    alert(error);
}
};

    return(
        <div className="flex flex-row  font-poppins justify-center px-[40px] py-[50px]">
        <div>
            <h1 className="text-center uppercase text-[30px] underline  mb-[20px] font-bold">all news</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
             {fetchedNews.map(news => {
                return  <div className="flex flex-col p-3 shadow-xl gap-3">
                <div className="max-w-[300px] max-h-[300px]"><img src={news.newsImg} alt="" className="rounded w-[300px] h-[200px]" /></div>
                <p className="text-[10px] ">{news.date}</p>
                <div>
                <h1 className="text-start max-w-[300px] text-[10px] font-semibold uppercase w-full">{news.newsHeadline}</h1>
                </div>
                <div className="flex flex-row gap-5 justify-start ">
                 <Link onClick={() => {
                    setEditNews(news);
                    setDisplaying(<EditNews/>)
                 }} className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-slate-700 bg-gray-100 ">Edit </Link>
                 <Link key={news.date} to={`/blog/${news?.headline}`} onClick={() => Subscribe(news)} className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-green-500 bg-green-100 ">View</Link>
                 <Link onClick={() => deleteNews(news.id)} className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-red-500 bg-red-100 ">Delete</Link>
                </div>
               </div>
             })}
            </div>
        </div>
        </div>
    )
}