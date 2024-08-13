import { useContext, useState } from "react";
import Modal from "../Base/Modal";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { AppContext } from "../../App";
import { FaRegWindowClose } from "react-icons/fa";

const WalletDialog = ({ isOpen, onClose }) => {
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
      <div className="relative w-screen rounded-xl flex flex-col items-center bg-[#222222] px-2 py-6">
        <div className="text-xl">Set Wallet Address</div>
        <img 
          className="absolute right-6 top-6 text-xl font-bold cursor-pointer active:brightness-75" 
          src="/assets/imgs/close.png" 
          width={16} 
          onClick={onClose}
        />
        <div className="my-4 bg-white/60 h-px w-full"></div>
        <div className="my-2 px-6 w-full">
          <input
            className="mt-2 w-full bg-transparent outline-none border-2 border-solid border-white rounded-lg"
            value={address}
            placeholder="Put wallet address here"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="mt-4 flex flex-col justify-between gap-4">
            <div
              className="col-span-1 px-4 py-2 rounded-xl bg-white/90 text-black active:scale-95 transition-all select-none cursor-pointer"
              onClick={handleConfirm}
            >
              OK
            </div>
            <div
              className="col-span-1 px-4 py-2 rounded-xl bg-white/90 text-black active:scale-95 transition-all select-none cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WalletDialog;
