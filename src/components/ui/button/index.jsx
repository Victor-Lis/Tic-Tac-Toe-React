import styles from "./style.module.css";

export default function Button({ children, action = () => { console.log("Clicou")} }) {
  return <button className={styles.button} onClick={action}>{children}</button>;
}
