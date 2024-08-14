import React, { useState, useRef, useEffect } from "react";
const TaskBarCard = ({ title, subTitle, description}) => {
  const [isSelected, setSelect] = useState(false);
  return (
    <div
      className={`pl-4 my-2 pr-4 py-2 gap-y-1 w-full h-full flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[20px] border-[#FF5E00] border-l-[1px] border-b-[1px] border-r-[1px]`}
      onClick={() => {
        setSelect(!isSelected);
      }}
    >
      <div className="flex flex-row gap-2 items-center font-Poppins text-[24px]">
        {title}
      </div>
      <div className="flex flex-row gap-1">
        <div className="text-left font-Poppins font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#EEFF00] via-[#FFAA00] to-[#FF5E00]">
          {subTitle}
        </div>
        
      </div>
      <div className="font-Gilroy text-left flex items-center gap-1 text-[14px] text-[#FFFFFF99]">
          <div>
            {description}
          </div>
        </div>
    </div>
  );
};

export default TaskBarCard;
