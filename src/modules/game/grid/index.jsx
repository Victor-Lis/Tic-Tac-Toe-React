import { useGame } from "../../../_hooks/useGame";
import Square from "../square";
import styles from "./style.module.css";

import { Circle, X } from "react-bootstrap-icons";

export default function Grid() {
  const { board, makeMove } = useGame();
  return (
    <div className={styles.grid}>
      {board.map((value, i) => (
        <Square
          key={i}
          content={
            value === "o" ? (
              <Circle size={35} />
            ) : value === "x" ? (
              <X size={50} />
            ) : null
          }
          onClick={() => makeMove(i)}
        />
      ))}
    </div>
  );
}
