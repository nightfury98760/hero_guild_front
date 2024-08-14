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
          onClick={() => { navigate("/") }}
        >
          <img src={location.pathname == "/" ? "/assets/svgs/home_a.svg" : "/assets/svgs/home.svg"} />
          <div className={`text-[10px] ${ location.pathname == "/" ? "text-primary-color" : "#FFFFFF88"}`}>
            Home
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          onClick={() => {  navigate("/tasks") }}
        >
          <img src={location.pathname == "/tasks" ? "/assets/svgs/tasks_a.svg" : "/assets/svgs/tasks.svg"} />
          <div
            className={`text-[10px] ${
              location.pathname == "/tasks" ? "text-primary-color" : "#FFFFFF88"
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
          <img src={location.pathname == "/friends" ? "/assets/svgs/friends_a.svg" : "/assets/svgs/friends.svg"} />
          <div
            className={`text-[10px] ${ location.pathname == "/friends" ? "text-primary-color" : "#FFFFFF88"}`}
          >
            Friends
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          onClick={() => { navigate("/highscores")}}
        >
          <img src={location.pathname == "/highscores" ? "/assets/svgs/highscores_a.svg" : "/assets/svgs/highscores.svg"} />
          <div
            className={`text-[10px] ${
              location.pathname == "/highscores" ? "text-primary-color" : "#FFFFFF88"
            }`}
          >
            Highscores
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          onClick={() => {
            navigate("/hero");
          }}
        >
          <img src={location.pathname == "/hero" ? "/assets/svgs/hero_a.svg" : "/assets/svgs/hero.svg"} />
          <div
            className={`text-[10px] ${
              location.pathname == "/hero" ? "text-primary-color" : "#FFFFFF88"
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
