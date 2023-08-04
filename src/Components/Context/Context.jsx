import { createContext, useEffect, useState } from "react";
import { auth, db } from "../Config/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { DashboardView } from "../Dasshboard view/Dashboardview";
import { EditNews } from "../Dashboard/EditNews/EditNews";
import { PostNews } from "../PostNews/PostNews";
import { AllNews } from "../Dashboard/AllNews/Allnews";
import { Users } from "../Dashboard/Users/Users";
export const Context = createContext();

export const NewsContext = (props) => {
 const navis = useNavigate();
   //const navigate = useNavigate();
   const [Review, setReview] = useState([]);
   const [quote, setQuote] = useState([]);
   const [allUser, setAllUser] = useState([]);
   const [fetchedNews, setFetchedNews] = useState([]);
   //const [Review, setReview] = useState([]);
   const [editNews, setEditNews] = useState(JSON.parse(localStorage.getItem('editNews')) || {});
   const [displaying, setDisplaying] = useState(JSON.parse(localStorage.getItem('displaying')) || {
    dashboardView: true,
    editNews: false,
    postNews: false,
    allNews: false,
    users: false,
    addReview: false,
    addQuote: false,
    adminPro: false,
    pages: false,
    editHome: false,
    editAbout: false,
    editContact: false,
    editNewsPage: false,
    pagesColor: 'text-slate-500',
    dashboardViewColor: 'text-green-500',
    editNewsColor: 'text-slate-500',
    postNewsColor: 'text-slate-500',
    allNewsColor: 'text-slate-500',
    usersColor: 'text-slate-500',
    addReviewColor: 'text-slate-500',
    addQuoteColor: 'text-slate-500',
    adminProColor: 'text-slate-500',
   });
   const [spin, setSpin] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
    const [loginInputs, setLoginInputs] = useState({
      email: '',
      password: '',
    });
    const [signUpInputs, setSignUpInput] = useState({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    })

    /*const [fullNews, setFullNews] = useState(JSON.parse(localStorage.getItem('fullNews')) || []);*/
    const [article, setArticle] = useState(JSON.parse(localStorage.getItem('article')) || {})
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')) || { 
        login: false,
        signup: false,
        account: false,
    })

    //FETCH NEWS FROM DATABASE
    const newsStorage = collection(db, 'news');
   
useEffect(() => {
  const getNews = async () => {
    try {
      const newsData = await getDocs(newsStorage);

      // Sort the documents based on the createTime in descending order
      const sortedNews = newsData.docs
        .map((doc) => ({ ...doc.data(), id: doc.id, createTime: doc.createTime })) // Include createTime in the mapped data
        .sort((a, b) => b.createTime - a.createTime);

      setFetchedNews(sortedNews);
    } catch (error) {
     
    }
  };

  getNews();
}, []);

    //console.log(fullNews)
    const [subscriptionDetails, setSubscriptionDetails] = useState(JSON.parse(localStorage.getItem('subscriptionDetails')) || {})
   /* const [newsHeadline, setNewsHeadline] = useState(localStorage.getItem('newsHeadline') || '')*/
  // console.log(subscriptionDetails);
    const readMoreClicked = (post) => {
        setArticle(post)
    };
    const Subscribe = (sub) => {
     setSubscriptionDetails(sub);
    // setArticle({...sub})
    }

    console.log(article)

 
 const [signedInUser, setSignedInUser] = useState({});
///LODIN USER
    const SignIn = async () => {
      setSpin(true);
      try {
        await signInWithEmailAndPassword(auth, loginInputs.email, loginInputs.password);
        if (loginInputs.email === 'admin1@gmail.com') {
          setSpin(false);
          setAccount({
            login: false,
            signup: false,
            account: false,
          })
        } else {
          setSpin(false);
          setAccount({
            login: false,
            signup: false,
            account: true,
          })
        }
     
      } catch (error) {
        setSpin(false);
        setErrorMessage(error.message);
        console.log("Authentication error:", error.message)
      }
    }

   useEffect(() => {
    const reviewStorage = collection(db, 'reviews');
    const getReviews = async () => {
      try {
        const reviewData = await getDocs(reviewStorage);
        const allReview = reviewData.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setReview(allReview);
       
      } catch (error) {
       
      }
    } 
    getReviews()

    const quoteStorage = collection(db, 'quotes');
    const getQuote = async () => {
      try {
        const quoteData = await getDocs(quoteStorage);
        const allquote = quoteData.docs.map((doc) => ({...doc.data(), id:doc.id}))
        setQuote(allquote);
       
      } catch (error) {
        
      }
    } 
    getQuote()
 }, [])

    //REGISTERING NEW USER
    const SignUpNewUser = async () => {
      if (signUpInputs.email  === '' || signUpInputs.firstname === '' || signUpInputs.lastname === '' || signUpInputs.username === '') {
        return setErrorMessage('Please fill in all the field');
      } 
      setSpin(true);
      const userRef =  collection(db, 'users');
      try {
        await createUserWithEmailAndPassword(auth, signUpInputs.email, signUpInputs.password);
        await addDoc(userRef, {
          email: signUpInputs.email,
          firstname: signUpInputs.firstname,
          lastname: signUpInputs.lastname,
          username: signUpInputs.username,
        })
        setSpin(false);
        setAccount({
          login: false,
          signup: false,
          account: true,
        })
        
      } catch (error) {
        setSpin(false);
        setErrorMessage(error.message);
        console.log("Authentication error:", error.message)
      }
    }


    //SIGNOUT USER
    const SignUserOut = async () => {
      try {
        await signOut(auth);
       // navis('/');
        setAccount({ 
          login: true,
          signup: false,
          account: false,
        })
      } catch (error) {
        
      }
    }


    useEffect(() => {
      //FETCHING USERS FROM DATABASE
      const userStorage = collection(db, 'users');

      const getUser = async () => {
        try {
          const userSnapshot = await getDocs(userStorage);
          
          // Sort the documents based on the createTime in descending order
          const sortedUsers = userSnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }))
            .sort((a, b) => b.createTime - a.createTime);
          
          setAllUser(sortedUsers);
        } catch (error) {
          console.log(error);
        }
      };
      
      getUser();
      
      /* localStorage.setItem('fullNews', JSON.stringify(fullNews));*/
      localStorage.setItem('displaying', JSON.stringify(displaying))
      localStorage.setItem('article', JSON.stringify(article));
       localStorage.setItem('subscriptionDetails', JSON.stringify(subscriptionDetails));
       localStorage.setItem('account', JSON.stringify(account));
       localStorage.setItem('editNews', JSON.stringify(editNews))
      // localStorage.setItem('newsHeadline', newsHeadline)
      onAuthStateChanged(auth, (currentUser) => {
        setSignedInUser(currentUser)
      })
   }, [subscriptionDetails, article, account, displaying, signedInUser])

    return(
    <Context.Provider value={{readMoreClicked, allUser, errorMessage, spin, setSpin, setSignUpInput, signUpInputs, SignUpNewUser, SignIn, loginInputs, setLoginInputs, account, setAccount, article, /*setFullNews, */subscriptionDetails, Subscribe, editNews, displaying, setDisplaying, setEditNews, SignUserOut, fetchedNews,   signedInUser, Review, quote /*fullNews*/}}>
    {props.children}
    </Context.Provider> 
    )
}

