// import coinImg from "../../assets/imgs/Coin_1.png";

// const BoosterCard = ({
//   title,
//   level,
//   imgUrl,
//   disabled = false,
//   price,
//   onClick = null,
// }) => {
//   return (
//     <div
//       className={`w-[26vw] flex flex-col rounded-xl overflow-hidden bg-[url(/assets/imgs/booster_BG.png)] bg-full ${
//         !disabled ? "active:scale-95 active:translate-y-1" : "brightness-50"
//       } transition-all`}
//       onClick={!disabled ? onClick : undefined}
//     >
//       <div className="flex flex-col mt-2 mb-1 gap-1 items-center justify-around">
//         <div className="marker-font-white leading-none text-[10px] font-black">
//           {title}
//         </div>
//         <div className="w-[65%]">
//           <div className="relative w-full h-0 pb-[100%]">
//             <div className="absolute w-full h-full">
//               <img className="w-full h-full" src={imgUrl} alt="booster-logo" />
//             </div>
//           </div>
//         </div>
//         {/* <img className="" src={imgUrl} width={"65%"} alt="booster-logo" /> */}
//         <div className="text-[#9c4b23] leading-none text-[9px]">{level}</div>
//       </div>
//       <div className="pt-0.5 pb-1 flex gap-px justify-center items-center text-base bg-[url(/assets/imgs/booster/bg_price.png)] bg-full text-green-price">
//         <div>
//           <img src={coinImg} width={18} alt="coin" />
//         </div>
//         {price}
//       </div>
//     </div>
//   );
// };

// export default BoosterCard;
