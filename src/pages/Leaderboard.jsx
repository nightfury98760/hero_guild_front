import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../config";
import { AppContext } from "../App";

const Leaderboard = () => {
  const { userInfo } = useContext(AppContext);
  const [userIndex, setUserIndex] = useState(0);
  const [userList, setUserList] = useState([]);
  const [holderCount, setHolderCount] = useState(0);
  useEffect(() => {
    const getUserIndex = async () => {
      const token = localStorage.getItem("authorization");
      const { data } = await axios.get(
        `${API_BASE_URL}/user/position`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      if (data?.state) {
        setUserIndex(data?.position);
      }
    }

    const getUsers = async () => {
      const token = localStorage.getItem("authorization");
      const { data } = await axios.get(
        `${API_BASE_URL}/user/sort-by-balance`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log(data);
      setUserList(data?.data);
    };

    const getHolderCount = async () => {
      const token = localStorage.getItem("authorization");
      const { data } = await axios.get(
        `${API_BASE_URL}/user/count`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      if (data?.state) {
        setHolderCount(data?.count)
      }
    }
    getUserIndex();
    getUsers();
    getHolderCount();
  }, []);

  useEffect(() => {
    console.log(userList);
  }, [userList]);

  return (
    <div className="relative h-full pb-32 flex flex-col overflow-auto">
      <div className="mx-auto mt-8 text-3xl font-bold">
        Telegram Wall of Fame
      </div>
      <div className="mx-4 mt-8 px-4 py-2 flex gap-4 items-center justify-between rounded-xl bg-white/15">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 uppercase">
            {userInfo?.metaInfo?.userName?.slice(0, 2)}
          </div>
          <div className="flex flex-col items-start">
            <span>{userInfo?.metaInfo?.userName}</span>
            <span className="text-gray-400">{userInfo?.currBalance + " "} REDZILLAS</span>
          </div>
        </div>
        <div className="">#{userIndex + 1}</div>
      </div>
      <div className="mx-4 mt-10 text-lg text-left">{holderCount + " "} holders</div>
      <div className={`mt-6 mx-4 flex flex-col gap-6`}>
        {userList &&
          userList.length > 0 &&
          userList.map((_item, _index) => (
            <div
              key={_index}
              className="flex gap-4 items-center justify-between"
            >
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500">
                  {_item?.metaInfo?.userName?.slice(0, 2)}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm">{_item?.metaInfo?.userName}</span>
                  <span className="text-gray-400 text-sm">
                    {_item?.currBalance?.toLocaleString() + " "}REDZILLAS
                  </span>
                </div>
              </div>
              <div className="">
                {_index == 0
                  ? "🥇"
                  : _index == 1
                  ? "🥈"
                  : _index == 2
                  ? "🥉"
                  : "#" + _index}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Leaderboard;
