import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const NewsContext = (props) => {

    /*const [fullNews, setFullNews] = useState(JSON.parse(localStorage.getItem('fullNews')) || []);*/
    const [article, setArticle] = useState(JSON.parse(localStorage.getItem('article')) || {})
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('accont')) || {
        login: false,
        signup: false,
    })
    //console.log(fullNews)
    const [subscriptionDetails, setSubscriptionDetails] = useState(JSON.parse(localStorage.getItem('subscriptionDetails')) || {})
   /* const [newsHeadline, setNewsHeadline] = useState(localStorage.getItem('newsHeadline') || '')*/
  // console.log(subscriptionDetails);
    useEffect(() => {
       /* localStorage.setItem('fullNews', JSON.stringify(fullNews));*/
       localStorage.setItem('article', JSON.stringify(article));
        localStorage.setItem('subscriptionDetails', JSON.stringify(subscriptionDetails));
        localStorage.setItem('account', JSON.stringify(account));
       // localStorage.setItem('newsHeadline', newsHeadline)
    }, [subscriptionDetails, article])

    const readMoreClicked = (post) => {
        setArticle(post)
    };
    const Subscribe = (sub) => {
      setSubscriptionDetails(sub);
    }

    return(
    <Context.Provider value={{readMoreClicked, account, setAccount, article, /*setFullNews, */subscriptionDetails, Subscribe, /*fullNews*/}}>
    {props.children}
    </Context.Provider>
    )
}

