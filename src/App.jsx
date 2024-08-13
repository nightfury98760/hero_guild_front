import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles/animations.css";
import BottomBar from "./components/BottomBar/BottomBar";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import axios from "axios";
import { API_BASE_URL, CHAT_ID, WS_BASE_URL } from "./config";
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import Home from "./pages/Home";
import Highscores from './pages/Highscores'
import Friend from "./pages/Friend";

export const AppContext = createContext();

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [tasks, setTasks] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState(null);

  const getAuthandUserInfo = async (webAppUserInfo) => {
    console.log("---------------UserID: ", webAppUserInfo.id);
    try {
      const chatId = webAppUserInfo.id;
      if (chatId == null || chatId == undefined) {
        return;
      }
      const { data } = await axios.post(
        `${API_BASE_URL}/user/login`,
        {
          webAppUserInfo: webAppUserInfo,
        }
      );
      console.log(data);
      if (data.token) {
        localStorage.setItem("authorization", data.token);
        setToken(token);
      }

      const { data: userinfo } = await axios.get(`${API_BASE_URL}/user/info`, {
        headers: {
          Authorization: `bearer ${data.token}`,
        },
      });
      console.log("[Userinfo]", userinfo);
      if (userinfo.state) setUserInfo(userinfo.data);

      const { data: tasks } = await axios.get(
        `${API_BASE_URL}/task/list`,
        {
          headers: {
            Authorization: `bearer ${data.token}`,
          },
        }
      );
      console.log("Tasks", tasks);
      if (tasks.state) {
        setTasks(tasks.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // {
    //   id: 5521963424,
    //   first_name: "Gallant",
    //   last_name: "Knight",
    //   username: "GallantKnight",
    //   language_code: "en",
    //   allows_write_to_pm: true
    // }
    console.log("-----init data-----", window.Telegram.WebApp.initData);

    if (
      window.Telegram.WebApp.initData == null ||
      window.Telegram.WebApp.initData == undefined
    ) {
      // Error Handle
      console.log(
        "Telegram WebApp InitData is not existed. Please use telegram app."
      );
    } else {
      const params = new URLSearchParams(window.Telegram.WebApp.initData);
      const user = params.get("user");

      console.log("USER: ", user);
      getAuthandUserInfo(JSON.parse(decodeURIComponent(user)));
    }
  }, []);

  useEffect(() => {
    if (
      location.pathname !== "/" &&
      location.pathname !== "/tasks" &&
      location.pathname !== "/friends" &&
      location.pathname !== "/highscores" &&
      location.pathname !== "/hero"
    ) {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        tasks,
      }}
    >
      <div className="relative flex flex-col justify-between h-full">
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/highscores" element={<Highscores />} />
            <Route path="/friends" element={<Friend />} />
          </Routes>
        </div>
        <div className="absolute z-50 bottom-0 left-0 w-full">
          <BottomBar />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
