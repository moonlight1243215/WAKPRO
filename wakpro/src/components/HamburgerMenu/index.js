import { Link } from "react-router-dom";
import styles from "./index.module.css"

const HamburgerMenu = () => {
  return (
    <div className={styles.container}>
      <Link to="/" />
    </div>
  )
};

export default HamburgerMenu;
