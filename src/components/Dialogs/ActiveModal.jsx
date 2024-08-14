import { useContext, useEffect, useState } from "react";
import Modal from "../Base/Modal";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { AppContext } from "../../App";
import { FaRegWindowClose } from "react-icons/fa";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

const ActiveModal = ({ isOpen, onClose}) => {
  const { setUserInfo } = useContext(AppContext);
  const [isEnable, setEnable] = useState(false);
  useEffect(() => {
    setEnable(true)
  },[isEnable])
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col bg-neutral-800 backdrop-blur-sm w-screen bg-opacity-70 rounded-t-[24px] pb-6">
        <div className="flex-col flex justify-center p-6 font-bold text-white items-center">
          <div className="flex flex-row items-center">
            <div className="relative flex flex-row items-center w-1/4">
              <div className="flex text-[24px] w-1/4 h-24 items-center">
                WATCHTHEYOUTUBEVIDEO
              </div>
            </div>
            <div className="absolute right-0 flex ">
              <IoCloseOutline fontSize={24} onClick={onClose} />
            </div>
          </div>
          <div className="flex text-[12px] font-Montserrat w-4/5">
            After watching the video, wait 1 hour for a moderation check to
            claim the prize
          </div>
          <img
            src={"assets/imgs/Youtube.png"}
            width={58}
            alt="task-logo"
            className="pt-10"
          ></img>
          <div className="font-Gilroy text-left flex items-center gap-1 pt-10">
            4K
            <div>
              <img
                className=""
                src="/assets/svgs/GH.svg"
                width={16}
                alt="task-logo"
              />
            </div>
          </div>
          <div
            id="btn"
            className="mt-8 border-primary-color-full w-full p-4 text-primary-color font-bold"
          >
            WATCH THE VIDEO
          </div>
          <button
            className="mt-4 bg-primary-color w-full btn-shadow text-white p-4 rounded-full font-bold"
            disabled={!isEnable}
            onClick={onClose}
          >
            CHECK
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default ActiveModal;
