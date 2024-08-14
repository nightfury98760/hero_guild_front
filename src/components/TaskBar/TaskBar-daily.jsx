import React, { useState, useRef, useEffect } from "react";
const TaskBarDaily = ({ day, price, checked = false, showModal }) => {
  const [isSelected, setSelect] = useState(false)
  return (
    <div className={`pl-4 my-2 pr-4 py-2 gap-y-1 w-full h-full flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[20px] border-[#FF5E00] border-l-[1px] border-b-[1px] border-r-[1px] focus:bg-gradient-to-r focus:from-[#EEFF00] focus:to-[#FF5E00]"}`}
    onClick={showModal}>
      <div className="flex flex-row gap-2 items-center font-Poppins">
        {day} day
        </div>
        <div className="flex flex-row gap-1">
          <div className="text-white text-left font-Poppins font-bold">
            {price}
          </div>
          <div className="font-Gilroy text-left flex items-center gap-1">
            <div>
              <img
                className=""
                src="/assets/svgs/GH.svg"
                width={16}
                alt="task-logo"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default TaskBarDaily;
