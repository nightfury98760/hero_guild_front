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

      <div className="border-primary-color flex px-[16px] py-[12px] justify-between montserrat items-center">
        <div className="text-[14px] -tracking-[1px] font-bold">YOUR REFERRAL REWARD</div>
        <div className="flex text-[12px] gap-x-1">
          <img src="/assets/svgs/golden_small.svg" />
          <div className="">2,500,000</div>
          <img src="/assets/svgs/arrow-right.svg" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <div className="-tracking-[1px]">LIST OF YOUR FRIENDS</div>
          <div className="flex border-primary-color-full bg-neutral-800 w-5 h-5 text-[10px] justify-center items-center">4</div>
        </div>
        <img src="/assets/svgs/recycle.svg" />
      </div>

      <div className="flex flex-col bg-zinc-900 backdrop-blur-sm bg-opacity-40 h-[192px] p-8 rounded-[16px]">
        
      </div>
    </div>
  );
};
export default Friends;