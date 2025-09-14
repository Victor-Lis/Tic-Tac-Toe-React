import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}
