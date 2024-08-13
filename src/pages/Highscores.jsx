import { useContext, useEffect, useMemo, useRef, useState } from "react";
// import leftCoin from "../assets/animations/coin-left.gif";
// import rightCoin from "../assets/animations/coin-right.gif";
import ReactDOM from "react-dom/client";
import CoinAnimation from "../components/CoinAnimation/CoinAnimation";
import { AppContext } from "../App";
import { API_BASE_URL, CHAT_ID } from "../config";
import { toast } from "react-toastify";
import axios from "axios";
import WalletDialog from "../components/Dialogs/WalletDialog";
import HighScoreModal from "../components/Dialogs/HighScoreModal";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import {scores} from './data/highscores'
const Highscores = () => {
  const [tab, setTab] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [keyword, setKeyword] = useState('')
  
  const scores_new = useMemo(() => {
    let filter_rlt = scores.filter(item => item.username.includes(keyword))
    if(filter_rlt.length == 0) setShowDialog(true) 
    return filter_rlt;
  }, [keyword])

  return (
    <div className="relative h-full pb-24 bg-neutral-400 bg-opacity-30 overflow-auto bg-[url('./assets/imgs/highscore_bg.png')]">
      <div className="flex justify-start p-6 font-bold text-white">HIGHSCORES</div>
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
          className="rounded-[16px] flex flex-col bg-white backdrop-blur-md bg-opacity-5 montserrat text-[12px]">
          <div id="header" className="py-2 px-6 flex text-left font-[600]">
            <div className=" w-[15%]">Rank</div>
            <div className=" w-[50%]">Username</div>
            <div className=" w-[35%]">Coin Earnings</div>
          </div>
          <div className="h-[1px] bg-neutral-500"></div>
          {scores_new.length > 0 ? 
            scores_new.filter(item => item.username.includes(keyword)).map((item, idx) => ( !showAll ? idx < 9 && 
              <>
              <div className={keyword != '' && item.username.includes(keyword) > 0 ? `flex text-left px-6 py-2  text-primary-color font-bold`: `flex text-left px-6 py-2`}>
                <div className=" w-[15%]">{idx+1}</div>
                <div className=" w-[50%]">
                  <div className="flex gap-x-1">
                    <img src={item.avatar} />
                    <span>{item.username}</span>
                  </div>
                </div>
                <div className=" w-[35%] text-center">{item.coin}</div>
              </div>
              { idx < 8 && !showAll && <div className="h-[1px] bg-neutral-500"></div> }
              </> : <>
                <div className="flex text-left px-6 py-2">
                  <div className=" w-[15%]">{idx+1}</div>
                  <div className=" w-[50%]">
                    <div className="flex gap-x-1">
                      <img src={item.avatar} />
                      <span>{item.username}</span>
                    </div>
                  </div>
                  <div className=" w-[35%] text-center">{item.coin}</div>
                </div>
                { idx < scores.length -1  && <div className="h-[1px] bg-neutral-500"></div> }
              </>
            )) : 
            <div id="no_user" className="flex flex-col gap-y-5 py-10">
              <div className="text-neutral-300">Username Not Found</div>
              <div className="text-primary-color font-bold text-[14px]">Go Back</div>
            </div>
            }
        </div>
        <div id="btn" className="border-primary-color-full p-4 text-primary-color font-bold" onClick={() => setShowAll(prev => !prev)}>
          SHOW MORE
        </div>
      </div>
      <div id="ecllipse" className="h-[180px] absolute w-full left-0 -bottom-5 opacity-40 blur-xl rounded-t-[150px] bg-primary-color -z-10"></div>
      <HighScoreModal isOpen={showDialog} onClose={() => setShowDialog(false)} keyword={keyword} tab={tab} />
    </div>
  );
};
export default Highscores;