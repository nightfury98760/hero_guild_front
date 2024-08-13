// import Modal from "../Base/Modal";
// import ribbonImg from "../../assets/imgs/boosterBoard/Ribbon.png";
// import coinImg from "../../assets/imgs/Coin_1.png";
// import shopImg from "../../assets/imgs/boosterBoard/icon_shop.png";
// import crossImg from "../../assets/imgs/boosterBoard/button_X.png";
// import { useContext } from "react";
// import { AppContext } from "../../App";
// import { API_BASE_URL } from "../../config";
// import axios from "axios";

// const BoostItemDialog = ({ isOpen, onClose, item }) => {
//   const { userInfo, setUserInfo } = useContext(AppContext);

//   const handleBuy = async (id, price) => {
//     console.log(id, price);
//     try {
//       const token = localStorage.getItem("authorization");
//       const { data: result } = await axios.post(
//         `${API_BASE_URL}/user/boost/purchase`,
//         { id, price },
//         {
//           headers: {
//             Authorization: `bearer ${token}`,
//           },
//         }
//       );
//       if (result.state) {
//         setUserInfo(result.data);
//       }
//       onClose()
//     } catch (error) {}
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <div className="relative mx-4 w-[90vw] pt-[8vw] px-4 pb-4 flex flex-col items-center bg-[url(/assets/imgs/boosterBoard/board_popup.png)] bg-full transalte-y-[10vw]">
//         <div className="absolute w-[30vw] top-3 left-[30vw] right-0 -translate-y-full flex flex-col items-center">
//           <img src={"/assets/imgs/items/" + item?.logo} />
//         </div>
//         <div className="absolute w-[50vw] -top-[4.5vw] object-center text-center">
//           <img className="" src={ribbonImg} />
//           <div className="absolute w-[50vw] bottom-1 text-center marker-font-white">
//             {item?.title}
//           </div>
//         </div>
//         <div className="mt-2 flex gap-4 text-amber-text">
//           {item?.type == "Daily"
//             ? "Remains"
//             : item?.type == "Royal"
//             ? "Level"
//             : ""}
//           <div className="relative w-20 pl-3 bg-[#ecc887] rounded-full text-center place-content-center  marker-font-white">
//             <img
//               className="absolute -top-1.5 -left-1.5"
//               src={shopImg}
//               width={30}
//               alt="shopcard"
//             />
//             {item?.current_level}
//           </div>
//         </div>
//         <img
//           src={crossImg}
//           className="absolute right-0 top-0 translate-x-[30%] -translate-y-[30%] active:scale-95"
//           width={40}
//           onClick={onClose}
//           alt="close-logo"
//         />
//         <div className="mt-4 bg-[url(/assets/imgs/boosterBoard/board_description.png)] bg-full text-xs text-amber-text p-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
//           suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
//           lacus vel facilisis.
//         </div>
//         <button
//           className="mt-4 flex items-center gap-2 border-none outline-none focus:outline-none ring-0 bg-[url(/assets/imgs/boosterBoard/Button_buy.png)] bg-full text-green-text active:translate-y-1 active:scale-95"
//           onClick={() =>
//             handleBuy(
//               item?.id,
//               item?.type == "Daily"
//                 ? item?.itemDaily?.price
//                 : item?.type == "Royal"
//                 ? item.itemLevel.find((_v) => _v.id == item?.current_level)
//                     .price
//                 : ""
//             )
//           }
//         >
//           <img src={coinImg} width={20} />
//           {item?.type == "Daily"
//             ? item?.itemDaily?.price
//             : item?.type == "Royal"
//             ? item.itemLevel.find((_v) => _v.id == item?.current_level).price
//             : ""}
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default BoostItemDialog;
