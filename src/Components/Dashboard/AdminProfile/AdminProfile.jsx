import React from "react";


export const AdminProfile = () => {
    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long', // 'short' for abbreviated name, 'long' for full name
        day: 'numeric',
        weekday: 'long', // 'short' for abbreviated name, 'long' for full name
      };
      const fullDate = currentDate.toLocaleString(undefined, options);
    return(
        <div>
             <div className="flex flex-row font-poppins itmes-center ">
            <div>
              {  <div className=" flex py-[100px] px-[20px] items-start flex-col gap-5  justify-center top-0 right-0  w-full h-full ">
                    <div>
                    </div>
                    <div>
                        <p className="italic text-[20px] ">{fullDate} </p>
                    </div>
                    <div className="flex flex-col items-start">
                    <div className="flex items-center flex-row gap-3">
                        <p>Name:</p> <h1 className="uppercase font-bold text-[20px] md:text-[25px] ">Admin</h1>
                        </div>
                        <div className="flex items-center flex-row gap-3">
                        <p>Email:</p> <h1 className="uppercase font-bold text-[20px] md:text-[25px] ">Admin@gmail.com</h1>
                    </div>
                    </div>
                <div className="flex flex-row gap-4">
                 <button  className="bg-slate-300 text-slate-900 text-slate-50 hover:bg-green-500 p-2 shadow-2xl text-[15px] rounded ">Reset password</button>
                </div>

                </div>
}
        </div>
        </div>
        </div>
    )
}