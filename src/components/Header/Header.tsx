import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logoImage from "../../images/Orange and Dark Blue Basketball Match Result Instagram Post.png";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.navMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Acerca de
        </NavLink>
      </div>
      <div className={styles.logo}>
        <img src={logoImage} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
