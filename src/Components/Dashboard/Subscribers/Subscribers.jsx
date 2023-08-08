import React, { useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import { useContext } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase";
const usersInfo = [
    {
        Firstname: 'Desmond ',
        Lastname: 'Nzube',
        Username: 'dhhejjjkw',
        email: 'Nzubechukwu@gmail.com',
        date: 'Friday, July 28, 2023',
    },
    {
        Firstname: 'Desmond ',
        Lastname: 'Nzube',
        Username: 'dhhejjjkw',
        email: 'Nzubechukwu@gmail.com',
        date: 'Friday, July 28, 2023',
    },
    {
        Firstname: 'Desmond ',
        Lastname: 'Nzube',
        Username: 'dhhejjjkw',
        email: 'Nzubechukwu@gmail.com',
        date: 'Friday, July 28, 2023',
    },
    {
        Firstname: 'Desmond ',
        Lastname: 'Nzube',
        Username: 'dhhejjjkw',
        email: 'Nzubechukwu@gmail.com',
        date: 'Friday, July 28, 2023',
    },
    {
        Firstname: 'Desmond ',
        Lastname: 'meennn',
        Username: 'dhhejjjkw',
        email: 'Nzubechukwu@gmail.com',
        date: 'Friday, July 28, 2023',
    }

]


export const Subscribers = () => {
     const [searchUser, setSearchedUser] = useState([]);
     const [allUser, setAllUser] =  useState([])
    console.log(allUser);

    useEffect(() => {
        const subStore = collection(db, 'subscribers');
        const fetchSubscribers = async () => {
            try {
                const getSubscribers = await getDocs(subStore);
                const fetchedUser = getSubscribers.docs.map(doc => ({...doc.data(), id: doc.id}));
             setAllUser(fetchedUser)

            } catch (error) {
                
            }

        }
        fetchSubscribers();
}, [])

    return(
        <div className="justify-center font-poppins flex">
            <div className="bg-gray-50 mx-[30px] px-[20px] p-2 rounded">
               {/* <div className="flex md:flex-row  items-center  justify-center gap-2 flex-col">*/}
                <p className=" text-[15px] text-center  font-bold uppercase text-slate-700 p-2 md:text-[30px] text-[20px] ">Subscribers</p>
                <div className="flex items-center w-full justify-center">
                    <input onChange={(e) => {
                        const value = e.target.value;
                        const findUser = allUser.filter(user => {
                            return  user.firstname.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||  user.lastname.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||  user.username.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || user.email.toLocaleLowerCase().includes(value.toLocaleLowerCase()) /*|| user.date.toLocaleLowerCase().includes(value.toLocaleLowerCase());*/
                        });
                        setSearchedUser(findUser);
                    }} type="text" placeholder="Search for a subscriber" className=" outline-0 w-full text-center p-[20px] rounded  " name="" id="" />
                </div>
              { /* </div>*/}
          <table class="border-separate relative  overflow-x-scroll   border-spacing-2   ...">
           <thead  className=" ">
            <tr className="">
            <th class=" md:text-[25px] text-[10px] py-1 px-2 uppercase border-slate-500 ...">Email</th>
                <th class="  md:text-[25px] text-[10px] py-1 px-2 uppercase -slate-500 ...">Date</th>
            </tr>
           </thead>
           <tbody className=" overflow-x-auto ">
         { 
searchUser.length !== 0 &&     searchUser.map(user => {
    return <tr className="">
         <td class=" bg-white rounded ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user?.email} 
                        </td>
                        <td class=" bg-white rounded ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user?.date} 
                        </td>
                      
                       {/* <td class=" text-[10px]  md:text-[14px]  text-slate-500 py-1 px-2 ">
                        <button className="bg-green-500  px-2 text-[7px] md:text-[13px]   font-semibold rounded-[2px] py-1 text-slate-50">Make Admin</button>
                        
                        </td>
                        <td class=" text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">
                        <button className="bg-red-500 px-2 text-[7px] md:text-[13px]   font-semibold rounded-[2px] py-1 text-slate-50">Disable Account</button>
                        </td>}
                       {/* <button className="bg-red-500 px-2 text-[10px] md:text-[17px]   font-semibold rounded-[2px] py-1 text-slate-50">Remove As Admin</button>*/}   
                    </tr>
                    
})
}
{
           searchUser.length == 0 &&     allUser.map(user => {
                    return <tr className="">
                       <td class=" bg-white rounded ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user?.email} 
                        </td>
                        <td class=" bg-white rounded ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user?.date} 
                        </td>
                      
                       {/* <td class=" text-[10px]  md:text-[14px]  text-slate-500 py-1 px-2 ">
                        <button className="bg-green-500  px-2 text-[7px] md:text-[13px]   font-semibold rounded-[2px] py-1 text-slate-50">Make Admin</button>
                        
                        </td>
                        <td class=" text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">
                        <button className="bg-red-500 px-2 text-[7px] md:text-[13px]   font-semibold rounded-[2px] py-1 text-slate-50">Disable Account</button>
                        </td>}
                       {/* <button className="bg-red-500 px-2 text-[10px] md:text-[17px]   font-semibold rounded-[2px] py-1 text-slate-50">Remove As Admin</button>*/}   
                    </tr>
                    
                })
          }
           </tbody>
          </table>
          </div>
        </div>
    )
}