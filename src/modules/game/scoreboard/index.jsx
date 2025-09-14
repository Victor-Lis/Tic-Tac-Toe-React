import { useContext } from "react";
import { GameContext } from "../../../providers/GameProvider";
import styles from "./style.module.css";

import { Circle, X } from "react-bootstrap-icons";

export default function Scoreboard() {
  const { score, currentPlayer } = useContext(GameContext);

  return (
    <div className={styles.scoreboard}>
      <div className={styles.currentPlayer}>
        Jogador atual:
        <span
          className={
            `${styles.playerIcon} ` +
            (currentPlayer === "x" ? styles.playerX : styles.playerO)
          }
        >
          {currentPlayer === "x" ? <X size={22} /> : <Circle size={20} />}
        </span>
      </div>
      <div className={styles.scores}>
        <div className={styles.scoreCard}>
          <X size={22} className={styles.playerX} />
          <span className={styles.score}>{score.x}</span>
        </div>
        <div className={styles.scoreCard}>
          <Circle size={20} className={styles.playerO} />
          <span className={styles.score}>{score.o}</span>
        </div>
      </div>
    </div>
  );
}
