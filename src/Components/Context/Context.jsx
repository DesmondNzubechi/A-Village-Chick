import { createContext, useEffect, useState } from "react";
import { auth, db } from "../Config/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

export const Context = createContext();

export const NewsContext = (props) => {
   //const navigate = useNavigate();
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
///LODIN USER
    const SignIn = async () => {
      setSpin(true);
      try {
        await signInWithEmailAndPassword(auth, loginInputs.email, loginInputs.password);
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
    <Context.Provider value={{readMoreClicked, errorMessage, spin, setSpin, setSignUpInput, signUpInputs, SignUpNewUser, SignIn, loginInputs, setLoginInputs, account, setAccount, article, /*setFullNews, */subscriptionDetails, Subscribe, SignUserOut,  signedInUser /*fullNews*/}}>
    {props.children}
    </Context.Provider>
    )
}

