import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        theme="light"
        position="top-center"
        pauseOnFocusLoss={false}
        autoClose={2500}
        // toastClassName="bg-white text-black"
        pauseOnHover={false}
        stacked
      />
    </BrowserRouter>
  </React.StrictMode>
);
