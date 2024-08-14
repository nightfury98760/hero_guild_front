import React, { useState, useRef, useEffect } from "react";
const TaskBarNormal = ({
  imgUrl,
  title,
  price,
  checked = false,
  active,
  onClick,
  link,
  opacity,
  showModal
}) => {
  const [state, setActive] = useState(false)
  useEffect(() => {
    setActive(active)
  })
  const handleGoClick = () => {
    if (link != "" && link) window.open(link, "_blank", "noopener,noreferrer");
  };
  const [isSelected, setSelect] = useState(false);
  return (
    <div
      className={`pl-4 my-2 pr-4 py-2 w-full flex gap-2 justify-between items-center bg-[#FFFFFF05] rounded-[20px] border-[#FF5E00] border-l-[1px] border-b-[1px] border-r-[1px] opacity-${opacity} ${
        !isSelected
          ? ""
          : "bg-gradient-to-r from-[#EEFF00] to-[#FF5E00]"
      } `}
      onClick={showModal}
    >
      <div className="relative flex gap-2 items-center">
        {state && !isSelected && (<div className="absolute top-1 rounded-full w-3 h-3 bg-[#EEFF00]"></div>)}
        <img className="" src={imgUrl} width={32} alt="task-logo">
        </img>
        <div className="flex flex-col gap-1">
          <div className="text-white text-left font-poppins font-bold">
            {title}
          </div>
          <div className="font-Gilroy text-left flex items-center gap-1">
            {price.toLocaleString()}
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
      <img
        className=""
        src={"./assets/svgs/taskbar-arrow.svg"}
        width={16}
        alt="task-arrow"
      />
    </div>

    // </div>
    /* {{checked ? (
        <div className="w-6 h-6">
          <img
            className=""
            src="/assets/imgs/tasks/icon_check.png"
            width={32}
            alt="check-mark"
          />
        </div>
      ) : (
        <div
          className="px-6 py-1.5 bg-[url(/assets/imgs/tasks/button_blue.png)] bg-full marker-font-white text-lg active:scale-95"
          onClick={handleGoClick}
        >
          go
        </div>
      )} }*/
    // </div>
  );
};

export default TaskBarNormal;
