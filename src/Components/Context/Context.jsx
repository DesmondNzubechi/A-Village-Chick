import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const NewsContext = (props) => {
   //const navigate = useNavigate();
   const [spin, setSpin] = useState(false);
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
    //console.log(fullNews)
    const [subscriptionDetails, setSubscriptionDetails] = useState(JSON.parse(localStorage.getItem('subscriptionDetails')) || {})
   /* const [newsHeadline, setNewsHeadline] = useState(localStorage.getItem('newsHeadline') || '')*/
  // console.log(subscriptionDetails);
    const readMoreClicked = (post) => {
        setArticle(post)
    };
    const Subscribe = (sub) => {
      setSubscriptionDetails(sub);
    }

 const [signedInUser, setSignedInUser] = useState({});
    const SignIn = async () => {
      try {
        await signInWithEmailAndPassword(auth, loginInputs.email, loginInputs.password)
        setAccount({
          login: false,
          signup: false,
          account: true,
        })
      } catch (error) {
        console.log(error)
      }
    }
    const SignUpNewUser = async () => {
      try {
        await createUserWithEmailAndPassword(auth,  signUpInputs.email, signUpInputs.password);
        
      } catch (error) {
        console.log(error);
      }
    }
    const SignUserOut = async () => {
      try {
        await signOut(auth);
        setAccount({
          login: true,
          signup: false,
          account: false,
        })
      } catch (error) {
        
      }
    }

    useEffect(() => {
      /* localStorage.setItem('fullNews', JSON.stringify(fullNews));*/
      localStorage.setItem('article', JSON.stringify(article));
       localStorage.setItem('subscriptionDetails', JSON.stringify(subscriptionDetails));
       localStorage.setItem('account', JSON.stringify(account));
      // localStorage.setItem('newsHeadline', newsHeadline)
      onAuthStateChanged(auth, (currentUser) => {
        setSignedInUser(currentUser)
      })
   }, [subscriptionDetails, article, account, signedInUser])

    return(
    <Context.Provider value={{readMoreClicked, spin, setSpin, setSignUpInput, signUpInputs, SignUpNewUser, SignIn, loginInputs, setLoginInputs, account, setAccount, article, /*setFullNews, */subscriptionDetails, Subscribe, SignUserOut,  signedInUser /*fullNews*/}}>
    {props.children}
    </Context.Provider>
    )
}

