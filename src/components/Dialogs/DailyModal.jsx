import { useContext, useEffect, useState } from "react";
import Modal from "../Base/Modal";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { AppContext } from "../../App";
import { FaRegWindowClose } from "react-icons/fa";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

const DailyModal = ({ isOpen, onClose, onNext }) => {
  const { setUserInfo } = useContext(AppContext);
  const [isEnable, setEnable] = useState(false);
  useEffect(() => {
    setEnable(true);
  }, [isEnable]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col bg-neutral-800 backdrop-blur-sm w-screen bg-opacity-70 rounded-t-[24px] pb-6">
        <div className="flex-col flex justify-center p-6 font-bold text-white items-center">
          <div className="flex flex-row items-center">
            <div className="relative flex flex-row items-center w-full">
              <div>
                <img
                  className=""
                  src="/assets/svgs/GH.svg"
                  width={54}
                  alt="task-logo"
                />
              </div>
            </div>
            <div className="absolute right-4 flex ">
              <IoCloseOutline fontSize={24} onClick={onClose} />
            </div>
          </div>
          <div className="flex text-[24px] font-Montserrat items-center font-bold w-full justify-center mt-1">DAY1</div>

          <div className="font-Gilroy text-[20px] text-center flex items-center gap-1 pt-10">
            +4,000
          </div>
          <button
            className="mt-4 bg-primary-color w-full btn-shadow text-white p-4 rounded-full font-bold"
            disabled={!isEnable}
            onClick={onClose}
          >
            GET
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default DailyModal;
