import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const NewsContext = (props) => {

    /*const [fullNews, setFullNews] = useState(JSON.parse(localStorage.getItem('fullNews')) || []);*/
    const [article, setArticle] = useState(JSON.parse(localStorage.getItem('article')) || {})
    //console.log(fullNews)
    const [subscriptionDetails, setSubscriptionDetails] = useState(JSON.parse(localStorage.getItem('subscriptionDetails')) || {})
   /* const [newsHeadline, setNewsHeadline] = useState(localStorage.getItem('newsHeadline') || '')*/
  // console.log(subscriptionDetails);
    useEffect(() => {
       /* localStorage.setItem('fullNews', JSON.stringify(fullNews));*/
       localStorage.setItem('article', JSON.stringify(article));
        localStorage.setItem('subscriptionDetails', JSON.stringify(subscriptionDetails));
       // localStorage.setItem('newsHeadline', newsHeadline)
    }, [subscriptionDetails, article])

    const readMoreClicked = (post) => {
        setArticle(post)
    };
    const Subscribe = (sub) => {
      setSubscriptionDetails(sub);
    }

    return(
    <Context.Provider value={{readMoreClicked, article, /*setFullNews, */subscriptionDetails, Subscribe, /*fullNews*/}}>
    {props.children}
    </Context.Provider>
    )
}

