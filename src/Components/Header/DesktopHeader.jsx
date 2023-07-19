import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';

export const Navlink = [
    {link: '/', linkName: 'Home'},
    {link: '/blog', linkName: 'Blog'},
    {link: '/about', linkName: 'About'},
    {link: '/contact', linkName: 'Contact'},
]

export const DesktopHeader = () => {


  return(
    <div className="hidden md:flex z-[10] flex-row text-slate-50 fixed top-0 w-full left-0 right-0 items-center  px-[50px] py-[30px] justify-between bg-slate-900">
         <div>
            <Link to='/' className=" relative z-[5]  max-w-[70px] rounded-[50px]"><h1 className=" font-poppins text-[30px] font-bold uppercase ">Blogging</h1></Link>
        </div>
                    <ul className={`flex gap-5  font-fonty  transition delay-150 duration-1000 ease-in-out  px-[20px] items-center flex-row `}>
                        {
                         Navlink.map(links => {
                return(
                        <li >
                            <NavLink  to={links.link} style={({isActive}) => {
return isActive ? {fontStyle: 'underline', borderBottom : '2px solid white' , fontWeight: 'bold'} : {}
}} className=" text-[22px] font-poppins " >
                             {links.linkName}
                            </NavLink>
                        </li> )})  }
                        <li className="px-[40px] flex flex-row gap-2 ">
                        <Link to='/login' className="  p-2 hover:bg-slate-200 rounded-[2px] hover:text-slate-900 text-[22px] font-poppins " >Log In</Link>
                        <Link to='/get started' className=" border p-2 hover:bg-slate-200 rounded-[2px] hover:text-slate-900 text-[22px] font-poppins " >Get Started</Link>
                        </li>
                        </ul>
    </div>
  )
}