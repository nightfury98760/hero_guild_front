// import "../../styles/background.css";
// import backImg from "../../assets/imgs/Icon_DlgBack.png";
// import coinImg from "../../assets/imgs/Coin_1.png";
// import crossImg from "../../assets/imgs/boosterBoard/button_X.png";
// import dividerImg1 from "../../assets/imgs/dlg_dailyBooster.png";
// import dividerImg2 from "../../assets/imgs/dlg_royalBooster.png";
// import BoosterCard from "../BoosterCard/BoosterCard";
// import BoostItemDialog from "./BoostItemDialog";
// import { useContext, useRef, useState } from "react";
// import { AppContext } from "../../App";

// const WheelDialog = ({ showWheelDialog, setShowWheelDialog }) => {
//   const { items, userInfo } = useContext(AppContext);

//   const [showDlg, setShowDlg] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [mode, setMode] = useState(0);
//   const [angle, setAngle] = useState(0);
//   const [refresh, setRefresh] = useState(false);
//   const [value, setValue] = useState(3);
//   const wheelRef = useRef();

//   const handleItemClick = (item, current_level) => {
//     setSelectedItem({ ...item, current_level });
//     console.log({ ...item, current_level });
//     setShowDlg(true);
//   };

//   const handleRotate = async () => {
//     setRefresh(false);
//     setAngle(360 * 18 + 45 * value);
//     const timer = setTimeout(() => {
//       setAngle(0);
//       setRefresh(true);
//     }, 10000);
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 bottom-[18vw] pb-4 right-0 w-full bg-[url(/assets/imgs/wheel/BG.png)] bg-full z-10 transition-transform ease-in-out duration-300 delay-75 translate-x-[-100%] ${
//         showWheelDialog ? "!translate-x-0" : ""
//       }`}
//     >
//       <div className="sticky top-0 mt-6 mx-5 flex justify-between marker-font-white text-lg">
//         <div className="relative">
//           <img
//             src={coinImg}
//             className="absolute bottom-0.5"
//             width={40}
//             alt="coin-logo"
//           />
//           <div className="ml-1 px-12 rounded-full w-48 h-9 flex justify-center items-center bg-black/40">
//             {userInfo &&
//               Object.keys(userInfo) != 0 &&
//               userInfo?.currBalance?.toLocaleString()}
//           </div>
//           <img
//             className="absolute -right-1 bottom-px"
//             src="/assets/imgs/wheel/Button_+.png"
//             width={40}
//             alt="plus"
//           />
//         </div>
//         <img
//           src={crossImg}
//           width={40}
//           className="active:scale-110 transition-all"
//           onClick={() => setShowWheelDialog(false)}
//         />
//       </div>
//       <div className="relative py-8 flex flex-col gap-2 h-[calc(100%-60px)] items-center justify-between">
//         <div className="relative flex flex-col">
//           <img
//             className=""
//             src={
//               mode == 0
//                 ? "/assets/imgs/wheel/wheel_normal_bg.png"
//                 : "/assets/imgs/wheel/wheel_gold_bg.png"
//             }
//             width={"100%"}
//             alt="wheel-bg"
//           />
//           <img
//             className="absolute mx-[17%] mt-[6vw] z-20"
//             src="/assets/imgs/wheel/Frame_Wheel.png"
//             width={"66%"}
//             alt="wheel-BG"
//           />
//           <div className="my-2 marker-font-yellow text-xs">
//             Free spin in 23:50:30
//           </div>
//           <img
//             className="absolute mx-[14%] mt-[9vw] z-10"
//             style={{
//               transform: `rotate(${angle}deg)`,
//               transition: !refresh && "transform 10s",
//               transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1)",
//             }}
//             src={
//               mode == 0
//                 ? "/assets/imgs/wheel/Wheel.png"
//                 : "/assets/imgs/wheel/Wheel_golden.png"
//             }
//             width={"72%"}
//             alt="wheel"
//             ref={wheelRef}
//           />
//           <div
//             className="absolute mx-[14vw] mt-[9vw] w-[72vw] h-[72vw] py-[12vw] z-10"
//             style={{
//               transform: `rotate(${angle}deg)`,
//               transition: !refresh && "transform 10s",
//               transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1)",
//             }}
//           >
//             <div className="relative w-full h-full flex flex-col items-center justify-center marker-font-yellow text-lg">
//               <div className="absolute h-full flex flex-col justify-between">
//                 <span>100K</span>
//                 <span className="rotate-180">150k</span>
//               </div>
//               <div className="absolute h-full flex flex-col justify-between rotate-45">
//                 <span>5M</span>
//                 <span className="rotate-180">20M</span>
//               </div>
//               <div className="absolute h-full flex flex-col justify-between rotate-90">
//                 <span>250K</span>
//                 <span className="rotate-180">500K</span>
//               </div>
//               <div className="absolute h-full flex flex-col justify-between rotate-[135deg]">
//                 <span>1M</span>
//                 <span className="rotate-180">1.5M</span>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mx-auto px-6 pt-1 pb-2 marker-font-white text-2xl cursor-pointer active:scale-95 transition-all bg-[url(/assets/imgs/wheel/Button_Spin.png)] bg-full"
//             onClick={handleRotate}
//           >
//             spin
//           </div>
//         </div>
//         <div className="mx-auto px-6 py-1 marker-font-white text-xl bg-[url(/assets/imgs/wheel/Bar_text.png)] bg-full">
//           Daily bonus level: 8
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WheelDialog;
