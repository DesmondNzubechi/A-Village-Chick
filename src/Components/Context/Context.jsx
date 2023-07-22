import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const NewsContext = (props) => {

    const [fullNews, setFullNews] = useState(JSON.parse(localStorage.getItem('fullNews')) || [])
    const [subscriptionDetails, setSubscriptionDetails] = useState(JSON.parse(localStorage.getItem('subscriptionDetails')) || [])
   /* const [newsHeadline, setNewsHeadline] = useState(localStorage.getItem('newsHeadline') || '')*/
    useEffect(() => {
        localStorage.setItem('fullNews', JSON.stringify(fullNews));
        localStorage.setItem('subscriptionDetails', JSON.stringify(subscriptionDetails));
       // localStorage.setItem('newsHeadline', newsHeadline)
    }, [fullNews, subscriptionDetails])

    const readMoreClicked = (post) => {
        setFullNews(post)
    };
    const Subscribe = (sub) => {
      setSubscriptionDetails(sub);
    }

    return(
    <Context.Provider value={{readMoreClicked, subscriptionDetails, Subscribe, fullNews}}>
    {props.children}
    </Context.Provider>
    )
}

