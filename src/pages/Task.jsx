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
import TaskModal from "../components/Dialogs/TaskModal";
import TaskModalReward from "../components/Dialogs/TaskModalReward";
import TaskModalCoin from "../components/Dialogs/TaskModalCoin";
import TaskModalDailyTasks from "../components/Dialogs/TaskModalDailyTasks";
import TaskModalHireScores from "../components/Dialogs/TaskModalHireScores";
import TaskModalFriends from "../components/Dialogs/TaskModalFriends";
import TaskModalLastFriends from "../components/Dialogs/TaskModalLastFriends";
import { taskData, dailyData, completedData } from "./data/tasks.js";
import DailyModal from "../components/Dialogs/DailyModal.jsx";
import ActiveModal from "../components/Dialogs/ActiveModal.jsx";

const Task = () => {
  const [isOpenModal, openModal] = useState("Tasks");
  const [isTaskModal, showTaskModal] = useState(false);
  const [isDailyModal, showDailyModal] = useState(false);
  const [isActiveModal, showActiveModal] = useState(false);
  const [reward1, claimReward] = useState(false);
  const [reward2, claimCoin] = useState(false);
  const [reward3, claimDailyTasks] = useState(false);
  const [reward4, claimHireScores] = useState(false);
  const [reward5, claimFriends] = useState(false);
  const [reward6, claimLastFriends] = useState(false);

  const onHandleDropMenu = (option) => {
    openModal(option);
  };
  return (
    <div className="w-full h-full pb-32 flex flex-col bg-neutral-400 bg-opacity-30 overflow-auto bg-[url('./assets/imgs/house.png')]">
      {isOpenModal !== "Completed Tasks" && (
        <div id="combo-menu" className="p-8 flex flex-row">
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
        </div>
      )}
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
              opacity="20"
              showModal={() => showTaskModal(true)}
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
                showModal={() => showDailyModal(true)}
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
                opacity=""
                showModal={() => showActiveModal(true)}
              />
            ))}
          </div>
        )}
      </div>
      <div id="complete-task-view" className="flex flex-col w-full h-full">
        {isOpenModal === "Completed Tasks" && (
          <div id="task-view" className="flex flex-col w-full px-8">
            <div className="flex w-full p-10 text-[16px] font-poppins">
              COMBATEARNING
            </div>
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
      <TaskModal
        isOpen={isTaskModal}
        onClose={() => {
          showTaskModal(false);
        }}
        onNext={() => {
          showTaskModal(false);
          claimReward(true);
        }}
        claim={claimReward}
      />
      <TaskModalReward
        isOpen={reward1}
        onClose={() => {
          claimReward(false);
        }}
        onNext={() => {
          claimReward(false);
          claimCoin(true);
        }}
      />
      <TaskModalCoin
        isOpen={reward2}
        onClose={() => {
          claimCoin(false);
        }}
        onNext={() => {
          claimCoin(false);
          claimDailyTasks(true);
        }}
      />
      <TaskModalDailyTasks
        isOpen={reward3}
        onClose={() => {
          claimDailyTasks(false);
        }}
        onNext={() => {
          claimDailyTasks(false);
          claimHireScores(true);
        }}
      />
      <TaskModalHireScores
        isOpen={reward4}
        onClose={() => {
          claimHireScores(false);
        }}
        onNext={() => {
          claimHireScores(false);
          claimFriends(true);
        }}
      />
      <TaskModalFriends
        isOpen={reward5}
        onClose={() => {
          claimFriends(false);
        }}
        onNext={() => {
          claimFriends(false);
          claimLastFriends(true);
        }}
      />
      <TaskModalLastFriends
        isOpen={reward6}
        onClose={() => {
          claimLastFriends(false);
        }}
      />
      <DailyModal
        isOpen={isDailyModal}
        onClose={() => {
          showDailyModal(false);
        }}
      />
      <ActiveModal
        isOpen={isActiveModal}
        onClose={() => {
          showActiveModal(false);
        }}
      />
    </div>
  );
};
export default Task;
