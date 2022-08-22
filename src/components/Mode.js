import React from "react";

function Mode({ clickHumanBtn, clickAIBtn }) {
  return (
    <div>
      <div className="mt-20 md:mt-16 w-[500px] flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 text-[#30c4bd] ">
          Tic <span className="text-[#f3b236]">Tac </span> Toe
        </h1>
        <div className="flex flex-col items-center py-8 w-[400px] md:w-[500px] h-64 md:h-72 rounded-2xl bg-[#1f3540] mt-6 space-y-6 md:space-y-8">
          <p className="text-md text-gray-300 uppercase font-semibold  md:text-xl ">
            Please Select
            {"  "}
            <span className="text-[#30c4bd] text-xl font-bold">2 Player</span>
            {"  "}
            or
            {"  "}
            <span className="text-[#f3b236] text-xl font-bold">vs AI</span>
          </p>
          <div className="w-3/4 bg-gray-800  flex items-center justify-evenly h-24 rounded-2xl p-6 ">
            <button
              onClick={clickHumanBtn}
              className="focus:bg-gray-300 hover:bg-[#bcfefb] transition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 "
            >
              <p className="text-[#30c4bd] text-3xl font-bold">2Player</p>
            </button>
            <button
              onClick={clickAIBtn}
              className="focus:bg-gray-300 hover:bg-[#ffe1a9] transition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 "
            >
              <p className="text-[#f3b236] text-3xl font-bold">vs AI</p>
            </button>
          </div>
          <p className="text-md text-gray-500 uppercase font-semibold  md:text-xl ">
            {" "}
            for Ace Resources
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mode;
