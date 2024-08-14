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
<<<<<<< Updated upstream
import Airdrop from "./pages/Airdrop";
import Hero from "./pages/Hero";
=======
import Task from "./pages/Task";
>>>>>>> Stashed changes

export const AppContext = createContext();

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [tasks, setTasks] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState(null);

  
  useEffect(() => {
    if (
      location.pathname !== "/" &&
      location.pathname !== "/tasks" &&
      location.pathname !== "/friends" &&
      location.pathname !== "/highscores" &&
      location.pathname !== "/airdrop" &&
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
<<<<<<< Updated upstream
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/hero" element={<Hero />} />
=======
            <Route path="/tasks" element={<Task />} />
>>>>>>> Stashed changes
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
