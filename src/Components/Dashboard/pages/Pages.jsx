import React from "react";
import HomePagePic from '../../../assets/images/HomePage.svg';
import ContactUsPic from '../../../assets/images/ContactUs.svg';
import NewsPagePic from '../../../assets/images/NewsPage.svg';
import AboutUsPic from '../../../assets/images/AboutUs.svg';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const pages = [
    {
        pageLink: '/',
        pageName: 'home page',
        pic: HomePagePic,
    },
    {
        pageLink: '/contact',
        pageName: 'contact page',
        pic: ContactUsPic,
    },
    {
        pageLink: '/about',
        pageName: 'about page',
        pic: HomePagePic,
    },
    {
        pageLink: '/blog',
        pageName: 'news page',
        pic: NewsPagePic,
    },
]

export const Pages = () => {
    const {displaying, setDisplaying} = useContext(Context);

    const displayPage = (page) => {
          switch (page.pageName) {
            case 'about page': {
                setDisplaying({
                    dashboardView: false,
                    editNews: false,
                    postNews: false,
                    allNews: false,
                    users: false,
                    addReview: false,
                    addQuote: false,
                    adminPro: false,
                    pages: false,
                    editHome: false,
                    editAbout: true,
                    editNewsPage: false,
                    editContact: false,
                })
            }
                break;
                case 'contact page': {
                    setDisplaying({
                        dashboardView: false,
                        editNews: false,
                        postNews: false,
                        allNews: false,
                        users: false,
                        addReview: false,
                        addQuote: false,
                        adminPro: false,
                        pages: false,
                        editHome: false,
                        editNewsPage: false,
                        editAbout: false,
                        editContact: true,
                    })
                }
          break;
          case 'news page': {
            setDisplaying({
                dashboardView: false,
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
                editNewsPage: true,
                editContact: false,
            })
          }
          break;
          case 'home page': {
            setDisplaying({
                dashboardView: false,
                editNews: false,
                postNews: false,
                allNews: false,
                users: false,
                addReview: false,
                addQuote: false,
                adminPro: false,
                pages: false,
                editHome: true,
                editAbout: false,
                editNewsPage: false,
                editContact: false,
            })
          }
            default:
                break;
          }
    }
    return(
        <div className="flex font-poppins justify-center py-[50px] ">
            <div className="grid grid-cols-1 gap-[50px] md:grid-cols-3">
                {pages.map(page => {
                    return  <div className="flex  p-4 shadow-2xl rounded flex-col gap-1 items-center">
                    <h1 className="font-bold uppercase">{page.pageName}</h1>
                    <div >
                    <img className="max-w-[300px] max-h-[100px] " src={page.pic} alt="" />
                    </div>
                    <div className="flex w-full gap-3">
                      <Link to={page.pageLink} className="bg-slate-100 text-[20px]  hover:bg-slate-700 hover:text-slate-50 text-center p-1 w-full">View</Link>
                      <button onClick={() => displayPage(page)} className="bg-slate-100 text-[20px] text-slate-700  text-center hover:bg-slate-700 hover:text-slate-50 p-1 w-full">Edit</button>
                    </div>
                  </div>
                })}
               
            </div>
        </div>
    )
}