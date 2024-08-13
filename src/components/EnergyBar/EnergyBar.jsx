import { useEffect, useRef, useState } from "react";

const EnergyBar = ({ current, total, showLogo = true, showLabel = true }) => {
  const [percent, setPercent] = useState(Math.floor((current * 100) / total));
  useEffect(() => {
    setPercent(Math.floor((current * 100) / total));
  }, [current, total]);
  return (
    <div className="relative h-fit">
      <img className="" src="/assets/imgs/Empty.png" alt="empty-logo" />
      {showLabel && (
        <div className="absolute left-0 top-0 right-0 bottom-0 z-40 flex items-center justify-center marker-font-white !text-purple-thin text-sm">
          {current}/{total}
        </div>
      )}
      {showLogo && (
        <div className="absolute -left-2 -top-2 -bottom-2 z-30">
          <img
            src="/assets/imgs/icon_energy.png"
            alt="energy_logo"
            className="w-8"
          />
        </div>
      )}
      <div
        className={`absolute left-0 top-0 bottom-0 bg-[url(/assets/imgs/Full.png)] bg-cover overflow-hidden`}
        style={{ width: `${percent <= 100 ? percent : 100}%` }}
      ></div>
      <div className="absolute -left-1 -top-1 -bottom-1 -right-1 z-20">
        <img src="/assets/imgs/Frame.png" alt="frame_img" className="" />
      </div>
    </div>
  );
};

export default EnergyBar;
