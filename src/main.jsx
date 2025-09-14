import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterProvider from "./providers/RouterProvider";
import { GameProvider } from "./providers/GameProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <RouterProvider />
      <ToastContainer />
    </GameProvider>
  </StrictMode>
);
