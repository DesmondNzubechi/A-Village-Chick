import React from "react";
import { Context } from "../Context/Context";
import { useContext } from "react";
import {BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";

 
export const FullNewsDetail = () => {
const {fullNews} = useContext(Context);

    return(
        <div className="py-[200px] ">
            <div>
                {fullNews.map(news => {
                    
                       return <div>
                            <h1>{news.headline}</h1>
                            <div>
                                <p>{news.date}</p>
                            <img src={news.postImg} alt="" />
                            </div>
                            <p>{news.fullContent}</p>

                        </div>
                   
})}
                <Link to={`blog`}><BsArrowLeft/>Back</Link>
            </div>
        </div>
    )
}