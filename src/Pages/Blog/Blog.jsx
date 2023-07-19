import React from "react";
import { BlogPost } from "./post";
import { BlogHeroSection } from "./BlogHeroSection";
import { BlogJourney } from "./Journey";
export const Blog = () => {
    return(
        <div className="bg-white pt-[50px]  ">
           <BlogHeroSection/>
           <BlogPost/>
           <BlogJourney/>
        </div>
    )
}