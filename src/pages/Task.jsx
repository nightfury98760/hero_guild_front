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
import Dropdown from "../components/TaskBar/DropDownMenu";
import TaskBarNormal from "../components/TaskBar/TaskBar-normal";
import Modal from "../components/Base/Modal";
import TaskBarDaily from "../components/TaskBar/TaskBar-daily";
import TaskBarCard from "../components/TaskBar/TaskBarCard";


const taskData = [
  {
    imgUrl: "./assets/svgs/CreateGOHaccount.svg",
    title: "CREATEGOHACCOUNT",
    price: "+10.000",
    checked: false,
    active: false,
    onClick: null,
    link: "",
  },
  {
    imgUrl: "./assets/imgs/person.png",
    title: "CHOOSEYOURHERO",
    price: "+4.000",
    checked: false,
    active: false,
    onClick: null,
    link: "",
  },
  {
    imgUrl: "./assets/imgs/person.png",
    title: "CHOOSEYOURHERO",
    price: "+4.000",
    checked: false,
    active: false,
    onClick: null,
    link: "",
  },

  {
    imgUrl: "./assets/imgs/Telegram.png",
    title: "JOINOURTTELEGRAMCHANNEL",
    price: "+4.000",
    checked: false,
    active: true,
    onClick: null,
    link: "",
  },

  {
    imgUrl: "./assets/imgs/Youtube.png",
    title: "WATCHTHEYOUTUBEVIDEO",
    price: "+4.000",
    checked: false,
    active: true,
    onClick: null,
    link: "",
  },
  {
    imgUrl: "./assets/imgs/person.png",
    title: "CHOOSEYOURHERO",
    price: "+4.000",
    checked: false,
    active: false,
    onClick: null,
    link: "",
  },
  {
    imgUrl: "./assets/imgs/X-black.png",
    title: "KIKEANDSHAREOURLATESTPOST",
    price: "+4.000",
    checked: false,
    active: true,
    onClick: null,
    link: "",
  },
  {
    imgUrl: "./assets/imgs/Youtube.png",
    title: "WATCHTHEYOUTUBEVIDEO",
    price: "+4.000",
    checked: false,
    active: false,
    onClick: null,
    link: "",
  },
];

const dailyData = [
  {
    day: "1",
    price: 500,
    checked: false,
  },
  {
    day: "1",
    price: 500,
    checked: false,
  },
  {
    day: "2",
    price: 500,
    checked: false,
  },
  {
    day: "3",
    price: 500,
    checked: false,
  },
  {
    day: "4",
    price: 500,
    checked: false,
  },
  {
    day: "5",
    price: 500,
    checked: false,
  },
  {
    day: "6",
    price: 500,
    checked: false,
  },
  {
    day: "7",
    price: 500,
    checked: false,
  },
  {
    day: "8",
    price: 500,
    checked: false,
  },
  {
    day: "9",
    price: 500,
    checked: false,
  },
  {
    day: "10",
    price: 500,
    checked: false,
  },
];
const completedData = [
  {
    title:'TOTALPLAYTIME',
    subTitle:'120 hours',
    description:'Tracks the total duration you have spent in-game, emphasizing that every hour counts. This metric is key in assessing your overall engagement and activity levels'
  },
  {
    title:'VITORIES',
    subTitle:'500',
    description:'Tracks the total duration you have spent in-game, emphasizing that every hour counts. This metric is key in assessing your overall engagement and activity levels'
  },
  {
    title:'DEFEATS',
    subTitle:'500',
    description:'Tracks the total duration you have spent in-game, emphasizing that every hour counts. This metric is key in assessing your overall engagement and activity levels'
  },
]
const Task = () => {
  const [isOpenModal, openModal] = useState("Tasks");
  const onHandleDropMenu = (option) => {
    openModal(option);
  };
  return (
    <div className="w-full h-full pb-32 flex flex-col bg-neutral-400 bg-opacity-20 overflow-auto bg-[url('./assets/imgs/house.png')]">
      {isOpenModal !== "Completed Tasks" && <div id="combo-menu" className="p-8 flex flex-row">
        <Dropdown onSelect={onHandleDropMenu} />
        <div className="flex  w-[48px] h-[48px] rounded-xl bg-[#FFFFFF0A] items-center justify-center focus:border-1 focus:border-white ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.36761 0 0 5.367 0 12C0 18.6323 5.367 24 12 24C18.6324 24 24 18.633 24 12C24 5.3677 18.633 0 12 0ZM13.2323 16.7635C13.2323 17.1426 12.6795 17.5216 12.0002 17.5216C11.2894 17.5216 10.784 17.1426 10.784 16.7635V10.7453C10.784 10.3031 11.2895 10.0029 12.0002 10.0029C12.6795 10.0029 13.2323 10.3031 13.2323 10.7453V16.7635ZM12.0003 8.54981C11.2737 8.54981 10.7051 8.01277 10.7051 7.41248C10.7051 6.81225 11.2737 6.291 12.0003 6.291C12.7111 6.291 13.2798 6.81225 13.2798 7.41248C13.2798 8.01272 12.711 8.54981 12.0003 8.54981Z"
              fill="white"
            />
          </svg>
        </div>
      </div>}
      {isOpenModal === "Tasks" && (
        <div id="task-view" className="flex flex-col w-full px-8">
          {taskData.map((data) => (
            <TaskBarNormal
              imgUrl={data.imgUrl}
              title={data.title}
              price={data.price}
              checked={data.checked}
              onClick={data.onClick}
              link={data.link}
              opacity="40"
            />
          ))}
        </div>
      )}
      
      
      
      <div id="daily-task-view" className="">
      {isOpenModal === "Daily Tasks" && (
        <div id="task-view" className="grid grid-cols-4  gap-3 w-full px-8">
          {dailyData.map((data) => (
            <TaskBarDaily
              day={data.day}
              price={data.price}
              checked={data.checked}
            />
          ))}
        </div>
      )}
      </div>
      <div id="active-task-view" className="">
      {isOpenModal === "Active Tasks" && (
        <div id="task-view" className="flex flex-col w-full px-8">
          {taskData.map((data) => (
            <TaskBarNormal
              imgUrl={data.imgUrl}
              title={data.title}
              price={data.price}
              checked={data.checked}
              active={data.active}
              onClick={data.onClick}
              link={data.link}
              opacity="40"
            />
          ))}
        </div>
      )}
      </div>
      <div id="complete-task-view" className="flex flex-col w-full h-full">
      <div className="flex w-full p-10 text-[16px] font-Poppins">
        COMBATEARNING
      </div>
      {isOpenModal === "Completed Tasks" && (
        <div id="task-view" className="flex flex-col w-full px-8">
          {completedData.map((data) => (
            <TaskBarCard
              title={data.title}
              subTitle={data.subTitle}
              description={data.description}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};
export default Task;
