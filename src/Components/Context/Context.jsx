import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const NewsContext = (props) => {

    const [fullNews, setFullNews] = useState(JSON.parse(localStorage.getItem('fullNews')) || [])
    const [newsHeadline, setNewsHeadline] = useState(localStorage.getItem('newsHeadline') || '')
    useEffect(() => {
        localStorage.setItem('fullNews', JSON.stringify(fullNews));
        localStorage.setItem('newsHeadline', newsHeadline)
    }, [])
 
    console.log(fullNews);
    const readMoreClicked = (news) => {
        setFullNews(news)
        setNewsHeadline(news.headline)
    }

    return(
    <Context.Provider value={{readMoreClicked, newsHeadline, fullNews}}>
    {props.children}
    </Context.Provider>
    )
}

