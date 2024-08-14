import { useMemo, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  const [tab, setTab] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [keyword, setKeyword] = useState('')

  return (
    <div className="relative flex flex-col h-full pb-24 bg-blue-200 backdrop-blur-sm bg-opacity-20 overflow-auto bg-[url('./assets/imgs/highscore_bg.png')] px-6 gap-y-6
    items-center">
        <div className="flex font-bold pt-6 text-white -tracking-[1px] justify-between">
            <span>CHOUSE YOURE HERO</span>
            <span>+4,000</span>
        </div>
        <div className="relative group items-center flex flex-col montserrat text-left leading-6">
            Pick an upgraded hero skin, and you’ll automatically join the lottery to keep it after the campaign
        </div>
        <div className="relative items-center border-primary-color-y w-[204px] h-[280px] z-1 p-3">
            
        </div>
      
        <div id="ecllipse" className="h-[200px] absolute w-full left-0 -bottom-10 opacity-40 blur-3xl rounded-t-[150px] bg-primary-color -z-10"></div>
    </div>
    
  );
};
export default Hero;