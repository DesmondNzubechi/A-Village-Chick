import { Overview1 } from "./Overview1";
import { Overview2 } from "./Overview2";
import { Context } from "../Context/Context";
import { useContext } from "react";


export const Overview = () => {
    const {Subscribe, fetchedNews } = useContext(Context);

    const theOverView = fetchedNews[0];
    return(
        theOverView?.newsHeadline  &&
        <div className="px-[30px] items-center flex-row flex py-[50px] min-h-[100vh] ">
            <div>
        <Overview1/>
         <Overview2/>
        </div>
        </div>
    )
}