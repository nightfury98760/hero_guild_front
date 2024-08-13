import { useContext, useState } from "react";
import Modal from "../Base/Modal";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { AppContext } from "../../App";
import { FaRegWindowClose } from "react-icons/fa";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

const HighScoreModal = ({ isOpen, onClose, keyword, tab }) => {
  const { setUserInfo } = useContext(AppContext);
  const [address, setAddress] = useState("");

  const handleConfirm = async () => {
    if (address == "") {
      console.log("Empty wallet address")
      return
    }

    const token = localStorage.getItem("authorization");
    const { data } = await axios.post(
      `${API_BASE_URL}/user/wallet`,
      {
        walletAddress: address
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )

    if (data?.state)
      setUserInfo(data?.userInfo)

    onClose && onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col bg-neutral-800 backdrop-blur-sm w-screen bg-opacity-70 rounded-t-[24px] pb-6">
        <div className="flex justify-between p-6 font-bold text-white">
            <div>HIGHSCORES</div>
            <IoCloseOutline fontSize={24} onClick={onClose}/>
        </div>
        <div className="flex flex-col px-6 gap-4">
            <div id="tab" className=" flex items-center justify-between rounded-[12px] bg-white bg-opacity-5 text-[14px]">
            <div 
                className="py-[6px] w-1/2 items-center 
                justify-center flex flex-col font-bold rounded-[12px] " onClick={() => setTab(0)}
            >
                <span className={tab==0 ? 'text-primary-color' : 'text-neutral-400'}>In Game</span>
                {tab == 0 ? <div className="border-primary-color w-[90%] translate-y-1"></div> : null}
            </div>
            <div className="py-[6px] w-1/2 text-neutral-400 font-bold rounded-[12px]" onClick={() => setTab(1)}>
                <span className={tab==1 ? 'text-primary-color' : 'text-neutral-400'}>Referral Champ</span>
                {tab == 1 ? <div className="border-primary-color w-[90%] translate-y-1"></div> : null}
            </div>
            </div>

            <div id="search" className="flex px-3 items-center rounded-[12px] border bg-white bg-opacity-5 border-white border-opacity-15">
            {keyword == '' && <IoSearchOutline fontSize={24} className="text-neutral-400"/>}
            <input 
                placeholder="Search" 
                className="bg-transparent montserrat w-full border-none focus:outline-none"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            {keyword && <IoCloseOutline fontSize={24} className="text-neutral-400" onClick={() => setKeyword('')}/>}
            </div>

            <div id="score_board" 
            className="rounded-[16px] flex flex-col bg-white bg-opacity-5 montserrat text-[12px]">
            <div id="header" className="py-2 px-6 flex text-left font-[600]">
                <div className=" w-[15%]">Rank</div>
                <div className=" w-[50%]">Username</div>
                <div className=" w-[35%]">Coin Earnings</div>
            </div>
            <div className="h-[1px] bg-neutral-500"></div>
            <div id="no_user" className="flex flex-col gap-y-5 py-10 ">
                <div className="text-neutral-300">Username Not Found</div>
                <div className="text-primary-color font-bold text-[14px]">Go Back</div>
            </div>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default HighScoreModal;
