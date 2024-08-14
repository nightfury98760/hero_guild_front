import { useContext, useEffect, useState } from "react";
import Modal from "../Base/Modal";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { AppContext } from "../../App";
import { FaRegWindowClose } from "react-icons/fa";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

const TaskModalFriends = ({ isOpen, onClose, onNext}) => {
  const { setUserInfo } = useContext(AppContext);
  const [isEnable, setEnable] = useState(false);

  useEffect(() => {
    setEnable(true);
  }, [isEnable]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col bg-neutral-800 backdrop-blur-sm w-screen bg-opacity-70 rounded-t-[24px] pb-6">
        <div className="flex-col flex  p-6 font-bold text-white items-center justify-start">
          <div className="flex flex-row items-center ">
            <div className="absolute ml-3 flex flex-row items-start justify-center left-3">
              <div className="flex m-0.5 w-[5px] h-[5px] items-start rounded-full bg-gray-500"></div>
              <div className="flex m-0.5 w-[5px] h-[5px] items-start rounded-full  bg-gray-500"></div>
              <div className="flex m-0.5 w-[5px] h-[5px] items-start rounded-full  bg-gray-500"></div>
              <div className="flex m-0.5 w-[5px] h-[5px] items-start rounded-full  bg-gray-500"></div>
              <div className="flex m-0.5 w-[12px] h-[4px] items-start rounded-md bg-primary-color"></div>
              <div className="flex m-0.5 w-[5px] h-[5px] items-start rounded-full  bg-gray-500"></div>
            </div>
            <div className="absolute right-6 flex ">
              <IoCloseOutline fontSize={24} onClick={onClose} />
            </div>
          </div>
          <div>
            <img
              className=""
              src="/assets/imgs/Friends.png"
              width={180}
              alt="task-logo"
            />
          </div>
          <div className="flex text-[24px] font-Montserrat w-full font-Poppins justify-center">
            refer friends
          </div>
          <div className="text-center flex items-center gap-1 pt-5 text-[12px]">
            Invite friends to join and play Guild of Heroes on the dashboard or
            through the Telegram mini-app. Earn 10% of all the GOH Gold they
            accumulate from tasks, game victories, and player kills. Expand your
            network and enhance your earnings seamlessly across both platforms!
          </div>
          <div
            id="btn"
            className="mt-8 border-primary-color-full w-full p-4 text-primary-color font-bold"
            onClick={onNext}
          >
            Next
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default TaskModalFriends;
