import { useContext } from "react";
import { AppContext } from "../../App";

const UserIconFlag = () => {
  const { userInfo, levels } = useContext(AppContext);

  return (
    <div className="relative">
      <img src="/assets/imgs/Flag.png" width={80} />
      <div className="absolute top-0 mx-2 mt-2 rounded-md z-20">
        <div className="relative w-full">
          <div className="absolute top-1 left-1 right-1 -z-10">
            <img src="/assets/imgs/userLogo.png" className="" />
          </div>
          <img src="/assets/imgs/AVT_Frame.png" />
          <div className="w-full marker-font-white absolute bottom-0.5 text-center text-[10px]">
            {levels && levels?.length > 0 && userInfo && Object.keys(userInfo) > 0
              ? levels.find((_v) => _v.id == userInfo.levelId).itemTitle
              : "PEASANT"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserIconFlag;
