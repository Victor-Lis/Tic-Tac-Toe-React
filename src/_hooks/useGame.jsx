import { useContext } from "react";
import { GameContext } from "../providers/GameProvider";

export const useGame = () => {
  const context = useContext(GameContext);
  return context;
};
