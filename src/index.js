import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
      <ToastContainer />
    </DarkModeContextProvider>
  </React.StrictMode>
);
