import React, { createContext, useState } from "react";
import { calculateDraw, calculateWinner } from "../utils/game-functions";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [score, setScore] = useState({ x: 0, o: 0 });

  const makeMove = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    console.log("New board state:", newBoard);

    if (calculateWinner(newBoard)) {
      setScore((prev) => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1,
      }));
      setBoard(Array(9).fill(null));
    } else if (calculateDraw(newBoard)) {
      toast.info("Empate!");
      setBoard(Array(9).fill(null));
    } else {
      setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
    }
  };

  useEffect(() => {
    if (score.x > 2 || score.o > 2) {
      toast.success(`Jogador ${score.x > score.o ? "X" : "O"} venceu o jogo!`);
      let countdown = 3;
      const interval = setInterval(() => {
        if (countdown > 0) {
          toast.info(`Reiniciando em ${countdown}...`, { autoClose: 1000 });
        } else {
          clearInterval(interval);
          setScore({ x: 0, o: 0 });
        }
        countdown -= 1;
      }, 1000);
    }
  }, [score.x, score.o, currentPlayer]);

  return (
    <GameContext.Provider value={{ board, currentPlayer, makeMove, score }}>
      {children}
    </GameContext.Provider>
  );
};
