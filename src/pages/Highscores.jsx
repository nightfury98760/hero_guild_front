import { useContext, useEffect, useRef, useState } from "react";
// import leftCoin from "../assets/animations/coin-left.gif";
// import rightCoin from "../assets/animations/coin-right.gif";
import ReactDOM from "react-dom/client";
import CoinAnimation from "../components/CoinAnimation/CoinAnimation";
import { AppContext } from "../App";
import { API_BASE_URL, CHAT_ID } from "../config";
import { toast } from "react-toastify";
import axios from "axios";
import WalletDialog from "../components/Dialogs/WalletDialog";

const Highscores = () => {
  
  return (
    <div className="relative h-full pb-32 flex flex-col bg-neutral-400 bg-opacity-30 overflow-auto bg-[url('./assets/imgs/bg.png')]">
      <div id="navbar" className="flex items-center justify-between px-[13px] py-1">
        <div id="user" className="group relative flex items-center gap-x-3">
          <div id="avatar" >
            <div className="bg-[url('./assets/svgs/avatar_bg.svg')]">
              <img src="/assets/imgs/avatar.png" />
            </div>
            <div className="text-[12px] bg-neutral-800 border-primary-color">15</div>
          </div>
          <div className="text-neutral-400 montserrat font-bold">Thomas</div>
          <div className="bg-[url('./assets/svgs/avatar-drop.svg')]">
            <img src="/assets/svgs/avatar-drop.svg" />
          </div>
        </div>

        <div id="settings" className="flex gap-x-5">
          <img src="/assets/svgs/wallet.svg" />
          <img src="/assets/svgs/setting.svg" />
        </div>
        <div className="border-primary-color flex items-center px-4">
          <img src="/assets/svgs/boost.svg" />
          <span className="text-primary-color text-[12px] font-bold ">BOOST</span>
        </div>
      </div>

      <div id="score" className="flex justify-center items-center pt-3 gap-x-5">
        <img src="/assets/svgs/score-gold.svg" />
        <div className="text-primary-color text-[44px] font-bold">100,085</div>
      </div>
      <div id="main-img" className="flex">
        <img src="/assets/imgs/main-img.png" />
      </div>
      <div id="loading_pan" className="px-6 py-2">
        <div className="border-primary-color p-4 bg-neutral-400 bg-opacity-35 rounded-[20px]">
          <div id="battery" className="flex justify-between items-center font-bold pb-[10px]">
            <div><img src="/assets/svgs/battery.svg" /></div>
            <div className="">
              <span>2700 </span> 
              <span className="text-neutral-500"> / 3000</span>
            </div>
          </div>
          <div id="progress_bar" className="bg-neutral-400 bg-opacity-55 rounded-[40px]">
            <div className="h-[10px] rounded-[40px] bg-primary-color w-[164px]" ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Highscores;