import React, { useState } from "react";


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


export const Users = () => {

     const [searchUser, setSearchedUser] = useState([]);
    console.log(searchUser);

    return(
        <div className="justify-center font-poppins flex">
            <div className="bg-gray-50 mx-[30px] px-[20px] p-2 rounded">
               {/* <div className="flex md:flex-row  items-center  justify-center gap-2 flex-col">*/}
                <p className=" text-[15px] text-center md:text-start font-bold uppercase text-slate-700 p-2 md:text-[30px] text-[20px] ">Registered  users</p>
                <div className="flex items-center w-full justify-center">
                    <input onChange={(e) => {
                        const value = e.target.value;
                        const findUser = usersInfo.filter(user => {
                            return  user.Firstname.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||  user.Lastname.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||  user.Username.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || user.email.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || user.date.toLocaleLowerCase().includes(value.toLocaleLowerCase());
                        });
                        setSearchedUser(findUser);
                    }} type="text" placeholder="Search for a user" className=" outline-0 w-full p-[20px] rounded  " name="" id="" />
                </div>
              { /* </div>*/}
          <table class="border-separate relative  overflow-x-scroll   border-spacing-2   ...">
           <thead  className=" ">
            <tr className="">
                <th class="  md:text-[25px] text-[10px] py-1 px-2 uppercase -slate-500 ...">Name</th>
                <th class="  md:text-[25px] text-[10px] py-1 px-2 uppercase -slate-500 ...">Username</th>
                <th class="  md:text-[25px] text-[10px] py-1 px-2 uppercase -slate-500 ...">Date</th>

                <th class=" md:text-[25px] text-[10px] py-1 px-2 uppercase border-slate-500 ...">Email</th>
            </tr>
           </thead>
           <tbody className=" overflow-x-auto ">
         { 
searchUser.length !== 0 &&     searchUser.map(user => {
    return <tr className="">
                        <td class=" bg-white rounded  ... text-[10px] md:text-[14px] text-slate-500 py-1 px-2 ">{user.Firstname} {user.Lastname}

                       </td>
                        <td class=" bg-white rounded  ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.Username}</td>
                        <td class=" bg-white rounded ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.date} 
                        </td>
                        <td class=" bg-white rounded ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.email} 
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
           searchUser.length == 0 &&     usersInfo.map(user => {
                    return <tr className="">
                        <td class=" bg-white rounded  ... text-[10px] md:text-[14px] text-slate-500 py-1 px-2 ">{user.Firstname} {user.Lastname}

                       </td>
                        <td class=" bg-white rounded  ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.Username}</td>
                        <td class=" bg-white rounded ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.date} 
                        </td>
                        <td class=" bg-white rounded ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.email} 
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