import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useContext } from "react";
import { Context } from "../Context/Context";
export const Navlink = [
    {link: '/', linkName: 'Home'},
    {link: '/blog', linkName: 'Blog'},
    {link: '/about', linkName: 'About'},
    {link: '/contact', linkName: 'Contact'},
]

export const DesktopHeader = () => {
  const {account, setAccount, signedInUser} = useContext(Context);

  return(
    <div className="hidden md:flex z-[10] flex-row text-slate-50 fixed top-0 w-full left-0 right-0 items-center  px-[50px] py-[30px] justify-between bg-[#3c3c3c]">
         <div>
            <Link to='/' className=" relative z-[5]  max-w-[70px] rounded-[50px]"><h1 className=" font-poppins text-[30px] font-bold uppercase ">Blogging</h1></Link>
        </div>
                    <ul className={`flex gap-5  font-fonty  transition delay-150 duration-1000 ease-in-out  px-[20px] items-center flex-row `}>
                        {
                         Navlink.map(links => {
                return(
                        <li key={links.linkName}>
                            <NavLink  to={links.link} style={({isActive}) => {
return isActive ? {fontStyle: 'underline', borderBottom : '2px solid white' , fontWeight: 'bold'} : {}
}} className=" text-[22px] font-poppins " >
                             {links.linkName}
                            </NavLink>
                        </li> )})  }
                        <li className="px-[40px] flex flex-row gap-2 ">
                       {!signedInUser && <Link onClick={() => {
                    setAccount({
                        login: true,
                        signup: false,
                        account:false
                    })
                  }} className=" border p-2 hover:bg-slate-200 rounded-[2px] hover:text-slate-900 text-[22px] font-poppins " >Log In</Link>}
                        {signedInUser && signedInUser?.email !== 'admin1@gmail.com' &&<Link onClick={() => {
                    setAccount({
                        login: false,
                        signup: false,
                        account:true
                    })
                  }} to='/' className=" border p-2 hover:bg-slate-200 rounded-[2px] hover:text-slate-900 text-[22px] font-poppins " >My Account</Link>}
                {signedInUser?.email === 'admin1@gmail.com' &&  <Link  to='/admin-dashboard' className=" border p-2 hover:bg-slate-200 rounded-[2px] hover:text-slate-900 text-[22px] font-poppins " >My Dashboard</Link>}
                        </li>
                        </ul>
    </div>
  )
}