import { useMemo, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { friends } from './data/friends';

const Friends = () => {
  const [tab, setTab] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [keyword, setKeyword] = useState('')

  return (
    <div className="relative flex flex-col h-full pb-24 bg-blue-200 backdrop-blur-sm bg-opacity-20 overflow-auto bg-[url('./assets/imgs/highscore_bg.png')] px-6 gap-y-6">
      <div className="flex justify-start font-bold pt-6 text-white">INVITEFIRENDS</div>
      
      <div className="backdrop-blur-sm bg-zinc-900 bg-opacity-40 flex flex-col items-start rounded-[20px] p-4 gap-2">
        <div className="text-[14px] font-bold">HOW IT'S WORKS?</div>
        <div className="text-[12px] text-left montserrat">
          <span className="font-bold">Bonus 1:</span> Earn 10% for your direct friends referrals and 8% of their referrals
        </div>
        <div className="text-[12px] text-left montserrat">
          <span className="font-bold">Bonus 2:</span> You and your friend earn 10K extra coin
        </div>
      </div>

      { friends.length > 0 && <div className="border-primary-color flex px-[16px] py-[12px] justify-between montserrat items-center">
        <div className="text-[14px] -tracking-[1px] font-bold">YOUR REFERRAL REWARD</div>
        <div className="flex text-[12px] gap-x-1">
          <img src="/assets/svgs/golden_small.svg" />
          <div className="">2,500,000</div>
          <img src="/assets/svgs/arrow-right.svg" />
        </div>
      </div> }

      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <div className="-tracking-[1px]">LIST OF YOUR FRIENDS</div>
          <div className="flex border-primary-color-full bg-neutral-800 w-5 h-5 text-[10px] justify-center items-center">4</div>
        </div>
        <img src="/assets/svgs/recycle.svg" />
      </div>
      
      <div className="flex flex-col bg-zinc-900 backdrop-blur-sm items-center justify-center bg-opacity-40 min-h-[192px] gap-y-2 p-2 rounded-[16px] overflow-auto montserrat">
        {friends.length > 0 ? friends.map(item => (
          <div className="flex justify-between rounded-[16px] bg-normal-004 p-2">
            <div className="flex gap-x-1" >
              <img src={item.avatar} />
              <span>{item.name}</span>
            </div>
            <div className="flex gap-x-1">
              <img src="/assets/svgs/golden_small.svg" />
              <span>{item.value}</span>
            </div>  
          </div>
        )) : 
        <div className="flex text-[12px] text-white opacity-80 items-center">You haven’t invited anyone yet</div>
        }
      </div>

      <div className="flex justify-between p-4 rounded-[16px] bg-normal-004 montserrat">
        <div>0x2863Ekscnj56DfcF2</div>
        <img src="/assets/svgs/copy.svg" />
      </div>

      <div className="bg-primary-color btn-shadow text-white p-4 rounded-full font-bold montserrat">
        INVITE A FRIEND
      </div>
      <div id="ecllipse" className="h-[120px] absolute w-full left-0 -bottom-10 opacity-30 blur-xl rounded-t-[150px] bg-primary-color -z-10"></div>
    </div>
    
  );
};
export default Friends;