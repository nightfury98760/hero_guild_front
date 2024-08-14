import { useMemo, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

const Airdrop = () => {
  const [tab, setTab] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [keyword, setKeyword] = useState('')

  return (
    <div className="relative flex flex-col h-full pb-24 bg-blue-200 backdrop-blur-sm bg-opacity-20 overflow-auto bg-[url('./assets/imgs/highscore_bg.png')] px-6 gap-y-6">
        <div className="flex justify-start font-bold pt-6 text-white -tracking-[1px]">INVITE FIRENDS</div>
        <div className="relative group items-center flex flex-col">
            <div className="relative flex flex-col justify-center bg-normal-002 group
                min-h-[176px] px-3 rounded-[16px] overflow-auto montserrat gap-2 border-primary-color-y1 ">
                <div className="text-[12px] text-left font-bold">
                    participate in the GOH token airdrop
                </div>
                <div className="text-[14px] leading-[24px] text-left">Join the exciting GOH token airdrop by collecting GOH GOLD. Earn GOH GOLD by engaging with our platform and completing tasks. The more active you are, the more GOH GOLD you can collect</div>
                <div className="absolute bottom-[1px] bottom-gradient-primary opacity-25 left-0 h-[92px] w-full z-10"></div> 
            </div>
            {/* <div className="h-1 bg-primary-color w-[95%] bottom-[1px] rounded-full absolute"/> */}
        </div>
        <div className="relative items-center border-primary-color-y h-[220px] z-1 p-3">
            <div className="flex flex-col gap-y-3">
                <div className="flex justify-end items-end"><img src="/assets/svgs/info.svg" /></div>
                <div className="flex justify-center drop-shadow-md p-2"><img src="/assets/imgs/telegram.png" /></div>
                <div className="leading-4 font-bold"> Connect with Telegram Mini App</div>
                <div className="text-primary-color font-bold flex justify-center gap-x-3"> 
                    <div>Connect</div>
                    <img src="/assets/svgs/arrow-right.svg" />
                </div>
            </div>
            <div className="absolute bottom-[1px] rounded-[15px] -left-0 bottom-gradient h-[92px] w-full -z-10"></div>
        </div>
      
        <div id="ecllipse" className="h-[200px] absolute w-full left-0 -bottom-10 opacity-40 blur-3xl rounded-t-[150px] bg-primary-color -z-10"></div>
    </div>
    
  );
};
export default Airdrop;