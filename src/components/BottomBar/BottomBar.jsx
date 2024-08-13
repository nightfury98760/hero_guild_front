import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "./IconButton";
import leaderboard from "../../assets/svgs/ic_leaderboard.svg";
import { useEffect } from "react";
// import {ReactComponent as CartLogo} from '../assets/logo/ic_cart.svg';
// import {ReactComponent as AccountLogo} from '../assets/logo/ic_account.svg';

const BottomBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="w-full bg-[#212429]">
      <div className="w-full pb-5 flex justify-around py-1">
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="/assets/svgs/home.svg"
            stroke={location.pathname == "/" ? "#FFFFFF" : "#FFFFFF88"}
          />
          <div
            className={`text-[10px] ${
              location.pathname == "/" ? "text-primary-color" : "#FFFFFF88"
            }`}
          >
            Home
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          onClick={() => {
            navigate("/tasks");
          }}
        >
          <img
            src="/assets/svgs/tasks.svg"
            stroke={location.pathname == "/tasks" ? "#FFFFFF" : "#FFFFFF88"}
          />
          <div
            className={`text-[10px] ${
              location.pathname == "/tasks" ? "#FFFFFF" : "#FFFFFF88"
            }`}
          >
            Tasks
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          onClick={() => {
            navigate("/friends");
          }}
        >
          <img
            src="/assets/svgs/friends.svg"
            stroke={location.pathname == "/friends" ? "#FFFFFF" : "#FFFFFF88"}
          />
          <div
            className={`text-[10px] ${
              location.pathname == "/friends" ? "#FFFFFF" : "#FFFFFF88"
            }`}
          >
            Friends
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          onClick={() => {
            navigate("/highscores");
          }}
        >
          <img
            src="/assets/svgs/highscores.svg"
            stroke={location.pathname == "/highscores" ? "#FFFFFF" : "#FFFFFF88"}
          />
          <div
            className={`text-[10px] ${
              location.pathname == "/highscores" ? "#FFFFFF" : "#FFFFFF88"
            }`}
          >
            Highscores
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          onClick={() => {
            navigate("/highscores");
          }}
        >
          <img
            src="/assets/svgs/hero.svg"
            stroke={location.pathname == "/highscores" ? "#FFFFFF" : "#FFFFFF88"}
          />
          <div
            className={`text-[10px] ${
              location.pathname == "/highscores" ? "#FFFFFF" : "#FFFFFF88"
            }`}
          >
            Hero
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
