// import "../../styles/background.css";
// import backImg from "../../assets/imgs/Icon_DlgBack.png";
// import coinImg from "../../assets/imgs/Coin_1.png";
// import dividerImg1 from "../../assets/imgs/dlg_dailyBooster.png";
// import dividerImg2 from "../../assets/imgs/dlg_royalBooster.png";
// import BoosterCard from "../BoosterCard/BoosterCard";
// import BoostItemDialog from "./BoostItemDialog";
// import { useContext, useState } from "react";
// import { AppContext } from "../../App";

// const BoostDialog = ({ showBoostDialog, setShowBoostDialog }) => {
//   const { items, userInfo } = useContext(AppContext);

//   const [showDlg, setShowDlg] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleItemClick = (item, current_level) => {
//     setSelectedItem({ ...item, current_level });
//     console.log({ ...item, current_level });
//     setShowDlg(true);
//   };

//   return (
//     <div
//       className={`absolute top-0 left-0 bottom-[18vw] pb-4 right-0 w-full bg-dlg-normal z-10 transition-transform ease-in-out duration-300 delay-75 translate-x-[-100%] ${
//         showBoostDialog ? "!translate-x-0" : ""
//       }`}
//     >
//       <div className="sticky top-0 mt-3 p-2 flex justify-between marker-font-yellow text-xl">
//         <div className="relative">
//           <img
//             src={coinImg}
//             className="absolute bottom-0.5"
//             width={40}
//             alt="coin-logo"
//           />
//           <div className="ml-1 pl-8 rounded-full w-40 h-9 flex justify-center items-center bg-black/40">
//             {userInfo &&
//               Object.keys(userInfo) != 0 &&
//               userInfo?.currBalance?.toLocaleString()}
//           </div>
//         </div>
//         <img
//           src={backImg}
//           width={40}
//           className="active:scale-110 transition-all"
//           onClick={() => setShowBoostDialog(false)}
//         />
//       </div>
//       <div className="relative flex flex-col h-[calc(100%-60px)] overflow-y-scroll">
//         <div className="mx-2 mt-6 mb-2">
//           <img
//             className=""
//             src={dividerImg1}
//             width={"100%"}
//             alt="divider-logo"
//           />
//         </div>
//         <div className="mt-4 flex justify-center gap-4 flex-wrap">
//           {items &&
//             items.length > 0 &&
//             items.map((_item, _index) => {
//               if (_item.type == "Daily") {
//                 const matchedItem = userInfo.userItems.find(
//                   (_v) => _v.id == _item.id
//                 );
//                 const boughtCount = matchedItem?.current
//                   ? matchedItem?.current
//                   : 0;
//                 return (
//                   <BoosterCard
//                     key={`daily + ${_index}`}
//                     title={_item.title}
//                     imgUrl={"/assets/imgs/items/" + _item.logo}
//                     level={`Remains ${_item.itemDaily?.count - boughtCount}`}
//                     disabled={
//                       (userInfo?.currBalance
//                         ? userInfo?.currBalance < _item.itemDaily.price
//                         : true) || _item.itemDaily?.count - boughtCount <= 0
//                     }
//                     price={_item.itemDaily.price}
//                     onClick={() =>
//                       handleItemClick(
//                         _item,
//                         _item.itemDaily?.count - boughtCount
//                       )
//                     }
//                   />
//                 );
//               }
//             })}
//         </div>
//         <div className="mx-2 mt-6 mb-2">
//           <img
//             className=""
//             src={dividerImg2}
//             width={"100%"}
//             alt="divider-logo"
//           />
//         </div>
//         <div className="my-4 flex justify-center gap-4 flex-wrap">
//           {items &&
//             items.length > 0 &&
//             items.map((_item, _index) => {
//               if (_item.type == "Royal") {
//                 const matchedItem = userInfo.userItems.find(
//                   (_v) => _v.id == _item.id
//                 );
//                 let canBuy = true;
//                 let currentItem;
//                 const level = matchedItem?.current ? matchedItem?.current : 0;
//                 if (level >= _item.itemLevel[_item.itemLevel.length - 1].id) {
//                   canBuy = false;
//                   currentItem = _item.itemLevel[_item.itemLevel.length - 1]
//                 } else {
//                   currentItem = _item.itemLevel.find(
//                     (_v) => _v.id == level + 1
//                   );
//                 }
//                 return (
//                   <BoosterCard
//                     key={`daily + ${_index}`}
//                     title={_item.title}
//                     imgUrl={"/assets/imgs/items/" + _item.logo}
//                     level={`level ${currentItem.id}`}
//                     disabled={
//                       (userInfo?.currBalance
//                         ? userInfo?.currBalance < currentItem.price
//                         : true) || (!canBuy)
//                     }
//                     price={currentItem.price}
//                     onClick={() => handleItemClick(_item, level + 1)}
//                   />
//                 );
//               }
//             })}
//         </div>
//       </div>
//       <BoostItemDialog
//         isOpen={showDlg}
//         onClose={() => setShowDlg(false)}
//         item={selectedItem}
//       />
//     </div>
//   );
// };

// export default BoostDialog;
