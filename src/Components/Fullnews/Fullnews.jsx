import React from "react";
import { Context } from "../Context/Context";
import { useContext } from "react";
import {BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";

 
export const FullNewsDetail = () => {
const {fullNews} = useContext(Context);
  console.log(fullNews)
    return(
        <div className="py-[200px] ">
            <div>
                 <div key={fullNews.headline}>
                            <h1>{fullNews.headline}</h1>
                            <div>
                                <p>{fullNews.date}</p>
                            <img src={fullNews.postImg} alt="" />
                            </div>
                            <p>{fullNews.fullContent}</p>

                        </div>
            </div>
        </div>
    )
}