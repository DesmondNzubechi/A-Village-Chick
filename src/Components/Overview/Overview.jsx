import { Overview1 } from "./Overview1";
import { Overview2 } from "./Overview2";


export const Overview = () => {
    return(
        <div className="px-[30px] items-center flex-row flex py-[50px] min-h-[100vh] ">
            <div>
        <Overview1/>
        <Overview2/>
        </div>
        </div>
    )
}