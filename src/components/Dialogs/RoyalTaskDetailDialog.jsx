// import Modal from "../Base/Modal";
// import ribbonImg from "../../assets/imgs/boosterBoard/Ribbon.png";
// import coinImg from "../../assets/imgs/Coin_1.png";
// import shopImg from "../../assets/imgs/boosterBoard/icon_shop.png";
// import crossImg from "../../assets/imgs/boosterBoard/button_X.png";
// import { useContext } from "react";
// import { AppContext } from "../../App";
// import { API_BASE_URL } from "../../config";
// import axios from "axios";

// const RoyalTaskDetailDialog = ({
//   isOpen,
//   onClose,
//   task,
//   userTask,
//   setUserTasks,
// }) => {
//   const handleClick = async () => {
//     if (userTask && !userTask.isClaimed) {
//       const token = localStorage.getItem("authorization");
//       const { data } = await axios.post(
//         `${API_BASE_URL}/user/task/claim`,
//         { id: task.id, reward: task.reward },
//         {
//           headers: {
//             Authorization: `bearer ${token}`,
//           },
//         }
//       );
//       if (data.state) {
//         setUserTasks(data.data);
//       }
//     } else {
//       if (task?.social) {
//         window.open(task.social, "_blank", "noopener,noreferrer");
//       }
//     }
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <div className="relative mx-4 w-[90vw] pt-4 px-4 pb-4 flex flex-col items-center bg-[url(/assets/imgs/tasks/Board.png)] bg-full transalte-y-[10vw]">
//         <div className="mt-2 flex gap-4 text-amber-text justify-center">
//           <img src={"/assets/imgs/tasks/" + task?.logo + ".png"} width={100} alt="logo" />
//         </div>
//         <img
//           src={crossImg}
//           className="absolute right-0 top-0 translate-x-[30%] -translate-y-[30%] active:scale-95"
//           width={30}
//           onClick={onClose}
//           alt="close-logo"
//         />
//         <div className="mt-2 text-amber-text text-2xl">{task?.title}</div>
//         <div className="mt-3 px-8 py-2 flex justify-center gap-2 items-center marker-font-yellow bg-[url(/assets/imgs/tasks/Board_info.png)] bg-full text-xl">
//           <div className="w-8">
//             <img src="/assets/imgs/tasks/coin.png" alt="coin-logo" />
//           </div>
//           {Number(task?.reward).toLocaleString()}
//         </div>
//         <button
//           className={`my-4 flex px-6 py-2 items-center gap-2 border-none outline-none focus:outline-none ring-0 text-xl ${
//             userTask
//               ? "bg-[url(/assets/imgs/tasks/button_green.png)]"
//               : "bg-[url(/assets/imgs/tasks/button_blue.png)]"
//           } bg-full marker-font-white active:translate-y-1 active:scale-95`}
//           onClick={() => handleClick()}
//         >
//           {userTask ? "Claim" : "Join"}
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default RoyalTaskDetailDialog;
