import { useContext, useState } from "react";
import { AppContext } from "../App";
import { toast } from "react-toastify";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Friend = () => {
  const { userInfo } = useContext(AppContext);
  const [inviteLink, setInviteLink] = useState("https://t.me/@RedzillaRewardBot?start=invite_" + userInfo.chatId.toString());
  const handleClick = () => {
    // const invitelink = "https://t.me/@RedzillaRewardBot?start=invite_" + userInfo.chatId.toString();
    // navigator.clipboard.writeText(invitelink);
    toast.info("Invite link is copied. Please send this link to your friends.")
  }

  return (
    <div className="relative mx-4 h-full pb-32 flex flex-col items-center">
      <div className="mx-auto mt-8 text-3xl font-bold">
        Invite friends and get more DOGS
      </div>
      <div className="mt-8">
        <img
          className=""
          src="/assets/imgs/REDZILLA_500.png"
          width={80}
          alt="logo"
        />
      </div>
      <div className="mt-10 text-xl">
        Tap on the button to invite your friends
      </div>

      <CopyToClipboard text={inviteLink} onCopy={null}>
        <div
          className="absolute bottom-28 w-full rounded-xl bg-white/90 text-black px-auto py-2 active:scale-95 transition-all select-none cursor-pointer"
          onClick={handleClick}
        >
          Invite friends
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default Friend;
