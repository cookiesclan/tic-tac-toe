import React from 'react'
import { OIcon } from "./OIcon";
import { XIcon } from "./XIcon.js";

function SelectPlayer({ xClick, oClick}) {
    return (
        <div className='mt-20 md:mt-16 w-[500px] flex flex-col items-center justify-center mx-auto'>
            <div className="flex flex-col items-center py-8 w-[400px] md:w-[500px] h-64 md:h-72 rounded-2xl bg-[#1f3540] mt-6 space-y-6 md:space-y-8">
            <p className="text-md text-gray-300 uppercase font-semibold  md:text-xl ">
            Please Select
            {"  "}
            <span className="text-[#30c4bd] text-xl font-bold">Your</span>
            {"  "}
            <span className="text-[#f3b236] text-xl font-bold">Icon</span>
          </p>
                <div className='flex flex-col items-center py-2 w-[400px] md:w-[500px] h-64 md:h-72 rounded-2xl bg-[#1f3540] mt-6 space-y-6 md:space-y-8'>
                    <div className='w-3/4 bg-gray-800 flex items-center justify-evenly h-24 rounded-2xl p-6 '>
                        <button className="focus:bg-gray-300 hover:bg-[#bcfefb] transition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2" onClick={xClick}><XIcon /></button>
                        <button className="focus:bg-gray-300 hover:bg-[#ffe1a9] transition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2" onClick={oClick}><OIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectPlayer