import styles from "./style.module.css";

export default function Square({ content, onClick }) {
  return (
    <button className={styles.cell} onClick={onClick}>
      {content}
    </button>
  );
}
