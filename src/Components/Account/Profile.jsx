import React, { useEffect, useState } from "react";
import {AiOutlineLogout} from 'react-icons/ai';
import { useContext } from "react";
import { Context } from "../Context/Context";
import {BiArrowBack} from 'react-icons/bi';
import { db } from "../Config/Firebase";
import { collection, doc,  getDocs } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Config/Firebase";
import { data } from "autoprefixer";
export const UserProfile = () => {
    const { account, setAccount, signedInUser , SignUserOut} = useContext(Context);
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')) || {
        mainPro: true,
        editPro: false,
    });
    const [userInfo, setUserInfo] = useState([]);
    const [allUser, setAllUser] = useState([]);
    console.log(userInfo)
    const userStorage = collection(db, 'users');
    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long', // 'short' for abbreviated name, 'long' for full name
        day: 'numeric',
        weekday: 'long', // 'short' for abbreviated name, 'long' for full name
      };
      const fullDate = currentDate.toLocaleString(undefined, options);

      const resetPassword = async () => {
        const confirmResetPassword = confirm('Are You Sure You wan To Reset Your Password?');
        if (!confirmResetPassword) {
            return;
        }
        try {
            await sendPasswordResetEmail(auth, signedInUser.email);
            alert('Check Your Email For Reset Password Link');
        } catch (error) {
            alert(error)
        }
      }
useEffect(() => {
    const getUser = async () => {
    try {
        const user = await getDocs(userStorage)
        setAllUser(user.docs.map((doc) => ({...doc.data(), id: doc.id})));
        const filterUser = allUser.filter(user => {
            return user.email.toLocaleLowerCase() === signedInUser?.email.toLocaleLowerCase()
        });
        setUserInfo(filterUser);
    } catch (error) {
        console.log(error);
    }
    }
    localStorage.setItem('profile', JSON.stringify(profile));
    getUser();
}, [])
    return(
        account.account && signedInUser &&
        <div className="flex flex-row font-poppins itmes-center bg-Tp fixed top-0 bottom-0 w-full z-[100] ">
            <div>
              {profile.mainPro &&  <div className="bg-slate-50 flex py-[40px] px-[20px] items-center flex-col gap-5 absolute justify-center top-0 right-0 lg:w-[30%] md:w-[50%] w-full h-full ">
                    <div>
                    <button onClick={() => SignUserOut()} className="flex absolute right-[55px] p top-[3px] items-center  text-slate-900 gap-1 hover:text-red-500 md:text-[20px] font-[550]  text-[15px]  p-2 px-[5px] h-fit rounded ">Logout<AiOutlineLogout/></button>
                    <p onClick={() => {
                    setAccount({
                        login: false,
                        signup: false,
                        account: false,
                    })
                  }} className="absolute right-[5px] p top-[3px] bg-slate-900 px-[15px] py-[5px] hover:bg-red-500 cursor-pointer rounded-full text-white font-bold text-[20px] ">x</p>
                    </div>
                    <div>
                        <h1 className="uppercase md:text-[30px] text-[25px] font-bold">Profile</h1>
                    </div>
                    <div>
                        <p className="italic text-[20px] ">{fullDate} </p>
                    </div>
                    <div className="flex items-center flex-row gap-3">
                        <p>Hi,</p> <h1 className="uppercase font-bold text-[20px] md:text-[25px] ">{userInfo.map(user => {return <p>{user.username}</p> })}</h1>
                    </div>
                {/* <div className="flex flex-row gap-3">
                   <span className=" text-[18px] md:text-[25px]">Firstname:</span>  <p className=" text-[18px] md:text-[25px]">Desmond</p>
                 </div>
                 <div className="flex flex-row gap-3">
                   <span className=" text-[18px] md:text-[25px]">Lastname:</span>  <p className=" text-[18px] md:text-[25px]">Nzubechukwu</p>
                 </div>
                 <div className="flex flex-row gap-3">
                   <span className=" text-[18px] md:text-[25px]">Email:</span>  <p className=" text-[18px] md:text-[25px]">Nzubechukwu@gmail.com</p>
                </div>*/}
                <div className="flex flex-row gap-4">
                <button onClick={() => {
                    setProfile({
                        mainPro:false,
                        editPro: true,
                    })
                }} className="bg-slate-900 text-slate-50 hover:bg-green-500 p-2 shadow-2xl text-[15px] rounded ">Edit Profile</button>
                 <button onClick={resetPassword} className="bg-slate-300 text-slate-900 text-slate-50 hover:bg-green-500 p-2 shadow-2xl text-[15px] rounded ">Reset password</button>
                </div>

                </div>
}
{profile.editPro &&
                <div className="bg-slate-50 flex py-[40px] px-[20px] items-center flex-col gap-5 absolute justify-center top-0 right-0 lg:w-[30%] md:w-[50%] w-full h-full ">
                    <div><button  onClick={() => {
                    setProfile({
                        mainPro: true,
                        editPro: false,
                    })
                }} className="flex items-center absolute top-5 left-5"><BiArrowBack/>Back</button></div>
                    <h1 className="font-bold text-[20px] md:ext-[25px] uppercase ">Edit Your Profile</h1>
                  {userInfo.map(userInfo => {
                     return <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-0 ">
                        <label className="text-[17px] font-bold" htmlFor="email">Email:</label>
                        <input type="text" className=" p-3 text-[17px] rounded  shadow" placeholder="Email" value={userInfo.email} disabled />
                    </div>
                    <div className="flex flex-col gap-0 ">
                        <label className="text-[17px] font-bold" htmlFor="email">Firstname:</label>
                        <input type="text" className="bg-white outline-0 p-3 text-[17px] rounded  shadow" placeholder="firstname" value={userInfo.firstname} />
                    </div>
                    <div className="flex flex-col gap-0 ">
                        <label className="text-[17px] font-bold" htmlFor="email">Lastname:</label>
                        <input type="text" className="bg-white outline-0 p-3 text-[17px] rounded  shadow" placeholder="lastname" value={userInfo.lastname} />
                    </div>
                    <div className="flex flex-col gap-0 ">
                        <label className="text-[17px] font-bold" htmlFor="email">Username:</label>
                        <input type="text" className="bg-white outline-0 p-3 text-[17px] rounded  shadow" placeholder="username" value={userInfo.username} />
                    </div>
                    <button className="bg-green-500  w-  p-2 text-[20px] rounded hover:text-slate-50 hover:bg-slate-900 ">Update Profile</button>
                </div> })}
                </div>
}
            </div>
        </div>
    )
}